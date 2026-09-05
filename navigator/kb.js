// =====================================================================
// DH Kompas – znalostní báze (knowledge base), ČESKY
// ---------------------------------------------------------------------
// Zdroj obsahu: Knowledge-Base-Ultimate (Google Drive, stav 2026-09-04)
// + web defencehub.gov.cz (katalog programů) + data od Nadine (DIANA).
// TENTO SOUBOR JE JEDINÝ ZDROJ ČESKÉHO OBSAHU APLIKACE. Anglické
// zrcadlo je kb-en.js – oba soubory udržovat souběžně.
//
// Položky označené overit:true nebo [OVĚŘIT] přebírají značení přímo
// ze zdrojové KB – před použitím se startupem zkontrolovat proti
// oficiálním zdrojům (odkazy jsou u programů).
// =====================================================================

window.DH_KB = {

  meta: {
    verze: "0.2 (KB Ultimate)",
    aktualizovano: "2026-09-05",
    kontakt: "Defence Hub CzechInvest – tým vám s výběrem programu i přihláškou pomůže osobně. Rezervujte si nezávaznou konzultaci na defencehub.gov.cz."
  },

  // -------------------------------------------------------------------
  // AKTUÁLNÍ VÝZVY (stav dle KB k 4. 9. 2026)
  // stavRucne přebije automatický výpočet stavu z dat.
  // -------------------------------------------------------------------
  vyzvy: [
    {
      program: "edf",
      nazev: "EDF – výzvy 2026 (cca 1 mld. €, 10 výzev / 31 témat)",
      otevreniOd: "",
      uzaverka: "2026-09-29",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "Konsorcia min. 3 subjektů ze 3 zemí; národní kofinancování přes TAČR PRODEF PP1.",
      priklad: false
    },
    {
      program: "eudis",
      nazev: "EUDIS Open Call – do 6 mil. € vývoj / 4 mil. € výzkum",
      otevreniOd: "",
      uzaverka: "2026-09-29",
      odkaz: "https://eudis.europa.eu",
      pozn: "Konsorcium 3 firem ze 3 států, od TRL 4.",
      priklad: false
    },
    {
      program: "eic-step-defence",
      nazev: "EIC STEP Scale Up Defence – equity 10–30 mil. €",
      otevreniOd: "2026-06-30",
      uzaverka: "2026-10-28",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "Jen equity, bez grantu; vyžaduje pre-commitment investora. Výsledky začátkem 2027.",
      priklad: false
    },
    {
      program: "eic-accelerator",
      nazev: "EIC Accelerator (dual-use) – průběžné podávání",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "krátkou žádost lze podat kdykoli",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "Od 17. 6. 2026 otevřen obranným a dual-use technologiím.",
      priklad: false
    },
    {
      program: "eudis",
      nazev: "EUDIS Accelerator – kvartální výzvy",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "běží, výzvy každý kvartál",
      odkaz: "https://eudis.europa.eu",
      pozn: "6měsíční akcelerátor: business coaching, matchmaking s primes, Test in Ukraine.",
      priklad: false
    },
    {
      program: "edip",
      nazev: "EDIP – výzvy pracovního programu 2026–27 (1,5 mld. €)",
      otevreniOd: "2026-03-31",
      uzaverka: "",
      stavRucne: "výzvy otevřené na portálu Funding & Tenders",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "Uzávěrky jednotlivých výzev [OVĚŘIT na portálu].",
      priklad: false
    },
    {
      program: "horizon-cl3",
      nazev: "Horizont Evropa Klastr 3 – výzvy 2026 (131 mil. €)",
      otevreniOd: "2026-05-06",
      uzaverka: "",
      stavRucne: "výzvy spuštěny 6. 5. 2026",
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      pozn: "Uzávěrky jednotlivých témat [OVĚŘIT na portálu].",
      priklad: false
    },
    {
      program: "diana",
      nazev: "DIANA – výzva pro kohortu 2027",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "probíhá vyhodnocení (výzva proběhla v červnu 2026)",
      odkaz: "https://www.diana.nato.int",
      pozn: "Výsledky vyhodnocení oznámí DIANA; sledujeme.",
      priklad: false
    },
    {
      program: "diana",
      nazev: "DIANA – další výzva (spuštění červen 2027)",
      otevreniOd: "2027-06-01",
      uzaverka: "",
      odkaz: "https://www.diana.nato.int",
      pozn: "Přesný den spuštění a uzávěrku doplníme po vyhlášení.",
      priklad: false
    },
    {
      program: "prodef",
      nazev: "TAČR PRODEF PP1 – kofinancování EDF (výzva plánovaná 10/2026)",
      otevreniOd: "2026-10-01",
      uzaverka: "",
      odkaz: "https://tacr.gov.cz/program/program-prodef/",
      pozn: "Termín orientační [OVĚŘIT na tacr.gov.cz].",
      priklad: false
    }
  ],

  // -------------------------------------------------------------------
  // PROGRAMY (podle katalogu Defence Hubu, 13 programů; osy pro wizard:
  // zamereni defence|dual|civil, trl [min,max], typ grant|equity|
  // akcelerator|mix|pujcky, konsorcium, velikost)
  // -------------------------------------------------------------------
  programy: [

    {
      id: "diana",
      nazev: "NATO DIANA Accelerator",
      kratce: "Akcelerátor NATO pro dual-use deep tech. Defence Hub CzechInvest je česká akcelerační site – hlavní vstupní brána českých startupů do DIANA.",
      typ: "akcelerator",
      zamereni: "dual",
      trl: [4, 7],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Grant fáze 1 do cca 100 000 €, s navazující fází celkem do cca 300 000 € i více; non-dilutive (NATO nebere podíl ani IP)",
      overit: true,
      proKoho: "Dual-use a deep tech startupy a malé firmy z členských zemí NATO. Žádá jedna firma na konkrétní challenge. Kohorta 2026 (největší dosud): 150 firem z 24 zemí v 10 challenge oblastech.",
      jakFunguje: [
        "NATO vyhlašuje challenges v definovaných oblastech – např. pokročilé komunikace a rušené elektromagnetické prostředí, autonomie a bezpilotní systémy, energie a napájení, biotech a lidská odolnost, kritická infrastruktura a logistika.",
        "Vybrané firmy projdou ~6měsíčním akceleračním programem: grant, mentoring, přístup k síti 200+ testovacích center ve 32 zemích a 16 akceleračních sites.",
        "Česká site: Defence Hub CzechInvest – zaměření vesmír, pokročilé materiály, AI, ecotech. Síť 230+ obranných dodavatelů (AOBP) a 600+ evropských subjektů (EEN).",
        "Absolventi získávají viditelnost u NATO Innovation Fund a spojeneckých zákazníků (není automatické)."
      ],
      vhodnyKdyz: [
        "Máte funkční prototyp nebo technologii blízko nasazení (zhruba TRL 4+).",
        "Technologie má civilní i obranné využití a odpovídá některé vypsané challenge.",
        "Chcete nezřeďující peníze, obrannou validaci a kontakty – bez odevzdání podílu."
      ],
      nevhodnyKdyz: [
        "Technologie je čistě zbraňová (lethal) – DIANA se soustředí na dual-use.",
        "Jste ve fázi čistého výzkumu bez prototypu."
      ],
      terminy: "Výzva pro kohortu 2027 proběhla v červnu 2026 a vyhodnocuje se; další výzva se spustí v červnu 2027.",
      terminyOverit: false,
      odkaz: "https://www.diana.nato.int",
      kdeKriteria: "Applicant guide a konkrétní challenges na diana.nato.int v době otevřené výzvy. Český tým DH má podklady k aktuální výzvě.",
      pomocDH: "Defence Hub je akcelerační site DIANA – jsme přímo u zdroje. Ozvěte se nám před podáním přihlášky."
    },

    {
      id: "nif",
      nazev: "NATO Innovation Fund (NIF)",
      kratce: "Venture fond zemí NATO s objemem přes 1 mld. € – Česko je jedním z 24 investorských států. Equity investice do deep tech, žádné výzvy ani uzávěrky.",
      typ: "equity",
      zamereni: "dual",
      trl: [4, 9],
      konsorcium: false,
      velikost: ["startup"],
      castka: "Equity Seed až Series B; úvodní investice do cca 15 mil. € na firmu, s rezervami na navazující kola",
      overit: false,
      proKoho: "Deep tech a dual-use firmy se sídlem v jedné z 24 investorských zemí fondu – Česko mezi ně patří. Oblasti: energetika, materiálové vědy, AI, data a výpočty, autonomie, kvantové technologie, biotechnologie, vesmír.",
      jakFunguje: [
        "Žádné výzvy, uzávěrky ani hodnoticí kritéria – je to fond: rozhoduje investiční tým podle zaměření fondu a kvality firmy.",
        "Standardní VC proces: pitch deck → série jednání → due diligence → investice za podíl. Fond často vede kolo (lead investor) a angažuje se v boardu.",
        "Úzce navázán na DIANA – absolventi akcelerátoru jsou pro NIF viditelnější, ale investice není automatická."
      ],
      vhodnyKdyz: [
        "Nechcete grantový projekt, ale investora, který rozumí obrannému trhu a otevře dveře k vládním zákazníkům.",
        "Máte připravené standardní investorské materiály (deck, data room, finance) a doložitelnou trakci."
      ],
      nevhodnyKdyz: [
        "Nechcete ředit podíl zakladatelů – pak zůstaňte u grantů (DIANA, EUDIS, EIC grant).",
        "Hledáte peníze na výzkum bez firmy a produktu – VC investuje do firem, ne do projektů."
      ],
      terminy: "Průběžně – žádné uzávěrky, standardní investiční proces.",
      terminyOverit: false,
      odkaz: "https://www.nif.fund",
      kdeKriteria: "Žádná hodnoticí kritéria neexistují – NIF je fond, ne výzva. Vodítkem je zaměření fondu na nif.fund a kvalita standardních investorských podkladů.",
      pomocDH: "Studený e-mail fondu skoro nikdy nefunguje – přes síť DIANA umíme zprostředkovat warm intro."
    },

    {
      id: "eic-accelerator",
      nazev: "EIC Accelerator (dual-use)",
      kratce: "Vlajkový nástroj EU pro deep tech: grant + equity. Od 17. 6. 2026 poprvé otevřen obranným a dual-use technologiím.",
      typ: "mix",
      zamereni: "dual",
      trl: [6, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Blended finance: grant do 2,5 mil. € (non-dilutive) + equity investice do 10 mil. € (přes EIC Fund)",
      overit: false,
      proKoho: "Jednotlivé startupy a MSP z EU s technologií TRL 6–8. Cílové oblasti otevření obraně: protivzdušná a protiraketová obrana, drony a counter-drony, další kritické obranné technologie; plus AI, kvantové technologie, pokročilé materiály a robotika s dual-use využitím.",
      jakFunguje: [
        "Krok 1: krátká žádost (short proposal – pitch deck do 10 slidů, video) – podává se průběžně, kdykoli.",
        "Krok 2: úplná žádost k pevné uzávěrce (cut-off).",
        "Krok 3: pohovor před porotou. Úspěšní získají grant, investici, nebo obojí.",
        "Pozor na záměnu: equity 10–30 mil. € je samostatný nástroj EIC STEP Scale Up Defence, ne běžný Accelerator."
      ],
      vhodnyKdyz: [
        "Máte validovanou technologii (TRL 6+) a jasný komerční plán – EIC je soutěž byznys plánů, ne jen výzkumu.",
        "Jste jedna firma a chcete kombinaci nezřeďujícího grantu a kapitálu."
      ],
      nevhodnyKdyz: [
        "Jste před prototypem – podívejte se na EIC Pathfinder/Transition nebo TAČR.",
        "Potřebujete equity nad 10 mil. € – to je EIC STEP Scale Up Defence."
      ],
      terminy: "Krátká žádost průběžně; úplné žádosti k cut-off termínům dle pracovního programu EIC 2026.",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu",
      kdeKriteria: "Pracovní program EIC 2026 na eic.ec.europa.eu + šablony a kritéria na portálu EU Funding & Tenders (hodnotí se excelence, dopad, implementace a míra rizika).",
      pomocDH: "Propojíme vás s národními kontakty pro EIC a s firmami, které EIC prošly."
    },

    {
      id: "eic-step-defence",
      nazev: "EIC STEP Scale Up Defence",
      kratce: "Nový nástroj EIC pro velké obranné scale-upy: čistá equity 10–30 mil. €, bez grantu. Rozpočet 100 mil. €, uzávěrka 28. 10. 2026.",
      typ: "equity",
      zamereni: "defence",
      trl: [7, 9],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap"],
      castka: "Přímá equity 10–30 mil. € (dilutive), bez grantové složky; očekává se celkové kolo min. 3–5× vyšší (koinvestice)",
      overit: false,
      proKoho: "Scale-upy v kritických obranných technologiích z členských států EU, zemí EHP asociovaných k Horizontu Evropa a Ukrajiny. Vyžaduje pre-commitment (předběžný závazek) soukromého investora.",
      jakFunguje: [
        "Součást otevření EIC obraně (novela pracovního programu 17. 6. 2026); STEP = Strategic Technologies for Europe Platform.",
        "Přihlášky od 30. 6. do 28. 10. 2026, výsledky začátkem roku 2027.",
        "EIC investuje 10–30 mil. € jako součást většího investičního kola vedle soukromých investorů."
      ],
      vhodnyKdyz: [
        "Škálujete výrobu/nasazení kritické obranné technologie a skládáte velké investiční kolo.",
        "Máte lead investora nebo pre-commitment soukromého kapitálu."
      ],
      nevhodnyKdyz: [
        "Jste v rané fázi – začněte u DIANA, EUDIS nebo EIC Acceleratoru.",
        "Nechcete ředit podíl – tohle je čistá equity."
      ],
      terminy: "Otevřeno 30. 6. 2026, uzávěrka 28. 10. 2026, výsledky začátkem 2027.",
      terminyOverit: false,
      odkaz: "https://eic.ec.europa.eu",
      kdeKriteria: "Výzva a podmínky v pracovním programu EIC 2026 na eic.ec.europa.eu; žádosti přes portál EU Funding & Tenders.",
      pomocDH: "Pomůžeme s napojením na investory (pre-commitment) přes síť DH a DIANA."
    },

    {
      id: "edf",
      nazev: "EDF – European Defence Fund",
      kratce: "Hlavní grantový program EU pro obranný výzkum a vývoj: 7,3 mld. € (2021–27). Výzvy 2026: cca 1 mld. € v 10 výzvách a 31 tématech, uzávěrka 29. 9. 2026.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Granty non-dilutive; u výzkumných akcí až 100 % způsobilých nákladů. Bonusy pro SME, mid-caps a napojení na PESCO",
      overit: false,
      proKoho: "Konsorcia minimálně 3 nezávislých subjektů ze 3 členských států nebo zemí asociovaných k EDF (výjimka pro průlomové technologie: stačí 2 subjekty ze 2 zemí). Žadatelé musí sídlit v EU s exekutivním vedením v EU a nesmí být kontrolováni nepřidruženou třetí zemí.",
      jakFunguje: [
        "Evropská komise (DG DEFIS) vypisuje roční výzvy; výzkumné akce cílí na nižší TRL, vývojové na vyšší [OVĚŘIT TRL pásmo dle konkrétního tématu].",
        "Pro startup je EDF přímo těžko dosažitelný – prakticky se vstupuje přes konsorcium (vedené integrátorem nebo výzkumnou organizací) a přes EUDIS.",
        "Čeští účastníci mohou získat národní kofinancování přes TAČR PRODEF PP1."
      ],
      vhodnyKdyz: [
        "Míříte na obranný trh, máte partnery (nebo je umíme pomoct najít) a kapacitu na víceletý projekt.",
        "Umíte se napojit na většího systémového integrátora, i jako subdodavatel."
      ],
      nevhodnyKdyz: [
        "Potřebujete peníze rychle – od výzvy k podpisu smlouvy zpravidla přes rok.",
        "Chcete žádat sami – pak EUDIS, EIC nebo AGILE (od 2027)."
      ],
      terminy: "Výzvy 2026 s uzávěrkou 29. 9. 2026.",
      terminyOverit: false,
      odkaz: "https://defence-industry-space.ec.europa.eu/eu-defence-industry/european-defence-fund-edf_en",
      kdeKriteria: "Portál EU Funding & Tenders – u každého tématu (topic) jsou call documents včetně hodnoticích kritérií; souhrnně v ročním pracovním programu EDF.",
      pomocDH: "Pomůžeme s hledáním konsorcia (matchmaking) a propojíme vás s národním kontaktním bodem (AOBP) a s PRODEF PP1."
    },

    {
      id: "eudis",
      nazev: "EUDIS – EU Defence Innovation Scheme",
      kratce: "SME větev EDF (~120 mil. € v programu 2026): akcelerátor s kvartálními výzvami a Open Call s granty do 6 mil. €.",
      typ: "mix",
      zamereni: "dual",
      trl: [4, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Accelerator: 6měsíční program (coaching, matchmaking, Test in Ukraine). Open Call: do 6 mil. € na vývoj / do 4 mil. € na výzkum",
      overit: false,
      proKoho: "Startupy a MSP z EU/Norska. Accelerator: jednotlivé firmy, kvartální výzvy. Open Call: konsorcium 3 firem ze 3 států, od TRL 4, uzávěrka 29. 9. 2026.",
      jakFunguje: [
        "EUDIS Accelerator: 6měsíční akcelerace – business coaching, matchmaking s velkými hráči (primes), možnost Test in Ukraine.",
        "EUDIS Open Call: granty na vývoj (do 6 mil. €) a výzkum (do 4 mil. €) pro menší konsorcia – jednodušší než plný EDF.",
        "Cesta k EDF: přes EUDIS získáte reference a partnery pro pozdější velká konsorcia."
      ],
      vhodnyKdyz: [
        "Jste na začátku cesty do defence a potřebujete kontakty, reference a menší grant.",
        "Máte TRL 4+ a dvě partnerské firmy z jiných států EU (pro Open Call)."
      ],
      nevhodnyKdyz: [
        "Hledáte jednorázově velký objem financí – to je EDF, EIC nebo investice."
      ],
      terminy: "Accelerator: kvartální výzvy. Open Call: uzávěrka 29. 9. 2026.",
      terminyOverit: false,
      odkaz: "https://eudis.europa.eu",
      kdeKriteria: "Na eudis.europa.eu u konkrétního nástroje; kaskádové výzvy mají kritéria v dokumentaci zprostředkovatele.",
      pomocDH: "Sledujeme výzvy EUDIS průběžně – napište nám, kterou oblast řešíte, a pohlídáme relevantní termíny."
    },

    {
      id: "eic-pathfinder",
      nazev: "EIC Pathfinder / Transition",
      kratce: "Financování raného výzkumu průlomových technologií (Pathfinder, TRL 1–4) a jejich dotažení k prototypu (Transition).",
      typ: "grant",
      zamereni: "civil",
      trl: [1, 5],
      konsorcium: true,
      velikost: ["startup", "sme", "research"],
      castka: "Pathfinder granty řádově 3–4 mil. €; Transition do ~2,5 mil. €",
      overit: true,
      proKoho: "Výzkumné týmy a spin-offy na začátku vývoje. Pathfinder Open typicky konsorcium; Challenges a Transition umožňují i jednotlivé žadatele.",
      jakFunguje: [
        "Pathfinder: vysoce rizikový výzkum s vizí budoucí technologie.",
        "Transition: navazuje na výsledky (Pathfinder/ERC) a posouvá je k prototypu a prvnímu byznys plánu.",
        "Firma, která projde výzkumem v Horizontu, může pokračovat do EIC Acceleratoru."
      ],
      vhodnyKdyz: [
        "Jste univerzitní tým / spin-off s průlomovým nápadem hluboko před trhem."
      ],
      nevhodnyKdyz: [
        "Už máte produkt a zákazníky – to je EIC Accelerator nebo DIANA."
      ],
      terminy: "Výzvy podle pracovního programu EIC 2026 [OVĚŘIT data].",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en",
      kdeKriteria: "Pracovní program EIC na eic.ec.europa.eu; plné znění výzev na portálu EU Funding & Tenders.",
      pomocDH: "Poradíme, jestli je pro vás dřív Pathfinder, Transition, nebo rovnou Accelerator."
    },

    {
      id: "horizon-cl3",
      nazev: "Horizont Evropa – Klastr 3 (Civilní bezpečnost)",
      kratce: "Výzkum pro civilní bezpečnost: výzvy 2026 za 131 mil. €, důraz na vysoké TRL (6–8) a polní demonstrace. Výhradně civilní aplikace.",
      typ: "grant",
      zamereni: "civil",
      trl: [4, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Výzvy 2026: 131 mil. € – boj proti kriminalitě a terorismu 40,7 / správa hranic 21,3 / odolná infrastruktura 22,7 / odolnost vůči katastrofám 32,5 / posílený výzkum 13,8 mil. €",
      overit: false,
      proKoho: "Konsorcia firem, výzkumných organizací a povinně i praktiků (bezpečnostní složky, provozovatelé kritické infrastruktury). Projekty musí být výhradně civilní.",
      jakFunguje: [
        "Roční výzvy podle destinací; výzvy 2026 spuštěny 6. 5. 2026.",
        "Velký důraz na vyšší TRL (6, 7 i 8) a demonstrace v terénu.",
        "Pro dual-use technologie relevantní i Klastr 4 (digitál, průmysl, vesmír) [OVĚŘIT témata 2026]."
      ],
      vhodnyKdyz: [
        "Vaše technologie má bezpečnostní (security), ne vojenské využití – nebo chcete civilní větev dual-use technologie financovat odděleně."
      ],
      nevhodnyKdyz: [
        "Výstup má být vojenský – to patří do EDF."
      ],
      terminy: "Výzvy 2026 spuštěny 6. 5. 2026; uzávěrky jednotlivých témat [OVĚŘIT na portálu].",
      terminyOverit: true,
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      kdeKriteria: "Portál EU Funding & Tenders – text topicu + General Annexes pracovního programu Horizont Evropa (standardní kritéria: excelence, dopad, implementace).",
      pomocDH: "Nasměrujeme vás na národní kontaktní bod pro Horizont Evropa (TC Praha)."
    },

    {
      id: "edip",
      nazev: "EDIP – European Defence Industry Programme",
      kratce: "Schválený program EU pro posílení obranné výroby: pracovní program 1,5 mld. € (2026–27), výzvy běží od 31. 3. 2026. Pro startupy hlavně fond FAST a BraveTech EU.",
      typ: "mix",
      zamereni: "defence",
      trl: [6, 9],
      konsorcium: true,
      velikost: ["startup", "sme", "midcap"],
      castka: "1,5 mld. €: 700+ mil. € výroba klíčových komponent (counter-drony, rakety, munice), 325 mil. € projekty společného zájmu, 260 mil. € podpora Ukrajiny, 240 mil. € společný nákup, 100 mil. € equity pro startupy/SME (fond FAST), 35,3 mil. € BraveTech EU",
      overit: false,
      proKoho: "Členské státy, Norsko, Ukrajina, konsorcia zadavatelů, obranné startupy a SME. Společný nákup: grant až 20 mil. € na projekt.",
      jakFunguje: [
        "Politická shoda 17. 10. 2025, finální schválení Radou 8. 12. 2025; pracovní program přijat 30. 3. 2026.",
        "Výzvy na portálu EU Funding & Tenders od 31. 3. 2026.",
        "Pro startupy: equity podpora přes fond FAST (100 mil. €) a inovační program BraveTech EU (50 mil. € EU + 50 mil. € Ukrajina, fáze Seed a Scale Up)."
      ],
      vhodnyKdyz: [
        "Máte hotový produkt a řešíte škálování výroby pro obranné zakázky.",
        "Vyvíjíte counter-drone systémy, munici nebo klíčové komponenty."
      ],
      nevhodnyKdyz: [
        "Jste ve vývojové fázi – začněte u EDF/EUDIS/DIANA."
      ],
      terminy: "Výzvy otevřené od 31. 3. 2026; uzávěrky jednotlivých výzev [OVĚŘIT na portálu].",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      kdeKriteria: "Výzvy EDIP na portálu EU Funding & Tenders (pracovní program 2026–27).",
      pomocDH: "Pomůžeme vybrat správnou větev EDIP (výroba / FAST / BraveTech) a najít partnery."
    },

    {
      id: "prodef",
      nazev: "TAČR PRODEF (ČR)",
      kratce: "Český program aplikovaného obranného výzkumu: 6,12 mld. Kč (2024–31). PP1 kofinancuje české účastníky EDF, PP2 financuje výzkum pro Armádu ČR.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 7],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap", "research"],
      castka: "Celkem 6,12 mld. Kč, průměrná intenzita podpory 60 %",
      overit: false,
      proKoho: "České firmy a výzkumné organizace. PP1: čeští účastníci EDF konsorcií (národní kofinancování). PP2: aplikovaný výzkum v nastupujících technologiích pro potřeby AČR – obranná elektronika, bezpilotní systémy, munice.",
      jakFunguje: [
        "Administruje TAČR, financuje Ministerstvo obrany ČR (schváleno vládou 7. 5. 2024).",
        "PP1 je nejdůležitější můstek mezi národní a evropskou úrovní – jdete-li do EDF, řešte PRODEF PP1 souběžně.",
        "Výzvy 2026: 3. veřejná soutěž PP2 orientačně červen 2026, PP1 orientačně říjen 2026 [OVĚŘIT na tacr.gov.cz]."
      ],
      vhodnyKdyz: [
        "Míříte na obranný výzkum s vazbou na AČR (PP2), nebo vstupujete do EDF konsorcia (PP1).",
        "Chcete český grant bez mezinárodního konsorcia."
      ],
      nevhodnyKdyz: [
        "Hledáte růstový kapitál na škálování – národní grantová linka na scale-up chybí, miřte na EIC/NIF."
      ],
      terminy: "PP2 orientačně 6/2026 (proběhla), PP1 orientačně 10/2026 [OVĚŘIT].",
      terminyOverit: true,
      odkaz: "https://tacr.gov.cz/program/program-prodef/",
      kdeKriteria: "Zadávací dokumentace veřejných soutěží na tacr.gov.cz (program PRODEF).",
      pomocDH: "Poradíme, jestli je pro vás PP1, PP2, nebo civilní programy TAČR (SIGMA, TREND) a OP TAK."
    },

    {
      id: "optak-deeptech",
      nazev: "OP TAK – Aplikace DEEP TECH (ČR)",
      kratce: "Dotace MPO na průmyslový výzkum a vývoj ve firmách: 2–100 mil. Kč na projekt, nově pokrývá i obranný průmysl.",
      typ: "grant",
      zamereni: "dual",
      trl: [3, 8],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap"],
      castka: "Dotace 2–100 mil. Kč na projekt",
      overit: true,
      proKoho: "Podniky (zvýhodnění pro SME), i ve spolupráci s výzkumnými organizacemi. Civilní program, který nově pokrývá i obranný průmysl – vhodné pro dual-use vývoj.",
      jakFunguje: [
        "Operační program Technologie a aplikace pro konkurenceschopnost (2021–27), financováno z fondů EU, spravuje MPO.",
        "Aktivita Aplikace: průmyslový výzkum a experimentální vývoj ve firmách.",
        "Navazující výzva DEEP TECH plánovaná na 2026 [OVĚŘIT parametry na optak.gov.cz]."
      ],
      vhodnyKdyz: [
        "Vyvíjíte v ČR a chcete národní dotaci bez mezinárodního konsorcia.",
        "Dozráváte civilní/dual-use technologii (doplněk: TAČR SIGMA a TREND)."
      ],
      nevhodnyKdyz: [
        "Potřebujete financovat čistě vojenský projekt s utajením – tam patří PRODEF/EDF."
      ],
      terminy: "Navazující výzva 2026 [OVĚŘIT uzávěrku a parametry].",
      terminyOverit: true,
      odkaz: "https://optak.gov.cz",
      kdeKriteria: "Text výzvy na optak.gov.cz / mpo.gov.cz (aktivita Aplikace).",
      pomocDH: "Propojíme vás s regionální kanceláří CzechInvest, která s OP TAK pomáhá."
    },

    {
      id: "safe",
      nazev: "SAFE – Security Action for Europe",
      kratce: "Úvěrový nástroj EU do 150 mld. € pro společné pořizování vojenského materiálu. Nástroj pro státy, ne pro firmy – firmy profitují nepřímo jako dodavatelé.",
      typ: "pujcky",
      jenInfo: true,
      zamereni: "defence",
      trl: [8, 9],
      konsorcium: true,
      velikost: ["sme", "midcap"],
      castka: "Půjčky do 150 mld. € s dlouhou splatností – pouze pro členské státy; max. 35 % nákladů komponent smí pocházet mimo EU/Ukrajinu/EHP",
      overit: false,
      proKoho: "Přímo pouze členské státy (v období 2–4/2026 schválena pomoc pro 18 států). Firmy se účastní jako dodavatelé do zakázek financovaných ze SAFE.",
      jakFunguje: [
        "Nařízení v platnosti od 29. 5. 2025; financováno z výpůjční kapacity EU (EU-bonds).",
        "Ukrajina a země EHP/ESVO se mohou účastnit společných nákupů.",
        "Pro startup: sledujte, kam poteče poptávka států, a pozicujte se v dodavatelských řetězcích."
      ],
      vhodnyKdyz: [
        "Máte produkt připravený k dodávkám a hledáte cestu do zakázek financovaných ze SAFE (přes primes nebo národní nákupy)."
      ],
      nevhodnyKdyz: [
        "Hledáte přímé financování vývoje – to je EIC, EUDIS, EDIP FAST nebo BraveTech."
      ],
      terminy: "Alokace státům proběhla 2–4/2026; zakázky navazují průběžně.",
      terminyOverit: false,
      odkaz: "https://www.consilium.europa.eu/en/policies/safe/",
      kdeKriteria: "Nástroj pro členské státy – firmy se účastní přes národní zakázky; informace na consilium.europa.eu a u MO ČR.",
      pomocDH: "Pomůžeme se zorientovat, které národní nákupy ze SAFE se chystají a kdo je poptává."
    },

    {
      id: "agile",
      nazev: "AGILE Initiative (sledovat – spuštění 2027)",
      kratce: "Připravovaný nástroj EU pro rychlou obrannou inovaci: 115 mil. €, do 5 mil. € na projekt, sólo žadatel (hlavně SME), od podání ke grantu cílově do 4 měsíců.",
      typ: "grant",
      zamereni: "defence",
      trl: [4, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Rozpočet 115 mil. €; do 5 mil. € na projekt",
      overit: true,
      proKoho: "Hlavně SME a startupy – bez povinného konsorcia, s rychlým řízením (cíl: grant do 4 měsíců od podání).",
      jakFunguje: [
        "Zatím politická dohoda; spuštění se čeká v roce 2027.",
        "Detaily doplní tým DH po zveřejnění – zařadíme vás do rozesílky."
      ],
      vhodnyKdyz: [
        "Chcete rychlý obranný grant bez konsorcia – až se spustí, bude to nejrychlejší evropská cesta."
      ],
      nevhodnyKdyz: [
        "Potřebujete peníze letos – použijte EUDIS, EIC nebo PRODEF."
      ],
      terminy: "Spuštění 2027 [DOPLNIT po vyhlášení].",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      kdeKriteria: "[DOPLNIT po spuštění – parametry zveřejní Evropská komise]",
      pomocDH: "Zařadíme vás do rozesílky – dáme vědět, až budou výzvy venku."
    }
  ],

  // -------------------------------------------------------------------
  // PRŮVODCE PŘIHLÁŠKOU
  // -------------------------------------------------------------------
  prihlaska: {
    obecneKroky: [
      {
        krok: "Ujasněte si příběh – a pro koho je",
        popis: "V obraně je zákazník řetězec rozhodovatelů: politik slyší dopad, nákupčí cenu a riziko, voják spolehlivost, technik parametry. Stejný produkt musíte umět odvyprávět několika způsoby."
      },
      {
        krok: "Přečtěte si výzvu 2×",
        popis: "Hodnotí se soulad s textem výzvy, ne obecná kvalita nápadu. Vypište si hodnoticí kritéria (kde je najít, ukazuje box u vybraného programu) a ke každému připravte odpověď."
      },
      {
        krok: "Sestavte tým a partnery včas",
        popis: "Konsorcium (kde je potřeba) se staví měsíce, ne týdny. Podpisové procesy u univerzit a velkých firem trvají."
      },
      {
        krok: "Čísla, ne přídavná jména",
        popis: "„Unikátní řešení“ nikoho nepřesvědčí. TRL doložené testy, metriky výkonu, LOI od zákazníků, velikost trhu se zdrojem (SIPRI, Global Firepower)."
      },
      {
        krok: "Snižujte vnímané riziko",
        popis: "V obraně nikdo nechce schválit věc, co nebude fungovat. Reference, pilot, testovací centrum, členství v akcelerátoru – to váží víc než sliby výkonu."
      },
      {
        krok: "Rozpočet stavte zdola",
        popis: "Od aktivit k penězům, ne naopak. Nafouknutý rozpočet je nejčastější důvod srážky bodů."
      },
      {
        krok: "Nechte to přečíst někoho zvenku a odevzdejte s rezervou",
        popis: "Ideálně někoho, kdo hodnotil nebo psal úspěšné žádosti – Defence Hub umí zprostředkovat zpětnou vazbu. Portály před uzávěrkou padají: kompletní žádost v systému min. 48 hodin předem."
      }
    ],
    checklisty: {
      diana: [
        "Přihláška reaguje na konkrétní vypsanou challenge (ne obecně)",
        "Dual-use využití popsáno konkrétně: civilní zákazník + obranný scénář",
        "Doložený stav technologie (demo, video, výsledky testů)",
        "Tým: kdo má jaké kompetence, kdo se programu bude reálně účastnit",
        "Plán, co s grantem za 6 měsíců uděláte (milníky)",
        "Ochota pracovat s testovacími centry a koncovými uživateli NATO",
        "Konzultace s Defence Hubem (česká akcelerační site) před podáním"
      ],
      edf: [
        "Konsorcium: min. 3 subjekty ze 3 způsobilých zemí (2/2 u průlomových technologií), role rozdělené",
        "Soulad s tématem výzvy doložen bod po bodu",
        "Podpora ministerstev obrany (u vývojových akcí) domluvena předem",
        "Vlastnická struktura: bez kontroly nepřidruženou třetí zemí (nebo záruky)",
        "Pracovní balíčky (WP) s milníky a deliverably",
        "Rozpočet po partnerech a kategoriích, zdůvodněný",
        "Ošetřené duševní vlastnictví (konsorciální smlouva aspoň v draftu)",
        "Národní kofinancování: žádost do TAČR PRODEF PP1",
        "Bezpečnostní aspekty: kdo potřebuje prověrky, jak se nakládá s citlivými daty"
      ],
      "eic-accelerator": [
        "Pitch deck do 10 slidů (požadavek EIC) a video",
        "Jeden slide věnovaný dual-use: civilní i obranný scénář použití",
        "Krátká žádost podána a schválena (krok 1)",
        "Finanční plán: co grant, co equity, co vlastní zdroje",
        "Důkazy trakce: zákazníci, LOI, tržby, piloty",
        "Kapitalizační tabulka a struktura firmy připravená na investici",
        "Příprava na pohovor: pitch do 10 minut + obhajoba čísel"
      ],
      nif: [
        "Pitch deck (10–15 slidů) s jasným dual-use/defence příběhem",
        "Datová místnost: finance, kapitalizační tabulka, klíčové smlouvy, IP",
        "Doložitelná trakce: zákazníci, piloty, LOI",
        "Sídlo v ČR splňuje podmínku (ČR je investorská země NIF)",
        "Plán investičního kola: kolik, na co, kdo je lead investor",
        "Warm intro přes síť DH/DIANA – ne studený e-mail"
      ],
      eudis: [
        "Vybraný správný nástroj: Accelerator (jedna firma) vs. Open Call (konsorcium 3 firem ze 3 států)",
        "U Open Call: TRL 4+ doloženo",
        "Business plán a plán vstupu na obranný trh",
        "Zvážen Test in Ukraine jako validace",
        "Napojení na primes (matchmaking DH/EUDIS)"
      ],
      default: [
        "Hodnoticí kritéria výzvy zodpovězena bod po bodu",
        "Shrnutí (abstrakt) srozumitelné pro nespecialistu",
        "Čísla a tvrzení mají zdroj",
        "Rozpočet postavený zdola a zdůvodněný",
        "Všechny povinné přílohy dle výzvy",
        "Žádost v systému min. 48 h před uzávěrkou"
      ]
    }
  },

  // -------------------------------------------------------------------
  // DUAL-USE TEST – předběžné zatřídění podle kontrolních seznamů.
  // Zdroj: KB Ultimate složka 02_Export-a-dual-use (nařízení 2021/821,
  // zákony 594/2004 a 38/1994, ITAR/EAR) a 03_Certifikace.
  // NENÍ to právní posouzení (pole disclaimer).
  // -------------------------------------------------------------------
  dualUseTest: {
    uvod: "Zatřídění se dělá podle dvou kontrolních seznamů: Společného vojenského seznamu EU (v ČR provedeného vyhláškou č. 210/2012 Sb. k zákonu 38/1994 Sb.) a přílohy I nařízení (EU) 2021/821 (dual-use, kategorie 0–9). Platí self-classification: za správné zařazení odpovídá vývozce. Test vás seznamy provede a řekne, co ověřit dál. Nic se nikam neodesílá.",
    otazky: [
      { id: "vojenske", text: "Je produkt speciálně konstruován nebo upraven pro vojenské použití?", napoveda: "Rozhodující znak vojenského materiálu (zákon 38/1994 Sb., seznam ve vyhlášce 210/2012 Sb., kopíruje Společný vojenský seznam EU ML1–ML22). Běžný civilní výrobek, který si armáda jen koupí bez úpravy, vojenským materiálem není." },
      { id: "civilni", text: "Budete prodávat i civilním zákazníkům v EU?", napoveda: "Kvůli civilním certifikacím (CE a oborové normy). Pozor: čistě vojenský materiál CE zpravidla nenese (výjimka čl. 346 SFEU)." },
      { id: "dataai", text: "Zpracovává produkt osobní údaje nebo využívá AI?", napoveda: "Kvůli GDPR a evropské regulaci AI (AI Act)." },
      { id: "export", text: "Plánujete prodej mimo EU?", napoveda: "Vývozní povolení se u dual-use položek řeší při vývozu do třetích zemí; u citlivé podmnožiny (příloha IV nařízení) i uvnitř EU. Pozor: vývozem je i e-mail, upload na cloud nebo zpřístupnění technických dat osobě mimo EU." },
      { id: "usa", text: "Obsahuje produkt americké komponenty, software nebo technická data?", napoveda: "Americká pravidla ITAR/EAR dopadají i na české firmy: ITAR položky „obarví“ celý produkt (bez procentního prahu), u EAR platí de minimis obvykle 25 % US obsahu. Proto integrátoři hledají „ITAR-free“ komponenty." },
      { id: "utajeni", text: "Očekáváte práci s utajovanými informacemi?", napoveda: "Např. zakázky pro ministerstva obrany. Prověrky vydává NBÚ (zákon 412/2005 Sb.); většina dodávek dual-use zboží utajení nevyžaduje." }
    ],
    kategorieAnnex: {
      text: "Do kterých kategorií přílohy I nařízení (EU) 2021/821 může váš produkt spadat?",
      napoveda: "Vyberte všechny relevantní kategorie (0–9). Kontrolní číslo položky má strukturu: kategorie (0–9) + typ (A zařízení, B testovací/výrobní zařízení, C materiály, D software, E technologie) + číslo – např. 5A002 = šifrovací zařízení. Kontrole podléháte jen při překročení technických prahů u konkrétní položky.",
      otazkaParametry: "Dosahuje nebo překračuje váš produkt technické parametry kontrolovaných položek v této kategorii?",
      napovedaParametry: "Přesné prahy (výkon, přesnost, citlivost, délka klíče…) definuje příloha I u konkrétních položek. Porovnejte svůj produkt s textem přílohy, nebo odpovězte „nevím“ – pak je potřeba odborné zatřídění. Pozor: celní zařazení (TARIC) není totéž co kontrolní zařazení.",
      zadna: "Žádná z kategorií",
      polozky: [
        { kod: "0", nazev: "Jaderné materiály, zařízení a technologie", priklady: ["štěpné a zvláštní štěpné materiály", "reaktory a jejich komponenty", "zařízení pro obohacování a přepracování"] },
        { kod: "1", nazev: "Zvláštní materiály a související zařízení", priklady: ["speciální slitiny, kompozity a povlaky", "prekurzory chemických látek", "ochranné a detekční prostředky proti chemickým a biologickým látkám"] },
        { kod: "2", nazev: "Zpracování materiálů", priklady: ["přesné CNC obráběcí stroje", "izostatické lisy", "ložiska zvláštních parametrů"] },
        { kod: "3", nazev: "Elektronika", priklady: ["radiačně odolné integrované obvody", "vysokofrekvenční a mikrovlnné součástky", "rychlé A/D převodníky s vysokým rozlišením"] },
        { kod: "4", nazev: "Počítače", priklady: ["vysoce výkonné výpočetní systémy nad stanovený práh", "počítače odolné proti extrémním podmínkám"] },
        { kod: "5", nazev: "Telekomunikace (část 1) a informační bezpečnost / šifrování (část 2)", priklady: ["rádiové systémy s frekvenčním skákáním a adaptivními technikami", "systémy odolné proti odposlechu a rušení", "kryptografie nad stanovené parametry – typicky položka 5A002"] },
        { kod: "6", nazev: "Senzory a lasery", priklady: ["termovizní a noktovizní kamery nad stanovenou citlivost/rozlišení", "akustické a podvodní senzory (hydrofony)", "radary, gravimetry, lasery nad stanovený výkon či vlnové délky"] },
        { kod: "7", nazev: "Navigace a letecká elektronika (avionika)", priklady: ["inerciální navigační systémy a gyroskopy s driftem pod stanovenou mez", "GNSS přijímače odolné proti rušení pro vysoké rychlosti a výšky"] },
        { kod: "8", nazev: "Námořní technika", priklady: ["ponorná a bezosádková podvodní plavidla", "tiché pohony", "senzory pro podvodní použití"] },
        { kod: "9", nazev: "Letecká technika, kosmonautika a pohony", priklady: ["raketové a proudové motory a jejich komponenty", "bezpilotní prostředky se stanoveným doletem/nosností", "kosmické technologie"] }
      ]
    },
    verdikty: {
      vojensky: {
        nazev: "Pravděpodobně vojenský materiál (zákon 38/1994 Sb.)",
        text: "Produkt speciálně konstruovaný nebo upravený pro vojenské použití zpravidla spadá na seznam vojenského materiálu (vyhláška 210/2012 Sb., dle Společného vojenského seznamu EU). Režim je přísnější než dual-use: dvoustupňový (povolení firmy + licence na každý obchod). Obchod bez povolení a licence je trestný čin (§ 265 trestního zákoníku).",
        dalsiKroky: [
          "Určete kategorii na seznamu vojenského materiálu (vyhláška 210/2012 Sb.) – s odborníkem nebo Licenční správou MPO.",
          "Před jednáním se zahraničním partnerem vyřiďte povolení k obchodu s vojenským materiálem (Licenční správa MPO) – vydává se až po závazných stanoviscích MZV, MO a MV; kterýkoli resort může obchod zablokovat.",
          "Na každý konkrétní obchod pak žádejte licenci (konkrétní zboží, množství, země, odběratel); lhůty počítejte v týdnech až měsících.",
          "Prověřujte koncové uživatele a vyžadujte doklad o koncovém užití (end-user certificate).",
          "Nastavte interní compliance: co se smí komu poslat, včetně technických dat a ukázek na veletrzích. Pokuty dle zákona 38/1994 jdou až do 50 mil. Kč.",
          "Ozvěte se Defence Hubu – propojíme vás s odborníky i s firmami, které tím prošly."
        ]
      },
      listed: {
        nazev: "Pravděpodobně kontrolovaná dual-use položka (příloha I)",
        text: "Podle odpovědí váš produkt dosahuje parametrů kontrolovaných položek přílohy I nařízení (EU) 2021/821. Pro vývoz mimo EU budete potřebovat vývozní povolení od Licenční správy MPO (proces dle zákona č. 594/2004 Sb.).",
        dalsiKroky: [
          "Určete přesné kontrolní číslo položky v příloze I (např. 5A002) – od něj se odvíjí vše další. Při nejistotě požádejte Licenční správu MPO o stanovisko.",
          "Zkontrolujte přílohu IV – její položky vyžadují povolení i pro přepravu uvnitř EU.",
          "Zjistěte, jestli pro vaše cílové země platí všeobecná povolení EU (EU001–EU008, příloha II nařízení) nebo národní všeobecné povolení – administrativně nejjednodušší cesta.",
          "Jinak žádejte o individuální nebo souhrnné (globální) povolení u Licenční správy MPO; u souhrnných povolení je podmínkou zavedený ICP (vnitropodnikový program kontroly). Doložíte zejména prohlášení koncového uživatele (end-user declaration).",
          "Veďte evidenci vývozů min. 5 let a počítejte s pololetním hlášením MPO (do 10. dne po pololetí) [OVĚŘIT formulář].",
          "Prověřujte koncové uživatele proti sankčním seznamům. Pokuty dle zákona 594/2004: do 5 mil. Kč (evidence), u nejzávažnějších porušení do 20 mil. Kč.",
          "Pozor: „vývozem“ je i předání technologie nebo softwaru elektronicky – e-mail, cloud, repozitář, přednáška pro zahraniční tým.",
          "Defence Hub vás propojí s odborníky na exportní kontrolu."
        ]
      },
      zatrideni: {
        nazev: "Potřebuje odborné zatřídění",
        text: "Bez porovnání s přesnými technickými prahy přílohy I nejde rozhodnout – u technologických firem nejčastější situace a nic špatného to neznamená. Platí ale self-classification: odpovědnost za správné zařazení je na vás a špatné zařazení = neoprávněný vývoz.",
        dalsiKroky: [
          "Sepište technické parametry produktu (výkon, frekvence, přesnost, kryptografie…) do jednoho dokumentu – kontrolní seznam pracuje s prahy, ne s marketingovým názvem.",
          "Porovnejte je s textem přílohy I u vybraných kategorií – nebo to rovnou svěřte odborníkovi.",
          "Požádejte Licenční správu MPO o stanovisko k zatřídění [OVĚŘIT formu podání a lhůty].",
          "Nezapomeňte na software (D) a technologie/technická data (E) – i ty jsou kontrolované položky.",
          "Do vyjasnění zatřídění opatrně s posíláním technických detailů mimo EU (i e-mailem a cloudem).",
          "Defence Hub vás propojí s odborníky na exportní kontrolu."
        ]
      },
      unlisted: {
        nazev: "Pravděpodobně mimo kontrolní seznamy",
        text: "Podle odpovědí produkt nedosahuje parametrů kontrolovaných položek. I tak platí catch-all: povolení může být potřeba i pro nezařazenou položku kvůli koncovému užití – zbraně hromadného ničení (čl. 4), vojenské užití v embargované zemi (čl. 4), kybernetické sledovací nástroje s rizikem represe (čl. 5), národní rozšíření kontroly (čl. 9, 10).",
        dalsiKroky: [
          "Zdokumentujte posouzení (proč produkt nespadá na seznamy) – due diligence se hodí pro banky, investory i celníky.",
          "Prověřujte neobvyklé poptávky: podezřelé koncové užití, embargované země, zákazník odmítající říct, k čemu produkt potřebuje.",
          "U cílových zemí kontrolujte sankční režimy – ty platí bez ohledu na zatřídění.",
          "Při pochybnostech o koncovém užití kontaktujte Licenční správu MPO.",
          "Zatřídění zopakujte při každé větší změně produktu – nové funkce (např. přidané šifrování) mohou překročit kontrolované prahy."
        ]
      }
    },
    dalsiKrokyNadpis: "Co dál – postup krok za krokem",
    rezimy: [
      { id: "vojmat", nazev: "Vojenský materiál: povolení + licence (zákon 38/1994 Sb.)", kdy: "Položka na seznamu vojenského materiálu (vyhláška 210/2012 Sb.)", akce: "Dvoustupňový režim u Licenční správy MPO: nejdřív povolení firmy (po závazných stanoviscích MZV, MO a MV), pak licence na každý konkrétní obchod. Řešit před prvním jednáním se zahraničním partnerem.", podminky: { vojenske: "ano" } },
      { id: "dualuse-narizeni", nazev: "Vývozní povolení pro dual-use (nařízení 2021/821 + zákon 594/2004 Sb.)", kdy: "Položka přílohy I + vývoz mimo EU", akce: "Určit kontrolní číslo, zkontrolovat přílohu IV (kontrola i uvnitř EU) a všeobecná povolení EU001–EU008; jinak individuální/souhrnné povolení u Licenční správy MPO. Evidence min. 5 let, pololetní hlášení.", podminky: { katAno: true, export: "ano" } },
      { id: "zatrideni", nazev: "Odborné zatřídění položky (self-classification)", kdy: "Nejistota, zda produkt dosahuje kontrolovaných parametrů", akce: "Odpovědnost za zařazení nese vývozce. Sepsat technické parametry, porovnat s přílohou I, případně požádat Licenční správu MPO o stanovisko. Defence Hub propojí s odborníky.", podminky: { katNevim: true } },
      { id: "catchall", nazev: "Catch-all doložky (čl. 4, 5, 9, 10 nařízení)", kdy: "Vývoz mimo EU – i u položek mimo seznamy", akce: "Prověřovat koncové užití a uživatele: WMD a vojenské užití v embargu (čl. 4), kybernetické sledovací nástroje a lidská práva (čl. 5), národní rozšíření (čl. 9, 10). Při podezření kontaktovat Licenční správu MPO.", podminky: { export: "ano" } },
      { id: "itar", nazev: "Americká pravidla ITAR/EAR a reexport", kdy: "Americké komponenty, software nebo technická data v produktu", akce: "Zmapovat US obsah: ITAR položky (USML) „obarví“ celek bez procentního prahu; u EAR platí de minimis obvykle 25 %. Reexport může vyžadovat americké povolení (DDTC/BIS) i pro českou firmu. Zvažovat „ITAR-free“ design.", podminky: { usa: "ano" } },
      { id: "nbu", nazev: "Utajované informace a prověrky NBÚ (zákon 412/2005 Sb.)", kdy: "Zakázky s utajovanými informacemi", akce: "Stupeň Vyhrazené je jednodušší (bez plného řízení NBÚ); od stupně Důvěrné je nutné osvědčení osoby i podnikatele od NBÚ – řízení běží měsíce až přes rok. Nežádat do zásoby, ale s konkrétní zakázkou.", podminky: { utajeni: "ano" } },
      { id: "nato-retezec", nazev: "Vstup do NATO dodavatelského řetězce (kodifikace a kvalita)", kdy: "Dodávky ozbrojeným složkám a do NATO zakázek", akce: "Doporučené pořadí: NCAGE kód (zdarma, přes Úř OSK SOJ) → ISO 9001 → registrace u NSPA → AS9100/EN9100 (hardware) → AQAP dle kontraktu (2110/2310, plnění ověřuje stát – GQA) → NSN kodifikace položky.", podminky: { vojenske: "ano" } },
      { id: "ce", nazev: "Civilní certifikace (CE a oborové normy)", kdy: "Prodej civilním zákazníkům v EU", akce: "Ověřit, které harmonizační směrnice a normy se na produkt vztahují (CE, EMC, RED…). Pozor: čistě vojenský materiál CE zpravidla nenese (vyloučení + čl. 346 SFEU); dual-use a komerční komponenty CE nesou normálně.", podminky: { civilni: "ano" } },
      { id: "gdpr", nazev: "GDPR a evropská regulace AI", kdy: "Produkt zpracovává osobní údaje nebo využívá AI", akce: "Posoudit dopady GDPR a AI Actu na nasazení produktu; u kyber/sledovacích funkcí pozor i na catch-all čl. 5 nařízení 2021/821.", podminky: { dataai: "ano" } }
    ],
    odkazy: [
      { t: "Nařízení (EU) 2021/821 vč. přílohy I (kontrolní seznam dual-use)", url: "https://eur-lex.europa.eu/eli/reg/2021/821/oj" },
      { t: "Evropská komise – exportní kontrola dual-use", url: "https://policy.trade.ec.europa.eu/help-exporters-and-importers/exporting-dual-use-items_en" },
      { t: "Licenční správa MPO (zatřídění, povolení, licence)", url: "https://www.mpo.gov.cz" },
      { t: "NBÚ – prověrky a utajované informace", url: "https://nbu.gov.cz" },
      { t: "Úř OSK SOJ – kodifikace NATO (NCAGE, NSN, AQAP)", url: "https://okm.mo.gov.cz" }
    ],
    disclaimer: "Předběžné vodítko, ne právní posouzení ani závazné zatřídění. Příklady u kategorií jsou ilustrační – rozhoduje přesný text přílohy I a seznamu vojenského materiálu v aktuálním znění. Zatřídění vždy ověřte s Licenční správou MPO nebo odborníkem na exportní kontrolu – Defence Hub vás propojí."
  },

  // -------------------------------------------------------------------
  // FÁZE 2: DUAL-USE PŘEKLADAČ – mapa domén
  // -------------------------------------------------------------------
  dualUse: {
    domeny: [
      {
        id: "senzory",
        nazev: "Senzorika a situační přehled",
        defence: ["Průzkum a sledování bojiště (ISR)", "Detekce dronů a ochrana perimetru", "Noční vidění, termovize", "Akustická/RF detekce hrozeb"],
        komercni: [
          { sektor: "Kritická infrastruktura", useCase: "Ochrana elektráren, letišť a datacenter před narušením a drony" },
          { sektor: "Průmysl 4.0", useCase: "Prediktivní údržba a monitoring výrobních linek" },
          { sektor: "Zemědělství", useCase: "Monitoring plodin a stád, precizní zemědělství" },
          { sektor: "Záchranné složky", useCase: "Vyhledávání osob, monitoring požárů a povodní" }
        ]
      },
      {
        id: "autonomie",
        nazev: "Autonomie, drony a robotika",
        defence: ["Bezpilotní průzkum", "Logistika na bojišti / poslední míle", "Odminování a EOD roboty", "Roje dronů"],
        komercni: [
          { sektor: "Logistika", useCase: "Autonomní doručování, inventarizace skladů" },
          { sektor: "Inspekce", useCase: "Kontrola mostů, potrubí, vedení a větrných turbín" },
          { sektor: "Zemědělství", useCase: "Postřiky, mapování, autonomní stroje" },
          { sektor: "Záchranné složky", useCase: "Průzkum nepřístupných míst při zásahu" }
        ]
      },
      {
        id: "ai",
        nazev: "AI a analýza dat",
        defence: ["Fúze dat z čidel a zdrojů (intelligence)", "Rozpoznávání cílů v obraze", "Podpora rozhodování velitelů", "Detekce dezinformací"],
        komercni: [
          { sektor: "Finance a pojišťovnictví", useCase: "Detekce podvodů, hodnocení rizik" },
          { sektor: "Média a platformy", useCase: "Moderace obsahu, ověřování pravosti" },
          { sektor: "Průmysl", useCase: "Vizuální kontrola kvality, optimalizace procesů" },
          { sektor: "Zdravotnictví", useCase: "Analýza snímků, triage" }
        ]
      },
      {
        id: "komunikace",
        nazev: "Komunikace a kryptografie",
        defence: ["Odolné taktické sítě", "Šifrovaná komunikace", "Provoz v rušeném prostředí (EW)", "Satelitní spojení"],
        komercni: [
          { sektor: "Energetika a utility", useCase: "Bezpečná komunikace pro rozvodné sítě (OT security)" },
          { sektor: "Záchranné složky", useCase: "Odolné sítě pro krizovou komunikaci" },
          { sektor: "Podniková bezpečnost", useCase: "Šifrovaná komunikace pro firmy a státní správu" },
          { sektor: "Doprava", useCase: "Spolehlivá konektivita pro vlaky, lodě, letadla" }
        ]
      },
      {
        id: "kyber",
        nazev: "Kybernetická bezpečnost",
        defence: ["Obrana vojenských sítí", "Kybernetické zpravodajství", "Ochrana zbraňových systémů", "Simulace útoků (red teaming)"],
        komercni: [
          { sektor: "Kritická infrastruktura", useCase: "Ochrana SCADA/OT systémů" },
          { sektor: "Finance", useCase: "Detekce průniků, threat intelligence" },
          { sektor: "Státní správa", useCase: "Ochrana registrů a služeb e-governmentu" },
          { sektor: "MSP trh", useCase: "Dostupná bezpečnost jako služba (MSSP)" }
        ]
      },
      {
        id: "space",
        nazev: "Vesmír a navigace",
        defence: ["Satelitní průzkum", "Odolná navigace (GNSS denied)", "Komunikační konstelace", "Space situational awareness"],
        komercni: [
          { sektor: "Doprava a logistika", useCase: "Přesná navigace a sledování zásilek" },
          { sektor: "Pojišťovnictví", useCase: "Vyhodnocování škod ze satelitních dat" },
          { sektor: "Zemědělství", useCase: "Dálkový průzkum půdy a plodin" },
          { sektor: "Telekomunikace", useCase: "Konektivita v odlehlých oblastech" }
        ]
      },
      {
        id: "materialy",
        nazev: "Materiály a výroba",
        defence: ["Balistická ochrana", "Lehké konstrukce pro vozidla a letouny", "Aditivní výroba náhradních dílů v poli", "Maskování a stealth"],
        komercni: [
          { sektor: "Automotive a letectví", useCase: "Lehčení konstrukcí, kompozity" },
          { sektor: "Stavebnictví", useCase: "Odolné a požárně bezpečné materiály" },
          { sektor: "Sport a outdoor", useCase: "Ochranné vybavení" },
          { sektor: "Strojírenství", useCase: "3D tisk malých sérií a náhradních dílů" }
        ]
      },
      {
        id: "energie",
        nazev: "Energie a pohony",
        defence: ["Napájení základen a jednotek v poli", "Baterie a palivové články pro techniku", "Energetická odolnost základen"],
        komercni: [
          { sektor: "Energetika", useCase: "Ostrovní systémy, mikrogridy, záložní zdroje" },
          { sektor: "Doprava", useCase: "Elektrifikace flotil, nabíjecí infrastruktura" },
          { sektor: "Stavebnictví", useCase: "Napájení odlehlých staveb bez sítě" },
          { sektor: "Telco a datacentra", useCase: "Záložní napájení kritických provozů" }
        ]
      },
      {
        id: "zdravi",
        nazev: "Medicína a CBRN ochrana",
        defence: ["Bojová medicína a evakuace raněných", "Detekce chemických/biologických látek", "Ochranné prostředky", "Telemedicína v poli"],
        komercni: [
          { sektor: "Urgentní medicína", useCase: "Přednemocniční péče, vybavení záchranek" },
          { sektor: "Průmyslová bezpečnost", useCase: "Detekce úniků nebezpečných látek" },
          { sektor: "Zdravotnictví", useCase: "Telemedicína pro odlehlé regiony" },
          { sektor: "Civilní ochrana", useCase: "Připravenost na pandemie a havárie" }
        ]
      },
      {
        id: "simulace",
        nazev: "Simulace a výcvik",
        defence: ["Simulátory letounů a vozidel", "VR/AR výcvik jednotek", "Digitální dvojčata bojiště", "Wargaming"],
        komercni: [
          { sektor: "Letectví a doprava", useCase: "Výcvik pilotů, strojvedoucích, řidičů" },
          { sektor: "Průmysl", useCase: "Školení obsluhy strojů, BOZP tréninky ve VR" },
          { sektor: "Zdravotnictví", useCase: "Simulace zákroků a krizových stavů" },
          { sektor: "Energetika", useCase: "Digitální dvojčata elektráren a sítí" }
        ]
      }
    ],

    zmenyDefenceKomercni: [
      { co: "Zákazník", z: "Stát / armáda – řetězec rozhodovatelů, dlouhé tendry", na: "Firmy – více menších zákazníků, kratší prodejní cyklus" },
      { co: "Certifikace", z: "Vojenské standardy (STANAG, MIL-STD, AQAP), utajení", na: "Civilní normy (CE, ISO, oborové certifikace), GDPR" },
      { co: "Cena a marže", z: "Cena za odolnost a spolehlivost v extrémech", na: "Tlak na cenu – nutné zlevnit, zjednodušit, škálovat" },
      { co: "Produkt", z: "Řešení na míru, malé série", na: "Standardizovaný produkt, samoobslužnost, servis" },
      { co: "Marketing", z: "Reference a vztahy, veletrhy, tendry", na: "Digitální marketing, produktová prezentace, pricing veřejně" }
    ],
    zmenyKomercniDefence: [
      { co: "Zákazník", z: "Firmy – rychlá rozhodnutí, pilot za týdny", na: "Stát / armáda – akvizice v letech; každý článek řetězce (politik, MO, nákupčí, voják, technik, právník) slyší něco jiného" },
      { co: "Certifikace", z: "Civilní normy", na: "Vojenské standardy (AQAP nad ISO/AS9100), kodifikace NATO (NCAGE, NSN), případně prověrky NBÚ" },
      { co: "Odolnost", z: "Provoz v běžných podmínkách", na: "Extrémní teploty, rušení, GPS-denied, EMC – nutné doložit testy" },
      { co: "Dodavatelský řetězec", z: "Globální nákup dle ceny", na: "Prověřitelný původ komponent, „ITAR-free“ design, bezpečnost řetězce" },
      { co: "Prodej", z: "Marketing a inbound", na: "Riziko je hlavní nepřítel: reference, pilot a důvěra váží víc než výkon. Vstup často přes primes a offsety, tendry přes TED/NSPA" }
    ],

    dalsiKroky: {
      defenceKomercni: [
        "Vyberte 1–2 komerční sektory z mapy výše a ověřte si poptávku (5–10 rozhovorů se zákazníky).",
        "Spočítejte, co musí z produktu pryč, aby cena seděla civilnímu trhu.",
        "Zmapujte civilní certifikace (CE, oborové normy) – co už splňujete díky vojenským standardům?",
        "Zvažte oddělenou produktovou řadu / brand pro civilní trh.",
        "Pro civilní větev lze čerpat civilní programy (EIC, Horizont, OP TAK, TAČR SIGMA/TREND) – dual-use strategie zdvojnásobuje finanční možnosti."
      ],
      komercniDefence: [
        "Definujte obranný scénář použití – konkrétní jednotka, konkrétní problém, ne „armáda obecně“.",
        "Zapište se do Databáze řešení Defence Hubu – ať vás najdou primes a investoři.",
        "Přihlaste se do DIANA (přes Defence Hub) nebo EUDIS akcelerátoru – nejrychlejší cesta k obranným koncovým uživatelům; zvažte Test in Ukraine.",
        "Projděte si dual-use test v této aplikaci – exportní kontrola a certifikace se řeší dřív, než myslíte.",
        "Najděte si integrátora/patrona – startup málokdy prodává armádě přímo; sledujte i offsetové příležitosti.",
        "Ozvěte se Defence Hubu – zmapujeme s vámi cestu a propojíme vás."
      ]
    }
  },

  // -------------------------------------------------------------------
  // WIZARD – otázky průvodce
  // -------------------------------------------------------------------
  wizard: [
    {
      id: "zamereni",
      otazka: "Kam vaše technologie primárně míří?",
      napoveda: "Podle toho se dělí programy – obranné (EDF, EDIP, PRODEF), dual-use (DIANA, EIC, EUDIS) a civilně-bezpečnostní (Horizont, OP TAK).",
      moznosti: [
        { v: "defence", t: "Čistě obranné využití", p: "Produkt pro armádu, bez civilního trhu" },
        { v: "dual", t: "Dual-use", p: "Civilní i obranné využití" },
        { v: "civil", t: "Civilní / bezpečnostní", p: "Civilní trh, možná security přesah" },
        { v: "nevim", t: "Nevím / chci poradit", p: "Pomůže i Dual-use test v této aplikaci" }
      ]
    },
    {
      id: "trl",
      otazka: "V jaké fázi je vaše technologie?",
      napoveda: "TRL = Technology Readiness Level, stupnice zralosti technologie 1–9.",
      moznosti: [
        { v: "1-3", t: "Výzkum / koncept (TRL 1–3)", p: "Nápad, laboratorní ověření" },
        { v: "4-6", t: "Prototyp (TRL 4–6)", p: "Funkční prototyp, testování" },
        { v: "7-9", t: "Produkt (TRL 7–9)", p: "Ověřeno v provozu, prodáváme nebo těsně před tím" }
      ]
    },
    {
      id: "typ",
      otazka: "Jakou formu podpory hledáte?",
      napoveda: "Non-dilutive = grant bez odevzdání podílu. Dilutive = investice výměnou za podíl.",
      moznosti: [
        { v: "grant", t: "Grant", p: "Peníze bez ředění podílu" },
        { v: "equity", t: "Investici", p: "Investor výměnou za podíl (NIF, EIC equity, STEP Defence)" },
        { v: "akcelerator", t: "Akceleraci a kontakty", p: "Mentoring, přístup k zákazníkům, síť" },
        { v: "vse", t: "Cokoli relevantního", p: "Ukažte mi všechny možnosti" }
      ]
    },
    {
      id: "konsorcium",
      otazka: "Umíte si představit projekt v mezinárodním konsorciu?",
      napoveda: "EDF a Horizont konsorcium vyžadují (EDF min. 3 subjekty ze 3 zemí). DIANA, EIC, PRODEF nebo OP TAK žádá jedna firma.",
      moznosti: [
        { v: "ano", t: "Ano", p: "Partnery máme nebo je umíme najít" },
        { v: "ne", t: "Ne / zatím ne", p: "Chceme žádat sami za sebe" }
      ]
    },
    {
      id: "velikost",
      otazka: "Kdo jste?",
      napoveda: "",
      moznosti: [
        { v: "startup", t: "Startup", p: "Mladá firma, hledáme růst" },
        { v: "sme", t: "Zavedené MSP", p: "Malý/střední podnik s historií" },
        { v: "midcap", t: "Větší firma (mid-cap+)", p: "" },
        { v: "research", t: "Výzkumná organizace / univerzita", p: "" }
      ]
    }
  ]
};
