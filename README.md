# Hub Relay — Defence CRM

Interaktivní CRM prototyp pro **Defence Hub CzechInvest** — followupy, párování poptávek a nabídek (match engine), pipeline, kalendář napojený na Microsoft Teams, import z Excelu a AI generování zpráv z pracovních cest.

## Co umí

- **Přihlášení přes Microsoft / Teams** (v prototypu simulované)
- **Přehled** — KPI, followupy „k vyřízení dnes", schůzky z Teams, aktivita týmu
- **Match engine** — automatické párování poptávka ↔ nabídka napříč databází
- **Pipeline** — vztahy podle fáze (lead → uzavřeno)
- **Kontakty** — startupy, firmy, investoři, regionální kanceláře + filtry a detail
- **Kalendář** — schůzky celého týmu z Microsoft Teams, připojení účtů
- **Cesty** — plán schůzek na služebních cestách
- **Zpráva z cesty (AI)** — hlas + vizitky + komentář → hotová zpráva podle vlastního vzoru
- **Reporting** — zdraví pipeline a aktivita týmu
- **Import z Excelu** (.xlsx / .csv) s automatickým párováním sloupců
- **Záznam interakcí** a **soubory k odeslání** v detailu kontaktu

## Spuštění lokálně

Stačí otevřít `index.html` v prohlížeči (Chrome / Edge) — je to jeden soběstačný soubor, funguje i offline.

> **Poznámka:** AI tlačítko „Vygenerovat zprávu z cesty" potřebuje online prostředí s napojením na jazykový model. V offline `index.html` poběží celé UI, ale samotné AI generování ne. Stejně tak přihlášení přes Microsoft a synchronizace Teams jsou v této verzi simulované — pro ostrý provoz je nutné napojení na Microsoft Entra ID / Graph API.

## Nasazení na GitHub Pages

1. Nahraj obsah této složky do repozitáře (viz příkazy níže).
2. V repozitáři: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. Web poběží na `https://<uživatel>.github.io/<repo>/`.

## Struktura

```
index.html        # běžící aplikace (self-contained, pro GitHub Pages)
src/              # zdrojové soubory
  Defence CRM Followups.dc.html
  support.js
README.md
```

## Další fáze (ostrý provoz)

- Reálné přihlášení přes Microsoft Entra ID (OAuth) + Graph API pro Teams kalendáře
- Sdílená databáze (kontakty, shody, historie)
- Automatický přepis hlasu a OCR vizitek
- Napojení na stávající CRM (Dynamics)
