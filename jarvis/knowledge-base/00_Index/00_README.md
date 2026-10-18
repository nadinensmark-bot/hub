---
title: "Knowledge Base Ultimate: rozcestník a návod"
tags: [index, readme, mapa, jarvis, navod]
audience: [startupy, nadine, kb-app]
updated: 2026-09-04
sources_verified: partial
---

# Knowledge Base Ultimate, rozcestník a návod

Kompletní znalostní báze pro obranné a dual-use podnikání: od kurzu Helm přes programy Defence Hubu po export, certifikace a financování. Postavená jako provázaný markdown pro tři účely: praktický podklad pro startupy, tvoje referenční báze a zdroj pro AI knowledge-base aplikaci (Jarvis).

## Jak je to poskládané

| Složka | Co v ní je |
|---|---|
| `00_Index` | tento rozcestník |
| `01_Zaklady` | slovníček (47 pojmů) a mapa ekosystému (hráči, tok peněz a rozhodnutí) |
| `02_Export-a-dual-use` | dual-use, vývozní kontrola EU a ČR, vojenský materiál, US ITAR/EAR, rozhodovací checklist |
| `03_Certifikace` | bezpečnostní prověrky (NBÚ), NATO kodifikace a AQAP, ISO/AS9100/CE, checklist vstupu do dodavatelského řetězce |
| `04_Programy-a-financovani` | programy Defence Hubu (z webu), EU programy, NATO DIANA a NIF, české národní programy |
| `05_Pitching-a-BD` | pitchování, pitch deck, business development, offsety a životní cyklus |
| `06_Kurz-Helm-zdroje` | přehled kurzu Helm (10 modulů) a index všech zdrojových PDF |

## Mapa souborů

**01_Zaklady**
- [[01_slovnicek-obrana-dual-use]], 47 pojmů, zkratek a programů (jádro terminologie).
- [[02_ekosystem-a-hraci]], kdo je kdo, řetězec rozhodovatelů, tři vrstvy financování.

**02_Export-a-dual-use**
- [[01_dual-use-EU-2021-821]], co je dual-use a nařízení EU 2021/821, catch-all, ICP, mezinárodní režimy.
- [[02_urceni-zarazeni-a-klasifikace]], jak zjistit, jestli položka podléhá kontrole.
- [[03_CZ-licencni-sprava-594-2004]], česká procedura, Licenční správa MPO, povolení a licence.
- [[04_vojensky-material-CZ-38-1994]], vojenský materiál (zákon 38/1994) a EU rámec.
- [[05_US-ITAR-EAR-a-reexport]], americká kontrola vývozu a kdy dopadá na český startup.
- [[06_checklist-export-pro-startup]], rozhodovací strom v 5 otázkách plus checklist.

**03_Certifikace**
- [[01_bezpecnostni-proverky-NBU-412-2005]], utajované informace a prověrky osob a firem.
- [[02_NATO-kodifikace-AQAP-NSPA]], NCAGE, NSN, AQAP, registrace u NSPA.
- [[03_ISO-AS9100-CE]], kvalitativní a produktové certifikace.
- [[04_checklist-vstup-do-dodavatelskeho-retezce]], cesta od prototypu k dodavateli NATO.

**04_Programy-a-financovani**
- [[00_defence-hub-programy]], co nabízí Defence Hub, katalog 13 programů z webu.
- [[01_EU-programy-financovani]], EDF, EIC, EUDIS, Horizon, EDIP, SAFE.
- [[02_NATO-DIANA-a-NIF]], akcelerátor DIANA a NATO Innovation Fund.
- [[03_CZ-narodni-programy]], TAČR ProDef, OP TAK a další.

**05_Pitching-a-BD**
- [[01_pitchovani]], metodika pitche v obraně (tvoje skriptum 05).
- [[02_pitch-deck]], stavba pitch decku, workshopový scénář (tvoje skriptum 06).
- [[03_business-development-a-prodej]], najdi trh, rozhodovatele, tendr.
- [[04_offsety-a-lifecycle]], offsety a životní cyklus jako příležitost pro SME.

**06_Kurz-Helm-zdroje**
- [[00_prehled-kurzu-Helm-a-zdroju]], 10 modulů a index všech zdrojových materiálů.

## Rychlé cesty podle otázky

- „Můžu to vůbec vyvézt?" → [[06_checklist-export-pro-startup]]
- „Jaký grant je pro nás?" → [[00_defence-hub-programy]] a [[01_EU-programy-financovani]]
- „Co potřebujeme, abychom dodávali do NATO?" → [[04_checklist-vstup-do-dodavatelskeho-retezce]]
- „Jak mám pitchovat na armádu vs. investora?" → [[01_pitchovani]] a [[02_pitch-deck]]
- „Kdo je kdo v ekosystému?" → [[02_ekosystem-a-hraci]]

## Návod pro AI aplikaci (Jarvis)

- Každý soubor má **YAML frontmatter** (title, tags, audience, updated, sources_verified) pro filtrování a citace.
- Soubory jsou provázané přes `[[nazev-souboru]]`, dají se procházet jako graf.
- **Aktuálnost:** programy, čísla a deadliny se rychle mění. Bloky financování a Defence Hub programy ověřuj vždy proti zdrojům uvedeným v souboru, ideálně před každým použitím se startupem.
- **Autoritativní vrstvy:** vlastní skripta a slovníček (jádro, stabilní) vs. deep research (ověřováno k datu, může zastarat).

## Co ještě chce lidské ověření (priorita)

KB je postavená bez vymýšlení: kde nebyl primární zdroj ověřitelný automaticky, je v textu značka `[OVĚŘIT]`. Nejdůležitější položky k doklepnutí:

1. **České paragrafy a částky** (soubory 03 a 04 v Exportu): **Pokuty ověřeny 2026-09-05** přímým čtením zákonů přes prohlížeč (594/2004 § 17 až § 19: do 5 a 20 mil. Kč; 38/1994 § 25: do 5, 15 a 50 mil. Kč). Zbývá ověřit: přesná lhůta rozhodnutí a správní poplatek u 594/2004, přesné trestní sazby § 265 TZ, definice vojenského materiálu v § 5 a doslovné znění 8 kritérií 2008/944/SZBP.
2. **Bezpečnostní prověrky** (03_Certifikace/01): aktuální prováděcí vyhlášky k zákonu 412/2005 a přesné lhůty řízení k roku 2026.
3. **NATO kodifikace a AQAP** (03_Certifikace/02): přesný český proces přidělení NCAGE a aktuální edice jednotlivých AQAP.
4. **Deadliny a objemy programů** (04_Programy): u EU a národních výzev ověřit konkrétní uzávěrky 2026 (část je z komerčních a univerzitních přehledů, ne přímo z oficiálních portálů).
5. **Defence Hub, interní programy:** ověřit status „Mission Track" a „Trusted Investors" (v interních materiálech ano, na veřejné homepage jako pojmenované programy ne).

Úplný seznam `[OVĚŘIT]` je rozmístěný přímo v jednotlivých souborech u konkrétních tvrzení.

## Zdroje a metoda

- Vlastní materiály: kurz Helm a Letní defence škola (skripta, slovníček, kurikulum) ze složky `06_Vzdelavani/kurz-Helm-a-letni-skola`.
- Web: `defencehub.gov.cz` (načteno 2026-09-04).
- Deep research: primární zdroje EU (EUR-Lex), NATO, US (eCFR, bis.gov, pmddtc.state.gov), české (zakonyprolidi.cz) a oficiální portály programů. Jednotlivé odkazy jsou v sekci Zdroje každého souboru.
- Sestaveno 4. 9. 2026.
