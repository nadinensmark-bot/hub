---
title: "Kvalitativní a produktové certifikace: ISO 9001, AS9100/EN9100, CE a obranné specifika"
tags: [ISO-9001, AS9100, EN9100, QMS, CE-marking, TEMPEST, Common-Criteria, ISO-15408, obranna-certifikace, komercni-vs-obranna]
audience: "české obranné a dual-use startupy a SME, které řeší jaké certifikace reálně potřebují pro dodávky integrátorům a armádě"
updated: 2026-09-04
sources_verified: [iso.org, sae.org, en.wikipedia.org, conformance.co.uk, commoncriteriaportal.org]
---

## TL;DR

- Základ pro jakéhokoli seriózního dodavatele je certifikovaný systém řízení kvality (QMS): ISO 9001 (obecný) nebo AS9100 / EN9100 (nadstavba ISO 9001 pro letecký, kosmický a obranný průmysl). Bez toho se k integrátorům a do NATO řetězce prakticky nedostanete.
- AS9100 (v Evropě značené EN9100, obsahově totožné) je faktický standard pro hardware do letectví a obrany. AQAP (viz soubor 02) na tyto normy navazuje, není jejich náhradou.
- CE marking (označení shody EU) u čistě vojenského materiálu typicky NEPLATÍ, vojenské zboží je z působnosti většiny harmonizačních směrnic vyloučeno (a členské státy se opírají o výjimku dle čl. 346 Smlouvy o fungování EU). U dual-use a komerčních komponent CE naopak platí normálně.
- Pro kyber a citlivé systémy jsou relevantní specializované certifikace: Common Criteria (ISO/IEC 15408) pro bezpečnost IT produktů a TEMPEST pro odolnost proti kompromitujícímu vyzařování. Vyžadují se selektivně podle typu produktu a zakázky, ne plošně.
- Klíčové rozlišení: komerční certifikace (ISO, CE) říká, že firma a produkt splňují obecné standardy. Obranná certifikace a ověření (AQAP/GQA, prověrky, Common Criteria, homologace armádou) říká, že konkrétní produkt je způsobilý pro vojenské použití. Integrátoři a armáda typicky vyžadují obojí ve vrstvách.

## 1. Systémy řízení kvality (QMS)

### ISO 9001 (Quality Management System, systém managementu kvality)

- Co to je: mezinárodní norma pro systém řízení kvality. Certifikuje ji akreditovaný certifikační orgán (třetí strana), ne stát. Platnost certifikátu je obvykle 3 roky s ročními dozorovými audity. [OVĚŘIT: aktuální platná edice ISO 9001 k roku 2026, dlouhodobě ISO 9001:2015, potvrdit případnou revizi.]
- K čemu: základní vstupní podmínka pro dodavatele téměř v jakémkoli B2B a veřejném řetězci. Pro obranu je nutná, ale nestačí.

### AS9100 / EN9100 (QMS pro letecký, kosmický a obranný průmysl)

- Co to je: oborová nadstavba ISO 9001 pro aviation, space and defence (letecký, kosmický a obranný průmysl). Vydává ji SAE/IAQG jako sérii 9100. V Evropě je publikována jako EN9100 (obsahově identická s americkou AS9100), v Asii jako JISQ 9100. Doplňuje ISO 9001 o požadavky na bezpečnost produktu, řízení konfigurace, sledovatelnost, řízení zastarávání, prevenci padělků, řízení rizik.
- Související normy série: AS9110 (údržba, MRO), AS9120 (distributoři a sklady).
- K čemu: faktický must-have pro hardware do letectví a obrany. Integrátoři (například výrobci letadel, raket, systémů) ji od výrobních subdodavatelů běžně vyžadují. [OVĚŘIT: aktuální revize AS9100/EN9100 k roku 2026, dlouhodobě revize D, potvrdit případné vydání novější revize.]

### Vztah QMS a AQAP

ISO 9001 nebo AS9100/EN9100 je základ, na kterém teprve stojí plnění AQAP (NATO požadavky, viz soubor 02). AQAP 2110 nadstavbuje ISO 9001, AQAP 2310 nadstavbuje AS9100. Pořadí zavádění: nejdřív QMS a jeho certifikace, potom AQAP v rámci konkrétního kontraktu (jeho plnění ověřuje stát, GQA).

## 2. CE marking a obranné produkty

### Co je CE marking

