// =====================================================================
// DH Kompas – backend (fáze 2)
// ---------------------------------------------------------------------
// Malý Node.js server bez frameworku. Dva AI endpointy nad Claude API:
//   POST /api/chat     – chatbot poradce ukotvený ve znalostní bázi
//   POST /api/analyza  – předběžné zatřídění nahrané specifikace
//   GET  /api/health   – stav serveru
//
// Řízení nákladů (viz zadání backendu):
//   - levné modely dle úlohy (chat: Haiku 4.5, analýza: Sonnet 5;
//     jde přepnout env proměnnými MODEL_CHAT / MODEL_ANALYZA)
//   - prompt caching znalostní báze (drtivá část vstupu jde z cache)
//   - denní limity na IP i celkové, stropy délky vstupu a odpovědi
//   - tvrdý strop se nastavuje ještě nad tím: spend limit workspace
//     v Anthropic Console
//
// Spuštění:  ANTHROPIC_API_KEY=... node server.js
// Test bez klíče:  MOCK_AI=1 node server.js
// Konfigurace: viz .env.example a README.md
// =====================================================================
"use strict";

const http = require("http");
const path = require("path");
const fs = require("fs");
const Anthropic = require("@anthropic-ai/sdk");

// ---------------- konfigurace ----------------
const CFG = {
  port: Number(process.env.PORT || 8787),
  allowedOrigin: process.env.ALLOWED_ORIGIN || "*",
  mock: process.env.MOCK_AI === "1",
  modelChat: process.env.MODEL_CHAT || "claude-haiku-4-5",
  modelAnalyza: process.env.MODEL_ANALYZA || "claude-sonnet-5",
  chatMaxTokens: Number(process.env.CHAT_MAX_TOKENS || 1024),
  analyzaMaxTokens: Number(process.env.ANALYZA_MAX_TOKENS || 4096),
  limitChatDen: Number(process.env.LIMIT_CHAT_DEN || 20),        // dotazů na IP a den
  limitAnalyzaDen: Number(process.env.LIMIT_ANALYZA_DEN || 3),   // analýz na IP a den
  limitCelkemDen: Number(process.env.LIMIT_CELKEM_DEN || 500),   // všech AI volání celkem a den
  maxZpravaChars: 4000,        // max délka jedné zprávy v chatu
  maxHistorie: 20,             // max počet zpráv historie
  maxSpecChars: 60000          // max délka specifikace
};

// Klient se vytváří líně: server nastartuje i bez klíče (health funguje,
// AI dotazy vrací srozumitelnou chybu) – žádný crash-loop při nasazování.
let _client = null;
function ziskejKlienta() {
  if (!_client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      const e = new Error("Server nemá nastavený ANTHROPIC_API_KEY.");
      e.kod = "chybi_klic";
      throw e;
    }
    _client = new Anthropic();
  }
  return _client;
}

// ---------------- znalostní báze ----------------
// KB se čte přímo ze souborů aplikace – jeden zdroj pravdy s frontendem.
function nactiKB() {
  global.window = {};
  for (const f of ["kb.js", "kb-en.js", "vyzvy.js"]) {
    try { require(path.join(__dirname, "..", "navigator", f)); }
    catch (e) { console.error("Nelze načíst", f, e.message); }
  }
  return { cs: global.window.DH_KB, en: global.window.DH_KB_EN, vyzvy: global.window.DH_VYZVY };
}

