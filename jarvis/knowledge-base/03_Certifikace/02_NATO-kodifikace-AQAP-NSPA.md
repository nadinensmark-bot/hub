---
title: "Vstup do NATO dodavatelského řetězce: kodifikace (NCAGE, NSN), AQAP a NSPA"
tags: [NATO, NCAGE, NSN, kodifikace, AQAP, NSPA, NCIA, GQA, statni-overovani-jakosti, obranny-dodavatelsky-retezec]
audience: "české obranné a dual-use startupy a SME mířící na NATO zakázky a dodávky přes NSPA/NCIA"
updated: 2026-09-04
sources_verified: [okm.mo.gov.cz, urosksoj.mo.gov.cz, oos.mo.gov.cz, mocr.mo.gov.cz, nspa.nato.int, en.wikipedia.org, bundeswehr.de]
---

## TL;DR

- Tři samostatné, ale provázané pilíře vstupu do NATO řetězce: kodifikace (identifikace položek: NCAGE kód firmy a NSN číslo položky), kvalita (AQAP publikace plus státní ověřování jakosti, GQA) a odbyt (registrace u NSPA nebo NCIA jako dodavatel).
- Národní kodifikační i standardizační autoritou v ČR je ÚŘad pro obrannou standardizaci, katalogizaci a státní ověřování jakosti (ÚřOSKSOJ, běžně Úř OSK SOJ), organizační složka Ministerstva obrany. Kodifikaci řeší jeho katalogizační složka (okm.mo.gov.cz), státní ověřování jakosti složka SOJ.
- NCAGE (NATO Commercial and Government Entity code, pětiznakový identifikátor firmy) je vstupní podmínka pro registraci dodavatele a pro kodifikaci položek. Přiděluje se přes národní kodifikační autoritu, pro firmu zdarma.
- NSPA (NATO Support and Procurement Agency) je hlavní nákupní a logistická agentura NATO. Dodavatelem se firma stane registrací do jejího dodavatelského registru (source file), obvykle s NCAGE kódem a národním potvrzením způsobilosti (Declaration of Eligibility).
- AQAP (Allied Quality Assurance Publications) jsou NATO požadavky na řízení kvality, které nadstavbují ISO 9001 respektive AS9100/EN9100. Nejsou to samostatné ISO certifikace, ale požadavky uplatňované v kontraktu, jejichž plnění ověřuje stát (GQA).

## 1. NATO Codification System (NCS): NCAGE a NSN

### Co je NCS

NATO Codification System (NCS, kodifikační systém NATO) je jednotný mezinárodní systém pro identifikaci, klasifikaci a číslování položek zásobování, aby stejná položka měla napříč aliancí jednoznačný identifikátor. Systém řídí výbor NATO AC/135, podporu zajišťuje NSPA. Zdroj: Ministerstvo obrany (okm.mo.gov.cz).

### NCAGE kód (NATO Commercial and Government Entity code)

- Co to je: pětiznakový alfanumerický kód jednoznačně identifikující firmu (nebo státní subjekt) v datech NATO. Je to firemní identifikátor, obdoba IČO pro účely NATO zásobování.
- K čemu je: nutný pro registraci dodavatele (NSPA, NCIA), pro kodifikaci vašich položek a pro účast v tendrech NATO.
- Jak získat v ČR: přes národní kodifikační autoritu, tedy katalogizační složku Úř OSK SOJ (okm.mo.gov.cz), respektive přes portál NSPA pro subjekty ze zemí NATO. Přidělení NCAGE je pro firmu zdarma. [OVĚŘIT: přesný český proces a kontaktní místo pro přidělení NCAGE (Úř OSK SOJ vs. přímý formulář NSPA), a zda v ČR část agendy zajišťují smluvní kodifikační agentury, například AURA. Potvrdit na okm.mo.gov.cz.]

### NSN (NATO Stock Number)

- Co to je: třináctimístné jednoznačné číslo konkrétní položky zásobování (skladové položky). Vzniká kodifikací, tedy popsáním položky podle pravidel NCS.
- Kdy ho potřebujete: když se váš výrobek stává katalogizovanou položkoou zásobování NATO nebo národní armády (typicky náhradní díly, komponenty, materiál v logistickém řetězci). Ne každý produkt musí být hned kodifikován, řídí se to smluvním požadavkem.
- Kdo kodifikuje v ČR: národní kodifikační autorita (Úř OSK SOJ, katalogizace), případně prostřednictvím smluvních kodifikačních agentur. [OVĚŘIT: rozdělení rolí mezi Úř OSK SOJ a komerční kodifikační agentury a zda kodifikaci platí dodavatel či zadavatel.]

## 2. AQAP (Allied Quality Assurance Publications) a státní ověřování jakosti

