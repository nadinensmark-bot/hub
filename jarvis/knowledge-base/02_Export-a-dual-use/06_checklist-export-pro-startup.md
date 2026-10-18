---
title: "Checklist: podléhám kontrole vývozu? (rozhodovací strom pro startup)"
tags: [checklist, export-control, dual-use, vojensky-material, ITAR, EAR, rozhodovaci-strom]
audience: [startupy, nadine, kb-app]
updated: 2026-09-04
source: "syntéza KB souborů 02_Export, kurz Helm modul 2"
sources_verified: partial
---

# Checklist: podléhám kontrole vývozu?

Praktický rozhodovací strom pro obranný nebo dual-use startup. Cíl: zjistit, jestli a jak je tvůj produkt (včetně softwaru, technologie a technických dat) omezen při vývozu, a co s tím. Detailní výklad je v provázaných souborech.

## Rozhodovací strom (5 otázek)

**1) Je můj produkt vojenský materiál, nebo zboží dvojího užití?**
- Speciálně navržený nebo upravený pro vojenské použití, zbraně, munice, jejich komponenty → pravděpodobně **vojenský materiál**, režim zákona č. 38/1994 Sb. Viz [[04_vojensky-material-CZ-38-1994]].
- Civilní produkt, který lze použít i vojensky (senzory, drony, šifrování, materiály, elektronika) → **dual-use**, režim nařízení (EU) 2021/821. Viz [[01_dual-use-EU-2021-821]].
- Nejsi si jistý? Zařazení určuje celý režim, takže to nepodceňuj, viz [[02_urceni-zarazeni-a-klasifikace]].

**2) Je moje položka na kontrolním seznamu?**
- Dual-use: projdi Přílohu I nařízení 2021/821 (kategorie 0 až 9). Když tam položka je, na vývoz mimo EU potřebuješ **vývozní povolení**.
- Vojenský materiál: projdi seznam vojenského materiálu (prováděcí vyhláška k zákonu 38/1994). Potřebuješ **povolení firmy i licenci na obchod**.

**3) Nepodléhám i tak přes catch-all?**
- I nezařazená položka může vyžadovat licenci, pokud míří ke zbraním hromadného ničení, k vojenskému užití v embargované zemi, nebo jde o cyber-surveillance a lidskoprávní riziko (catch-all klauzule). Viz [[01_dual-use-EU-2021-821]].

**4) Nemám v produktu US komponenty, software nebo technická data?**
- Pokud ano, může na tebe dopadat **US právo (ITAR nebo EAR)** i když nejsi US firma: reexport, retransfer, de minimis prahy (obvykle 25 % US obsahu pro většinu destinací). ITAR položky typicky „kontaminují" celek bez procentního prahu. Viz [[05_US-ITAR-EAR-a-reexport]].
- Praktický důvod, proč integrátoři hledají „ITAR-free" komponenty.

**5) Kam a komu vyvážím?**
- Destinace a koncový uživatel rozhodují. Embarga, sankční seznamy a citliví koncoví uživatelé mění vše. Vždy prověř koncového uživatele a koncové užití (end-use).

## Checklist před prvním vývozem

- [ ] Určil jsem, zda je produkt vojenský materiál, nebo dual-use.
- [ ] Zkontroloval jsem položku proti kontrolnímu seznamu (Příloha I 2021/821 nebo seznam vojenského materiálu).
- [ ] Prověřil jsem catch-all (koncové užití a destinace).
- [ ] Zjistil jsem, zda produkt obsahuje US-origin komponenty, software nebo technická data (ITAR/EAR).
- [ ] Prověřil jsem destinaci, koncového uživatele a sankční seznamy.
- [ ] Zjistil jsem, jaký typ povolení potřebuju (individuální, globální, všeobecné) a kde žádám. Viz [[03_CZ-licencni-sprava-594-2004]].
- [ ] Zavedl jsem interní compliance (evidence min. 5 let, případně ICP, Internal Compliance Programme).
- [ ] Mám kontakt na Licenční správu MPO pro konzultaci sporného zařazení.

## Kdo o tom v ČR rozhoduje

- **Licenční správa MPO:** povolení a licence pro dual-use i vojenský materiál. Viz [[03_CZ-licencni-sprava-594-2004]] a [[04_vojensky-material-CZ-38-1994]].
- U vojenského materiálu vstupují závazná stanoviska **MZV, MO a MV** (kterýkoli může obchod zablokovat).

## Časté chyby a mýty

- „Jsme jen startup, kontrola vývozu se nás netýká." Týká, i software a technická data jsou kontrolované položky, i pouhé sdílení s cizí osobou může být vývoz.
- „Máme evropský produkt, US právo neřešíme." US komponenty a technická data podléhají US jurisdikci nad reexportem.
- „Zařadíme to jako dual-use, je to mírnější." Špatné zařazení je nelegální obchod, ne úspora.

## Zdroje

- Detailní soubory KB: [[01_dual-use-EU-2021-821]], [[02_urceni-zarazeni-a-klasifikace]], [[03_CZ-licencni-sprava-594-2004]], [[04_vojensky-material-CZ-38-1994]], [[05_US-ITAR-EAR-a-reexport]].
- Kurz „Porozumět obraně" (Dr Kristýna Helm), modul 2 (Export controls a compliance).
- Upozornění: tento checklist je orientační pomůcka, ne právní rada. Konkrétní zařazení a licenci vždy potvrď u Licenční správy MPO nebo právníka na exportní kontrolu.