function kbText(lang) {
  const kb = lang === "en" ? KB.en : KB.cs;
  const vyzvy = (KB.vyzvy && KB.vyzvy[lang === "en" ? "en" : "cs"]) || kb.vyzvy || [];
  const r = [];
  r.push(lang === "en" ? "== FUNDING PROGRAMMES ==" : "== PROGRAMY FINANCOVÁNÍ ==");
  for (const p of kb.programy) {
    r.push(
      `# ${p.nazev}\n${p.kratce}\n` +
      (lang === "en" ? "Amount: " : "Výše podpory: ") + p.castka + "\n" +
      (lang === "en" ? "Who: " : "Pro koho: ") + p.proKoho + "\n" +
      (lang === "en" ? "How it works: " : "Jak funguje: ") + p.jakFunguje.join(" ") + "\n" +
      (lang === "en" ? "Deadlines: " : "Termíny: ") + p.terminy + "\n" +
      (lang === "en" ? "Criteria: " : "Kritéria: ") + (p.kdeKriteria || "") + "\n" +
      (lang === "en" ? "DH help: " : "Pomoc DH: ") + p.pomocDH + "\nWeb: " + p.odkaz
    );
  }
  r.push(lang === "en" ? "== CURRENT CALLS ==" : "== AKTUÁLNÍ VÝZVY ==");
  for (const v of vyzvy) {
    r.push(`- ${v.nazev}` +
      (v.uzaverka ? (lang === "en" ? " | deadline " : " | uzávěrka ") + v.uzaverka : "") +
      (v.stavRucne ? " | " + v.stavRucne : "") + (v.pozn ? " | " + v.pozn : ""));
  }
  const t = kb.dualUseTest;
  r.push(lang === "en" ? "== EXPORT CONTROL / DUAL-USE ==" : "== EXPORTNÍ KONTROLA / DUAL-USE ==");
  r.push(t.uvod);
  r.push((lang === "en" ? "Annex I categories: " : "Kategorie přílohy I: ") +
    t.kategorieAnnex.polozky.map(k => k.kod + " " + k.nazev + " (" + k.priklady.join("; ") + ")").join(" | "));
  for (const rez of t.rezimy) r.push(`- ${rez.nazev}: ${rez.kdy}. ${rez.akce}`);
  r.push((lang === "en" ? "Official sources: " : "Oficiální zdroje: ") + t.odkazy.map(o => o.t + " – " + o.url).join("; "));
  r.push("DISCLAIMER: " + t.disclaimer);
  r.push((lang === "en" ? "CONTACT: " : "KONTAKT: ") + kb.meta.kontakt);
  return r.join("\n\n");
}

const KB = nactiKB();
const KB_TEXT = { cs: kbText("cs"), en: kbText("en") };
console.log("KB načtena: cs", (KB_TEXT.cs.length / 1000).toFixed(0) + "k znaků, en", (KB_TEXT.en.length / 1000).toFixed(0) + "k znaků");

// ---------------- rozšířené znalosti (nahrané soubory) ----------------
// Cokoli v backend/knowledge/ (markdown/text, i v podsložkách) se přidá
// do kontextu chatbota i analýzy. Sem patří plná Knowledge-Base-Ultimate –
// nekomituje se do veřejného repozitáře (gitignore), nahrává se na server.
const ZNALOSTI_DIR = path.join(__dirname, "knowledge");
const ZNALOSTI_MAX_CHARS = Number(process.env.ZNALOSTI_MAX_CHARS || 600000);
function nactiZnalosti() {
  let soubory = [];
  try {
    for (const f of fs.readdirSync(ZNALOSTI_DIR, { recursive: true })) {
      const nazev = String(f);
      if (!/\.(md|txt)$/i.test(nazev) || /(^|[\\/])README\.md$/i.test(nazev)) continue;
      const cely = path.join(ZNALOSTI_DIR, nazev);
      if (!fs.statSync(cely).isFile()) continue;
      soubory.push({ nazev, text: fs.readFileSync(cely, "utf8") });
    }
  } catch { /* složka nemusí existovat */ }
  soubory.sort((a, b) => a.nazev.localeCompare(b.nazev));
  let znaku = 0; const casti = [];
  for (const s of soubory) {
    if (znaku + s.text.length > ZNALOSTI_MAX_CHARS) { console.warn("Znalosti: přes limit, přeskakuji", s.nazev); continue; }
    znaku += s.text.length;
    casti.push(`===== SOUBOR: ${s.nazev} =====\n${s.text.trim()}`);
  }
  return { text: casti.join("\n\n"), pocet: casti.length, znaku };
}
// Volitelně se znalosti stáhnou při startu ze ZIPu (KNOWLEDGE_ZIP_URL) –
// pro hosting bez trvalého disku (Render apod.). ZIP = Knowledge-Base-
// Ultimate; na Drivu: soubor → sdílet odkazem → přímý odkaz
// https://drive.google.com/uc?export=download&id=<ID_SOUBORU>
async function stahniZnalostiZip() {
  const url = process.env.KNOWLEDGE_ZIP_URL;
  if (!url) return;
  try {
    let buf;
    if (/^https?:/i.test(url)) {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      buf = Buffer.from(await res.arrayBuffer());
    } else {
      buf = fs.readFileSync(url); // lokální cesta (testování)
    }
    const AdmZip = require("adm-zip");
    const zip = new AdmZip(buf);
    fs.mkdirSync(ZNALOSTI_DIR, { recursive: true });
    zip.extractAllTo(ZNALOSTI_DIR, true);
    console.log("Znalosti rozbaleny ze ZIP (" + (buf.length / 1024).toFixed(0) + " kB).");
  } catch (e) {
    console.error("Stažení znalostí ze ZIP selhalo:", e.message, "– běží se bez nich.");
  }
}