### Co jsou AQAP

AQAP jsou standardizované NATO požadavky na zabezpečování jakosti v obranných kontraktech. Nejsou náhradou ISO, ale nadstavbou: uplatňují se, když to zadavatel v kontraktu vyžaduje, a doplňují systém řízení kvality dodavatele o NATO specifika (například právo státu na dohled, GQA, řízení konfigurace, řízení rizik jakosti).

| Publikace | Název (zkráceně) | Vztah / použití |
|---|---|---|
| AQAP 2110 | NATO Quality Assurance Requirements for Design, Development and Production | Nadstavba nad ISO 9001. Nejběžnější požadavek pro výrobní dodavatele. |
| AQAP 2310 | NATO QMS Requirements for Aviation, Space and Defence Suppliers | Nadstavba nad AS9100 / EN9100 (letecký, kosmický a obranný průmysl). |
| AQAP 2210 | NATO Supplementary Software QA Requirements to AQAP 2110 or 2310 | Doplněk pro dodávky se softwarem, používá se společně s 2110/2310. |
| AQAP 2105 | NATO Requirements for Deliverable Quality Plans | Požadavky na plán jakosti dodávky. |
| AQAP 2131 | NATO QA Requirements for Final Inspection | Zabezpečování jakosti při výstupní kontrole. |
| AQAP 2070 | NATO Mutual Government Quality Assurance (GQA) Process | Proces vzájemného státního ověřování jakosti mezi zeměmi NATO. |

Zdroj: Wikipedia (Allied Quality Assurance Publications), Bundeswehr, GlobalSpec. [OVĚŘIT: aktuální edice jednotlivých AQAP (ed. C/D apod.) k roku 2026, edice se revidují.]

### Vztah AQAP a ISO / AS9100

- AQAP 2110 předpokládá funkční QMS podle ISO 9001 a přidává NATO požadavky. Existuje i vodítko pro aplikaci AQAP 2110 uvnitř QMS podle AS9100 (AQAP 2110 SRD.2).
- AQAP 2310 je fakticky NATO augmentace AS9100 / EN9100 pro letecký, kosmický a obranný sektor.
- Praktický důsledek: nejdřív si firma zavede a certifikuje ISO 9001 nebo AS9100, teprve na tom staví plnění AQAP. AQAP se typicky neuděluje jako samostatný certifikát od komerční certifikační autority, jeho plnění ověřuje stát v rámci konkrétního kontraktu.

### GQA (Government Quality Assurance) a státní ověřování jakosti v ČR

- GQA (Government Quality Assurance, státní ověřování jakosti) je proces, kterým stát (nikoli komerční auditor) ověřuje, že dodávka pro ozbrojené síly splňuje kvalitativní požadavky kontraktu, včetně AQAP. Mezi zeměmi NATO funguje na principu vzájemnosti (AQAP 2070): stát dodavatele provede ověření na žádost státu oděratele.
- V ČR provádí státní ověřování jakosti složka SOJ ÚŘadu pro obrannou standardizaci, katalogizaci a státní ověřování jakosti, na základě zákona č. 309/2000 Sb., o obranné standardizaci, katalogizaci a státním ověřování jakosti. [OVĚŘIT: přesné číslo a název zákona (309/2000 Sb.) a aktuální znění na urosksoj.mo.gov.cz.]

## 3. NSPA a NCIA: jak se stát dodavatelem NATO

### NSPA (NATO Support and Procurement Agency)

NSPA je hlavní nákupní, logistická a podpůrná agentura NATO (sídlo Capellen, Lucembursko). Zajišťuje logistiku, údržba, munici, palivo, náhradní díly a služby životního cyklu. Tendry NSPA jsou v zásadě omezeny na subjekty z členských zemí NATO.

Postup registrace dodavatele (source file):
1. Získat NCAGE kód (viz výše).
2. Zaregistrovat firmu do dodavatelského registru NSPA (source file / source list) v jejím pořizovacím portálu.
3. Deklarovat oblasti produktů a služeb (co firma nabízí).
4. Sledovat seznam budoucích příležitostí (Future Business Opportunities) a vyhlašované tendry.
5. Dostávat výzvy k podání nabídek (RFP) v deklarovaných oblastech.

Kontakt pro české firmy: zástupce ČR v NSPA (czlo@nspa.nato.int), informace též přes Sekci vyzbrojování a akvizic MO a mocr.mo.gov.cz. NSPA pořádá průmyslové dny (v Capellenu). [OVĚŘIT: aktuální název a URL registračního portálu NSPA a aktuální kontakt czlo@nspa.nato.int na nspa.nato.int a mocr.mo.gov.cz.]

### Declaration of Eligibility (prohlášení o způsobilosti)

