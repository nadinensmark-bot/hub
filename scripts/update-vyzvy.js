// =====================================================================
// Aktualizace výzev pro DH Kompas
// ---------------------------------------------------------------------
// Načte výzvy z CSV a vygeneruje navigator/vyzvy.js, který má v aplikaci
// přednost před polem vyzvy v kb.js / kb-en.js.
//
// Zdroj CSV (v tomto pořadí):
//   1. env VYZVY_CSV_URL – např. Google tabulka publikovaná jako CSV
//      (Soubor → Sdílet → Publikovat na web → CSV). Tým pak edituje
//      tabulku a nemusí sahat do repozitáře.
//   2. data/vyzvy.csv v repozitáři (výchozí).
//
// Sloupce CSV: program,nazev_cs,nazev_en,otevreni_od,uzaverka,
//   stav_rucne_cs,stav_rucne_en,odkaz,pozn_cs,pozn_en
// Data ve formátu RRRR-MM-DD; prázdné pole = neznámé.
//
// Spouští ho GitHub Action (.github/workflows/vyzvy.yml) denně,
// jde spustit i ručně: node scripts/update-vyzvy.js
// =====================================================================
"use strict";
const fs = require("fs");
const path = require("path");

const CSV_PATH = path.join(__dirname, "..", "data", "vyzvy.csv");
const OUT_PATH = path.join(__dirname, "..", "navigator", "vyzvy.js");

function parseCSV(text) {
  // jednoduchý parser s podporou uvozovek a "" escapování
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

function radekNaVyzvu(zahlavi, radek, lang) {
  const g = n => (radek[zahlavi.indexOf(n)] || "").trim();
  const v = {
    program: g("program"),
    nazev: g(lang === "en" ? "nazev_en" : "nazev_cs"),
    otevreniOd: g("otevreni_od"),
    uzaverka: g("uzaverka"),
    odkaz: g("odkaz"),
    pozn: g(lang === "en" ? "pozn_en" : "pozn_cs")
  };
  const stav = g(lang === "en" ? "stav_rucne_en" : "stav_rucne_cs");
  if (stav) v.stavRucne = stav;
  return v;
}

function zkontroluj(vyzvy, lang) {
  const chyby = [];
  vyzvy.forEach((v, i) => {
    if (!v.program) chyby.push(`řádek ${i + 2} (${lang}): chybí program`);
    if (!v.nazev) chyby.push(`řádek ${i + 2} (${lang}): chybí název`);
    for (const pole of ["otevreniOd", "uzaverka"]) {
      const hodnota = v[pole];
      if (hodnota && !/^\d{4}-\d{2}-\d{2}$/.test(hodnota) && !hodnota.startsWith("["))
        chyby.push(`řádek ${i + 2} (${lang}): ${pole} "${hodnota}" není RRRR-MM-DD`);
    }
  });
  return chyby;
}

async function nactiCSV() {
  const url = process.env.VYZVY_CSV_URL;
  if (url) {
    console.log("Stahuji CSV z:", url);
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) throw new Error("Stažení CSV selhalo: HTTP " + res.status);
    return await res.text();
  }
  console.log("Čtu lokální", CSV_PATH);
  return fs.readFileSync(CSV_PATH, "utf8");
}

(async () => {
  const text = await nactiCSV();
  const rows = parseCSV(text);
  const zahlavi = rows[0].map(x => x.trim());
  const povinne = ["program", "nazev_cs", "nazev_en", "otevreni_od", "uzaverka", "odkaz"];
  for (const p of povinne) if (!zahlavi.includes(p)) throw new Error("V CSV chybí sloupec: " + p);

  const cs = rows.slice(1).map(r => radekNaVyzvu(zahlavi, r, "cs"));
  const en = rows.slice(1).map(r => radekNaVyzvu(zahlavi, r, "en"));
  const chyby = [...zkontroluj(cs, "cs"), ...zkontroluj(en, "en")];
  if (chyby.length) { console.error("Chyby v CSV:\n" + chyby.join("\n")); process.exit(1); }

  const dnes = new Date().toISOString().slice(0, 10);
  const out = "// Generováno skriptem scripts/update-vyzvy.js – NEEDITOVAT RUČNĚ.\n" +
    "// Zdroj: data/vyzvy.csv (nebo Google tabulka přes VYZVY_CSV_URL).\n" +
    "window.DH_VYZVY = " + JSON.stringify({ aktualizovano: dnes, cs, en }, null, 2) + ";\n";

  const stare = fs.existsSync(OUT_PATH) ? fs.readFileSync(OUT_PATH, "utf8") : "";
  // commit jen při věcné změně (datum aktualizace samo o sobě změnu nedělá)
  const bezData = s => s.replace(/"aktualizovano": "[^"]*"/, "");
  if (bezData(stare) === bezData(out)) { console.log("Beze změny, nic nezapisuji."); return; }
  fs.writeFileSync(OUT_PATH, out);
  console.log("Zapsáno", OUT_PATH, "-", cs.length, "výzev.");
})().catch(e => { console.error(e); process.exit(1); });