CE marking (označení shody CE) je prohlášení výrobce, že produkt splňuje příslušné harmonizační předpisy EU (například pro elektromagnetickou kompatibilitu, nízké napětí, RED pro rádiová zařízení, strojní směrnici, výrobky). Umožňuje volný pohyb zboží na jednotném trhu EU. Není to certifikát kvality ani obranná certifikace.

### Kde CE NEPLATÍ: vojenský materiál

- Většina harmonizačních směrnic EU vojenské zboží (military equipment, zbraně, munice, válečný materiál) ze své působnosti vylučuje. Členské státy se navíc mohou opřít o výjimku podle čl. 346 Smlouvy o fungování EU (SFEU), která umožňuje odchýlit se od pravidel jednotného trhu kvůli podstatným bezpečnostním zájmům spojeným s výrobou a obchodem se zbraněmi, municí a válečným materiálem.
- Praktický důsledek: čistě vojenský produkt typicky nenese CE a místo toho podléhá vojenským požadavkům (vojenské normy, homologace, ověření odběratelem, AQAP). [OVĚŘIT: konkrétní seznam směrnic vylučujících vojenské zboží a přesná formulace čl. 346 SFEU, potvrdit v primárním zdroji.]

### Kde CE PLATÍ: dual-use a komerční komponenty

- Dual-use produkty a komerční komponenty, které se prodávají i na civilním trhu (běžná elektronika, rádia, průmyslové stroje, IT), CE nesou standardně, i když je nakonec použije obranný zákazník.
- Pozor: dual-use má dvě různé roviny, které se pletou. (1) CE = shoda produktu s předpisy jednotného trhu. (2) Kontrola vývozu zboží dvojího užití (dual-use export control, nařízení EU 2021/821) = zcela jiná agenda licencování vývozu. Obojí může na jeden produkt dopadat současně. [OVĚŘIT: aktuální číslo nařízení EU o dual-use (2021/821) a jeho platnost k roku 2026.]

Zjednodušené vodítko:

| Produkt | CE marking | Poznámka |
|---|---|---|
| Čistě vojenský materiál (zbraň, munice, vojenský systém) | Zpravidla ne | Vojenské normy, homologace, AQAP, čl. 346 SFEU |
| Dual-use komponenta prodávaná i civilně | Ano | Plus možná kontrola vývozu dle nařízení 2021/821 |
| Komerční IT/elektronika dodaná armádě | Ano | Plus případně TEMPEST/Common Criteria dle citlivosti |

## 3. Kyber a citlivé produkty: Common Criteria a TEMPEST

### Common Criteria (ISO/IEC 15408)

- Co to je: mezinárodní rámec pro hodnocení bezpečnosti IT produktů (Common Criteria for Information Technology Security Evaluation), normalizovaný jako ISO/IEC 15408. Výsledkem hodnocení je certifikát na určité úrovni záruky EAL (Evaluation Assurance Level, EAL1 až EAL7). Hodnocení provádějí akreditované laboratoře, certifikaci vydává národní schéma.
- Kdy je relevantní: u produktů, kde je bezpečnost IT předmětem dodávky (šifrovací zařízení, bezpečnostní hardware, síťové bezpečnostní prvky, čipové karty). Pro řadu citlivých vládních a NATO nasazení je Common Criteria certifikace požadována. [OVĚŘIT: zda a jaké národní certifikační schéma Common Criteria funguje v ČR a kdo je gestor, potvrdit u NÚKIB/NBÚ.]

### TEMPEST

- Co to je: soubor NATO/národních standardů a opatření proti kompromitujícímu elektromagnetickému vyzařování (aby z vyzařování zařízení nebylo možné odečíst zpracovávanou utajovanou informaci). TEMPEST zóny a úrovně se řeší u techniky zpracovávající utajované informace.
- Kdy je relevantní: pouze u zařízení pracujících s utajovanými informacemi (navazuje na prověrky, soubor 01). Není to plošný požadavek, ale specifický pro utajované systémy. [OVĚŘIT: gestor TEMPEST v ČR a příslušné normy, pravděpodobně NBÚ v roli národní bezpečnostní autority, potvrdit.]

### Další oborová ověření

Podle typu produktu mohou integrátoři nebo armáda požadovat: vojenské klimatické a mechanické testy (například řady MIL-STD nebo EN/STANAG ekvivalenty), EMC/EMI testy, balistické či jiné výkonové zkoušky, homologaci a vojskové zkoušky u odběratele. [OVĚŘIT: konkrétní STANAG/MIL-STD a vojskové zkušební postupy dle druhu produktu, řídí se požadavkem zakázky.]

