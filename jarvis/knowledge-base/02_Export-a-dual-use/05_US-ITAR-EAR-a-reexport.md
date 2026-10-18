---
title: "US exportní kontrola pro evropský startup: ITAR, EAR, de minimis a reexport"
tags: [export, ITAR, EAR, USML, ECCN, EAR99, de-minimis, reexport, DDTC, BIS, supply-chain]
audience: "České obranné a dual-use startupy a SME používající nebo integrující americké komponenty, software a technická data"
updated: 2026-09-04
sources_verified: true
---

## TL;DR

Americká exportní kontrola dopadá i na neamerické firmy. Pokud máte v produktu **US-origin komponenty, software nebo technická data (technical data)**, může na vás dopadat americké právo, i když jste česká firma prodávající do třetí země. Dva hlavní režimy: **ITAR** (obranné zboží, spravuje **DDTC** při ministerstvu zahraničí) a **EAR** (zboží dvojího užití a méně citlivé obranné zboží, spravuje **BIS** při ministerstvu obchodu).

Klíčové pojmy: **defense article** (obranné zboží na USML), **technical data** (technická data k obrannému zboží), **USML** (United States Munitions List, seznam ITAR), **CCL** (Commerce Control List, seznam EAR), **ECCN** (klasifikační kód na CCL), **EAR99** (nespecifikované zboží pod EAR bez ECCN), **de minimis** (prahové procento US obsahu, pod kterým neamerický produkt uniká EAR), **reexport** (další vývoz US zboží z jedné cizí země do druhé) a **retransfer** (předání jinému uživateli ve stejné zemi).

Praktický dopad: pokud produkt obsahuje ITAR nebo EAR-controlled US díly nad prahem de minimis, potřebujete pro reexport **americké povolení** (od DDTC nebo BIS), nejen české a EU licence. Proto integrátoři aktivně hledají **"ITAR-free"** komponenty, aby si celý dodavatelský řetězec neuvázali na povolovací proceduru cizí mocnosti.

---

## 1. ITAR: International Traffic in Arms Regulations

ITAR (22 CFR části 120 až 130) je americká úprava obchodu s **obranným zbožím a obrannými službami**. Spravuje ji **DDTC** (Directorate of Defense Trade Controls) při americkém ministerstvu zahraničí (U.S. Department of State), web **pmddtc.state.gov**.

### USML (United States Munitions List)

**USML** je seznam obranného zboží pod ITAR, členěný do **kategorií I až XXI** (zbraně, munice, výbušniny, řízené střely, vojenská elektronika, vojenská letadla, plavidla, tanky, materiály, utajovaná zařízení, "technical data" ke všem výše uvedeným atd.). Pokud položka spadá pod některou kategorii USML, je pod ITAR. USML je tzv. **positive list** (snaha o konkrétní technický popis místo obecného "vojenské"), ale hraniční zařazení je stále složité.

### Defense article a technical data

- **Defense article (obranné zboží):** jakákoli položka nebo technická data uvedená na USML, včetně součástí, komponent, příslušenství a souvisejícího softwaru.
- **Technical data (technická data):** informace potřebné pro **návrh, vývoj, výrobu, provoz, opravu, údržbu nebo úpravu** obranného zboží (výkresy, specifikace, dokumentace, software). Pozor: samotné **předání technických dat** cizinci (i e-mailem, cloudem, přístupem do repozitáře, nebo ukázáním na obrazovce) je z pohledu ITAR **export** a může vyžadovat licenci. Tomu se říká **deemed export** (považovaný vývoz), když US technická data zpřístupníte cizímu státnímu příslušníkovi.

### Registrace a licence

- **Registrace u DDTC:** každá americká osoba, která obranné zboží **vyrábí, vyváží, dováží nebo zprostředkovává (broker)**, se musí u DDTC **registrovat** (a platit roční poplatek), a to i tehdy, když zatím nic nevyváží. Registrace sama o sobě není vývozní povolení, je to podmínka způsobilosti.
- **Licence:** pro konkrétní vývoz, reexport nebo retransfer obranného zboží / technických dat je třeba **licence nebo souhlas DDTC** (např. formuláře DSP-5 pro trvalý vývoz, dále dohody TAA / MLA pro technická data a výrobní kooperace). [OVĚŘIT: konkrétní typy licencí a dohod DDTC, formuláře DSP-5, TAA, MLA a jejich přesné použití.]