let ZNALOSTI = { text: "", pocet: 0, znaku: 0 };

// Sestaví systémové bloky: instrukce + kompaktní KB + nahrané soubory.
// cache_control je jen na posledním bloku – cachuje se tím celý prefix.
function systemBloky(instrukce, lang) {
  const bloky = [
    { type: "text", text: instrukce },
    { type: "text", text: (lang === "en" ? "KNOWLEDGE BASE (app):\n\n" : "ZNALOSTNÍ BÁZE (aplikace):\n\n") + KB_TEXT[lang === "en" ? "en" : "cs"] }
  ];
  if (ZNALOSTI.text) {
    bloky.push({ type: "text", text: (lang === "en"
      ? "EXTENDED KNOWLEDGE BASE (internal Defence Hub files – draw on them the same way; most are in Czech, translate as needed):\n\n"
      : "ROZŠÍŘENÁ ZNALOSTNÍ BÁZE (interní podklady Defence Hubu – čerpej z nich stejně jako ze základní báze):\n\n") + ZNALOSTI.text });
  }
  bloky[bloky.length - 1].cache_control = { type: "ephemeral", ttl: "1h" };
  return bloky;
}

// ---------------- systémové prompty ----------------
function chatSystem(lang) {
  const instrukce = lang === "en"
    ? `You are the assistant of Defence Hub CzechInvest (the Czech national contact point for defence and dual-use innovation, part of the NATO DIANA network) on the DH Kompas web app. You help startups navigate funding programmes, open calls, applications, export control and certifications.

Rules:
- Answer ONLY from the knowledge base below. If the answer is not there, say you don't have that information and refer the user to a free consultation with the Defence Hub team (defencehub.gov.cz).
- Be concise and practical (a few sentences, bullet points where useful). Name the specific programme/call and its deadline when relevant.
- Never give legal advice or a binding export classification – always add that classification must be verified with the MPO Licensing Authority or an export-control expert.
- Do not make up numbers, dates or programme parameters. Items marked [OVĚŘIT]/[VERIFY] are pending verification – say so.
- Answer in English.`
    : `Jsi asistent Defence Hubu CzechInvest (národní kontaktní bod pro obranné a dual-use inovace, součást sítě NATO DIANA) v aplikaci DH Kompas. Pomáháš startupům zorientovat se v programech financování, výzvách, přihláškách, exportní kontrole a certifikacích.

Pravidla:
- Odpovídej VÝHRADNĚ ze znalostní báze níže. Když v ní odpověď není, řekni, že tuto informaci nemáš, a odkaž na bezplatnou konzultaci s týmem Defence Hubu (defencehub.gov.cz).
- Buď stručný a praktický (pár vět, případně odrážky). Kde to dává smysl, jmenuj konkrétní program/výzvu a uzávěrku.
- Nikdy nedávej právní rady ani závazné zatřídění pro export – vždy dodej, že zatřídění je nutné ověřit u Licenční správy MPO nebo odborníka na exportní kontrolu.
- Nevymýšlej si čísla, termíny ani parametry programů. Položky označené [OVĚŘIT] čekají na ověření – řekni to.
- Odpovídej česky.`;
  return systemBloky(instrukce, lang);
}

