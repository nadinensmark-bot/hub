---
title: "Checklist: cesta od prototypu k dodavateli NATO"
tags: [checklist, certifikace, NCAGE, NSN, AQAP, NSPA, security-clearance, supply-chain, kurz-helm]
audience: [startupy, nadine, kb-app]
updated: 2026-09-04
source: "syntéza KB 03_Certifikace, kurz Helm modul 7"
sources_verified: partial
---

# Checklist: cesta od prototypu k dodavateli NATO

Praktická mapa toho, co startup potřebuje, aby se dostal do obranného a NATO dodavatelského řetězce. Ne všechno je potřeba hned, pořadí je zhruba podle toho, kdy to začne být relevantní. Detailní výklad je v provázaných souborech.

## Mapa certifikací a registrací

| Krok | Co to je | Kdy to řešit | Detail |
|---|---|---|---|
| **NCAGE kód** | 5znakový identifikátor firmy (NATO Commercial and Government Entity), zdarma | brzy, je to vstupní podmínka pro registraci u NSPA i pro kodifikaci | [[02_NATO-kodifikace-AQAP-NSPA]] |
| **Registrace u NSPA** | source file dodavatele v portálu NSPA (NATO Support and Procurement Agency) | když chceš do NATO tendrů | [[02_NATO-kodifikace-AQAP-NSPA]] |
| **NSN (NATO Stock Number)** | kodifikace konkrétní položky (13místné číslo) | když dodáváš konkrétní položku do NATO logistiky | [[02_NATO-kodifikace-AQAP-NSPA]] |
| **ISO 9001** | systém řízení kvality (QMS), komerční základ | brzy, je to základ pro další | [[03_ISO-AS9100-CE]] |
| **AS9100 / EN 9100** | QMS pro letecký, kosmický a obranný průmysl, faktický must-have pro hardware | když dodáváš hardware primes v letecko-obranném řetězci | [[03_ISO-AS9100-CE]] |
| **AQAP** | Allied Quality Assurance Publications, nadstavba nad ISO/AS9100, plnění ověřuje stát (GQA), ne komerční auditor | když to vyžaduje konkrétní obranná zakázka | [[02_NATO-kodifikace-AQAP-NSPA]] |
| **CE marking** | u dual-use a komerčních komponent platí, u čistě vojenského materiálu zpravidla ne (vyloučení + čl. 346 SFEU) | podle typu produktu | [[03_ISO-AS9100-CE]] |
| **Bezpečnostní prověrka (NBÚ)** | osvědčení podnikatele (facility security clearance) a osob, až při přístupu k utajovaným informacím | teprve když zakázka pracuje s utajovanými informacemi | [[01_bezpecnostni-proverky-NBU-412-2005]] |

## Doporučené pořadí pro startup

1. **NCAGE kód** (zdarma, rychlé, otevírá NSPA i kodifikaci).
2. **ISO 9001** jako základ řízení kvality, pokud ho ještě nemáš.
3. **Zápis do databází a viditelnost:** [[00_defence-hub-programy]] Databáze řešení, registrace u NSPA.
4. **AS9100 / EN 9100**, jakmile míříš na hardware do letecko-obranného dodavatelského řetězce.
5. **AQAP a NSN** podle požadavků konkrétní zakázky nebo prime.
6. **Bezpečnostní prověrku (NBÚ)** řeš až s konkrétní utajovanou zakázkou, ne dopředu do zásoby (je časově náročná, běží měsíce až přes rok u vyšších stupňů).

## Na co si dát pozor

- **AQAP není samostatná koupitelná ISO certifikace.** Je to nadstavba nad ISO 9001 / AS9100 a plnění ověřuje stát (Government Quality Assurance), ne komerční certifikační orgán.
- **Nežádej prověrku dopředu.** Firma o osvědčení podnikatele typicky žádá až s konkrétní zakázkou nebo na vyžádání zadavatele. Většina dodávek dual-use zboží utajení vůbec nevyžaduje.
- **Rozliš komerční a obrannou certifikaci.** To, co stačí na civilním trhu, nemusí stačit integrátorovi nebo armádě, a naopak nemusíš mít vše, dokud to zakázka nevyžaduje.

## Kdo v ČR co zajišťuje

- **NCAGE, NSN, AQAP a státní ověřování jakosti:** Úřad pro obrannou standardizaci, katalogizaci a státní ověřování jakosti (složka Ministerstva obrany). Viz [[02_NATO-kodifikace-AQAP-NSPA]].
- **Bezpečnostní prověrky a utajované informace:** NBÚ (Národní bezpečnostní úřad). Viz [[01_bezpecnostni-proverky-NBU-412-2005]].

## Zdroje

- Detailní soubory KB: [[01_bezpecnostni-proverky-NBU-412-2005]], [[02_NATO-kodifikace-AQAP-NSPA]], [[03_ISO-AS9100-CE]].
- Kurz „Porozumět obraně" (Dr Kristýna Helm), modul 7 (Certifikace a vstup do dodavatelského řetězce).
- Upozornění: orientační pomůcka, konkrétní požadavky vždy ověř u zadavatele, prime nebo příslušného úřadu.