> Zásadní pro Evropana: ITAR "putuje se zbožím". I když od americké firmy koupíte ITAR díl legálně, jeho **další vývoz nebo předání** dál podléhá souhlasu DDTC. ITAR nemá klasické de minimis jako EAR: **jakýkoli** ITAR-controlled prvek zpravidla "obarví" (contaminate) celek jako ITAR. [OVĚŘIT: přesné pravidlo "see-through" u ITAR pro US-origin defense articles zabudované do zahraničního celku, ITAR nemá procentní de minimis obdobný EAR.]

---

## 2. EAR: Export Administration Regulations

EAR (15 CFR části 730 až 774) upravuje vývoz **zboží dvojího užití** a méně citlivého obranného zboží (mj. tzv. **"600 series"**, dříve ITAR položky přesunuté pod EAR). Spravuje ho **BIS** (Bureau of Industry and Security) při americkém ministerstvu obchodu (U.S. Department of Commerce), web **bis.doc.gov** (též bis.gov).

### CCL, ECCN a EAR99

- **CCL (Commerce Control List):** seznam kontrolovaného zboží pod EAR, organizovaný do 10 kategorií a 5 skupin produktů.
- **ECCN (Export Control Classification Number):** pětiznakový klasifikační kód (např. 3A001), který položce určuje důvody kontroly (national security, missile technology, atd.) a podle destinace říká, kdy je potřeba licence.
- **EAR99:** "zbytková" kategorie. Zboží, které je **subject to the EAR**, ale **není na CCL** (nemá ECCN), je klasifikováno jako **EAR99**. Většina běžného komerčního zboží je EAR99. EAR99 obvykle nevyžaduje licenci, **ale** i EAR99 potřebuje licenci při vývozu do **embargovaných zemí**, zakázaným koncovým uživatelům (denied/entity list) nebo pro zakázané koncové užití (zbraně hromadného ničení, vojenské konečné užití v citlivých zemích).

### Jurisdikce: ITAR nebo EAR?

Zjednodušeně: nejdřív se ptáte, jestli položka je na **USML** (pak ITAR/DDTC). Pokud ne, jestli je **subject to the EAR** a jaký má **ECCN** na CCL (nebo je EAR99). Položka je vždy pod jedním režimem, ne pod oběma. Klasifikace (**commodity jurisdiction / classification**) je odborný úkon, u hraničních věcí se žádá stanovisko úřadu.

---

## 3. Klíčové pro evropský startup: kdy na vás dopadá US právo

Tady je jádro problému. Americké exportní právo je **extrateritoriální**: neváže se jen na to, kde firma sídlí, ale na **původ zboží, softwaru a technologie**. Na neamerickou firmu dopadá zejména těmito kanály:

### A) Přímo US-origin položky

Pokud vyvážíte **zboží, software nebo technologii amerického původu** (koupené v USA, nebo vyrobené v USA), zůstávají **subject to the EAR** (nebo ITAR), i když už jsou u vás v Evropě. Jejich další vývoz je **reexport** pod US jurisdikcí.

### B) Neamerický produkt s US obsahem: de minimis a "see-through"

I **zahraniční (např. český) produkt**, do kterého jste **zabudovali US-origin kontrolované komponenty nebo software**, se může stát **subject to the EAR**, pokud podíl US obsahu překročí práh **de minimis**. Toto je princip **"see-through"** (US úřad se "dívá skrz" váš celek na americké díly uvnitř).

**Prahy de minimis u EAR (podle hodnoty US-origin kontrolovaného obsahu v celku):**

| Destinace | Práh de minimis |
|---|---|
| Většina zemí (mimo E:1/E:2) | **25 %** nebo méně US obsahu = celek NENÍ subject to the EAR z titulu de minimis |
| **Country Group E:1 a E:2** (embargované/teroristické: Kuba, Írán, KLDR, Sýrie) | **10 %** nebo méně |
| Určité citlivé položky (např. některé šifrování, vysoce výkonné čipy, "600 series" military do D:5, položky pod OFAC) | **0 %** (de minimis se neuplatní vůbec) |

