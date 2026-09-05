// =====================================================================
// Stažení obsahu webů pro DH Kompas
// ---------------------------------------------------------------------
// Přečte data/weby.csv (url,program,stitek_cs,stitek_en), stáhne každou
// stránku, ořeže HTML na čistý text a vygeneruje navigator/weby.js
// (window.DH_WEBY). Chatbot bez AI pak obsah webů prohledává ve fallbacku
// vedle znalostní báze.
//
// Poznámky:
//  - Stránky, které se nepodaří stáhnout (výpadek, blokace robotů),
//    se přeskočí a ponechá se jejich poslední stažená verze.
//  - Text se ořezává na TEXT_LIMIT znaků – jde o vyhledávací index,
//    ne o kopii webu.
//
// Spouští ho GitHub Action (.github/workflows/weby.yml) denně,
// jde spustit i ručně: node scripts/update-weby.js
// =====================================================================
"use strict";
const fs = require("fs");
const path = require("path");

const CSV_PATH = path.join(__dirname, "..", "data", "weby.csv");
const OUT_PATH = path.join(__dirname, "..", "navigator", "weby.js");
const TEXT_LIMIT = 4000;
const TIMEOUT_MS = 20000;

function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(x => x.trim() !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); if (row.some(x => x.trim() !== "")) rows.push(row); }
  return rows;
}

function htmlNaText(html) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(nav|footer|header)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const entity = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  s = s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") {
      const kod = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(kod) ? String.fromCodePoint(kod) : " ";
    }
    return entity[e.toLowerCase()] || " ";
  });
  return s.replace(/\s+/g, " ").trim();
}

function titulek(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? htmlNaText(m[1]).slice(0, 160) : "";
}

async function stahni(url) {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { "User-Agent": "DH-Kompas-bot/1.0 (+https://github.com/nadinensmark-bot/hub)" }
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return await res.text();
}

(async () => {
  const rows = parseCSV(fs.readFileSync(CSV_PATH, "utf8"));
  const zahlavi = rows[0].map(x => x.trim());
  const g = (r, n) => (r[zahlavi.indexOf(n)] || "").trim();

  // poslední stažené verze (pro weby, které teď nejdou stáhnout)
  let stare = {};
  if (fs.existsSync(OUT_PATH)) {
    try {
      const w = {};
      new Function("window", fs.readFileSync(OUT_PATH, "utf8"))(w);
      for (const p of (w.DH_WEBY || {}).polozky || []) stare[p.url] = p;
    } catch (e) { /* poškozený soubor – vygeneruje se celý znovu */ }
  }

  const polozky = [];
  let stazeno = 0, prevzato = 0, selhalo = 0;
  for (const r of rows.slice(1)) {
    const url = g(r, "url");
    if (!url) continue;
    const zaklad = {
      url,
      program: g(r, "program"),
      stitekCs: g(r, "stitek_cs") || "web",
      stitekEn: g(r, "stitek_en") || "website"
    };
    try {
      const html = await stahni(url);
      const text = htmlNaText(html).slice(0, TEXT_LIMIT);
      if (text.length < 200) throw new Error("stránka bez čitelného textu (" + text.length + " znaků)");
      polozky.push({ ...zaklad, titul: titulek(html) || url, text, stazeno: new Date().toISOString().slice(0, 10) });
      stazeno++;
      console.log("OK      ", url);
    } catch (e) {
      if (stare[url] && stare[url].text) {
        polozky.push({ ...zaklad, titul: stare[url].titul, text: stare[url].text, stazeno: stare[url].stazeno });
        prevzato++;
        console.log("PŘEVZATO", url, "-", e.message);
      } else {
        selhalo++;
        console.log("SELHALO ", url, "-", e.message);
      }
    }
  }

  console.log(`Staženo ${stazeno}, převzato ze starší verze ${prevzato}, selhalo ${selhalo}.`);
  if (!polozky.length) { console.error("Žádný web se nepodařilo získat – nic nezapisuji."); process.exit(1); }

  const dnes = new Date().toISOString().slice(0, 10);
  const out = "// Generováno skriptem scripts/update-weby.js – NEEDITOVAT RUČNĚ.\n" +
    "// Zdroj: data/weby.csv (seznam webů k indexaci pro chatbota).\n" +
    "window.DH_WEBY = " + JSON.stringify({ aktualizovano: dnes, polozky }, null, 2) + ";\n";

  const puvodni = fs.existsSync(OUT_PATH) ? fs.readFileSync(OUT_PATH, "utf8") : "";
  const bezData = s => s.replace(/"aktualizovano": "[^"]*"/, "");
  if (bezData(puvodni) === bezData(out)) { console.log("Beze změny, nic nezapisuji."); return; }
  fs.writeFileSync(OUT_PATH, out);
  console.log("Zapsáno", OUT_PATH, "-", polozky.length, "webů.");
})().catch(e => { console.error(e); process.exit(1); });