## 4. Komerční vs. obranná certifikace: co reálně vyžadují

- Komerční vrstva (ISO 9001, CE, případně AS9100/EN9100 pro hardware): dokazuje, že firma umí řízeně a opakovaně dodávat kvalitu a že komerční produkty splňují předpisy trhu. Toto je vstupní laťka pro to, aby s vámi integrátor vůbec začal jednat.
- Obranná vrstva (AQAP/GQA, kodifikace NCAGE/NSN, bezpečnostní prověrky, Common Criteria, TEMPEST, homologace): dokazuje způsobilost konkrétního produktu a firmy pro vojenské nasazení a pro práci s utajovanými informacemi. Vyžaduje se selektivně podle zakázky.
- Realita v řetězci: integrátor typicky chce od subdodavatele minimálně ISO 9001 nebo AS9100, u obranných kontraktů k tomu plnění AQAP a schopnost projít GQA, u utajovaných částí prověrku (osvědčení podnikatele), u kyber a citlivých produktů Common Criteria nebo TEMPEST. Nedělejte všechno najednou dopředu, jděte podle požadavků konkrétní zakázky a zákazníka.

## Prakticky pro startup

1. Začněte ISO 9001. Je to univerzální vstupenka. Pokud děláte hardware do letectví/obrany, plánujte rovnou AS9100/EN9100, integrátoři ji budou chtít.
2. AQAP neřešte samostatně dopředu. Nejdřív QMS, AQAP přijde s kontraktem a ověří ho stát (viz soubor 02).
3. Nezaměňujte CE a obrannou způsobilost. U čistě vojenského produktu CE typicky neřešíte, u dual-use a komerčních komponent ho naopak potřebujete standardně, plus zvažte kontrolu vývozu (dual-use export).
4. Common Criteria a TEMPEST řešte jen když to produkt a zakázka vyžadují. Jsou drahé a zdlouhavé, nedělejte je preventivně bez konkrétního požadavku.
5. Ptejte se integrátora na jeho seznam požadavků. Reálná laťka se liší dodavatel od dodavatele. Získáte tak přesný a levnější plán certifikací než plošné pořizování všeho.
6. Certifikace berte jako vrstvy, ne jako jednorázový úkol: komerční základ (ISO/CE), oborová nadstavba (AS9100), NATO/obranná ověření (AQAP/GQA, kodifikace, prověrky, CC/TEMPEST) podle potřeby.

## Časté chyby a mýty

- Mýtus: náš vojenský produkt musí mít CE. Zpravidla ne. Čistě vojenský materiál je z většiny CE směrnic vyloučen a stát se opírá o čl. 346 SFEU.
- Mýtus: CE = kvalita nebo bezpečnost pro armádu. CE je jen shoda s předpisy jednotného trhu EU, o vojenské způsobilosti neříká nic.
- Chyba: pořizovat Common Criteria nebo TEMPEST bez konkrétního požadavku. Jsou nákladné a dávají smysl jen u citlivých IT a utajovaných systémů.
- Chyba: myslet si, že AS9100 nahrazuje AQAP nebo naopak. AS9100 je QMS certifikace třetí stranou, AQAP jsou NATO kontraktní požadavky ověřované státem. Vrstvy se doplňují.
- Chyba: zaměnit dual-use ve smyslu CE (shoda produktu) a dual-use ve smyslu kontroly vývozu (licencování). Jsou to dvě různé agendy, které mohou platit současně.
- Chyba: dělat všechny certifikace dopředu do zásoby. Vede to k vysokým nákladům bez zakázky. Postupujte podle požadavků konkrétního zákazníka a tendru.

## Zdroje

- ISO 9001, oficiální stránka normy (iso.org)
- AS9100 / EN9100 / série 9100, SAE a IAQG (sae.org; en.wikipedia.org/wiki/AS9100)
- CE marking a obranné/vojenské zboží, vyloučení a čl. 346 SFEU (conformance.co.uk/industry-sectors/ce-marking-defence; primární: Smlouva o fungování EU, čl. 346)
- Nařízení EU 2021/821 o kontrole vývozu zboží dvojího užití (eur-lex.europa.eu)
- Common Criteria / ISO/IEC 15408 (commoncriteriaportal.org; iso.org)
- Vztah AQAP a AS9100/ISO 9001 (viz soubor 02, zdroje NATO a Bundeswehr)