Pokud US kontrolovaný obsah práh **překročí**, celý váš neamerický produkt spadá pod EAR a jeho vývoz může vyžadovat **US povolení (licenci BIS)**. Výpočet de minimis má přesná pravidla (co se počítá do hodnoty, potřeba klasifikace US dílů podle ECCN, dokumentace). [OVĚŘIT: přesná metodika výpočtu de minimis podle 15 CFR 734.4, včetně toho, které položky nemají de minimis vůbec, a jak se počítá hodnota kontrolovaného US obsahu.]

> ITAR je přísnější: obsahuje-li produkt **ITAR defense article**, zpravidla neexistuje procentní úleva a celek se řídí ITAR ("see-through" bez de minimis prahu). Proto je ITAR díl v dodavatelském řetězci mnohem "toxičtější" než EAR díl.

### C) Reexport a retransfer

- **Reexport:** další odeslání US zboží / technologie z jedné cizí země do jiné cizí země (z ČR do třetí země).
- **Retransfer (in-country transfer):** předání US zboží jinému koncovému uživateli **ve stejné zemi**.

Obojí je pod US jurisdikcí a může vyžadovat americké povolení, **nezávisle** na tom, že už máte českou licenci a EU souhlas. Zákazník ani dodavatel vás nezbaví této povinnosti smlouvou, jde o veřejnoprávní povinnost vůči USA.

### D) Extrateritorialita a sankce

Porušení US pravidel může mít pro neamerickou firmu reálné důsledky: **zařazení na denial list / Entity List** (nikdo vám pak legálně neprodá US zboží), ztráta amerických dodavatelů a partnerů, sekundární sankce, u vážných případů i vymáhání ze strany US úřadů. Pro startup, jehož produkt stojí na US čipech nebo US softwaru, je to existenční riziko.

---

## 4. Jak zjistit, jestli máte v produktu ITAR/EAR-controlled US díly

1. **Bill of Materials (BOM) audit.** Projděte kusovník a u každé US-origin položky (čip, modul, senzor, software, firmware) zjistěte jurisdikci a klasifikaci.
2. **Vyžádejte klasifikaci od dodavatele.** Od US dodavatele si písemně vyžádejte **ECCN** (nebo potvrzení EAR99), případně **ITAR/USML kategorii**. Seriózní US výrobci to uvádějí v datasheetu nebo compliance dokumentu.
3. **Rozlište ITAR vs. EAR díly.** ITAR díl je mnohem omezující (kontaminuje celek, souhlas DDTC pro reexport). EAR díl umožňuje počítat de minimis.
4. **Spočítejte de minimis.** U EAR dílů zjistěte hodnotu kontrolovaného US obsahu vůči hodnotě celku a porovnejte s prahem (25 % / 10 % / 0 %) pro cílovou destinaci.
5. **Zahrňte technická data a software.** Ne jen fyzické díly. US výkresy, US firmware, US vývojové nástroje a přístup US inženýrů mohou také zakládat US jurisdikci.
6. **Dokumentujte.** Klasifikace, výpočty, prohlášení dodavatelů a end-user dokumentaci uchovávejte. Při auditu nebo prodeji firmy to bude klíčové.

Pokud zjistíte kontrolovaný US obsah nad prahem, počítejte s tím, že pro vývoz/reexport budete potřebovat **US povolení (licenci BIS, resp. souhlas DDTC)** vedle českého povolení a licence a EU pravidel.

---

## 5. Praktické dopady na dodavatelský řetězec: proč "ITAR-free"

Integrátoři a výrobci obranné a kosmické techniky v Evropě aktivně preferují **"ITAR-free"** (a často i "EAR-light") komponenty. Důvody:

- **Kontrola nad reexportem.** ITAR díl znamená, že o dalším prodeji vašeho produktu do jiné země fakticky spolurozhoduje **DDTC** (cizí vláda). To omezuje trhy a prodlužuje kontrakty.
- **Rychlost a jistota.** Povolovací řízení DDTC/BIS přidává čas a nejistotu. "ITAR-free" řetězec dovoluje prodávat evropským a spřáteleným zákazníkům bez amerického schvalování.
- **Suverenita a strategická autonomie EU.** Evropské programy (i institucionální nákupy) tlačí po dodavatelských řetězcích bez závislosti na US povolení. "ITAR-free" je konkurenční výhoda a někdy podmínka účasti.
- **Riziko blokace.** Změna US politiky nebo zařazení odběratele na denial list může přes noc zablokovat celý produkt postavený na US ITAR dílu.