function analyzaSystem(lang) {
  const instrukce = lang === "en"
    ? `You are an export-control pre-screening assistant of Defence Hub CzechInvest. The user pastes a technical product specification. Based on the knowledge base below, produce a PRELIMINARY, non-binding assessment for compliance purposes, structured as:

1. **Preliminary profile** – likely military material / dual-use / civilian, with reasoning anchored in the specification.
2. **Possibly relevant Annex I categories (Reg. (EU) 2021/821)** – list category numbers 0–9 with the specific parameters from the spec that triggered them; where you can, name candidate control entries (e.g. 5A002) explicitly as candidates to verify, never as conclusions.
3. **What to verify and next steps** – concrete parameters to compare with Annex I thresholds, MPO Licensing Authority classification, US content (ITAR/EAR), relevant regimes from the knowledge base.
4. **Relevant Defence Hub programmes** – which programmes/calls fit this product.

Rules: never invent parameters not present in the specification; if the spec lacks key data, say which. This is a preliminary guide, not legal advice or a binding classification – end with the disclaimer and an invitation to a free DH consultation. Answer in English.`
    : `Jsi asistent Defence Hubu CzechInvest pro předběžný screening exportní kontroly. Uživatel vloží technickou specifikaci produktu. Na základě znalostní báze níže vytvoř PŘEDBĚŽNÉ, nezávazné posouzení pro účely compliance, strukturované takto:

1. **Předběžný profil** – pravděpodobně vojenský materiál / dual-use / civilní, s odůvodněním opřeným o specifikaci.
2. **Možné relevantní kategorie přílohy I (nařízení (EU) 2021/821)** – vypiš kategorie 0–9 s konkrétními parametry ze specifikace, které k nim vedou; kde to jde, uveď kandidátní kontrolní čísla (např. 5A002) výslovně jako kandidáty k ověření, nikdy jako závěr.
3. **Co ověřit a další kroky** – konkrétní parametry k porovnání s prahy přílohy I, stanovisko Licenční správy MPO, americký obsah (ITAR/EAR), relevantní režimy ze znalostní báze.
4. **Relevantní programy Defence Hubu** – které programy/výzvy se na produkt hodí.

Pravidla: nevymýšlej parametry, které ve specifikaci nejsou; pokud klíčové údaje chybí, napiš které. Jde o předběžné vodítko, ne právní radu ani závazné zatřídění – zakonči disclaimerem a pozvánkou na bezplatnou konzultaci DH. Odpovídej česky.`;
  return systemBloky(instrukce, lang);
}

// ---------------- limity ----------------
const pocitadla = new Map(); // ip -> {den, chat, analyza}
let celkemDnes = { den: "", pocet: 0 };
function zkontrolujLimit(ip, druh) {
  const den = new Date().toISOString().slice(0, 10);
  if (celkemDnes.den !== den) celkemDnes = { den, pocet: 0 };
  if (celkemDnes.pocet >= CFG.limitCelkemDen) return "celkem";
  let z = pocitadla.get(ip);
  if (!z || z.den !== den) { z = { den, chat: 0, analyza: 0, lead: 0 }; pocitadla.set(ip, z); }
  const limit = druh === "chat" ? CFG.limitChatDen : druh === "lead" ? 5 : CFG.limitAnalyzaDen;
  if (z[druh] >= limit) return "ip";
  z[druh] = z[druh] || 0;
  z[druh]++; celkemDnes.pocet++;
  if (pocitadla.size > 50000) pocitadla.clear(); // pojistka proti růstu paměti
  return null;
}

// ---------------- volání Claude ----------------
async function zavolejClaude({ model, maxTokens, system, messages }) {
  if (CFG.mock) {
    return { text: "[MOCK] Toto je testovací odpověď bez volání Claude API. Server běží správně; pro ostrý provoz nastavte ANTHROPIC_API_KEY a vypněte MOCK_AI.", usage: { input_tokens: 0, output_tokens: 0, cache_read_input_tokens: 0 } };
  }
  const response = await ziskejKlienta().messages.create({ model, max_tokens: maxTokens, system, messages });
  if (response.stop_reason === "refusal") {
    return { text: null, refusal: true };
  }
  let text = "";
  for (const block of response.content) if (block.type === "text") text += block.text;
  if (response.stop_reason === "max_tokens") text += "\n\n…";
  return { text, usage: response.usage };
}

// ---------------- HTTP server ----------------
function json(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": CFG.allowedOrigin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  });
  res.end(body);
}

