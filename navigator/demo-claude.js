// =====================================================================
// DH Kompas – demo AI adaptér pro Claude artefakt
// ---------------------------------------------------------------------
// Tento soubor se NEVKLÁDÁ do webové verze (index.html ho nenačítá).
// Přibaluje se jen do demo artefaktu publikovaného přes Claude: tam
// stránka může přes claude.use("sample") pokládat dotazy Claudovi
// přihlášeného diváka (čerpá jeho předplatné, s jednorázovým souhlasem).
// Definuje window.DH_AI_RUNTIME se stejným rozhraním jako backend
// (/api/chat, /api/analyza), takže appka jinak nepozná rozdíl.
// =====================================================================
(async () => {
  if (!window.claude || typeof window.claude.use !== "function") return;
  let sample;
  try { sample = await window.claude.use("sample"); } catch (e) { sample = null; }
  if (!sample) return; // mimo Claude viewer poběží lite verze

  function kbPro(lang) {
    return lang === "en" ? (window.DH_KB_EN || window.DH_KB) : window.DH_KB;
  }
  function vyzvyPro(lang) {
    if (window.DH_VYZVY) { const l = window.DH_VYZVY[lang === "en" ? "en" : "cs"]; if (l && l.length) return l; }
    return (kbPro(lang).vyzvy) || [];
  }
  function kbText(lang) {
    const kb = kbPro(lang); const r = [];
    r.push(lang === "en" ? "== FUNDING PROGRAMMES ==" : "== PROGRAMY FINANCOVÁNÍ ==");
    for (const p of kb.programy) {
      r.push("# " + p.nazev + "\n" + p.kratce +
        "\n" + (lang === "en" ? "Amount: " : "Výše podpory: ") + p.castka +
        "\n" + (lang === "en" ? "Who: " : "Pro koho: ") + p.proKoho +
        "\n" + (lang === "en" ? "Deadlines: " : "Termíny: ") + p.terminy +
        "\n" + (lang === "en" ? "Criteria: " : "Kritéria: ") + (p.kdeKriteria || "") +
        "\n" + (lang === "en" ? "DH help: " : "Pomoc DH: ") + p.pomocDH + "\nWeb: " + p.odkaz);
    }
    r.push(lang === "en" ? "== CURRENT CALLS ==" : "== AKTUÁLNÍ VÝZVY ==");
    for (const v of vyzvyPro(lang)) {
      r.push("- " + v.nazev +
        (v.uzaverka ? (lang === "en" ? " | deadline " : " | uzávěrka ") + v.uzaverka : "") +
        (v.stavRucne ? " | " + v.stavRucne : "") + (v.pozn ? " | " + v.pozn : ""));
    }
    const t = kb.dualUseTest;
    r.push(lang === "en" ? "== EXPORT CONTROL / DUAL-USE ==" : "== EXPORTNÍ KONTROLA / DUAL-USE ==");
    r.push(t.uvod);
    r.push((lang === "en" ? "Annex I categories: " : "Kategorie přílohy I: ") +
      t.kategorieAnnex.polozky.map(k => k.kod + " " + k.nazev + " (" + k.priklady.join("; ") + ")").join(" | "));
    for (const rez of t.rezimy) r.push("- " + rez.nazev + ": " + rez.kdy + ". " + rez.akce);
    r.push("DISCLAIMER: " + t.disclaimer);
    r.push((lang === "en" ? "CONTACT: " : "KONTAKT: ") + kb.meta.kontakt);
    return r.join("\n\n");
  }

  function chatInstrukce(lang) {
    return lang === "en"
      ? "You are the assistant of Defence Hub CzechInvest (Czech national contact point for defence and dual-use innovation, part of the NATO DIANA network) on the DH Kompas app. Answer ONLY from the knowledge base below; if the answer is not there, say so and refer to a free consultation with the Defence Hub team (defencehub.gov.cz). Be concise and practical; name the specific programme/call and deadline when relevant. Never give legal advice or a binding export classification – always add that classification must be verified with the MPO Licensing Authority. Do not invent numbers or dates; items marked [OVĚŘIT]/[VERIFY] are pending verification. Answer in English.\n\nKNOWLEDGE BASE:\n\n"
      : "Jsi asistent Defence Hubu CzechInvest (národní kontaktní bod pro obranné a dual-use inovace, součást sítě NATO DIANA) v aplikaci DH Kompas. Odpovídej VÝHRADNĚ ze znalostní báze níže; když v ní odpověď není, řekni to a odkaž na bezplatnou konzultaci s týmem Defence Hubu (defencehub.gov.cz). Buď stručný a praktický; kde to dává smysl, jmenuj konkrétní program/výzvu a uzávěrku. Nikdy nedávej právní rady ani závazné zatřídění pro export – vždy dodej, že zatřídění je nutné ověřit u Licenční správy MPO. Nevymýšlej si čísla ani termíny; položky s [OVĚŘIT] čekají na ověření. Odpovídej česky.\n\nZNALOSTNÍ BÁZE:\n\n";
  }
  function analyzaInstrukce(lang) {
    return lang === "en"
      ? "You are an export-control pre-screening assistant of Defence Hub CzechInvest. Based on the knowledge base below, assess the pasted technical specification and reply with: 1. **Preliminary profile** (military material / dual-use / civilian, with reasoning from the spec); 2. **Possibly relevant Annex I categories (Reg. (EU) 2021/821)** with the triggering parameters, control entries (e.g. 5A002) only as candidates to verify; 3. **What to verify and next steps** (Annex I thresholds, MPO Licensing Authority, US content ITAR/EAR); 4. **Relevant Defence Hub programmes**. Never invent parameters not present in the spec; name missing key data. End with the disclaimer (preliminary guide, not legal advice) and an invitation to a free DH consultation. Answer in English.\n\nKNOWLEDGE BASE:\n\n"
      : "Jsi asistent Defence Hubu CzechInvest pro předběžný screening exportní kontroly. Na základě znalostní báze níže posuď vloženou technickou specifikaci a odpověz strukturou: 1. **Předběžný profil** (vojenský materiál / dual-use / civilní, s odůvodněním ze specifikace); 2. **Možné relevantní kategorie přílohy I (nařízení (EU) 2021/821)** s parametry, které k nim vedou, kontrolní čísla (např. 5A002) jen jako kandidáty k ověření; 3. **Co ověřit a další kroky** (prahy přílohy I, Licenční správa MPO, americký obsah ITAR/EAR); 4. **Relevantní programy Defence Hubu**. Nevymýšlej parametry, které ve specifikaci nejsou; chybějící klíčové údaje vyjmenuj. Zakonči disclaimerem (předběžné vodítko, ne právní rada) a pozvánkou na bezplatnou konzultaci DH. Odpovídej česky.\n\nZNALOSTNÍ BÁZE:\n\n";
  }

  function hlaska(code, lang) {
    const cs = {
      not_granted: "AI odpovědi nejsou v tomto zobrazení povolené (souhlas nebyl udělen).",
      sampling_disabled: "AI odpovědi nejsou pro tento účet dostupné.",
      rate_limited: "Limit využití Claude je teď vyčerpaný – zkuste to prosím později.",
      refused: "S tímto dotazem nemohu pomoci. Obraťte se prosím přímo na tým Defence Hubu.",
      prompt_too_large: "Dotaz je příliš dlouhý – zkuste ho zkrátit.",
      session_expired: "Přihlášení vypršelo – přihlaste se prosím znovu."
    };
    const en = {
      not_granted: "AI answers are not allowed in this view (consent was not given).",
      sampling_disabled: "AI answers are not available for this account.",
      rate_limited: "The Claude usage limit is exhausted right now – please try again later.",
      refused: "I can't help with this question. Please contact the Defence Hub team directly.",
      prompt_too_large: "The question is too long – please shorten it.",
      session_expired: "The session expired – please sign in again."
    };
    const m = (lang === "en" ? en : cs)[code];
    return m || (lang === "en" ? "The AI service is temporarily unavailable – please try again." : "Služba AI je dočasně nedostupná – zkuste to prosím znovu.");
  }

  const ROZPOCET = 55000; // znaků na celý vstup (limit runtime je 64 KiB bajtů)

  window.DH_AI_DEMO = true;
  window.DH_AI_RUNTIME = async (cesta, telo) => {
    const lang = telo.lang === "en" ? "en" : "cs";
    try {
      if (cesta === "/api/chat") {
        const pravidla = chatInstrukce(lang) + kbText(lang);
        let turns = (telo.messages || []).map(m => ({ role: m.role, content: String(m.content) }));
        // ořez historie, aby se vstup vešel do limitu (pravidla se nikdy nezahazují)
        let celkem = pravidla.length + turns.reduce((a, t) => a + t.content.length, 0);
        while (turns.length > 1 && celkem > ROZPOCET) { celkem -= turns[0].content.length; turns.shift(); }
        if (!turns.length || turns[0].role !== "user") turns.unshift({ role: "user", content: lang === "en" ? "Hello" : "Dobrý den" });
        const { text } = await sample([{ role: "user", content: pravidla }, ...turns], { cache: false, modelTier: "quick" });
        return { odpoved: text };
      }
      if (cesta === "/api/analyza") {
        let spec = String(telo.specifikace || "");
        const instrukce = analyzaInstrukce(lang) + kbText(lang);
        const maxSpec = Math.max(5000, ROZPOCET - instrukce.length);
        let orezano = false;
        if (spec.length > maxSpec) { spec = spec.slice(0, maxSpec); orezano = true; }
        const { text, truncated } = await sample(
          instrukce + "\n\n" + (lang === "en" ? "TECHNICAL SPECIFICATION:" : "TECHNICKÁ SPECIFIKACE:") + "\n" + spec,
          { modelTier: "default" }
        );
        let odpoved = text;
        if (orezano) odpoved += lang === "en" ? "\n\n(Note: the specification was shortened to fit the demo limit.)" : "\n\n(Pozn.: specifikace byla pro demo zkrácena.)";
        if (truncated) odpoved += lang === "en" ? "\n\n(The answer was cut short – try a shorter specification.)" : "\n\n(Odpověď byla zkrácena – zkuste kratší specifikaci.)";
        return { odpoved };
      }
      throw { code: "invalid_request", message: "Neznámá cesta" };
    } catch (e) {
      throw new Error(hlaska(e && e.code, lang));
    }
  };

  // runtime naskočil až po prvním vykreslení – přepni odznak a případně obraz
  try {
    if (typeof aplikujAdmin === "function") aplikujAdmin();
    if (typeof applyChrome === "function") applyChrome();
    const aktivni = document.querySelector('.navitem[data-view="poradce"].active');
    if (aktivni && typeof go === "function") go("poradce");
  } catch (e) { /* nevadí */ }
})();