**Pro startup to znamená:** při návrhu produktu (design-in) volte komponenty vědomě. Jeden ITAR díl uprostřed jinak evropského produktu může uzavřít trhy a přenést kontrolu na cizí úřad. Pokud US díl potřebujete, dokumentujte jeho status a naplánujte povolovací proceduru dopředu.

---

## Prakticky pro startup

1. **Předpokládejte, že US právo se vás týká,** jakmile máte v produktu US čip, modul, software nebo US technická data. Neřešte to až u prvního exportu.
2. **Udělejte BOM audit a vyžádejte ECCN/USML od dodavatelů** písemně. Bez klasifikace nevíte, v jakém režimu jste.
3. **Rozlišujte ITAR a EAR díly.** ITAR díl je "toxický" pro reexport (bez de minimis), EAR díl umí de minimis (25 % / 10 % / 0 %).
4. **Preferujte "ITAR-free" v designu,** pokud cílíte na evropské a exportní trhy. Šetří to čas, otevírá trhy a je to prodejní argument.
5. **Když už US obsah máte nad prahem, zajistěte US povolení** (BIS/DDTC) vedle českého povolení a licence (38/1994 Sb.) a EU pravidel. Tři vrstvy se sčítají, nenahrazují.
6. **Hlídejte technická data a "deemed export".** Sdílení US výkresů nebo přístup cizince do repozitáře může být export sám o sobě.
7. **Veďte dokumentaci a compliance program.** Klasifikace, prohlášení dodavatelů, end-user, screening sankčních seznamů. Investoři a odběratelé to budou vyžadovat.

---

## Časté chyby a mýty

- **Mýtus: "Nejsme US firma, tak se nás US právo netýká."** Týká, přes původ komponent, softwaru a technických dat (reexport, de minimis, "see-through", extrateritorialita).
- **Mýtus: "Máme českou licenci, tak je vyřešeno."** Česká a EU pravidla neruší US jurisdikci nad US-origin obsahem. Vrstvy se sčítají.
- **Mýtus: "ITAR má taky de minimis jako EAR."** Zpravidla ne. ITAR defense article obvykle kontaminuje celek bez procentní úlevy. Právě proto se hledají "ITAR-free" díly. [OVĚŘIT: přesné pravidlo see-through u ITAR.]
- **Mýtus: "EAR99 znamená bez licence."** EAR99 obvykle bez licence, ale ne do embargovaných zemí, ne zakázaným koncovým uživatelům a ne pro zakázané koncové užití.
- **Chyba: záměna ITAR a EAR.** Jsou to dva úřady (DDTC vs. BIS) a dva seznamy (USML vs. CCL). Položka je pod jedním z nich, klasifikace rozhoduje o všem.
- **Chyba: ignorování technických dat a software.** Kontrola není jen o hardwaru. US výkresy, firmware a přístup cizinců mohou zakládat US jurisdikci (deemed export).
- **Chyba: pozdní design-in.** Rozhodnutí o US komponentě padá při návrhu produktu, ne až u exportu. Tehdy je nejlevnější být "ITAR-free".

---

## Zdroje

- ITAR, 22 CFR 120 až 130, a DDTC (Directorate of Defense Trade Controls, U.S. Department of State): https://www.pmddtc.state.gov/
- USML (United States Munitions List): 22 CFR 121, prostřednictvím DDTC / eCFR
- EAR, 15 CFR 730 až 774, a BIS (Bureau of Industry and Security, U.S. Department of Commerce): https://www.bis.gov/ ; https://www.bis.doc.gov/
- CCL (Commerce Control List) a ECCN: 15 CFR 774 (Supplement No. 1), přes BIS / eCFR
- De minimis US content, 15 CFR 734.4: https://www.ecfr.gov/current/title-15/subtitle-B/chapter-VII/subchapter-C/part-734/section-734.4 ; přehled BIS: https://www.bis.gov/regulations/ear/734
- BIS, "What is a reexport?": https://www.bis.gov/articles/what-reexport
- Definice "subject to the EAR": 15 CFR 734, přes eCFR / BIS