Pro řadu NATO zakázek (zejména přes NCIA, viz níže, a část NSPA) je vyžadována Declaration of Eligibility (DoE, národní potvrzení, že firma je technicky, finančně a odborně způsobilá plnit zakázku). DoE vydává národní autorita v zemi dodavatele. V ČR ho zajišťuje Ministerstvo obrany, respektive národní kontaktní místo pro NATO zakázky. [OVĚŘIT: přesný útvar MO, který v ČR vydává Declaration of Eligibility, a postup žádosti. Potvrdit na mocr.mo.gov.cz nebo u zástupce ČR v NSPA.]

### NCIA (NATO Communications and Information Agency)

Pro ICT, komunikace a kyber řešení je relevantní NCIA. Vstupní branou je typicky BOA (Basic Ordering Agreement, rámcová dohoda): firma se přihlásí přes web NCIA (kdykoli), obvykle s národním DoE, a po přijetí dostává výzvy k podání nabídek (RFQ) pro ICT a kyber řešení. [OVĚŘIT: aktuální podmínky BOA a přihlašovací proces na webu NCIA.]

## Prakticky pro startup

1. Vyřešte NCAGE jako první krok, je zdarma a je vstupní podmínkou skoro pro všechno další (registrace u NSPA, kodifikace, tendry). Zažádejte přes Úř OSK SOJ (katalogizace) nebo portál NSPA.
2. Registraci do source file NSPA proveďte i bez konkrétní zakázky. Je to viditelnost pro budoucí RFP a nestojí to prakticky nic než čas.
3. Kvalitu řešte ve správném pořadí: nejdřív ISO 9001 (nebo AS9100 pro letecký/obranný hardware), teprve pak AQAP. AQAP samostatně dopředu certifikovat nelze, uplatní se v kontraktu a ověří stát (GQA přes SOJ).
4. Zjistěte, zda vaše dodávka bude kodifikována (NSN). Pokud jde o náhradní díly nebo logistickou položku, počítejte s kodifikací a zahrňte ji do nabídky (kdo ji dělá a platí).
5. Pro ICT a kyber miřte na NCIA BOA, pro hardware, logistiku a munici na NSPA. Nejsou to konkurenční, ale doplňkové kanály.
6. Připravte si Declaration of Eligibility včas přes MO, u NCIA a části NSPA zakázek je to podmínka účasti.
7. Využijte český ekosystém: Sekce vyzbrojování a akvizic MO, zástupce ČR v NSPA (czlo@nspa.nato.int), průmyslové dny, případně komerční kodifikační agentury pro NSN.

## Časté chyby a mýty

- Mýtus: AQAP je certifikát, který si koupím jako ISO. Ne. AQAP jsou kontraktní požadavky nadstavbující ISO/AS9100 a jejich plnění ověřuje stát (GQA), ne komerční certifikační orgán.
- Chyba: dělat AQAP dřív než ISO/AS9100. AQAP na QMS staví, bez zavedeného QMS to nedává smysl.
- Mýtus: NCAGE je drahý a složitý. Přidělení NCAGE je pro firmu zdarma, jde hlavně o vyplnění a ověření údajů.
- Chyba: čekat na tendr a teprve pak řešit registraci a způsobilost. NCAGE, source file, ISO, DoE připravte předem, jinak nestíháte lhůty tendru.
- Chyba: zaměňovat kodifikaci (NCAGE, NSN, identifikace položek) s kvalitou (AQAP) a s prověrkou (utajení, viz soubor 01). Jsou to tři nezávislé agendy s různými úřady.
- Chyba: myslet si, že NSPA nakupuje jen přes velké integrátory. Přímá registrace SME do source file má smysl, řada položek (náhradní díly, komponenty, služby) jde i menším dodavatelům.

## Zdroje

- Ministerstvo obrany, Kodifikační systém NATO (okm.mo.gov.cz/systemy-kodifikacekatalogizace/kodifikacni-system-nato)
- ÚŘad pro obrannou standardizaci, katalogizaci a státní ověřování jakosti (urosksoj.mo.gov.cz, oos.mo.gov.cz)
- Ministerstvo obrany, NSPA (mocr.mo.gov.cz/nato/nspa/...; vyzbrojovani.mo.gov.cz)
- NSPA, Vendor Registration a Opportunities (nspa.nato.int/business/procurement)
- Allied Quality Assurance Publications, Wikipedia (en.wikipedia.org/wiki/Allied_Quality_Assurance_Publications)
- Bundeswehr, AQAP Quality Assurance Requirements (bundeswehr.de)
- GlobalSpec, AQAP 2110 / 2210 / 2310 (standards.globalspec.com)
- Haavi, How to Become a NATO Supplier (přehled NSPA/NCIA, DoE, NCAGE)
