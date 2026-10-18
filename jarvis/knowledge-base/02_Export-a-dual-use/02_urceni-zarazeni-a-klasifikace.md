---
title: "Určení zařazení a klasifikace zboží dvojího užití"
tags: [dual-use, klasifikace, classification, kontrolni-seznam, ECCN, software, sifrovani, catch-all]
audience: [startupy, nadine, kb-app]
updated: 2026-09-04
sources_verified: partial
---

# Určení zařazení a klasifikace zboží dvojího užití

## TL;DR

Než cokoli vyvezeš mimo EU, musíš zjistit, zda tvůj produkt (hardware, software, technologie, data) je na kontrolním seznamu (Příloha I nařízení (EU) 2021/821, kategorie 0 až 9). To se dělá klasifikací (přiřazením kontrolního čísla podle technických parametrů), tzv. self-classification (samo-zařazení: vývozce odpovídá za správné určení). Pozor na dvě různé věci: celní zařazení (TARIC, pro clo) není totéž co kontrolní zařazení (dual-use položka). I když produkt na seznamu není, může tě chytit catch-all (koncové užití). Když si nejsi jistý, požádej Licenční správu MPO o závazné stanovisko. Základy viz [[01_dual-use-EU-2021-821]], českou proceduru [[03_CZ-licencni-sprava-594-2004]].

## Základní princip: odpovědnost je na vývozci

EU nevydává "certifikát, že tvůj produkt je/není dual-use". Platí **self-classification**: vývozce sám odpovídá za správné zařazení a za rozhodnutí, zda potřebuje povolení. Špatné zařazení = neoprávněný vývoz = přestupek nebo trestný čin (viz sankce v [[03_CZ-licencni-sprava-594-2004]]).

## Jak startup zjistí, zda podléhá kontrole

### Krok za krokem: postup klasifikace

1. **Popiš přesně produkt technicky** (parametry: výkon, frekvence, přesnost, teplota, rychlost, kryptografie, materiál). Kontrolní seznam pracuje s prahovými hodnotami, ne s marketingovým názvem.
2. **Urči kategorii (0 až 9)** podle oboru produktu, viz tabulka v [[01_dual-use-EU-2021-821]].
3. **Projdi podkategorie** uvnitř kategorie. Struktura kontrolního čísla:
   - **1. znak: kategorie** (0 až 9)
   - **2. znak: typ položky** (A = zařízení/systémy, B = testovací a výrobní zařízení, C = materiály, D = software, E = technologie)
   - **3. až 4. znak: režim** (podle mezinárodního režimu) a pořadové číslo
   - Příklad: **5A002** = kategorie 5 (telekomunikace/infobezpečnost), A = zařízení, položka 002 (systémy pro informační bezpečnost / šifrování).
   [OVĚŘIT: přesná legenda písmen A až E a číslování dle aktuální Přílohy I]
4. **Porovnej technické parametry produktu s parametry v položce.** Kontrole podléháš jen tehdy, když produkt překračuje uvedené prahy (např. určitá délka klíče, výkon, přesnost).
5. **Pokud produkt odpovídá položce** > podléhá kontrole, potřebuješ povolení pro vývoz mimo EU (a u Přílohy IV i uvnitř EU).
6. **Pokud neodpovídá žádné položce** > zboží není zařazené (non-listed), ale POKRAČUJ na catch-all test.

### TARIC/celní vs kontrolní (dual-use) zařazení

Časté nepochopení:

| | Celní zařazení (TARIC/HS) | Kontrolní zařazení (dual-use) |
|---|---|---|
| Účel | Clo, statistika, celní odbavení | Bezpečnostní kontrola vývozu |
| Kód | HS/CN/TARIC kód | Kontrolní číslo Přílohy I (např. 3A001) |
| Vztah | Jeden produkt má oba | Nekorespondují 1:1 |

Jeden TARIC kód může krýt zboží kontrolované i nekontrolované, a naopak. Nikdy nespoléhej na to, že "podle celního kódu to není zbraň, takže je to volné".

## Rozhodovací strom: podléhám kontrole?

```
1. Je to vojenský materiál (primárně vojenské určení)?
   ANO -> jiný režim (zákon 38/1994 Sb.), nikoli dual-use. [OVĚŘIT: hraniční případy]
   NE  -> pokračuj

2. Odpovídá produkt (dle parametrů) položce v Příloze I (kat. 0 až 9)?
   ANO -> KONTROLOVÁNO. Potřebuješ povolení pro vývoz mimo EU.
          (Příloha IV: kontrola i uvnitř EU.)
   NE  -> pokračuj na catch-all

3. Catch-all: víš/jsi informován, že jde o:
   - koncové užití pro WMD (čl. 4)?
   - vojenské užití v embargované zemi (čl. 4)?
   - cyber-surveillance k represi/porušování lidských práv (čl. 5)?
   - položku pod národním rozšířením kontroly (čl. 9, 10)?
   ANO -> KONTROLOVÁNO i bez seznamu. Kontaktuj Licenční správu MPO.
   NE  -> pravděpodobně bez povolení, ale zdokumentuj rozhodnutí (due diligence).

4. Cílová země pod sankcemi/embargem?
   ANO -> samostatný sankční režim, ověř u MPO bez ohledu na body výše.
```

