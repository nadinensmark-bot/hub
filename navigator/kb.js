// =====================================================================
// DH Kompas – znalostní báze (knowledge base)
// ---------------------------------------------------------------------
// TENTO SOUBOR JE JEDINÝ ZDROJ OBSAHU APLIKACE. Upravuje se přímo tady
// (nebo v aplikaci na záložce „Knowledge base" – tam se změny ukládají
// jen do prohlížeče a dají se exportovat zpět do tohoto souboru).
//
// DŮLEŽITÉ: Položky označené overit:true obsahují částky/termíny,
// které je potřeba před spuštěním zkontrolovat proti oficiálním
// zdrojům. Aplikace je zobrazuje se štítkem „ověřit".
// =====================================================================

window.DH_KB = {

  meta: {
    verze: "0.1 (koncept)",
    aktualizovano: "2026-09-04",
    kontakt: "Defence Hub CzechInvest – tým vám s výběrem programu i přihláškou pomůže osobně."
  },

  // -------------------------------------------------------------------
  // PROGRAMY
  // Osy pro párování (wizard):
  //  zamereni: "defence" | "dual" | "civil"  (co program financuje)
  //  trl: [min, max]
  //  typ: "grant" | "equity" | "akcelerator" | "mix"
  //  konsorcium: true = vyžaduje partnery, false = žádá jedna firma
  //  velikost: komu je určen ("startup","sme","midcap","research")
  // -------------------------------------------------------------------
  programy: [

    {
      id: "diana",
      nazev: "NATO DIANA Accelerator",
      kratce: "Akcelerátor NATO pro dual-use deep tech. Česko má vlastní akcelerační místo hostované Defence Hubem.",
      typ: "akcelerator",
      zamereni: "dual",
      trl: [4, 7],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Grant 100 000 € ve fázi 1; vybrané firmy postupují do fáze 2 s vyšší podporou",
      overit: true,
      proKoho: "Startupy z členských zemí NATO s technologií využitelnou civilně i obranně (dual-use). Žádá jedna firma, konsorcium není potřeba.",
      jakFunguje: [
        "Výzvy (challenges) se vypisují k tématům, která NATO definuje – např. senzorika, energie, bezpečná komunikace, autonomie.",
        "Šestiměsíční akcelerační program: grant, mentoring, přístup k testovacím centrům a síti koncových uživatelů v NATO.",
        "Nejlepší firmy postupují do fáze 2 a získávají viditelnost u NATO Innovation Fund a spojeneckých zákazníků."
      ],
      vhodnyKdyz: [
        "Máte funkční prototyp nebo technologii blízko nasazení (zhruba TRL 4+).",
        "Technologie má civilní i obranné využití a umíte to doložit.",
        "Chcete se dostat k obranným koncovým uživatelům, ale nemáte kontakty."
      ],
      nevhodnyKdyz: [
        "Technologie je čistě zbraňová (lethal) – DIANA se soustředí na dual-use.",
        "Jste ve fázi čistého výzkumu bez prototypu."
      ],
      terminy: "Výzvy zpravidla jednou ročně; přesné datum aktuální výzvy doplní tým DH.",
      terminyOverit: true,
      odkaz: "https://www.diana.nato.int",
      pomocDH: "Defence Hub hostí český akcelerátor DIANA – jsme přímo u zdroje. Ozvěte se nám před podáním přihlášky."
    },

    {
      id: "edf",
      nazev: "EDF – European Defence Fund",
      kratce: "Hlavní grantový program EU pro obranný výzkum a vývoj. Velké projekty v mezinárodních konsorciích.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Granty v řádu jednotek až desítek mil. € na projekt; u výzkumných akcí až 100% financování, u vývojových se spolufinancují",
      overit: true,
      proKoho: "Firmy a výzkumné organizace z EU/Norska. Podmínkou je konsorcium minimálně 3 subjektů ze 3 různých způsobilých zemí. Vybraná témata mají bonusy pro MSP.",
      jakFunguje: [
        "Evropská komise (DG DEFIS) vypisuje roční výzvy podle tematických kategorií (senzorika, kybernetika, vzdušné a pozemní systémy, materiály…).",
        "Žádost podává konsorcium; hodnotí se excelence, dopad a kvalita provedení.",
        "U vývojových akcí je zpravidla potřeba podpora ministerstev obrany zapojených států."
      ],
      vhodnyKdyz: [
        "Míříte na obranný trh a jste připraveni pracovat v mezinárodním konsorciu.",
        "Máte kapacitu na víceletý projekt a administrativu evropského grantu.",
        "Umíte se napojit na většího systémového integrátora (i jako subdodavatel/partner)."
      ],
      nevhodnyKdyz: [
        "Potřebujete peníze rychle (od výzvy k podpisu smlouvy uběhne zpravidla přes rok).",
        "Nechcete/nemůžete sdílet projekt s partnery z dalších zemí."
      ],
      terminy: "Výzvy jednou ročně, obvykle s uzávěrkou na podzim. Aktuální data doplní tým DH.",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu/eu-defence-industry/european-defence-fund-edf_en",
      pomocDH: "Pomůžeme s hledáním konsorcia (matchmaking) a propojíme vás s národním kontaktním bodem."
    },

    {
      id: "eudis",
      nazev: "EUDIS – EU Defence Innovation Scheme",
      kratce: "Deštník podpor pro startupy a MSP v obraně: business akcelerátor, matchmaking, hackathony, kaskádové financování.",
      typ: "mix",
      zamereni: "dual",
      trl: [3, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Podle nástroje – od účasti zdarma (akcelerátor, matchmaking) po granty z kaskádového financování",
      overit: true,
      proKoho: "Startupy a MSP z EU/Norska, které chtějí vstoupit do obranného sektoru, ale na velký EDF projekt zatím nedosáhnou.",
      jakFunguje: [
        "Business akcelerátor: koučink a příprava firem na obranný trh.",
        "Matchmaking eventy: propojení s velkými hráči a integrátory (cesta k EDF konsorciím).",
        "Kaskádové financování: menší granty vypisované přes zprostředkovatele – rychlejší a jednodušší než plný EDF.",
        "Hackathony a ceny za inovace."
      ],
      vhodnyKdyz: [
        "Jste na začátku cesty do defence a potřebujete kontakty, reference a menší grant.",
        "Chcete se časem dostat do EDF konsorcia."
      ],
      nevhodnyKdyz: [
        "Hledáte jednorázově velký objem financí – to je spíš EDF nebo investice."
      ],
      terminy: "Jednotlivé nástroje mají vlastní kalendář – průběžně během roku.",
      terminyOverit: true,
      odkaz: "https://eudis.europa.eu",
      pomocDH: "Sledujeme výzvy EUDIS průběžně – napište nám, kterou oblast řešíte, a pohlídáme relevantní termíny."
    },

    {
      id: "eic-accelerator",
      nazev: "EIC Accelerator",
      kratce: "Vlajkový nástroj EU pro deep tech scale-upy: grant + investice do equity. Nově otevřen i dual-use technologiím.",
      typ: "mix",
      zamereni: "dual",
      trl: [5, 9],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Grant do 2,5 mil. € + equity investice EIC Fondu (řádově jednotky mil. €, u strategických technologií více)",
      overit: true,
      proKoho: "Jednotlivé inovativní MSP/startupy z EU s technologií kolem TRL 5–8 a ambicí škálovat na evropský/globální trh.",
      jakFunguje: [
        "Krok 1: krátká žádost (pitch deck, video, stručný popis) – podává se kdykoli.",
        "Krok 2: úplná žádost k pevné uzávěrce (cut-off).",
        "Krok 3: pohovor před porotou. Úspěšní získají grant, investici, nebo obojí (blended finance)."
      ],
      vhodnyKdyz: [
        "Máte validovanou technologii a jasný komerční plán – EIC je soutěž byznysových plánů, ne jen výzkumu.",
        "Vaše technologie je dual-use s primárně civilním trhem."
      ],
      nevhodnyKdyz: [
        "Projekt je čistě obranný/zbraňový – tam patří EDF/EUDIS.",
        "Jste před prototypem (podívejte se na EIC Pathfinder/Transition)."
      ],
      terminy: "Krátká žádost průběžně; úplné žádosti k cut-off termínům několikrát ročně.",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en",
      pomocDH: "Propojíme vás s národními kontakty pro EIC a s firmami, které už EIC prošly."
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
        "Transition: navazuje na výsledky (Pathfinder/ERC) a posouvá je k prototypu a prvnímu byznys plánu."
      ],
      vhodnyKdyz: [
        "Jste univerzitní tým / spin-off s průlomovým nápadem hluboko před trhem."
      ],
      nevhodnyKdyz: [
        "Už máte produkt a zákazníky – to je EIC Accelerator nebo DIANA."
      ],
      terminy: "Výzvy podle pracovního programu EIC – aktuální data doplní tým DH.",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en",
      pomocDH: "Poradíme, jestli je pro vás dřív Pathfinder, Transition, nebo rovnou Accelerator."
    },

    {
      id: "nif",
      nazev: "NATO Innovation Fund (NIF)",
      kratce: "Miliardový venture fond zemí NATO. Nekupuje projekty, kupuje podíly – equity investice do deep tech a dual-use startupů.",
      typ: "equity",
      zamereni: "dual",
      trl: [4, 9],
      konsorcium: false,
      velikost: ["startup"],
      castka: "Equity investice typicky v raných kolech (pre-seed až series B), výše dle kola",
      overit: true,
      proKoho: "Startupy se sídlem v zúčastněných zemích NATO. Účast ČR ve fondu ověřit – [DOPLNIT stav].",
      jakFunguje: [
        "Standardní VC proces: pitch, due diligence, investice za podíl ve firmě.",
        "Investuje přímo do startupů i do dalších fondů; úzce navázán na DIANA (absolventi mají výhodu viditelnosti)."
      ],
      vhodnyKdyz: [
        "Nechcete grantový projekt, ale investora, který rozumí obrannému trhu a otevře dveře k vládním zákazníkům."
      ],
      nevhodnyKdyz: [
        "Nechcete ředit podíl zakladatelů – pak zůstaňte u grantů."
      ],
      terminy: "Průběžně – žádné uzávěrky, standardní investiční proces.",
      terminyOverit: false,
      odkaz: "https://www.nif.fund",
      pomocDH: "Přes síť DIANA umíme zprostředkovat první kontakt."
    },

    {
      id: "horizon-cl3",
      nazev: "Horizont Evropa – Klastr 3 (Civilní bezpečnost)",
      kratce: "Výzkum pro civilní bezpečnost: ochrana obyvatel, kritická infrastruktura, kybernetická bezpečnost, hranice. Výhradně civilní aplikace.",
      typ: "grant",
      zamereni: "civil",
      trl: [3, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Granty řádově jednotky mil. € na projekt v konsorciu",
      overit: true,
      proKoho: "Konsorcia firem, výzkumných organizací a koncových uživatelů (policie, hasiči, správci infrastruktury). Projekty musí mít výhradně civilní zaměření.",
      jakFunguje: [
        "Roční výzvy podle destinací (odolná infrastruktura, boj proti kriminalitě, kyberbezpečnost, zvládání katastrof…).",
        "Velký důraz na zapojení koncových uživatelů do konsorcia."
      ],
      vhodnyKdyz: [
        "Vaše technologie má bezpečnostní (security), ale ne vojenské (defence) využití – nebo chcete civilní větev dual-use technologie financovat odděleně."
      ],
      nevhodnyKdyz: [
        "Výstup má být vojenský – to patří do EDF."
      ],
      terminy: "Výzvy jednou ročně dle pracovního programu.",
      terminyOverit: true,
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      pomocDH: "Nasměrujeme vás na národní kontaktní bod pro Horizont Evropa (TC Praha)."
    },

    {
      id: "edip",
      nazev: "EDIP a navazující nástroje (sledovat)",
      kratce: "Připravovaný program EU pro posílení obranné výroby a společné pořizování. Relevantní spíš pro zavedené výrobce – ale vyplatí se sledovat.",
      typ: "grant",
      zamereni: "defence",
      trl: [7, 9],
      konsorcium: true,
      velikost: ["sme", "midcap"],
      castka: "[DOPLNIT] – parametry programu se v době přípravy této KB finalizovaly",
      overit: true,
      proKoho: "Výrobci a dodavatelé do obranných dodavatelských řetězců. Pro startupy hlavně nepřímo – jako signál, kam poteče poptávka.",
      jakFunguje: [
        "Navazuje na dočasné nástroje ASAP (munice) a EDIRPA (společné pořizování).",
        "Detaily výzev doplní tým DH po zveřejnění pracovního programu."
      ],
      vhodnyKdyz: [
        "Máte hotový produkt a řešíte škálování výroby pro obranné zakázky."
      ],
      nevhodnyKdyz: [
        "Jste ve vývojové fázi – začněte u EDF/EUDIS/DIANA."
      ],
      terminy: "[DOPLNIT po zveřejnění]",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pomocDH: "Zařadíme vás do rozesílky – dáme vědět, až budou výzvy venku."
    }
  ],

  // -------------------------------------------------------------------
  // PRŮVODCE PŘIHLÁŠKOU – obecné kroky + specifika programů
  // -------------------------------------------------------------------
  prihlaska: {
    obecneKroky: [
      {
        krok: "Ujasněte si příběh",
        popis: "Jedna věta: jaký problém řešíte, pro koho a proč právě vy. Hodnotitelé čtou desítky žádostí – ta vaše musí být srozumitelná v první minutě."
      },
      {
        krok: "Přečtěte si výzvu 2×",
        popis: "Hodnotí se soulad s textem výzvy, ne obecná kvalita nápadu. Vypište si hodnoticí kritéria a ke každému připravte odpověď."
      },
      {
        krok: "Sestavte tým a partnery včas",
        popis: "Konsorcium (kde je potřeba) se staví měsíce, ne týdny. Podpisové procesy u univerzit a velkých firem trvají."
      },
      {
        krok: "Čísla, ne přídavná jména",
        popis: "„Unikátní řešení“ nikoho nepřesvědčí. TRL doložené testy, metriky výkonu, LOI od zákazníků, velikost trhu se zdrojem."
      },
      {
        krok: "Rozpočet stavte zdola",
        popis: "Od aktivit k penězům, ne naopak. Nafouknutý rozpočet je nejčastější důvod srážky bodů."
      },
      {
        krok: "Nechte to přečíst někoho zvenku",
        popis: "Ideálně někoho, kdo hodnotil nebo psal úspěšné žádosti. Defence Hub umí zprostředkovat zpětnou vazbu."
      },
      {
        krok: "Odevzdejte s rezervou",
        popis: "Portály před uzávěrkou padají. Cíl: kompletní žádost v systému minimálně 48 hodin předem."
      }
    ],
    checklisty: {
      diana: [
        "Přihláška reaguje na konkrétní vypsanou challenge (ne obecně)",
        "Dual-use využití popsáno konkrétně: civilní zákazník + obranný scénář",
        "Doložený stav technologie (demo, video, výsledky testů)",
        "Tým: kdo má jaké kompetence, kdo se programu bude reálně účastnit",
        "Plán, co s grantem za 6 měsíců uděláte (milníky)",
        "Ochota pracovat s testovacími centry a koncovými uživateli NATO"
      ],
      edf: [
        "Konsorcium: min. 3 subjekty ze 3 způsobilých zemí, role rozdělené",
        "Soulad s tématem výzvy doložen bod po bodu",
        "Podpora ministerstev obrany (u vývojových akcí) domluvena předem",
        "Pracovní balíčky (WP) s milníky a deliverably",
        "Rozpočet po partnerech a kategoriích, zdůvodněný",
        "Ošetřené duševní vlastnictví (konsorciální smlouva aspoň v draftu)",
        "Bezpečnostní aspekty: kdo potřebuje prověrky, jak se nakládá s citlivými daty"
      ],
      "eic-accelerator": [
        "Pitch deck (formát dle výzvy) a video",
        "Krátká žádost podána a schválena (krok 1)",
        "Finanční plán: co grant, co equity, co vlastní zdroje",
        "Důkazy trakce: zákazníci, LOI, tržby, piloty",
        "Kapitalizační tabulka a struktura firmy připravená na investici",
        "Příprava na pohovor: pitch do 10 minut + obhajoba čísel"
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
  // FÁZE 2: DUAL-USE PŘEKLADAČ – mapa domén
  // Pro každou doménu: obranné use casy <-> komerční sektory a use casy
  // + co se při „překladu" mění (zákazník, certifikace, prodejní cyklus)
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

    // Co se mění při přechodu mezi světy – zobrazuje se u každého překladu
    zmenyDefenceKomercni: [
      { co: "Zákazník", z: "Stát / armáda – jeden velký zákazník, dlouhé tendry", na: "Firmy – více menších zákazníků, kratší prodejní cyklus" },
      { co: "Certifikace", z: "Vojenské standardy (STANAG, MIL-STD), utajení", na: "Civilní normy (CE, ISO, oborové certifikace), GDPR" },
      { co: "Cena a marže", z: "Cena za odolnost a spolehlivost v extrémech", na: "Tlak na cenu – nutné zlevnit, zjednodušit, škálovat" },
      { co: "Produkt", z: "Řešení na míru, malé série", na: "Standardizovaný produkt, samoobslužnost, servis" },
      { co: "Marketing", z: "Reference a vztahy, veletrhy, tendry", na: "Digitální marketing, produktová prezentace, pricing veřejně" }
    ],
    zmenyKomercniDefence: [
      { co: "Zákazník", z: "Firmy – rychlá rozhodnutí, pilot za týdny", na: "Stát / armáda – akviziční proces v letech, tendry, politika" },
      { co: "Certifikace", z: "Civilní normy", na: "Vojenské standardy, bezpečnostní prověrky, utajované informace" },
      { co: "Odolnost", z: "Provoz v běžných podmínkách", na: "Extrémní teploty, rušení, GPS-denied, EMC – nutné doložit testy" },
      { co: "Dodavatelský řetězec", z: "Globální nákup dle ceny", na: "Prověřitelný původ komponent, bezpečnost dodavatelského řetězce" },
      { co: "Prodej", z: "Marketing a inbound", na: "Vztahy s integrátory, účast v programech (DIANA, EDF), dlouhý BD" }
    ],

    dalsiKroky: {
      defenceKomercni: [
        "Vyberte 1–2 komerční sektory z mapy výše a ověřte si poptávku (5–10 rozhovorů se zákazníky).",
        "Spočítejte, co musí z produktu pryč, aby cena seděla civilnímu trhu.",
        "Zmapujte civilní certifikace – co už splňujete díky vojenským standardům?",
        "Zvažte oddělenou produktovou řadu / brand pro civilní trh.",
        "Pro civilní větev lze čerpat civilní programy (EIC, Horizont) – dual-use strategie zdvojnásobuje finanční možnosti."
      ],
      komercniDefence: [
        "Definujte obranný scénář použití – konkrétní jednotka, konkrétní problém, ne „armáda obecně“.",
        "Přihlaste se do DIANA nebo EUDIS akcelerátoru – nejrychlejší cesta k obranným koncovým uživatelům.",
        "Zjistěte, jaké testy odolnosti váš produkt čekají, a začněte je plánovat.",
        "Najděte si integrátora/patrona – startup málokdy prodává armádě přímo.",
        "Ozvěte se Defence Hubu – zmapujeme s vámi cestu a propojíme vás."
      ]
    }
  },

  // -------------------------------------------------------------------
  // WIZARD – otázky průvodce (odpovědi se mapují na osy programů)
  // -------------------------------------------------------------------
  wizard: [
    {
      id: "zamereni",
      otazka: "Kam vaše technologie primárně míří?",
      napoveda: "Podle toho se dělí evropské programy – obranné (EDF), dual-use (DIANA, EIC) a civilně-bezpečnostní (Horizont).",
      moznosti: [
        { v: "defence", t: "Čistě obranné využití", p: "Produkt pro armádu, bez civilního trhu" },
        { v: "dual", t: "Dual-use", p: "Civilní i obranné využití" },
        { v: "civil", t: "Civilní / bezpečnostní", p: "Civilní trh, možná security přesah" },
        { v: "nevim", t: "Nevím / chci poradit", p: "Pomůže i Dual-use překladač v této aplikaci" }
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
      napoveda: "",
      moznosti: [
        { v: "grant", t: "Grant", p: "Peníze bez ředění podílu" },
        { v: "equity", t: "Investici", p: "Investor výměnou za podíl" },
        { v: "akcelerator", t: "Akceleraci a kontakty", p: "Mentoring, přístup k zákazníkům, síť" },
        { v: "vse", t: "Cokoli relevantního", p: "Ukažte mi všechny možnosti" }
      ]
    },
    {
      id: "konsorcium",
      otazka: "Umíte si představit projekt v mezinárodním konsorciu?",
      napoveda: "Velké programy (EDF, Horizont) vyžadují partnery z více zemí. Menší nástroje žádá jedna firma.",
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
