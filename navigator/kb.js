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
      stavRucne: "krátkou žádost lze podat kdykoli; nejbližší cut-off plných žádostí 4. 11. 2026",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "Cut-off termíny plných žádostí 2026: 7. 1., 4. 3., 6. 5., 8. 7., 2. 9. a 4. 11. (ověřeno 9/2026). Od 17. 6. 2026 otevřen obranným a dual-use technologiím.",
      priklad: false
    },
    {
      program: "eic-pathfinder",
      nazev: "EIC Pathfinder Challenges 2026 – granty do 4 mil. €",
      otevreniOd: "",
      uzaverka: "2026-10-28",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "3 challenge témata 2026: materiály pro miniaturní energy harvesting, biotechnologie zdravého stárnutí, důvěryhodná kognitivní AI (DeepRAP). Pathfinder Open měl uzávěrku 12. 5. 2026 – proběhla. Ověřeno 9/2026.",
      priklad: false
    },
    {
      program: "eudis",
      nazev: "EUDIS Accelerator – 2 kohorty ročně",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "běží; přihlášky se otevírají před jarní a podzimní kohortou",
      odkaz: "https://eudis.europa.eu",
      pozn: "6měsíční akcelerátor: business coaching, matchmaking s primes, Test in Ukraine. Jarní kohorta: přihlášky prosinec–leden; podzimní kohorta: přihlášky květen–červen, start v září (ověřeno 9/2026).",
      priklad: false
    },
    {
      program: "edip",
      nazev: "BraveTech EU / DefTech Forges – granty 120 000 € (TRL 4+)",
      otevreniOd: "",
      uzaverka: "2026-09-06",
      odkaz: "https://eu.brave1.tech/",
      pozn: "Technologické výzvy pro defence startupy z EU a Ukrajiny; navazující financování až 750 000 €. Ověřeno 9/2026.",
      priklad: false
    },
    {
      program: "edip",
      nazev: "EDIP – výzvy pracovního programu 2026–27 (1,5 mld. €)",
      otevreniOd: "2026-03-31",
      uzaverka: "",
      stavRucne: "výzvy otevřené; první uzávěrky říjen 2026, další únor 2027",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "První vlna uzávěrek říjen 2026, druhá únor 2027 (ověřeno 9/2026); přesné dny u jednotlivých výzev na portálu Funding & Tenders.",
      priklad: false
    },
    {
      program: "horizon-cl3",
      nazev: "Horizont Evropa Klastr 3 – výzvy 2026 (131 mil. €)",
      otevreniOd: "2026-05-06",
      uzaverka: "2026-11-05",
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      pozn: "Všech 21 přímých témat má společnou uzávěrku 5. 11. 2026 v 17:00 bruselského času (ověřeno 9/2026). Kyberbezpečnostní témata spravovaná ECCC mají uzávěrku dřív – 15. 9. 2026.",
      priklad: false
    },
    {
      program: "diana",
      nazev: "DIANA – výzva pro kohortu 2027",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "uzávěrka byla 3. 7. 2026, probíhá vyhodnocení; kohorta startuje v lednu 2027",
      odkaz: "https://www.diana.nato.int",
      pozn: "6 challenge oblastí: lidská odolnost, multidoménová autonomie bezosádkových systémů, senzorika a zpracování dat pro ISR, operační odolnost, responzivní logistika, protivzdušná obrana (ověřeno 9/2026). Výsledky oznámí DIANA; sledujeme.",
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
      pozn: "TAČR uvádí, že vyhlášení PP1 je časově navázané na výzvy EDF (uzávěrka EDF 29. 9. 2026); termín orientační [OVĚŘIT na tacr.gov.cz].",
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
      jenPro: ["startup","sme"],
      castka: "Grant fáze 1: 100 000 €; ve fázi 2 až dalších 300 000 € (celkem tedy až 400 000 €); non-dilutive (NATO nebere podíl ani IP)",
      overit: false,
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
        "Chcete non-dilutive peníze (grant bez odevzdání podílu), obrannou validaci a kontakty."
      ],
      nevhodnyKdyz: [
        "Technologie je čistě zbraňová (lethal) – DIANA se soustředí na dual-use.",
        "Jste ve fázi čistého výzkumu bez prototypu."
      ],
      terminy: "Výzva pro kohortu 2027 měla uzávěrku 3. 7. 2026 a vyhodnocuje se; kohorta startuje v lednu 2027. Další výzva se očekává v červnu 2027.",
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
      jenPro: ["startup","sme"],
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
      jenPro: ["startup","sme"],
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
        "Jste jedna firma a chcete kombinaci non-dilutive grantu a equity kapitálu."
      ],
      nevhodnyKdyz: [
        "Jste před prototypem – podívejte se na EIC Pathfinder/Transition nebo TAČR.",
        "Potřebujete equity nad 10 mil. € – to je EIC STEP Scale Up Defence."
      ],
      terminy: "Krátká žádost průběžně; cut-off termíny plných žádostí 2026: 7. 1., 4. 3., 6. 5., 8. 7., 2. 9. a 4. 11.",
      terminyOverit: false,
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
      jenPro: ["startup","sme","midcap"],
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
      jenPro: ["startup","sme"],
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
      castka: "Pathfinder granty do 4 mil. € (Open i Challenges; rozpočet 2026: 262 mil. €); Transition do ~2,5 mil. €",
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
      terminy: "Pathfinder Open: uzávěrka 12. 5. 2026 (proběhla). Pathfinder Challenges: uzávěrka 28. 10. 2026. Transition dle pracovního programu EIC [OVĚŘIT].",
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
      terminy: "Výzvy 2026 spuštěny 6. 5. 2026; společná uzávěrka všech 21 přímých témat 5. 11. 2026 (kyber témata ECCC už 15. 9. 2026).",
      terminyOverit: false,
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
      terminy: "Výzvy otevřené od 31. 3. 2026; první vlna uzávěrek říjen 2026, druhá únor 2027 [přesné dny OVĚŘIT na portálu].",
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
        "Výzvy 2026: 2. veřejná soutěž PP2 proběhla (příjem návrhů 4. 6. – 22. 7. 2026); PP1 je časově navázaná na výzvy EDF – orientačně podzim 2026 [OVĚŘIT na tacr.gov.cz]."
      ],
      vhodnyKdyz: [
        "Míříte na obranný výzkum s vazbou na AČR (PP2), nebo vstupujete do EDF konsorcia (PP1).",
        "Chcete český grant bez mezinárodního konsorcia."
      ],
      nevhodnyKdyz: [
        "Hledáte růstový kapitál na škálování – národní grantová linka na scale-up chybí, miřte na EIC/NIF."
      ],
      terminy: "PP2: 2. veřejná soutěž proběhla (4. 6. – 22. 7. 2026). PP1: navázaná na EDF, orientačně podzim 2026 [OVĚŘIT].",
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
      overit: false,
      proKoho: "Podniky (zvýhodnění pro SME), i ve spolupráci s výzkumnými organizacemi. Civilní program, který nově pokrývá i obranný průmysl – vhodné pro dual-use vývoj.",
      jakFunguje: [
        "Operační program Technologie a aplikace pro konkurenceschopnost (2021–27), financováno z fondů EU, spravuje MPO.",
        "Aktivita Aplikace: průmyslový výzkum a experimentální vývoj ve firmách.",
        "Výzva IV DEEP TECH: příjem žádostí 29. 10. 2025 – 19. 2. 2026 (proběhla), alokace 2 mld. Kč. Další výzva zatím nevyhlášena [OVĚŘIT na optak.gov.cz]."
      ],
      vhodnyKdyz: [
        "Vyvíjíte v ČR a chcete národní dotaci bez mezinárodního konsorcia.",
        "Dozráváte civilní/dual-use technologii (doplněk: TAČR SIGMA a TREND)."
      ],
      nevhodnyKdyz: [
        "Potřebujete financovat čistě vojenský projekt s utajením – tam patří PRODEF/EDF."
      ],
      terminy: "Výzva IV proběhla (uzávěrka 19. 2. 2026); další výzva zatím nevyhlášena [OVĚŘIT na optak.gov.cz].",
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
      jenPro: ["startup","sme"],
      castka: "Rozpočet 115 mil. €; do 5 mil. € na projekt",
      overit: true,
      proKoho: "Hlavně SME a startupy – bez povinného konsorcia, s rychlým řízením (cíl: grant do 4 měsíců od podání).",
      jakFunguje: [
        "Politická dohoda Evropského parlamentu a Rady z července 2026; spuštění a první výzvy se čekají začátkem roku 2027.",
        "AGILE má podpořit 20–30 projektů se 100% financováním způsobilých nákladů.",
        "Detaily doplní tým DH po zveřejnění – zařadíme vás do rozesílky."
      ],
      vhodnyKdyz: [
        "Chcete rychlý obranný grant bez konsorcia – až se spustí, bude to nejrychlejší evropská cesta."
      ],
      nevhodnyKdyz: [
        "Potřebujete peníze letos – použijte EUDIS, EIC nebo PRODEF."
      ],
      terminy: "Spuštění a první výzvy začátkem 2027 [DOPLNIT přesná data po vyhlášení].",
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
    // Podací postupy krok za krokem (rešerše 9/2026; obrázky doplňuje
    // GitHub Action do img/podani/ – když obrázek chybí, krok se zobrazí bez něj)
    podani: [
      {
        id: "ft",
        programy: ["edf", "eudis", "edip", "horizon-cl3", "eic-pathfinder", "eic-step-defence"],
        nazev: "Podání přes portál EU Funding & Tenders (platí pro EDF, EUDIS, EDIP, Horizont i EIC výzvy)",
        kroky: [
          { krok: "Založte si EU Login", popis: "Jednotné přihlášení ke všem systémům EU: e-mail + heslo, poté si v nastavení zapněte dvoufaktorové ověření (pro podání žádosti je povinné).", odkaz: "https://webgate.ec.europa.eu/cas/", odkazText: "EU Login (webgate.ec.europa.eu/cas)", obrazek: "img/podani/eu-login.png" },
          { krok: "Zaregistrujte firmu a získejte PIC", popis: "V Participant Register zaregistrujte organizaci – dostanete 9místný kód PIC. Dělá se jednou, PIC pak používáte pro všechny EU programy. U konsorcia potřebuje PIC každý partner.", odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/participant-register", odkazText: "Participant Register", obrazek: "img/podani/participant-register.png" },
          { krok: "Najděte své téma (topic)", popis: "Na portálu Funding & Tenders vyhledejte program (EDF, EUDIS…) a otevřete konkrétní topic – u něj jsou call documents, šablony a hodnoticí kritéria.", odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/calls-for-proposals", odkazText: "Vyhledávání výzev na portálu F&T", obrazek: "img/podani/ft-portal.png" },
          { krok: "Klikněte na Start Submission", popis: "Na stránce tématu; otevře se podací systém s průvodcem (progress bar vás vede krok za krokem)." },
          { krok: "Vytvořte návrh a pozvěte partnery", popis: "Create proposal: PIC koordinátora, název a akronym projektu. U konsorcia pozvete partnery – systém jim pošle pozvánku, každý ji potvrdí pod svým EU Loginem." },
          { krok: "Vyplňte část A, nahrajte část B", popis: "Část A = online administrativní formuláře (účastníci, rozpočet). Část B = technický popis projektu podle šablony staženou z topicu – pozor na limit stran, co je přes limit, hodnotitelé nevidí." },
          { krok: "Validace a odeslání – min. 48 h před uzávěrkou", popis: "Tlačítko Validate odhalí chyby, Submit odešle. Rozhoduje čas serveru, pozdní podání se zamítá automaticky a bez výjimek. Do uzávěrky lze podat opakovaně – počítá se poslední verze." }
        ],
        zdroj: "Online Manual a IT How To portálu F&T (webgate.ec.europa.eu/funding-tenders-opportunities), ověřeno 9/2026."
      },
      {
        id: "eic-accelerator",
        programy: ["eic-accelerator"],
        nazev: "Podání do EIC Accelerator (4 kroky; kdykoli začnete krátkou žádostí)",
        kroky: [
          { krok: "EU Login + PIC firmy", popis: "Stejný základ jako u všech EU programů: účet EU Login s dvoufaktorovým ověřením a registrace firmy v Participant Register (PIC).", odkaz: "https://webgate.ec.europa.eu/cas/", odkazText: "EU Login", obrazek: "img/podani/eu-login.png" },
          { krok: "Otevřete téma na portálu a klikněte Start Submission", popis: "Na portálu F&T otevřete téma HORIZON-EIC-2026-ACCELERATOR-01; v sekci Submission Service kliknete na Start Submission – tím se dostanete do podacího rozhraní.", odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/horizon-eic-2026-accelerator-01", odkazText: "Téma EIC Accelerator na portálu F&T", obrazek: "img/podani/eic-topic.png" },
          { krok: "Krok 1: krátká žádost (kdykoli)", popis: "V podacím rozhraní vyplníte krátkou žádost: formulář cca 12 stran + pitch deck do 10 slidů + 3minutové video. Vyhodnocuje se v měsíčních dávkách (první úterý v měsíci), výsledek za 4–6 týdnů.", odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en", odkazText: "EIC Accelerator – oficiální stránka", obrazek: "img/podani/eic-accelerator.png" },
          { krok: "Krok 2: plná žádost (k cut-off termínu)", popis: "Po úspěchu v kroku 1. Cut-offs 2026: 7. 1., 4. 3., 6. 5., 8. 7., 2. 9. a 4. 11. v 17:00 bruselského času. Formulář max 20 stran + deck + video + přílohy: finance a cap table, IP/freedom-to-operate, plán implementace s milníky." },
          { krok: "Krok 3: pohovor před porotou EIC", popis: "Pohovory se konají 3× ročně; připravte pitch a obhajobu čísel – porota jde do hloubky." },
          { krok: "Krok 4: finalizace", popis: "Podle typu podpory: podpis grant agreementu a/nebo jednání o equity investici s EIC Fund. Pozor: současně smíte mít jen jednu živou žádost." }
        ],
        zdroj: "eic.ec.europa.eu + průvodce EUACC/Segler Consulting, ověřeno 9/2026."
      },
      {
        id: "diana",
        programy: ["diana"],
        nazev: "Podání do DIANA (přes web DIANA, s podporou Defence Hubu)",
        kroky: [
          { krok: "Sledujte otevření výzvy", popis: "Výzvy (challenges) se otevírají na diana.nato.int – kohorta 2027 měla uzávěrku 3. 7. 2026, další výzva se čeká v červnu 2027. U každé challenge je applicant guide.", odkaz: "https://www.diana.nato.int/accelerator-programme.html", odkazText: "DIANA Accelerator Programme", obrazek: "img/podani/diana.png" },
          { krok: "Přihlaste se online formulářem ke konkrétní challenge", popis: "Podává jedna firma, v angličtině; vybíráte konkrétní challenge oblast. Přesná podoba portálu se u každé výzvy liší [OVĚŘIT při otevření výzvy]." },
          { krok: "Před podáním se ozvěte Defence Hubu", popis: "Jsme česká akcelerační site DIANA – máme podklady k aktuální výzvě a přihlášku s vámi projdeme. Tohle je nejcennější krok." }
        ],
        zdroj: "diana.nato.int, ověřeno 9/2026."
      },
      {
        id: "nif",
        programy: ["nif"],
        nazev: "Cesta k NATO Innovation Fund (žádné formuláře – standardní VC proces)",
        kroky: [
          { krok: "Připravte investorské materiály", popis: "Pitch deck, data room, finanční plán, cap table – NIF je fond, hodnotí firmu jako investor, ne žádost podle kritérií." },
          { krok: "Získejte warm intro", popis: "Studený e-mail přes nif.fund skoro nikdy nefunguje. Defence Hub umí zprostředkovat představení přes síť DIANA – absolventi akcelerátoru jsou pro NIF viditelnější.", odkaz: "https://www.nif.fund/", odkazText: "nif.fund" },
          { krok: "Standardní VC proces", popis: "Pitch → série jednání → due diligence → investice za podíl. Počítejte s měsíci; fond často vede kolo a chce board seat." }
        ],
        zdroj: "nif.fund, ověřeno 9/2026."
      },
      {
        id: "prodef",
        programy: ["prodef"],
        nazev: "Podání do TAČR PRODEF (informační systém ISTA)",
        kroky: [
          { krok: "Sledujte vyhlášení soutěže", popis: "Veřejné soutěže PRODEF se vyhlašují na tacr.gov.cz včetně zadávací dokumentace.", odkaz: "https://tacr.gov.cz/program/program-prodef/", odkazText: "tacr.gov.cz – PRODEF", obrazek: "img/podani/tacr.png" },
          { krok: "Založte si účet v systému ISTA s předstihem", popis: "Návrhy projektů se podávají přes informační systém TAČR (ista.tacr.cz); registrace a ověření účtu chvíli trvá [OVĚŘIT podmínky u konkrétní soutěže].", odkaz: "https://ista.tacr.cz/", odkazText: "ista.tacr.cz" },
          { krok: "Návrh projektu podle zadávací dokumentace", popis: "U PP2 počítejte s vazbou na potřeby Armády ČR (aplikační garant); u PP1 se dokládá účast v EDF konsorciu." }
        ],
        zdroj: "tacr.gov.cz, ověřeno 9/2026 (podrobnosti vždy v zadávací dokumentaci konkrétní soutěže)."
      },
      {
        id: "optak-deeptech",
        programy: ["optak-deeptech"],
        nazev: "Podání do OP TAK (monitorovací systém IS KP21+)",
        kroky: [
          { krok: "Sledujte vyhlášení výzvy", popis: "Výzvy aktivity Aplikace/DEEP TECH na optak.gov.cz; výzva IV proběhla, další zatím nevyhlášena.", odkaz: "https://optak.gov.cz/", odkazText: "optak.gov.cz", obrazek: "img/podani/optak.png" },
          { krok: "Žádost přes IS KP21+", popis: "Žádosti o podporu z OP TAK se podávají elektronicky přes monitorovací systém IS KP21+ (vyžaduje elektronický podpis) [OVĚŘIT u konkrétní výzvy].", odkaz: "https://iskp21.mssf.cz/", odkazText: "iskp21.mssf.cz" },
          { krok: "Využijte regionální kancelář CzechInvest", popis: "S přípravou žádosti do OP TAK pomáhají regionální kanceláře CzechInvest – propojíme vás." }
        ],
        zdroj: "optak.gov.cz, ověřeno 9/2026."
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
        { kod: "0", nazev: "Jaderné materiály, zařízení a technologie", priklady: ["štěpné a zvláštní štěpné materiály", "reaktory a jejich komponenty", "zařízení pro obohacování a přepracování"], podoblasti: [{"nazev":"Štěpné a zvláštní štěpné materiály","rozhoduje":"druh a množství materiálu"}, {"nazev":"Reaktory a jejich komponenty","rozhoduje":"určení pro jaderný reaktor"}, {"nazev":"Technologie obohacování a přepracování","rozhoduje":"typ technologie"}] },
        { kod: "1", nazev: "Zvláštní materiály a související zařízení", priklady: ["speciální slitiny, kompozity a povlaky", "prekurzory chemických látek", "ochranné a detekční prostředky proti chemickým a biologickým látkám"], podoblasti: [{"nazev":"Speciální slitiny, kompozity, vlákna","rozhoduje":"pevnost, modul pružnosti, tepelná odolnost"}, {"nazev":"Povlaky a maskovací materiály","rozhoduje":"typ a účel povlaku"}, {"nazev":"Prekurzory chemických látek","rozhoduje":"konkrétní látka dle kontrolních seznamů"}, {"nazev":"Ochrana a detekce CBRN látek","rozhoduje":"určení a citlivost detekce"}] },
        { kod: "2", nazev: "Zpracování materiálů", priklady: ["přesné CNC obráběcí stroje", "izostatické lisy", "ložiska zvláštních parametrů"], podoblasti: [{"nazev":"Přesné CNC obráběcí stroje","rozhoduje":"počet řízených os, přesnost polohování"}, {"nazev":"Izostatické lisy","rozhoduje":"pracovní tlak, průměr komory"}, {"nazev":"Speciální ložiska a výrobní zařízení","rozhoduje":"přesnost, materiál"}] },
        { kod: "3", nazev: "Elektronika", priklady: ["radiačně odolné integrované obvody", "vysokofrekvenční a mikrovlnné součástky", "rychlé A/D převodníky s vysokým rozlišením"], podoblasti: [{"nazev":"Radiačně odolné integrované obvody","rozhoduje":"odolnost vůči radiační dávce"}, {"nazev":"Vysokofrekvenční a mikrovlnné součástky","rozhoduje":"pracovní frekvence, výkon"}, {"nazev":"Rychlé A/D převodníky","rozhoduje":"rozlišení v kombinaci s rychlostí vzorkování"}] },
        { kod: "4", nazev: "Počítače", priklady: ["vysoce výkonné výpočetní systémy nad stanovený práh", "počítače odolné proti extrémním podmínkám"], podoblasti: [{"nazev":"Vysoce výkonné výpočetní systémy","rozhoduje":"agregovaný výpočetní výkon"}, {"nazev":"Počítače odolné do extrémních podmínek","rozhoduje":"teplotní rozsah, radiační odolnost"}] },
        { kod: "5", nazev: "Telekomunikace (část 1) a informační bezpečnost / šifrování (část 2)", priklady: ["rádiové systémy s frekvenčním skákáním a adaptivními technikami", "systémy odolné proti odposlechu a rušení", "kryptografie nad stanovené parametry – typicky položka 5A002"], podoblasti: [{"nazev":"Rádiové systémy s frekvenčním skákáním / adaptivními technikami","rozhoduje":"šířka pásma, použité techniky"}, {"nazev":"Systémy odolné proti odposlechu a rušení","rozhoduje":"použité techniky odolnosti"}, {"nazev":"Kryptografie a šifrovací produkty (typicky 5A002)","rozhoduje":"typ algoritmu, délka klíče, kdo šifrování ovládá"}] },
        { kod: "6", nazev: "Senzory a lasery", priklady: ["termovizní a noktovizní kamery nad stanovenou citlivost/rozlišení", "akustické a podvodní senzory (hydrofony)", "radary, gravimetry, lasery nad stanovený výkon či vlnové délky"], podoblasti: [{"nazev":"Termovizní a noktovizní kamery, obrazové senzory","rozhoduje":"citlivost, rozlišení, snímková frekvence"}, {"nazev":"Akustické a podvodní senzory (hydrofony, sonary)","rozhoduje":"citlivost, pracovní frekvence a hloubka"}, {"nazev":"Radary","rozhoduje":"frekvenční pásma, výkon, techniky zpracování signálu"}, {"nazev":"Lasery","rozhoduje":"výkon, vlnová délka, pulzní energie"}, {"nazev":"Gravimetry a magnetometry","rozhoduje":"přesnost, šum"}] },
        { kod: "7", nazev: "Navigace a letecká elektronika (avionika)", priklady: ["inerciální navigační systémy a gyroskopy s driftem pod stanovenou mez", "GNSS přijímače odolné proti rušení pro vysoké rychlosti a výšky"], podoblasti: [{"nazev":"Inerciální navigace, gyroskopy, akcelerometry","rozhoduje":"drift, stabilita (bias)"}, {"nazev":"GNSS přijímače odolné proti rušení","rozhoduje":"použité techniky, limity rychlosti a výšky"}, {"nazev":"Letecká elektronika (avionika)","rozhoduje":"určení a parametry dle položky"}] },
        { kod: "8", nazev: "Námořní technika", priklady: ["ponorná a bezosádková podvodní plavidla", "tiché pohony", "senzory pro podvodní použití"], podoblasti: [{"nazev":"Ponorná a bezosádková podvodní plavidla","rozhoduje":"pracovní hloubka, autonomie"}, {"nazev":"Tiché pohony","rozhoduje":"hlučnost, typ pohonu"}, {"nazev":"Senzory pro podvodní použití","rozhoduje":"citlivost, pracovní hloubka"}] },
        { kod: "9", nazev: "Letecká technika, kosmonautika a pohony", priklady: ["raketové a proudové motory a jejich komponenty", "bezpilotní prostředky se stanoveným doletem/nosností", "kosmické technologie"], podoblasti: [{"nazev":"Raketové a proudové motory a komponenty","rozhoduje":"tah, specifické parametry pohonu"}, {"nazev":"Bezpilotní prostředky (UAV)","rozhoduje":"dolet, nosnost, vytrvalost"}, {"nazev":"Kosmické systémy a komponenty","rozhoduje":"určení pro kosmické použití"}, {"nazev":"Žáruvzdorné a tepelně-ochranné systémy","rozhoduje":"pracovní teploty, materiál"}] }
      ]
    },
    verdikty: {
      vojensky: {
        semafor: "cervena", stitek: "VOJENSKÝ MATERIÁL – PŘÍSNÝ REŽIM",
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
        semafor: "cervena", stitek: "JSTE PRAVDĚPODOBNĚ DUAL-USE – NA VÝVOZ NUTNÉ POVOLENÍ",
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
        semafor: "zluta", stitek: "RADĚJI KONTROLA – NECHTE PRODUKT ZATŘÍDIT",
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
        semafor: "zelena", stitek: "PARAMETRY POD KONTROLNÍ PRAHY – PRAVDĚPODOBNĚ MIMO SEZNAMY",
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
  // -------------------------------------------------------------------
  // CERTIFIKACE A POVOLENÍ (katalog s postupy; rešerše 9/2026)
  // -------------------------------------------------------------------
  certifikace: {
    uvod: "Katalog certifikací a povolení pro defence a dual-use firmy: co to je, kdy to potřebujete a jak o to zažádat. Orientační časy a ceny vždy ověřte u úřadu či certifikační společnosti – Defence Hub pomůže s celou cestou.",
    skupiny: [
      {
        id: "nato",
        nazev: "NATO dodavatelský řetězec",
        kdy: "Chcete dodávat armádám, do NATO zakázek nebo jako subdodavatel větších obranných firem.",
        polozky: [
          {
            id: "ncage",
            nazev: "NCAGE kód",
            coJe: "Identifikátor firmy v kodifikačním systému NATO – obdoba IČO pro NATO svět. Bez něj vás nákupní systémy armád a NSPA „nevidí“.",
            kdyPotrebuji: "První krok pro jakékoli dodávky armádám a do NATO zakázek; podmínka registrace u NSPA a kodifikace položek.",
            trvani: "Dny až týdny; zdarma.",
            kroky: [
              { krok: "Zažádejte u Úř OSK SOJ", popis: "NCAGE v ČR přiděluje Úřad pro obrannou standardizaci, katalogizaci a státní ověřování jakosti (Ministerstvo obrany). Postup a kontakty na webu úřadu [OVĚŘIT formulář].", odkaz: "https://urosksoj.mo.gov.cz/", odkazText: "Úř OSK SOJ", obrazek: "img/podani/urosksoj.png" },
              { krok: "Ověřte přidělení v databázi NATO", popis: "Přidělený NCAGE si ověříte ve veřejném NATO Master Catalogue (NMCRL)." }
            ]
          },
          {
            id: "iso9001",
            nazev: "ISO 9001",
            coJe: "Základní certifikace systému řízení kvality. V obranném světě se bere jako minimum serióznosti dodavatele.",
            kdyPotrebuji: "Prakticky vždy, když chcete dodávat armádám nebo velkým integrátorům; výchozí bod pro AS9100 i AQAP.",
            trvani: "Zavedení a certifikace obvykle 3–9 měsíců; cena dle velikosti firmy [orientačně desítky až stovky tisíc Kč – OVĚŘIT u certifikační společnosti].",
            kroky: [
              { krok: "Zaveďte systém řízení kvality", popis: "Interně nebo s poradcem: procesy, dokumentace, odpovědnosti." },
              { krok: "Vyberte akreditovanou certifikační společnost", popis: "Certifikát vydává akreditovaný certifikační orgán (v ČR akreditace ČIA) po auditu." }
            ]
          },
          {
            id: "as9100",
            nazev: "AS9100 / EN 9100",
            coJe: "Nadstavba ISO 9001 pro letecký, kosmický a obranný průmysl (hardware).",
            kdyPotrebuji: "Když vyrábíte hardware pro aerospace/defence dodavatelské řetězce – primes ji od dodavatelů často vyžadují.",
            trvani: "Navazuje na ISO 9001; měsíce [OVĚŘIT u certifikační společnosti].",
            kroky: [
              { krok: "Postavte na ISO 9001 a doplňte požadavky EN 9100", popis: "Certifikují akreditované společnosti; audity jsou přísnější než u ISO 9001." }
            ]
          },
          {
            id: "nspa",
            nazev: "Registrace u NSPA",
            coJe: "Zápis do databáze dodavatelů NATO Support and Procurement Agency – přes ni nakupuje NATO a řada armád.",
            kdyPotrebuji: "Chcete-li se účastnit tendrů NSPA; podmínkou je NCAGE.",
            trvani: "Zdarma; online registrace.",
            kroky: [
              { krok: "Zaregistrujte se na portálu NSPA", popis: "Vyplníte profil dodavatele (potřebujete NCAGE) a vyberete komoditní oblasti.", odkaz: "https://www.nspa.nato.int/", odkazText: "nspa.nato.int" }
            ]
          },
          {
            id: "aqap",
            nazev: "AQAP (2110/2310)",
            coJe: "Požadavky NATO na řízení kvality v konkrétních kontraktech; plnění ověřuje stát – státní ověřování jakosti (GQA) dělá Úř OSK SOJ.",
            kdyPotrebuji: "Když to vyžaduje konkrétní obranný kontrakt – nejde o certifikát „do zásoby“, řeší se ke kontraktu.",
            trvani: "Dle kontraktu.",
            kroky: [
              { krok: "Vyjasněte požadavek v kontraktu", popis: "Který AQAP (2110 vývoj/výroba, 2310 aerospace…) kontrakt vyžaduje; navazuje na ISO 9001/EN 9100." },
              { krok: "Počítejte se státním ověřováním jakosti", popis: "GQA provádí Úř OSK SOJ u vás ve výrobě.", odkaz: "https://urosksoj.mo.gov.cz/", odkazText: "Úř OSK SOJ" }
            ]
          },
          {
            id: "nsn",
            nazev: "Kodifikace položky (NSN)",
            coJe: "Zařazení konkrétního výrobku do katalogu NATO (NATO Stock Number) – bez NSN armády položku nenakoupí do zásob.",
            kdyPotrebuji: "Když máte smlouvu o dodávkách materiálu pro MO ČR / armádu – kodifikace je součástí dodávky.",
            trvani: "Řeší se ke konkrétní smlouvě; s přípravou dat pomáhají kodifikační agentury (např. AURA).",
            kroky: [
              { krok: "Podmínkou je smlouva s MO", popis: "Kodifikaci zahajuje smlouva o dodávce; úřad v řízení přidělí NSN (a případně NCAGE).", odkaz: "https://urosksoj.mo.gov.cz/", odkazText: "Úř OSK SOJ" }
            ]
          }
        ]
      },
      {
        id: "export",
        nazev: "Exportní povolení",
        kdy: "Vyvážíte (nebo plánujete vývoz) mimo ČR/EU – dual-use položky nebo vojenský materiál.",
        polozky: [
          {
            id: "dualuse-povoleni",
            nazev: "Vývozní povolení dual-use",
            coJe: "Povolení k vývozu položek přílohy I nařízení (EU) 2021/821 mimo EU (u přílohy IV i uvnitř EU). Typy: všeobecná povolení EU001–EU008, souhrnná a individuální.",
            kdyPotrebuji: "Když je váš produkt na kontrolním seznamu dual-use a míří za hranice – ověříte v našem dual-use poradci.",
            trvani: "Individuální povolení týdny až měsíce [OVĚŘIT u Licenční správy]; evidence vývozů 5 let a pololetní hlášení.",
            kroky: [
              { krok: "Zatřiďte produkt", popis: "Projděte dual-use poradce v této aplikaci; závazné zatřídění a stanovisko dělá Licenční správa MPO." },
              { krok: "Zvolte typ povolení a podejte žádost u Licenční správy MPO", popis: "Nejdřív zkontrolujte, jestli se na váš případ nevztahuje všeobecné povolení EU001–EU008 (nejrychlejší cesta); jinak individuální/souhrnné povolení.", odkaz: "https://www.mpo.gov.cz", odkazText: "Licenční správa MPO", obrazek: "img/podani/mpo.png" },
              { krok: "Nastavte interní compliance", popis: "Evidence vývozů min. 5 let, pololetní hlášení MPO, prověřování koncového užití (catch-all čl. 4 a 5 nařízení)." }
            ]
          },
          {
            id: "vojmat-licence",
            nazev: "Povolení a licence na vojenský materiál",
            coJe: "Dvoustupňový režim podle zákona 38/1994 Sb.: nejdřív povolení k obchodování s vojenským materiálem (firma), pak licence na každý konkrétní obchod.",
            kdyPotrebuji: "Když je produkt na seznamu vojenského materiálu (vyhláška 210/2012 Sb.) a chcete s ním obchodovat se zahraničím.",
            trvani: "Povolení: měsíce (závazná stanoviska MZV, MO a MV); licence pak ke každému obchodu. Řešte před prvním jednáním se zahraničním partnerem.",
            kroky: [
              { krok: "Žádost o povolení k obchodování", popis: "Podává se u Licenční správy MPO; úřad si vyžádá stanoviska MZV, MO a MV.", odkaz: "https://www.mpo.gov.cz", odkazText: "Licenční správa MPO" },
              { krok: "Licence na konkrétní obchod", popis: "S povolením žádáte o licenci ke každému kontraktu (teritorium, položky, objem)." }
            ]
          }
        ]
      },
      {
        id: "nbu",
        nazev: "Prověrky NBÚ (utajované informace)",
        kdy: "Zakázky, kde přijdete do styku s utajovanými informacemi (stupně Vyhrazené / Důvěrné / Tajné / Přísně tajné).",
        polozky: [
          {
            id: "nbu-podnikatel",
            nazev: "Osvědčení podnikatele",
            coJe: "Osvědčení firmy pro přístup k utajovaným informacím (průmyslová bezpečnost, zákon 412/2005 Sb.). Pro stupeň Vyhrazené stačí jednodušší režim bez plného řízení.",
            kdyPotrebuji: "Od stupně Důvěrné výš – typicky obranné zakázky s utajením. Nežádejte „do zásoby“, ale s konkrétní zakázkou.",
            trvani: "Měsíce až přes rok podle stupně a formy přístupu – počítejte s tím v harmonogramu.",
            kroky: [
              { krok: "Ujasněte stupeň a formu přístupu", popis: "Co zakázka skutečně vyžaduje (stupeň utajení; jestli utajovaná informace u vás vzniká, nebo k ní jen přistupujete) – ovlivňuje rozsah řízení." },
              { krok: "Stáhněte dotazníky a připravte podklady", popis: "Dotazníky a seznam příloh jsou na webu NBÚ; součástí je i prohlášení zprošťující finanční úřad mlčenlivosti.", odkaz: "https://nbu.gov.cz/cs/roz-potrebuji-vyridit/pravnicka-osoba-prumyslova-bezpecnost", odkazText: "NBÚ – podnikatel (průmyslová bezpečnost)", obrazek: "img/podani/nbu.png" },
              { krok: "Podejte žádost", popis: "Osobně na podatelně NBÚ, poštou nebo datovou schránkou (předmět: „Žádost o vydání osvědčení podnikatele“)." }
            ]
          },
          {
            id: "nbu-osoba",
            nazev: "Osvědčení fyzické osoby",
            coJe: "Prověrka konkrétních lidí, kteří s utajovanými informacemi pracují.",
            kdyPotrebuji: "Souběžně s osvědčením podnikatele – prověření musí být lidé, ne jen firma.",
            trvani: "Podle stupně: měsíce.",
            kroky: [
              { krok: "Žádost + dotazník fyzické osoby", popis: "Formuláře a postup na webu NBÚ.", odkaz: "https://nbu.gov.cz", odkazText: "nbu.gov.cz" }
            ]
          }
        ]
      },
      {
        id: "civil",
        nazev: "Civilní certifikace",
        kdy: "Prodáváte (i) na civilní trh v EU – dual-use firmy typicky potřebují obojí svět.",
        polozky: [
          {
            id: "ce",
            nazev: "CE značení",
            coJe: "Prohlášení shody s harmonizačními předpisy EU (EMC, RED, strojní směrnice…). Čistě vojenský materiál CE zpravidla nenese (vyloučení, čl. 346 SFEU); dual-use a komerční produkty ano.",
            kdyPotrebuji: "Před uvedením výrobku na trh EU.",
            trvani: "Dle směrnic a nutnosti notifikované osoby – týdny až měsíce.",
            kroky: [
              { krok: "Určete, které předpisy se na produkt vztahují", popis: "EMC, RED (rádiová zařízení), LVD, strojní nařízení… – podle nich testy a technická dokumentace." },
              { krok: "Posouzení shody a EU prohlášení o shodě", popis: "Vlastní posouzení, nebo přes notifikovanou osobu (podle předpisu); pak označení CE." }
            ]
          },
          {
            id: "iso27001",
            nazev: "ISO 27001 / kyberbezpečnost (NIS2)",
            coJe: "Certifikace řízení informační bezpečnosti; NIS2 přenesená do českého zákona o kybernetické bezpečnosti přidává povinnosti regulovaným subjektům [OVĚŘIT dopad na vaši firmu].",
            kdyPotrebuji: "Softwarové a datové produkty pro stát a kritickou infrastrukturu; velcí zákazníci ji často vyžadují v tendrech.",
            trvani: "Zavedení měsíce; certifikace přes akreditovanou společnost.",
            kroky: [
              { krok: "Zaveďte ISMS a certifikujte", popis: "Obdobně jako ISO 9001 – akreditovaný certifikační orgán po auditu; NIS2 povinnosti ověřte u NÚKIB.", odkaz: "https://nukib.gov.cz", odkazText: "nukib.gov.cz" }
            ]
          }
        ]
      }
    ],
    zdroj: "Rešerše z veřejných zdrojů 9/2026 (nbu.gov.cz, urosksoj.mo.gov.cz, mpo.gov.cz, nspa.nato.int); orientační časy a ceny ověřte u úřadů a certifikačních společností. Defence Hub vás celou cestou provede."
  },

  // -------------------------------------------------------------------
  // UKRAJINA A TESTOVÁNÍ (rešerše z veřejných zdrojů 9/2026)
  // -------------------------------------------------------------------
  ukrajina: {
    uvod: "Ukrajina je dnes nejrychlejší cesta, jak ověřit obrannou technologii v reálném nasazení – a EU na to má konkrétní nástroje. Hlavní vstupy pro české firmy:",
    cesty: [
      {
        nazev: "Test in Ukraine (Brave1)",
        program: "eudis",
        popis: "Platforma ukrajinského defence-tech inkubátoru Brave1 (spuštěna 17. 7. 2025): zahraniční firmy testují technologie v reálných bojových podmínkách a dostávají přímou zpětnou vazbu od ukrajinských vojáků. K 11/2025 přihlášeno 126 zahraničních firem ze 17 zemí. Pro TRL 4+. Web: brave1.gov.ua"
      },
      {
        nazev: "BraveTech EU (EU + Ukrajina)",
        program: "edip",
        popis: "Společná aliance EU a Ukrajiny: 100 mil. € (50/50 Evropská komise a ukrajinská vláda). Fáze 1: hackathony a technologické výzvy; fáze 2 (2026, 35 mil. €, provozně řídí Evropská obranná agentura EDA): škálování nejlepších řešení a přístup do EUDIS akcelerátorů a EDF. Web: eu.brave1.tech"
      },
      {
        nazev: "DefTech Forges – technologické výzvy BraveTech EU",
        program: "edip",
        popis: "Série soutěží pro defence startupy z EU a Ukrajiny (TRL 4+): granty 120 000 € s možností navazujícího financování až 750 000 €. Přihlášky do 6. 9. 2026 na eu.brave1.tech."
      },
      {
        nazev: "EUDIS Accelerator – modul Test in Ukraine",
        program: "eudis",
        popis: "Účastníci EUDIS akcelerátoru mohou technologii otestovat v podmínkách replikujících ukrajinské bojiště, po boku vojenských operátorů a v reálných omezeních. Pro TRL 4+."
      },
      {
        nazev: "Brave International – společné grantové fondy",
        program: "eudis",
        popis: "Mezinárodní větev Brave1: grantové fondy 50/50 s partnerskými zeměmi, celkem přes 100 mil. € (schváleno vládou Ukrajiny 6/2026). Soutěže otevřené ukrajinským i zahraničním firmám; podmínkou je validace řešení na bojišti přes Test in Ukraine."
      },
      {
        nazev: "EDIP – podpora ukrajinského obranného průmyslu",
        program: "edip",
        popis: "EDIP vyčleňuje 260 mil. € na integraci ukrajinského obranného průmyslu do evropského; BraveTech EU je jeho součástí."
      },
      {
        nazev: "DIANA – síť testovacích center",
        program: "diana",
        popis: "Mimo Ukrajinu: účastníci akcelerátoru DIANA mají přístup k síti 200+ testovacích center ve 32 zemích NATO."
      }
    ],
    akce: "Nejbližší akce: summit Defence Tech Valley 2026 ve Lvově (září 2026); hackathony BraveTech EU 2026 proběhly také v Estonsku a Francii.",
    overeno: "Rešerše z veřejných zdrojů 9/2026 – před podáním přihlášky ověřte aktuální podmínky na uvedených webech; tým DH rád pomůže."
  },

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
        { v: "grant", t: "Grant", p: "Non-dilutive – bez odevzdání podílu" },
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