function prectiTelo(req) {
  return new Promise((resolve, reject) => {
    let data = "", size = 0;
    req.on("data", ch => {
      size += ch.length;
      if (size > 300000) { reject(new Error("Tělo požadavku je příliš velké")); req.destroy(); return; }
      data += ch;
    });
    req.on("end", () => { try { resolve(JSON.parse(data || "{}")); } catch { reject(new Error("Neplatný JSON")); } });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket.remoteAddress || "?";
  if (req.method === "OPTIONS") return json(res, 204, {});

  try {
    if (req.method === "GET" && req.url === "/api/health") {
      return json(res, 200, { ok: true, mock: CFG.mock, klicNastaven: !!process.env.ANTHROPIC_API_KEY, modelChat: CFG.modelChat, modelAnalyza: CFG.modelAnalyza, znalostniSoubory: ZNALOSTI.pocet });
    }

    if (req.method === "POST" && req.url === "/api/chat") {
      const telo = await prectiTelo(req);
      const lang = telo.lang === "en" ? "en" : "cs";
      const zpravy = Array.isArray(telo.messages) ? telo.messages.slice(-CFG.maxHistorie) : [];
      if (!zpravy.length) return json(res, 400, { chyba: "Chybí zprávy." });
      for (const z of zpravy) {
        if (!z || (z.role !== "user" && z.role !== "assistant") || typeof z.content !== "string" || !z.content.trim())
          return json(res, 400, { chyba: "Neplatný formát zpráv." });
        if (z.content.length > CFG.maxZpravaChars) return json(res, 400, { chyba: "Zpráva je příliš dlouhá." });
      }
      if (zpravy[0].role !== "user") zpravy.unshift({ role: "user", content: lang === "en" ? "Hello" : "Dobrý den" });
      // profil firmy (z aplikace) se přidá jako kontext k prvnímu dotazu
      const profilFirmy = typeof telo.profil === "string" ? telo.profil.trim().slice(0, 1500) : "";
      if (profilFirmy) zpravy[0] = { role: "user", content: (lang === "en" ? "Company profile (context for the whole conversation): " : "Profil firmy (kontext pro celou konverzaci): ") + profilFirmy + "\n\n" + zpravy[0].content };

      const limit = zkontrolujLimit(ip, "chat");
      if (limit) return json(res, 429, { chyba: lang === "en" ? "Daily question limit reached. Book a free consultation at defencehub.gov.cz." : "Denní limit dotazů vyčerpán. Rezervujte si bezplatnou konzultaci na defencehub.gov.cz." });

      const v = await zavolejClaude({
        model: CFG.modelChat, maxTokens: CFG.chatMaxTokens,
        system: chatSystem(lang),
        messages: zpravy.map(z => ({ role: z.role, content: z.content }))
      });
      if (v.refusal) return json(res, 200, { odpoved: lang === "en" ? "I can't help with this question. Please contact the Defence Hub team directly." : "S tímto dotazem nemohu pomoci. Obraťte se prosím přímo na tým Defence Hubu." });
      return json(res, 200, { odpoved: v.text });
    }

    // Sběr kontaktů firem (leady pro DH tým). Ukládá se lokálně do
    // data/leads.jsonl a volitelně přeposílá na LEADS_WEBHOOK_URL
    // (např. Google Apps Script zapisující do tabulky – viz README).
    // Pozor: na Renderu free je disk efemérní, webhook je proto hlavní úložiště.
    if (req.method === "POST" && req.url === "/api/lead") {
      const telo = await prectiTelo(req);
      const lang = telo.lang === "en" ? "en" : "cs";
      const email = String(telo.email || "").trim();
      const firma = String(telo.firma || "").trim().slice(0, 200);
      const ico = String(telo.ico || "").trim().slice(0, 20);
      const profil = String(telo.profil || "").trim().slice(0, 2000);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
        return json(res, 400, { chyba: lang === "en" ? "Invalid e-mail." : "Neplatný e-mail." });
      if (telo.souhlas !== true)
        return json(res, 400, { chyba: lang === "en" ? "Consent to being contacted is required." : "Bez souhlasu s kontaktováním nelze údaje uložit." });
      const limit = zkontrolujLimit(ip, "lead");
      if (limit) return json(res, 429, { chyba: lang === "en" ? "Too many submissions today." : "Příliš mnoho odeslání za dnešek." });

      const lead = { kdy: new Date().toISOString(), firma, ico, email, profil, lang, souhlas: true };
      try {
        fs.mkdirSync(path.join(__dirname, "data"), { recursive: true });
        fs.appendFileSync(path.join(__dirname, "data", "leads.jsonl"), JSON.stringify(lead) + "\n");
      } catch (e) { console.error("Zápis leadu selhal:", e.message); }
      let preposlano = false;
      if (process.env.LEADS_WEBHOOK_URL) {
        try {
          const r = await fetch(process.env.LEADS_WEBHOOK_URL, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lead), signal: AbortSignal.timeout(10000), redirect: "follow"
          });
          preposlano = r.ok;
          if (!r.ok) console.error("Lead webhook vrátil HTTP", r.status);
        } catch (e) { console.error("Lead webhook selhal:", e.message); }
      }
      console.log("Nový lead:", firma || "(bez názvu)", email, preposlano ? "(přeposláno)" : "");
      return json(res, 200, { ok: true });
    }

    if (req.method === "POST" && req.url === "/api/analyza") {
      const telo = await prectiTelo(req);
      const lang = telo.lang === "en" ? "en" : "cs";
      const spec = typeof telo.specifikace === "string" ? telo.specifikace.trim() : "";
      if (spec.length < 100) return json(res, 400, { chyba: lang === "en" ? "The specification is too short (min. 100 characters)." : "Specifikace je příliš krátká (min. 100 znaků)." });
      if (spec.length > CFG.maxSpecChars) return json(res, 400, { chyba: lang === "en" ? "The specification is too long." : "Specifikace je příliš dlouhá." });

      const limit = zkontrolujLimit(ip, "analyza");
      if (limit) return json(res, 429, { chyba: lang === "en" ? "Daily analysis limit reached. Send the specification to the Defence Hub team instead." : "Denní limit analýz vyčerpán. Pošlete specifikaci rovnou týmu Defence Hubu." });

      const v = await zavolejClaude({
        model: CFG.modelAnalyza, maxTokens: CFG.analyzaMaxTokens,
        system: analyzaSystem(lang),
        messages: [{ role: "user", content: (lang === "en" ? "Product technical specification:\n\n" : "Technická specifikace produktu:\n\n") + spec }]
      });
      if (v.refusal) return json(res, 200, { odpoved: lang === "en" ? "This specification can't be assessed automatically. Please contact the Defence Hub team directly." : "Tuto specifikaci nelze posoudit automaticky. Obraťte se prosím přímo na tým Defence Hubu." });
      return json(res, 200, { odpoved: v.text });
    }

    return json(res, 404, { chyba: "Neznámá cesta." });
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) return json(res, 500, { chyba: "Server není správně nakonfigurován (API klíč)." });
    if (e instanceof Anthropic.RateLimitError) return json(res, 503, { chyba: "Služba je momentálně přetížená, zkuste to za chvíli." });
    if (e instanceof Anthropic.APIError) { console.error("API error", e.status, e.message); return json(res, 502, { chyba: "Služba AI je dočasně nedostupná." }); }
    console.error(e);
    return json(res, 400, { chyba: e.message || "Chyba požadavku." });
  }
});

(async () => {
  await stahniZnalostiZip();
  ZNALOSTI = nactiZnalosti();
  console.log(ZNALOSTI.pocet
    ? `Rozšířené znalosti: ${ZNALOSTI.pocet} souborů, ${(ZNALOSTI.znaku / 1000).toFixed(0)}k znaků`
    : "Rozšířené znalosti: žádné (běží se jen s kompaktní KB aplikace)");
  server.listen(CFG.port, () => {
    console.log(`DH Kompas backend běží na portu ${CFG.port}` + (CFG.mock ? " (MOCK režim – bez volání API)" : ""));
    console.log(`Modely: chat=${CFG.modelChat}, analýza=${CFG.modelAnalyza}; limity/den: chat ${CFG.limitChatDen}/IP, analýza ${CFG.limitAnalyzaDen}/IP, celkem ${CFG.limitCelkemDen}`);
  });
})();