## Software, technologie, technická data, cloud, šifrování

Toto je nejpřehlíženější oblast u startupů (SW a deep-tech):

- **Software (D):** kontrolovaný, pokud odpovídá položce (typicky software pro vývoj/výrobu/užití kontrolovaného hardwaru, nebo šifrovací software v kat. 5 část 2).
- **Technologie / technická data (E):** návody, dokumentace, know-how, zdrojové kódy, výkresy potřebné pro vývoj, výrobu nebo užití kontrolované položky.
- **Vývoz elektronicky:** poslání souboru, e-mailem, uploadem, zpřístupnění na cloudu nebo repozitáři osobě/serveru mimo EU se považuje za vývoz (definice "export" v čl. 2). Pozor i na "deemed export" scénáře (zpřístupnění zahraničnímu pracovníkovi) [OVĚŘIT: zda a jak EU 2021/821 upravuje deemed export uvnitř EU].
- **Šifrování (encryption):** kryptografie je klasický dual-use (kat. 5 část 2, typicky 5A002/5D002). Kontrola se odvíjí od délky klíče a účelu. Existují výjimky (např. veřejně dostupný software, hromadně prodávaný spotřebitelský software), ale ověřuj konkrétně [OVĚŘIT: aktuální prahy a výjimky u kat. 5 část 2, poznámka o hromadně dostupném zboží / "mass market"].
- **Výjimky obecně:** public domain (veřejně dostupné informace) a basic scientific research (základní vědecký výzkum) bývají mimo kontrolu technologie/softwaru, ale definice jsou úzké, neber je paušálně.

## Kde získat závazné posouzení/stanovisko

Self-classification je tvoje odpovědnost, ale nejsi na to sám:

- **Licenční správa MPO** (příslušný orgán v ČR): můžeš požádat o stanovisko/posouzení, zda konkrétní zboží podléhá kontrole a jaké povolení je třeba. Postup a kontakt viz [[03_CZ-licencni-sprava-594-2004]]. [OVĚŘIT: zda MPO vydává formálně "závazné" posouzení nebo jen konzultativní stanovisko, a jaká je lhůta]
- **Celní správa ČR:** poradenství k celní/kontrolní vazbě a mezinárodním kontrolním režimům.
- **Konzultace se specializovaným právníkem/poradcem** na export control (vhodné u hraničních případů a při budování ICP).

## Prakticky pro startup

1. **Vytvoř si technický datasheet produktu** s parametry relevantními pro seznam (výkon, kryptografie, přesnost). Bez něj klasifikaci neuděláš.
2. **Proveď self-classification** proti aktuální Příloze I a výsledek (kontrolní číslo nebo "non-listed") písemně zdokumentuj i s odůvodněním.
3. **Rozliš celní kód a kontrolní číslo**, jsou to dvě různé věci.
4. **U softwaru, kryptografie a technologie buď obzvlášť opatrný**, i e-mail a cloud jsou vývoz.
5. **U hraničního nebo nezařazeného zboží udělej catch-all test** a udrž si důkaz due diligence (screening odběratele a koncového užití).
6. **Při nejistotě požádej Licenční správu MPO o stanovisko** ještě před podpisem exportního kontraktu.

## Časté chyby a mýty

- **Mýtus: "Máme celní kód, takže je zařazeno."** TARIC neurčuje dual-use kontrolu.
- **Mýtus: "Klasifikaci udělá za nás celní deklarant."** Odpovědnost za self-classification nese vývozce.
- **Mýtus: "Software a data se fyzicky nevyvážejí, tak je to jedno."** Elektronický přenos mimo EU je vývoz.
- **Mýtus: "Šifrování je běžné, není regulované."** Kryptografie je jádro kategorie 5 část 2, kontrola dle parametrů.
- **Mýtus: "Nezařazeno = bez povinností."** Catch-all a sankční režimy mohou povinnost založit.
- **Mýtus: "Stačí odhad."** Špatné zařazení je právně vývozcova chyba se sankcemi, ne úřadu.

## Zdroje

- [Regulation (EU) 2021/821, definice a Příloha I, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2021/821/oj/eng) (ověřeno 2026-09-04)
- [Consolidated text 02021R0821-20251115, EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021R0821-20251115) (ověřeno 2026-09-04)
- [Základní informace oddělení mezinárodních kontrolních režimů, Licenční správa MPO](https://mpo.gov.cz/cz/zahranicni-obchod/licencni-sprava/mezinarodni-kontrolni-rezimy-zbozi-dvojiho-pouziti/zakladni-informace-oddeleni-mezinarodnich-kontrolnich-rezimu--10749/) (ověřeno 2026-09-04, robots omezil čtení, ověřit obsah přímo)
- [Mezinárodní kontrolní režimy, Celní správa ČR](https://celnisprava.gov.cz/cz/dalsi-kompetence/ochrana-spolecnosti-a-zivotniho-prostredi/Stranky/mezinarodni-kontrolni-rezimy.aspx) (ověřeno 2026-09-04)
