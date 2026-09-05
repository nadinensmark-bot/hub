// =====================================================================
// DH Kompas – knowledge base, ENGLISH
// ---------------------------------------------------------------------
// English mirror of kb.js (source: Knowledge-Base-Ultimate, 2026-09-04,
// + defencehub.gov.cz programme catalogue). Maintain BOTH files
// together: any change in kb.js should be mirrored here.
// Items flagged overit:true / [VERIFY] carry the flags of the source
// knowledge base – check against official sources before use.
// =====================================================================

window.DH_KB_EN = {

  meta: {
    verze: "0.2 (KB Ultimate)",
    aktualizovano: "2026-09-05",
    kontakt: "Defence Hub CzechInvest – our team will personally help you pick a programme and prepare the application. Book a free consultation at defencehub.gov.cz."
  },

  vyzvy: [
    {
      program: "edf",
      nazev: "EDF – 2026 calls (~€1bn, 10 calls / 31 topics)",
      otevreniOd: "",
      uzaverka: "2026-09-29",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "Consortia of min. 3 entities from 3 countries; Czech co-financing via TAČR PRODEF PP1.",
      priklad: false
    },
    {
      program: "eudis",
      nazev: "EUDIS Open Call – up to €6m development / €4m research",
      otevreniOd: "",
      uzaverka: "2026-09-29",
      odkaz: "https://eudis.europa.eu",
      pozn: "Consortium of 3 companies from 3 states, from TRL 4.",
      priklad: false
    },
    {
      program: "eic-step-defence",
      nazev: "EIC STEP Scale Up Defence – equity €10–30m",
      otevreniOd: "2026-06-30",
      uzaverka: "2026-10-28",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "Equity only, no grant; requires investor pre-commitment. Results early 2027.",
      priklad: false
    },
    {
      program: "eic-accelerator",
      nazev: "EIC Accelerator (dual-use) – rolling submission",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "short application any time; next full-application cut-off 4 Nov 2026",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "2026 full-application cut-offs: 7 Jan, 4 Mar, 6 May, 8 Jul, 2 Sep and 4 Nov (verified 9/2026). Open to defence and dual-use technologies since 17 June 2026.",
      priklad: false
    },
    {
      program: "eic-pathfinder",
      nazev: "EIC Pathfinder Challenges 2026 – grants up to €4m",
      otevreniOd: "",
      uzaverka: "2026-10-28",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "3 challenge topics in 2026: materials for miniaturised energy harvesting, biotech for healthy ageing, trustworthy cognitive AI (DeepRAP). Pathfinder Open closed 12 May 2026. Verified 9/2026.",
      priklad: false
    },
    {
      program: "eudis",
      nazev: "EUDIS Accelerator – 2 cohorts per year",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "running; applications open before the spring and autumn cohorts",
      odkaz: "https://eudis.europa.eu",
      pozn: "6-month accelerator: business coaching, matchmaking with primes, Test in Ukraine. Spring cohort: applications Dec–Jan; autumn cohort: applications May–June, starts in September (verified 9/2026).",
      priklad: false
    },
    {
      program: "edip",
      nazev: "BraveTech EU / DefTech Forges – €120,000 grants (TRL 4+)",
      otevreniOd: "",
      uzaverka: "2026-09-06",
      odkaz: "https://eu.brave1.tech/",
      pozn: "Technology challenges for defence startups from the EU and Ukraine; follow-up funding up to €750,000. Verified 9/2026.",
      priklad: false
    },
    {
      program: "edip",
      nazev: "EDIP – 2026–27 work programme calls (€1.5bn)",
      otevreniOd: "2026-03-31",
      uzaverka: "",
      stavRucne: "calls open; first deadlines October 2026, next February 2027",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "First wave of deadlines in October 2026, second in February 2027 (verified 9/2026); exact days per call on the Funding & Tenders portal.",
      priklad: false
    },
    {
      program: "horizon-cl3",
      nazev: "Horizon Europe Cluster 3 – 2026 calls (€131m)",
      otevreniOd: "2026-05-06",
      uzaverka: "2026-11-05",
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      pozn: "All 21 direct topics share the deadline of 5 Nov 2026, 17:00 Brussels time (verified 9/2026). Cybersecurity topics managed by the ECCC close earlier, on 15 Sep 2026.",
      priklad: false
    },
    {
      program: "diana",
      nazev: "DIANA – call for the 2027 cohort",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "deadline was 3 July 2026, under evaluation; cohort starts January 2027",
      odkaz: "https://www.diana.nato.int",
      pozn: "6 challenge areas: human survivability, multidomain autonomy of uncrewed systems, sensing and data processing for ISR, operational resilience, responsive logistics, air defence countermeasures (verified 9/2026). DIANA will announce the results; we are tracking it.",
      priklad: false
    },
    {
      program: "diana",
      nazev: "DIANA – next call (opening June 2027)",
      otevreniOd: "2027-06-01",
      uzaverka: "",
      odkaz: "https://www.diana.nato.int",
      pozn: "Exact opening date and deadline will be added once announced.",
      priklad: false
    },
    {
      program: "prodef",
      nazev: "TAČR PRODEF PP1 – EDF co-financing (call planned 10/2026)",
      otevreniOd: "2026-10-01",
      uzaverka: "",
      odkaz: "https://tacr.gov.cz/program/program-prodef/",
      pozn: "TAČR states the PP1 announcement is timed to the EDF calls (EDF deadline 29 Sep 2026); date indicative [VERIFY at tacr.gov.cz].",
      priklad: false
    }
  ],

  programy: [

    {
      id: "diana",
      nazev: "NATO DIANA Accelerator",
      kratce: "NATO's accelerator for dual-use deep tech. Defence Hub CzechInvest is the Czech accelerator site – the main entry gate for Czech startups into DIANA.",
      typ: "akcelerator",
      zamereni: "dual",
      trl: [4, 7],
      konsorcium: false,
      velikost: ["startup", "sme"],
      jenPro: ["startup","sme"],
      castka: "Phase 1 grant: €100,000; Phase 2 up to an additional €300,000 (up to €400,000 in total); non-dilutive (NATO takes no equity or IP)",
      overit: false,
      proKoho: "Dual-use and deep tech startups and small companies from NATO member countries. A single company applies to a specific challenge. The 2026 cohort (largest ever): 150 companies from 24 countries across 10 challenge areas.",
      jakFunguje: [
        "NATO publishes challenges in defined areas – e.g. advanced communications and contested electromagnetic environments, autonomy and uncrewed systems, energy and power, biotech and human resilience, critical infrastructure and logistics.",
        "Selected companies go through a ~6-month acceleration programme: grant, mentoring, access to a network of 200+ test centres in 32 nations and 16 accelerator sites.",
        "Czech site: Defence Hub CzechInvest – focus on space, advanced materials, AI, ecotech. Network of 230+ defence suppliers (AOBP) and 600+ European entities (EEN).",
        "Alumni gain visibility with the NATO Innovation Fund and allied customers (not automatic)."
      ],
      vhodnyKdyz: [
        "You have a working prototype or technology close to deployment (roughly TRL 4+).",
        "Your technology has both civilian and defence uses and matches a published challenge.",
        "You want non-dilutive money, defence validation and contacts – without giving up equity."
      ],
      nevhodnyKdyz: [
        "The technology is purely a weapon (lethal) – DIANA focuses on dual-use.",
        "You are at the pure-research stage with no prototype."
      ],
      terminy: "The call for the 2027 cohort closed on 3 July 2026 and is being evaluated; the cohort starts in January 2027. The next call is expected in June 2027.",
      terminyOverit: false,
      odkaz: "https://www.diana.nato.int",
      kdeKriteria: "The applicant guide and specific challenges on diana.nato.int while a call is open. The Czech DH team has the materials for the current call.",
      pomocDH: "The Defence Hub is a DIANA accelerator site – we are right at the source. Talk to us before you apply."
    },

    {
      id: "nif",
      nazev: "NATO Innovation Fund (NIF)",
      kratce: "A €1bn+ venture fund of NATO countries – Czechia is one of the 24 investor states. Equity investment into deep tech; no calls, no deadlines.",
      typ: "equity",
      zamereni: "dual",
      trl: [4, 9],
      konsorcium: false,
      velikost: ["startup"],
      jenPro: ["startup","sme"],
      castka: "Equity Seed to Series B; initial investment up to ~€15m per company, with reserves for follow-on rounds",
      overit: false,
      proKoho: "Deep tech and dual-use companies headquartered in one of the fund's 24 investor countries – Czechia is among them. Areas: energy, materials science, AI, data and computing, autonomy, quantum, biotechnology, space.",
      jakFunguje: [
        "No calls, deadlines or evaluation criteria – it is a fund: the investment team decides based on the fund's focus and the quality of the company.",
        "Standard VC process: pitch deck → a series of meetings → due diligence → investment for a stake. The fund often leads rounds and takes board involvement.",
        "Closely tied to DIANA – accelerator alumni are more visible to NIF, but investment is not automatic."
      ],
      vhodnyKdyz: [
        "You don't want a grant project but an investor who understands the defence market and opens doors to government customers.",
        "You have standard investor materials ready (deck, data room, financials) and demonstrable traction."
      ],
      nevhodnyKdyz: [
        "You don't want to dilute the founders' stake – then stick with grants (DIANA, EUDIS, EIC grant).",
        "You are looking for research money without a company and product – VCs invest in companies, not projects."
      ],
      terminy: "Ongoing – no deadlines, standard investment process.",
      terminyOverit: false,
      odkaz: "https://www.nif.fund",
      kdeKriteria: "No evaluation criteria exist – NIF is a fund, not a call. Your guide is the fund's focus on nif.fund and the quality of standard investor materials.",
      pomocDH: "A cold e-mail to a fund almost never works – through the DIANA network we can broker a warm intro."
    },

    {
      id: "eic-accelerator",
      nazev: "EIC Accelerator (dual-use)",
      kratce: "The EU's flagship deep tech instrument: grant + equity. Open to defence and dual-use technologies for the first time since 17 June 2026.",
      typ: "mix",
      zamereni: "dual",
      trl: [6, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      jenPro: ["startup","sme"],
      castka: "Blended finance: grant up to €2.5m (non-dilutive) + equity investment up to €10m (via the EIC Fund)",
      overit: false,
      proKoho: "Individual startups and SMEs from the EU with technology at TRL 6–8. Defence opening target areas: air and missile defence, drones and counter-drones, other critical defence technologies; plus AI, quantum, advanced materials and robotics with dual-use potential.",
      jakFunguje: [
        "Step 1: short proposal (pitch deck of max 10 slides, video) – submitted on a rolling basis, any time.",
        "Step 2: full application by a fixed cut-off date.",
        "Step 3: jury interview. Winners receive a grant, an investment, or both.",
        "Don't confuse the tools: equity of €10–30m is the separate EIC STEP Scale Up Defence instrument, not the regular Accelerator."
      ],
      vhodnyKdyz: [
        "You have validated technology (TRL 6+) and a clear commercial plan – EIC is a business-plan competition, not just research.",
        "You are a single company and want a combination of non-dilutive grant and capital."
      ],
      nevhodnyKdyz: [
        "You are pre-prototype – look at EIC Pathfinder/Transition or TAČR.",
        "You need equity above €10m – that is EIC STEP Scale Up Defence."
      ],
      terminy: "Short application any time; 2026 full-application cut-offs: 7 Jan, 4 Mar, 6 May, 8 Jul, 2 Sep and 4 Nov.",
      terminyOverit: false,
      odkaz: "https://eic.ec.europa.eu",
      kdeKriteria: "The EIC 2026 work programme on eic.ec.europa.eu + templates and criteria on the EU Funding & Tenders portal (evaluated on excellence, impact, implementation and level of risk).",
      pomocDH: "We connect you with the national EIC contacts and with companies that have been through EIC."
    },

    {
      id: "eic-step-defence",
      nazev: "EIC STEP Scale Up Defence",
      kratce: "New EIC instrument for large defence scale-ups: pure equity of €10–30m, no grant. Budget €100m, deadline 28 October 2026.",
      typ: "equity",
      zamereni: "defence",
      trl: [7, 9],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap"],
      jenPro: ["startup","sme","midcap"],
      castka: "Direct equity €10–30m (dilutive), no grant component; the total round is expected to be at least 3–5× larger (co-investment)",
      overit: false,
      proKoho: "Scale-ups in critical defence technologies from EU member states, EEA countries associated to Horizon Europe, and Ukraine. Requires a pre-commitment from a private investor.",
      jakFunguje: [
        "Part of the EIC opening to defence (work programme amendment of 17 June 2026); STEP = Strategic Technologies for Europe Platform.",
        "Applications from 30 June to 28 October 2026, results early 2027.",
        "The EIC invests €10–30m as part of a larger investment round alongside private investors."
      ],
      vhodnyKdyz: [
        "You are scaling the production/deployment of a critical defence technology and assembling a large round.",
        "You have a lead investor or private-capital pre-commitment."
      ],
      nevhodnyKdyz: [
        "You are early stage – start with DIANA, EUDIS or the EIC Accelerator.",
        "You don't want to dilute – this is pure equity."
      ],
      terminy: "Opened 30 June 2026, deadline 28 October 2026, results early 2027.",
      terminyOverit: false,
      odkaz: "https://eic.ec.europa.eu",
      kdeKriteria: "The call and conditions in the EIC 2026 work programme on eic.ec.europa.eu; applications via the EU Funding & Tenders portal.",
      pomocDH: "We help with investor connections (pre-commitment) through the DH and DIANA network."
    },

    {
      id: "edf",
      nazev: "EDF – European Defence Fund",
      kratce: "The EU's main defence R&D grant programme: €7.3bn (2021–27). 2026 calls: ~€1bn across 10 calls and 31 topics, deadline 29 September 2026.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Non-dilutive grants; research actions funded up to 100% of eligible costs. Bonuses for SMEs, mid-caps and PESCO links",
      overit: false,
      proKoho: "Consortia of at least 3 independent entities from 3 member states or EDF-associated countries (disruptive-technology exception: 2 entities from 2 countries suffice). Applicants must be established in the EU with executive management in the EU and not controlled by a non-associated third country.",
      jakFunguje: [
        "The European Commission (DG DEFIS) publishes annual calls; research actions target lower TRL, development actions higher [VERIFY the TRL band per topic].",
        "For a startup EDF is hard to reach directly – in practice you enter via a consortium (led by an integrator or research organisation) and via EUDIS.",
        "Czech participants can obtain national co-financing via TAČR PRODEF PP1."
      ],
      vhodnyKdyz: [
        "You target the defence market, have partners (or let us help find them) and capacity for a multi-year project.",
        "You can plug into a larger system integrator, including as a subcontractor."
      ],
      nevhodnyKdyz: [
        "You need money fast – from call to grant signature typically over a year.",
        "You want to apply alone – then EUDIS, EIC or AGILE (from 2027)."
      ],
      terminy: "2026 calls with a deadline of 29 September 2026.",
      terminyOverit: false,
      odkaz: "https://defence-industry-space.ec.europa.eu/eu-defence-industry/european-defence-fund-edf_en",
      kdeKriteria: "The EU Funding & Tenders portal – each topic has call documents including the evaluation criteria; summarised in the annual EDF work programme.",
      pomocDH: "We help with consortium building (matchmaking) and connect you with the national focal point (AOBP) and PRODEF PP1."
    },

    {
      id: "eudis",
      nazev: "EUDIS – EU Defence Innovation Scheme",
      kratce: "The SME branch of EDF (~€120m in the 2026 programme): an accelerator with quarterly calls and an Open Call with grants up to €6m.",
      typ: "mix",
      zamereni: "dual",
      trl: [4, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      jenPro: ["startup","sme"],
      castka: "Accelerator: 6-month programme (coaching, matchmaking, Test in Ukraine). Open Call: up to €6m for development / €4m for research",
      overit: false,
      proKoho: "Startups and SMEs from the EU/Norway. Accelerator: single companies, quarterly calls. Open Call: consortium of 3 companies from 3 states, from TRL 4, deadline 29 September 2026.",
      jakFunguje: [
        "EUDIS Accelerator: 6-month acceleration – business coaching, matchmaking with large players (primes), Test in Ukraine option.",
        "EUDIS Open Call: grants for development (up to €6m) and research (up to €4m) for smaller consortia – simpler than full EDF.",
        "Path to EDF: through EUDIS you gain references and partners for later large consortia."
      ],
      vhodnyKdyz: [
        "You are at the start of your defence journey and need contacts, references and a smaller grant.",
        "You are at TRL 4+ and have two partner companies from other EU states (for the Open Call)."
      ],
      nevhodnyKdyz: [
        "You are after a single large amount of funding – that's EDF, EIC or investment."
      ],
      terminy: "Accelerator: quarterly calls. Open Call: deadline 29 September 2026.",
      terminyOverit: false,
      odkaz: "https://eudis.europa.eu",
      kdeKriteria: "On eudis.europa.eu for the specific instrument; cascade-funding calls carry their criteria in the intermediary's documentation.",
      pomocDH: "We track EUDIS calls continuously – tell us what you work on and we'll watch the relevant deadlines."
    },

    {
      id: "eic-pathfinder",
      nazev: "EIC Pathfinder / Transition",
      kratce: "Funding for early research on breakthrough technologies (Pathfinder, TRL 1–4) and for maturing them towards a prototype (Transition).",
      typ: "grant",
      zamereni: "civil",
      trl: [1, 5],
      konsorcium: true,
      velikost: ["startup", "sme", "research"],
      castka: "Pathfinder grants up to €4m (Open and Challenges; 2026 budget: €262m); Transition up to ~€2.5m",
      overit: true,
      proKoho: "Research teams and spin-offs at the start of development. Pathfinder Open typically a consortium; Challenges and Transition also allow single applicants.",
      jakFunguje: [
        "Pathfinder: high-risk research with a vision of a future technology.",
        "Transition: builds on results (Pathfinder/ERC) and moves them towards a prototype and a first business plan.",
        "A company that matures through Horizon research can continue into the EIC Accelerator."
      ],
      vhodnyKdyz: [
        "You are a university team / spin-off with a breakthrough idea far before the market."
      ],
      nevhodnyKdyz: [
        "You already have a product and customers – that's EIC Accelerator or DIANA."
      ],
      terminy: "Pathfinder Open: closed 12 May 2026. Pathfinder Challenges: deadline 28 October 2026. Transition per the EIC work programme [VERIFY].",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en",
      kdeKriteria: "The EIC work programme on eic.ec.europa.eu; full call texts on the EU Funding & Tenders portal.",
      pomocDH: "We'll advise whether Pathfinder, Transition or Accelerator comes first for you."
    },

    {
      id: "horizon-cl3",
      nazev: "Horizon Europe – Cluster 3 (Civil Security)",
      kratce: "Civil security research: 2026 calls worth €131m, emphasis on high TRL (6–8) and field demonstrations. Exclusively civilian applications.",
      typ: "grant",
      zamereni: "civil",
      trl: [4, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "2026 calls: €131m – fighting crime and terrorism 40.7 / border management 21.3 / resilient infrastructure 22.7 / disaster-resilient society 32.5 / strengthened security research 13.8 (€m)",
      overit: false,
      proKoho: "Consortia of companies, research organisations and – mandatorily – practitioners (security forces, critical infrastructure operators). Projects must be exclusively civilian.",
      jakFunguje: [
        "Annual calls by destination; 2026 calls launched 6 May 2026.",
        "Strong emphasis on higher TRL (6, 7, 8) and field demonstrations.",
        "For dual-use technologies Cluster 4 (digital, industry, space) is also relevant [VERIFY 2026 topics]."
      ],
      vhodnyKdyz: [
        "Your technology has a security (not military) use – or you want to fund the civilian branch of a dual-use technology separately."
      ],
      nevhodnyKdyz: [
        "The output is to be military – that belongs to EDF."
      ],
      terminy: "2026 calls launched 6 May 2026; all 21 direct topics share the 5 November 2026 deadline (ECCC cyber topics close 15 September 2026).",
      terminyOverit: false,
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      kdeKriteria: "The EU Funding & Tenders portal – the topic text + the General Annexes of the Horizon Europe work programme (standard criteria: excellence, impact, implementation).",
      pomocDH: "We'll point you to the national contact point for Horizon Europe (TC Prague)."
    },

    {
      id: "edip",
      nazev: "EDIP – European Defence Industry Programme",
      kratce: "The approved EU programme to strengthen defence production: €1.5bn work programme (2026–27), calls running since 31 March 2026. For startups mainly the FAST fund and BraveTech EU.",
      typ: "mix",
      zamereni: "defence",
      trl: [6, 9],
      konsorcium: true,
      velikost: ["startup", "sme", "midcap"],
      castka: "€1.5bn: €700m+ production of key components (counter-drones, missiles, ammunition), €325m projects of common interest, €260m support for Ukraine, €240m joint procurement, €100m equity for startups/SMEs (FAST fund), €35.3m BraveTech EU",
      overit: false,
      proKoho: "Member states, Norway, Ukraine, procurement consortia, defence startups and SMEs. Joint procurement: grant up to €20m per project.",
      jakFunguje: [
        "Political agreement 17 October 2025, final Council approval 8 December 2025; work programme adopted 30 March 2026.",
        "Calls on the EU Funding & Tenders portal since 31 March 2026.",
        "For startups: equity support via the FAST fund (€100m) and the BraveTech EU innovation programme (€50m EU + €50m Ukraine, Seed and Scale Up phases)."
      ],
      vhodnyKdyz: [
        "You have a finished product and are scaling production for defence contracts.",
        "You develop counter-drone systems, ammunition or key components."
      ],
      nevhodnyKdyz: [
        "You are in the development phase – start with EDF/EUDIS/DIANA."
      ],
      terminy: "Calls open since 31 March 2026; first wave of deadlines October 2026, second February 2027 [exact days: VERIFY on the portal].",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      kdeKriteria: "EDIP calls on the EU Funding & Tenders portal (2026–27 work programme).",
      pomocDH: "We help pick the right EDIP branch (production / FAST / BraveTech) and find partners."
    },

    {
      id: "prodef",
      nazev: "TAČR PRODEF (Czechia)",
      kratce: "The Czech applied defence research programme: CZK 6.12bn (2024–31). PP1 co-finances Czech EDF participants, PP2 funds research for the Czech Armed Forces.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 7],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap", "research"],
      castka: "CZK 6.12bn in total, average support intensity 60%",
      overit: false,
      proKoho: "Czech companies and research organisations. PP1: Czech participants of EDF consortia (national co-financing). PP2: applied research in emerging technologies for the Czech Armed Forces – defence electronics, uncrewed systems, ammunition.",
      jakFunguje: [
        "Administered by TAČR, financed by the Czech Ministry of Defence (approved by the government on 7 May 2024).",
        "PP1 is the key bridge between the national and European level – if you go for EDF, handle PRODEF PP1 in parallel.",
        "2026 calls: the 2nd PP2 public competition ran (submissions 4 June – 22 July 2026); PP1 is timed to the EDF calls – indicatively autumn 2026 [VERIFY at tacr.gov.cz]."
      ],
      vhodnyKdyz: [
        "You target defence research linked to the Czech Armed Forces (PP2), or you are entering an EDF consortium (PP1).",
        "You want a Czech grant without an international consortium."
      ],
      nevhodnyKdyz: [
        "You are after growth capital – the national grant line for scale-ups is missing; aim for EIC/NIF."
      ],
      terminy: "PP2: 2nd public competition ran (4 June – 22 July 2026). PP1: timed to EDF, indicatively autumn 2026 [VERIFY].",
      terminyOverit: true,
      odkaz: "https://tacr.gov.cz/program/program-prodef/",
      kdeKriteria: "The competition documentation at tacr.gov.cz (PRODEF programme).",
      pomocDH: "We'll advise whether PP1, PP2, or the civilian TAČR programmes (SIGMA, TREND) and OP TAK fit you better."
    },

    {
      id: "optak-deeptech",
      nazev: "OP TAK – Aplikace DEEP TECH (Czechia)",
      kratce: "Czech Ministry of Industry subsidy for industrial R&D in companies: CZK 2–100m per project, newly covering the defence industry too.",
      typ: "grant",
      zamereni: "dual",
      trl: [3, 8],
      konsorcium: false,
      velikost: ["startup", "sme", "midcap"],
      castka: "Subsidy of CZK 2–100m per project",
      overit: false,
      proKoho: "Companies (SME advantage), also in cooperation with research organisations. A civilian programme that newly covers the defence industry – suitable for dual-use development.",
      jakFunguje: [
        "Operational Programme Technologies and Applications for Competitiveness (2021–27), EU-funded, managed by the Ministry of Industry (MPO).",
        "Aplikace activity: industrial research and experimental development in companies.",
        "Call IV DEEP TECH: submissions 29 October 2025 – 19 February 2026 (closed), allocation CZK 2bn. No follow-up call announced yet [VERIFY at optak.gov.cz]."
      ],
      vhodnyKdyz: [
        "You develop in Czechia and want a national subsidy without an international consortium.",
        "You are maturing a civilian/dual-use technology (complement: TAČR SIGMA and TREND)."
      ],
      nevhodnyKdyz: [
        "You need to fund a purely military project with classification – that belongs to PRODEF/EDF."
      ],
      terminy: "Call IV ran (deadline 19 February 2026); no follow-up call announced yet [VERIFY at optak.gov.cz].",
      terminyOverit: true,
      odkaz: "https://optak.gov.cz",
      kdeKriteria: "The call text at optak.gov.cz / mpo.gov.cz (Aplikace activity).",
      pomocDH: "We connect you with the regional CzechInvest office that helps with OP TAK."
    },

    {
      id: "safe",
      nazev: "SAFE – Security Action for Europe",
      kratce: "An EU loan instrument of up to €150bn for joint procurement of military material. An instrument for states, not companies – companies benefit indirectly as suppliers.",
      typ: "pujcky",
      jenInfo: true,
      zamereni: "defence",
      trl: [8, 9],
      konsorcium: true,
      velikost: ["sme", "midcap"],
      castka: "Loans of up to €150bn with long maturities – member states only; max. 35% of component costs may come from outside the EU/Ukraine/EEA",
      overit: false,
      proKoho: "Directly only member states (aid for 18 states approved in Feb–Apr 2026). Companies participate as suppliers to SAFE-funded procurements.",
      jakFunguje: [
        "The regulation has been in force since 29 May 2025; funded from the EU's borrowing capacity (EU-bonds).",
        "Ukraine and EEA/EFTA countries may take part in joint procurements.",
        "For a startup: watch where state demand will flow and position yourself in the supply chains."
      ],
      vhodnyKdyz: [
        "You have a delivery-ready product and seek a path into SAFE-funded procurements (via primes or national purchases)."
      ],
      nevhodnyKdyz: [
        "You seek direct development funding – that is EIC, EUDIS, EDIP FAST or BraveTech."
      ],
      terminy: "Allocations to states ran Feb–Apr 2026; procurements follow on an ongoing basis.",
      terminyOverit: false,
      odkaz: "https://www.consilium.europa.eu/en/policies/safe/",
      kdeKriteria: "An instrument for member states – companies take part via national procurements; information at consilium.europa.eu and the Czech MoD.",
      pomocDH: "We help you see which SAFE-funded national purchases are coming and who is buying."
    },

    {
      id: "agile",
      nazev: "AGILE Initiative (watch – launch 2027)",
      kratce: "An upcoming EU instrument for rapid defence innovation: €115m, up to €5m per project, solo applicant (mainly SMEs), targeting grant within 4 months of submission.",
      typ: "grant",
      zamereni: "defence",
      trl: [4, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      jenPro: ["startup","sme"],
      castka: "Budget €115m; up to €5m per project",
      overit: true,
      proKoho: "Mainly SMEs and startups – no mandatory consortium, with a fast procedure (target: grant within 4 months of submission).",
      jakFunguje: [
        "Political agreement between the European Parliament and the Council reached in July 2026; launch and first calls expected in early 2027.",
        "AGILE is to support 20–30 projects with 100% funding of eligible costs.",
        "Details will be added by the DH team once published – we'll add you to the mailing list."
      ],
      vhodnyKdyz: [
        "You want a fast defence grant without a consortium – once launched, this will be the fastest European route."
      ],
      nevhodnyKdyz: [
        "You need money this year – use EUDIS, EIC or PRODEF."
      ],
      terminy: "Launch and first calls in early 2027 [ADD exact dates once announced].",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      kdeKriteria: "[ADD once launched – parameters to be published by the European Commission]",
      pomocDH: "We'll add you to our mailing list – you'll hear from us when the calls are out."
    }
  ],

  prihlaska: {
    obecneKroky: [
      {
        krok: "Get your story straight – and know who it is for",
        popis: "In defence the customer is a chain of decision-makers: politicians hear impact, buyers price and risk, soldiers reliability, engineers parameters. You must be able to tell the same product several ways."
      },
      {
        krok: "Read the call text twice",
        popis: "You are scored against the call text, not the general quality of the idea. List the evaluation criteria (the box at the selected programme shows where to find them) and prepare an answer to each."
      },
      {
        krok: "Build the team and partners early",
        popis: "A consortium (where required) takes months to build, not weeks. Signature processes at universities and large companies take time."
      },
      {
        krok: "Numbers, not adjectives",
        popis: "A “unique solution” convinces no one. TRL backed by tests, performance metrics, customer LOIs, market size with a source (SIPRI, Global Firepower)."
      },
      {
        krok: "Reduce perceived risk",
        popis: "In defence nobody wants to approve something that won't work. References, a pilot, a test centre, accelerator membership – these weigh more than performance promises."
      },
      {
        krok: "Build the budget bottom-up",
        popis: "From activities to money, not the other way round. An inflated budget is the most common reason for losing points."
      },
      {
        krok: "Have an outsider read it and submit with a margin",
        popis: "Ideally someone who has evaluated or written successful applications – the Defence Hub can broker feedback. Portals crash before deadlines: complete application in the system at least 48 hours early."
      }
    ],
    checklisty: {
      diana: [
        "The application responds to a specific published challenge (not generically)",
        "Dual-use described concretely: civilian customer + defence scenario",
        "Documented state of the technology (demo, video, test results)",
        "Team: who has which competences, who will actually attend the programme",
        "A plan for what you'll do with the grant in 6 months (milestones)",
        "Willingness to work with NATO test centres and end users",
        "Consultation with the Defence Hub (Czech accelerator site) before submitting"
      ],
      edf: [
        "Consortium: min. 3 entities from 3 eligible countries (2/2 for disruptive technologies), roles assigned",
        "Fit with the call topic demonstrated point by point",
        "Support of ministries of defence (for development actions) agreed in advance",
        "Ownership structure: no control by a non-associated third country (or guarantees in place)",
        "Work packages (WPs) with milestones and deliverables",
        "Budget per partner and category, justified",
        "IP handled (consortium agreement at least drafted)",
        "National co-financing: application to TAČR PRODEF PP1",
        "Security aspects: who needs clearances, how sensitive data is handled"
      ],
      "eic-accelerator": [
        "Pitch deck of max 10 slides (EIC requirement) and video",
        "One slide dedicated to dual-use: civilian and defence use scenario",
        "Short application submitted and approved (step 1)",
        "Financial plan: what is grant, what equity, what own resources",
        "Evidence of traction: customers, LOIs, revenue, pilots",
        "Cap table and company structure ready for investment",
        "Interview preparation: 10-minute pitch + defending the numbers"
      ],
      nif: [
        "Pitch deck (10–15 slides) with a clear dual-use/defence story",
        "Data room: financials, cap table, key contracts, IP",
        "Demonstrable traction: customers, pilots, LOIs",
        "Czech HQ meets the condition (Czechia is a NIF investor country)",
        "Round plan: how much, for what, who is the lead investor",
        "Warm intro via the DH/DIANA network – not a cold e-mail"
      ],
      eudis: [
        "The right instrument chosen: Accelerator (single company) vs. Open Call (consortium of 3 companies from 3 states)",
        "For the Open Call: TRL 4+ documented",
        "Business plan and defence market entry plan",
        "Test in Ukraine considered as validation",
        "Connection to primes (DH/EUDIS matchmaking)"
      ],
      default: [
        "Evaluation criteria of the call answered point by point",
        "Summary (abstract) understandable to a non-specialist",
        "Numbers and claims have sources",
        "Budget built bottom-up and justified",
        "All mandatory annexes per the call",
        "Application in the system min. 48 h before the deadline"
      ]
    }
  },

  dualUseTest: {
    uvod: "Classification is done against two control lists: the EU Common Military List (implemented in Czechia by Decree No. 210/2012 Coll. under Act No. 38/1994 Coll.) and Annex I of Regulation (EU) 2021/821 (dual-use, categories 0–9). Self-classification applies: the exporter is responsible for correct classification. This test walks you through the lists and tells you what to verify next. Nothing is sent anywhere.",
    otazky: [
      { id: "vojenske", text: "Is the product specially designed or modified for military use?", napoveda: "The decisive criterion of military material (Act 38/1994 Coll., list in Decree 210/2012 Coll., mirroring the EU Common Military List ML1–ML22). An ordinary civilian product that the military simply buys without modification is not military material." },
      { id: "civilni", text: "Will you also sell to civilian customers in the EU?", napoveda: "Because of civilian certifications (CE and sector norms). Note: purely military material usually carries no CE marking (Art. 346 TFEU exemption)." },
      { id: "dataai", text: "Does the product process personal data or use AI?", napoveda: "Because of GDPR and the EU AI regulation (AI Act)." },
      { id: "export", text: "Do you plan to sell outside the EU?", napoveda: "For dual-use items an export authorisation applies to exports to third countries; for a sensitive subset (Annex IV) even within the EU. Note: an e-mail, a cloud upload or giving a person outside the EU access to technical data also counts as export." },
      { id: "usa", text: "Does the product contain US components, software or technical data?", napoveda: "US ITAR/EAR rules reach Czech companies too: ITAR items “contaminate” the whole product (no percentage threshold); under EAR the de minimis is usually 25% US content. That's why integrators seek “ITAR-free” components." },
      { id: "utajeni", text: "Do you expect to work with classified information?", napoveda: "E.g. contracts for ministries of defence. Clearances are issued by the Czech NSA – NBÚ (Act 412/2005 Coll.); most dual-use deliveries require no classification at all." }
    ],
    kategorieAnnex: {
      text: "Which categories of Annex I of Regulation (EU) 2021/821 could your product fall into?",
      napoveda: "Select all relevant categories (0–9). A control number is structured: category (0–9) + type (A equipment, B test/production equipment, C materials, D software, E technology) + number – e.g. 5A002 = information-security/encryption equipment. You are controlled only when the technical thresholds of a specific item are exceeded.",
      otazkaParametry: "Does your product reach or exceed the technical parameters of controlled items in this category?",
      napovedaParametry: "The exact thresholds (performance, accuracy, sensitivity, key length…) are defined by Annex I for specific items. Compare your product with the Annex text, or answer “not sure” – then an expert classification is needed. Note: customs (TARIC) classification is not the same as control classification.",
      zadna: "None of the categories",
      polozky: [
        { kod: "0", nazev: "Nuclear materials, facilities and equipment", priklady: ["fissile and special fissile materials", "reactors and their components", "enrichment and reprocessing equipment"], podoblasti: [{"nazev":"Fissile and special fissile materials","rozhoduje":"type and quantity of material"}, {"nazev":"Reactors and their components","rozhoduje":"designed for a nuclear reactor"}, {"nazev":"Enrichment and reprocessing technologies","rozhoduje":"type of technology"}] },
        { kod: "1", nazev: "Special materials and related equipment", priklady: ["special alloys, composites and coatings", "chemical precursors", "protection and detection equipment against chemical and biological agents"], podoblasti: [{"nazev":"Special alloys, composites, fibres","rozhoduje":"strength, modulus, heat resistance"}, {"nazev":"Coatings and camouflage materials","rozhoduje":"type and purpose of coating"}, {"nazev":"Chemical precursors","rozhoduje":"the specific substance per the control lists"}, {"nazev":"CBRN protection and detection","rozhoduje":"purpose and detection sensitivity"}] },
        { kod: "2", nazev: "Materials processing", priklady: ["high-precision CNC machine tools", "isostatic presses", "bearings of special parameters"], podoblasti: [{"nazev":"High-precision CNC machine tools","rozhoduje":"number of controlled axes, positioning accuracy"}, {"nazev":"Isostatic presses","rozhoduje":"working pressure, chamber diameter"}, {"nazev":"Special bearings and production equipment","rozhoduje":"precision, material"}] },
        { kod: "3", nazev: "Electronics", priklady: ["radiation-hardened integrated circuits", "high-frequency and microwave components", "fast high-resolution A/D converters"], podoblasti: [{"nazev":"Radiation-hardened integrated circuits","rozhoduje":"radiation dose tolerance"}, {"nazev":"High-frequency and microwave components","rozhoduje":"operating frequency, power"}, {"nazev":"Fast A/D converters","rozhoduje":"resolution combined with sampling rate"}] },
        { kod: "4", nazev: "Computers", priklady: ["high-performance computing systems above a defined threshold", "computers hardened for extreme conditions"], podoblasti: [{"nazev":"High-performance computing systems","rozhoduje":"aggregate compute performance"}, {"nazev":"Computers hardened for extreme conditions","rozhoduje":"temperature range, radiation tolerance"}] },
        { kod: "5", nazev: "Telecommunications (part 1) and information security / encryption (part 2)", priklady: ["radio systems with frequency hopping and adaptive techniques", "interception- and jamming-resistant systems", "cryptography above defined parameters – typically item 5A002"], podoblasti: [{"nazev":"Radios with frequency hopping / adaptive techniques","rozhoduje":"bandwidth, techniques used"}, {"nazev":"Interception- and jamming-resistant systems","rozhoduje":"resilience techniques used"}, {"nazev":"Cryptography and encryption products (typically 5A002)","rozhoduje":"algorithm type, key length, who controls the encryption"}] },
        { kod: "6", nazev: "Sensors and lasers", priklady: ["thermal and night-vision cameras above defined sensitivity/resolution", "acoustic and underwater sensors (hydrophones)", "radars, gravimeters, lasers above defined power or wavelengths"], podoblasti: [{"nazev":"Thermal and night-vision cameras, image sensors","rozhoduje":"sensitivity, resolution, frame rate"}, {"nazev":"Acoustic and underwater sensors (hydrophones, sonars)","rozhoduje":"sensitivity, operating frequency and depth"}, {"nazev":"Radars","rozhoduje":"frequency bands, power, signal-processing techniques"}, {"nazev":"Lasers","rozhoduje":"power, wavelength, pulse energy"}, {"nazev":"Gravimeters and magnetometers","rozhoduje":"accuracy, noise"}] },
        { kod: "7", nazev: "Navigation and avionics", priklady: ["inertial navigation systems and gyroscopes with drift below a defined limit", "jamming-resistant GNSS receivers for high speeds and altitudes"], podoblasti: [{"nazev":"Inertial navigation, gyroscopes, accelerometers","rozhoduje":"drift, bias stability"}, {"nazev":"Jamming-resistant GNSS receivers","rozhoduje":"techniques used, speed and altitude limits"}, {"nazev":"Avionics","rozhoduje":"purpose and parameters per the entry"}] },
        { kod: "8", nazev: "Marine", priklady: ["submersible and uncrewed underwater vehicles", "quiet propulsion", "sensors for underwater use"], podoblasti: [{"nazev":"Submersible and uncrewed underwater vehicles","rozhoduje":"operating depth, autonomy"}, {"nazev":"Quiet propulsion","rozhoduje":"noise level, propulsion type"}, {"nazev":"Sensors for underwater use","rozhoduje":"sensitivity, operating depth"}] },
        { kod: "9", nazev: "Aerospace and propulsion", priklady: ["rocket and jet engines and their components", "UAVs with a defined range/payload", "space technologies"], podoblasti: [{"nazev":"Rocket and jet engines and components","rozhoduje":"thrust, specific propulsion parameters"}, {"nazev":"Uncrewed aerial vehicles (UAVs)","rozhoduje":"range, payload, endurance"}, {"nazev":"Space systems and components","rozhoduje":"designed for space use"}, {"nazev":"Refractory and thermal-protection systems","rozhoduje":"operating temperatures, material"}] }
      ]
    },
    verdikty: {
      vojensky: {
        semafor: "cervena", stitek: "MILITARY MATERIAL – STRICT REGIME",
        nazev: "Likely military material (Act 38/1994 Coll.)",
        text: "A product specially designed or modified for military use usually falls on the military material list (Decree 210/2012 Coll., per the EU Common Military List). The regime is stricter than dual-use: two-tier (company permit + a licence for each deal). Trading without permit and licence is a criminal offence (Sec. 265 of the Czech Criminal Code).",
        dalsiKroky: [
          "Determine the category on the military material list (Decree 210/2012 Coll.) – with an expert or the MPO Licensing Authority.",
          "Before talks with a foreign partner obtain the military-material trade permit (MPO Licensing Authority) – issued only after binding opinions of the Foreign, Defence and Interior Ministries; any of them can block a deal.",
          "Then apply for a licence for each specific deal (specific goods, quantity, country, customer); count lead times in weeks to months.",
          "Screen end users and require an end-user certificate.",
          "Set up internal compliance: what may be sent to whom, including technical data and trade-fair demos. Fines under Act 38/1994 go up to CZK 50m.",
          "Contact the Defence Hub – we'll connect you with experts and companies that have been through it."
        ]
      },
      listed: {
        semafor: "cervena", stitek: "LIKELY DUAL-USE – EXPORT AUTHORISATION REQUIRED",
        nazev: "Likely a controlled dual-use item (Annex I)",
        text: "Based on your answers the product reaches the parameters of controlled items in Annex I of Regulation (EU) 2021/821. For exports outside the EU you will need an export authorisation from the MPO Licensing Authority (procedure per Act No. 594/2004 Coll.).",
        dalsiKroky: [
          "Determine the exact control number in Annex I (e.g. 5A002) – everything else follows from it. If unsure, ask the MPO Licensing Authority for an opinion.",
          "Check Annex IV – its items require an authorisation even for transfers within the EU.",
          "Check whether EU General Export Authorisations (EU001–EU008, Annex II) or a national general authorisation cover your target countries – the administratively simplest route.",
          "Otherwise apply for an individual or global authorisation with the MPO Licensing Authority; global authorisations require an ICP (internal compliance programme). You will submit an end-user declaration in particular.",
          "Keep export records for at least 5 years and expect semi-annual reporting to MPO (by the 10th day after each half-year) [VERIFY the form].",
          "Screen end users against sanctions lists. Fines under Act 594/2004: up to CZK 5m (records), up to CZK 20m for the most serious breaches.",
          "Note: “export” includes electronic transfers of technology or software – e-mail, cloud, repositories, a talk for a foreign team.",
          "The Defence Hub will connect you with export-control experts."
        ]
      },
      zatrideni: {
        semafor: "zluta", stitek: "BETTER CHECK – HAVE THE PRODUCT CLASSIFIED",
        nazev: "Needs an expert classification",
        text: "Without comparing against the exact technical thresholds of Annex I this cannot be decided – the most common situation for technology companies and nothing to worry about. But self-classification applies: the responsibility is yours, and a wrong classification = unauthorised export.",
        dalsiKroky: [
          "Write up the product's technical parameters (performance, frequency, accuracy, cryptography…) in one document – the control list works with thresholds, not marketing names.",
          "Compare them with the Annex I text for the selected categories – or hand it to an expert straight away.",
          "Ask the MPO Licensing Authority for a classification opinion [VERIFY the filing form and lead times].",
          "Don't forget software (D) and technology/technical data (E) – these are controlled items too.",
          "Until the classification is clear, be careful about sending technical details outside the EU (including e-mail and cloud).",
          "The Defence Hub will connect you with export-control experts."
        ]
      },
      unlisted: {
        semafor: "zelena", stitek: "PARAMETERS BELOW CONTROL THRESHOLDS – LIKELY NOT LISTED",
        nazev: "Likely outside the control lists",
        text: "Based on your answers the product does not reach the parameters of controlled items. The catch-all clauses still apply: an authorisation may be required even for a non-listed item because of end use – weapons of mass destruction (Art. 4), military use in an embargoed country (Art. 4), cyber-surveillance items with repression risk (Art. 5), national extensions of control (Art. 9, 10).",
        dalsiKroky: [
          "Document the assessment (why the product is not listed) – the due diligence is useful for banks, investors and customs.",
          "Screen unusual enquiries: suspicious end use, embargoed countries, a customer refusing to say what the product is for.",
          "Check sanctions regimes for target countries – they apply regardless of classification.",
          "If in doubt about end use, contact the MPO Licensing Authority.",
          "Repeat the classification with every major product change – new features (e.g. added encryption) can cross controlled thresholds."
        ]
      }
    },
    dalsiKrokyNadpis: "What next – step by step",
    rezimy: [
      { id: "vojmat", nazev: "Military material: permit + licence (Act 38/1994 Coll.)", kdy: "Item on the military material list (Decree 210/2012 Coll.)", akce: "Two-tier regime at the MPO Licensing Authority: first the company permit (after binding opinions of the Foreign, Defence and Interior Ministries), then a licence for each specific deal. Handle before the first talks with a foreign partner.", podminky: { vojenske: "ano" } },
      { id: "dualuse-narizeni", nazev: "Dual-use export authorisation (Reg. 2021/821 + Act 594/2004 Coll.)", kdy: "Annex I item + export outside the EU", akce: "Determine the control number, check Annex IV (control within the EU too) and the EU001–EU008 general authorisations; otherwise an individual/global authorisation with the MPO Licensing Authority. Records for min. 5 years, semi-annual reporting.", podminky: { katAno: true, export: "ano" } },
      { id: "zatrideni", nazev: "Expert item classification (self-classification)", kdy: "Uncertainty whether the product reaches controlled parameters", akce: "The exporter bears responsibility for the classification. Write up the technical parameters, compare with Annex I, or ask the MPO Licensing Authority for an opinion. The Defence Hub will connect you with experts.", podminky: { katNevim: true } },
      { id: "catchall", nazev: "Catch-all clauses (Art. 4, 5, 9, 10 of the Regulation)", kdy: "Exports outside the EU – even for non-listed items", akce: "Screen end use and end users: WMD and military use in embargoes (Art. 4), cyber-surveillance and human rights (Art. 5), national extensions (Art. 9, 10). Contact the MPO Licensing Authority if suspicious.", podminky: { export: "ano" } },
      { id: "itar", nazev: "US ITAR/EAR rules and re-export", kdy: "US components, software or technical data in the product", akce: "Map the US content: ITAR items (USML) “contaminate” the whole with no percentage threshold; under EAR the de minimis is usually 25%. Re-export may require a US authorisation (DDTC/BIS) even for a Czech company. Consider an “ITAR-free” design.", podminky: { usa: "ano" } },
      { id: "nbu", nazev: "Classified information and NBÚ clearances (Act 412/2005 Coll.)", kdy: "Contracts involving classified information", akce: "The lowest level (Restricted) is simpler (no full NBÚ proceedings); from Confidential up both personnel and facility clearances from NBÚ are required – proceedings run months to over a year. Don't apply in advance 'just in case' – apply with a specific contract.", podminky: { utajeni: "ano" } },
      { id: "nato-retezec", nazev: "Entering the NATO supply chain (codification and quality)", kdy: "Supplying armed forces and NATO contracts", akce: "Recommended order: NCAGE code (free, via the Czech codification authority) → ISO 9001 → NSPA supplier registration → AS9100/EN9100 (hardware) → AQAP per contract (2110/2310, verified by the state – GQA) → NSN item codification.", podminky: { vojenske: "ano" } },
      { id: "ce", nazev: "Civilian certification (CE and sector norms)", kdy: "Selling to civilian customers in the EU", akce: "Check which harmonisation directives and norms apply (CE, EMC, RED…). Note: purely military material usually carries no CE (exclusions + Art. 346 TFEU); dual-use and commercial components carry CE normally.", podminky: { civilni: "ano" } },
      { id: "gdpr", nazev: "GDPR and the EU AI regulation", kdy: "Product processes personal data or uses AI", akce: "Assess the impact of GDPR and the AI Act; for cyber/surveillance functions also mind the Art. 5 catch-all of Regulation 2021/821.", podminky: { dataai: "ano" } }
    ],
    odkazy: [
      { t: "Regulation (EU) 2021/821 incl. Annex I (dual-use control list)", url: "https://eur-lex.europa.eu/eli/reg/2021/821/oj" },
      { t: "European Commission – dual-use export controls", url: "https://policy.trade.ec.europa.eu/help-exporters-and-importers/exporting-dual-use-items_en" },
      { t: "MPO Licensing Authority (classification, authorisations, licences)", url: "https://www.mpo.gov.cz" },
      { t: "NBÚ – clearances and classified information", url: "https://nbu.gov.cz" },
      { t: "Czech NATO codification authority (NCAGE, NSN, AQAP)", url: "https://okm.mo.gov.cz" }
    ],
    disclaimer: "A preliminary guide, not legal advice or a binding classification. The category examples are illustrative – what decides is the exact text of Annex I and the military material list as currently in force. Always verify the classification with the MPO Licensing Authority or an export-control expert – the Defence Hub will connect you."
  },

  dualUse: {
    domeny: [
      {
        id: "senzory",
        nazev: "Sensing and situational awareness",
        defence: ["Battlefield reconnaissance and surveillance (ISR)", "Drone detection and perimeter protection", "Night vision, thermal imaging", "Acoustic/RF threat detection"],
        komercni: [
          { sektor: "Critical infrastructure", useCase: "Protecting power plants, airports and data centres from intrusion and drones" },
          { sektor: "Industry 4.0", useCase: "Predictive maintenance and monitoring of production lines" },
          { sektor: "Agriculture", useCase: "Crop and livestock monitoring, precision farming" },
          { sektor: "Emergency services", useCase: "Search and rescue, wildfire and flood monitoring" }
        ]
      },
      {
        id: "autonomie",
        nazev: "Autonomy, drones and robotics",
        defence: ["Uncrewed reconnaissance", "Battlefield / last-mile logistics", "Demining and EOD robots", "Drone swarms"],
        komercni: [
          { sektor: "Logistics", useCase: "Autonomous delivery, warehouse inventory" },
          { sektor: "Inspection", useCase: "Checking bridges, pipelines, power lines and wind turbines" },
          { sektor: "Agriculture", useCase: "Spraying, mapping, autonomous machinery" },
          { sektor: "Emergency services", useCase: "Scouting inaccessible areas during response" }
        ]
      },
      {
        id: "ai",
        nazev: "AI and data analytics",
        defence: ["Fusing data from sensors and sources (intelligence)", "Target recognition in imagery", "Decision support for commanders", "Disinformation detection"],
        komercni: [
          { sektor: "Finance and insurance", useCase: "Fraud detection, risk scoring" },
          { sektor: "Media and platforms", useCase: "Content moderation, authenticity verification" },
          { sektor: "Industry", useCase: "Visual quality inspection, process optimisation" },
          { sektor: "Healthcare", useCase: "Image analysis, triage" }
        ]
      },
      {
        id: "komunikace",
        nazev: "Communications and cryptography",
        defence: ["Resilient tactical networks", "Encrypted communications", "Operating under jamming (EW)", "Satellite links"],
        komercni: [
          { sektor: "Energy and utilities", useCase: "Secure communications for grids (OT security)" },
          { sektor: "Emergency services", useCase: "Resilient networks for crisis communication" },
          { sektor: "Enterprise security", useCase: "Encrypted communications for companies and government" },
          { sektor: "Transport", useCase: "Reliable connectivity for trains, ships, aircraft" }
        ]
      },
      {
        id: "kyber",
        nazev: "Cybersecurity",
        defence: ["Defending military networks", "Cyber intelligence", "Protecting weapon systems", "Attack simulation (red teaming)"],
        komercni: [
          { sektor: "Critical infrastructure", useCase: "Protecting SCADA/OT systems" },
          { sektor: "Finance", useCase: "Intrusion detection, threat intelligence" },
          { sektor: "Government", useCase: "Protecting registries and e-government services" },
          { sektor: "SME market", useCase: "Affordable security as a service (MSSP)" }
        ]
      },
      {
        id: "space",
        nazev: "Space and navigation",
        defence: ["Satellite reconnaissance", "Resilient navigation (GNSS denied)", "Communication constellations", "Space situational awareness"],
        komercni: [
          { sektor: "Transport and logistics", useCase: "Precise navigation and shipment tracking" },
          { sektor: "Insurance", useCase: "Damage assessment from satellite data" },
          { sektor: "Agriculture", useCase: "Remote sensing of soil and crops" },
          { sektor: "Telecommunications", useCase: "Connectivity in remote areas" }
        ]
      },
      {
        id: "materialy",
        nazev: "Materials and manufacturing",
        defence: ["Ballistic protection", "Lightweight structures for vehicles and aircraft", "Additive manufacturing of spare parts in the field", "Camouflage and stealth"],
        komercni: [
          { sektor: "Automotive and aerospace", useCase: "Lightweighting, composites" },
          { sektor: "Construction", useCase: "Durable and fire-safe materials" },
          { sektor: "Sports and outdoor", useCase: "Protective equipment" },
          { sektor: "Engineering", useCase: "3D printing of small series and spare parts" }
        ]
      },
      {
        id: "energie",
        nazev: "Energy and propulsion",
        defence: ["Powering bases and units in the field", "Batteries and fuel cells for equipment", "Energy resilience of bases"],
        komercni: [
          { sektor: "Energy", useCase: "Off-grid systems, microgrids, backup power" },
          { sektor: "Transport", useCase: "Fleet electrification, charging infrastructure" },
          { sektor: "Construction", useCase: "Powering remote sites without the grid" },
          { sektor: "Telco and data centres", useCase: "Backup power for critical operations" }
        ]
      },
      {
        id: "zdravi",
        nazev: "Medicine and CBRN protection",
        defence: ["Combat medicine and casualty evacuation", "Detection of chemical/biological agents", "Protective equipment", "Telemedicine in the field"],
        komercni: [
          { sektor: "Emergency medicine", useCase: "Pre-hospital care, ambulance equipment" },
          { sektor: "Industrial safety", useCase: "Detecting hazardous substance leaks" },
          { sektor: "Healthcare", useCase: "Telemedicine for remote regions" },
          { sektor: "Civil protection", useCase: "Pandemic and disaster preparedness" }
        ]
      },
      {
        id: "simulace",
        nazev: "Simulation and training",
        defence: ["Aircraft and vehicle simulators", "VR/AR unit training", "Digital twins of the battlefield", "Wargaming"],
        komercni: [
          { sektor: "Aviation and transport", useCase: "Training pilots, train and vehicle drivers" },
          { sektor: "Industry", useCase: "Machine operator training, VR safety drills" },
          { sektor: "Healthcare", useCase: "Simulating procedures and emergencies" },
          { sektor: "Energy", useCase: "Digital twins of power plants and grids" }
        ]
      }
    ],

    zmenyDefenceKomercni: [
      { co: "Customer", z: "State / military – a chain of decision-makers, long tenders", na: "Companies – more, smaller customers, shorter sales cycle" },
      { co: "Certification", z: "Military standards (STANAG, MIL-STD, AQAP), classification", na: "Civilian norms (CE, ISO, sector certifications), GDPR" },
      { co: "Price and margin", z: "Priced for resilience and reliability in extremes", na: "Price pressure – must get cheaper, simpler, scalable" },
      { co: "Product", z: "Bespoke solutions, small series", na: "Standardised product, self-service, support" },
      { co: "Marketing", z: "References and relationships, trade fairs, tenders", na: "Digital marketing, product presentation, public pricing" }
    ],
    zmenyKomercniDefence: [
      { co: "Customer", z: "Companies – quick decisions, pilot in weeks", na: "State / military – acquisition takes years; each link of the chain (politician, MoD, buyer, soldier, engineer, lawyer) hears something different" },
      { co: "Certification", z: "Civilian norms", na: "Military standards (AQAP on top of ISO/AS9100), NATO codification (NCAGE, NSN), possibly NBÚ clearances" },
      { co: "Resilience", z: "Operation in normal conditions", na: "Extreme temperatures, jamming, GPS-denied, EMC – must be proven by tests" },
      { co: "Supply chain", z: "Global sourcing by price", na: "Verifiable component origin, “ITAR-free” design, supply chain security" },
      { co: "Sales", z: "Marketing and inbound", na: "Risk is the main enemy: references, pilots and trust beat performance. Entry often via primes and offsets, tenders via TED/NSPA" }
    ],

    dalsiKroky: {
      defenceKomercni: [
        "Pick 1–2 commercial sectors from the map above and validate demand (5–10 customer interviews).",
        "Work out what must be stripped from the product for the price to fit the civilian market.",
        "Map civilian certifications (CE, sector norms) – what do you already meet thanks to military standards?",
        "Consider a separate product line / brand for the civilian market.",
        "The civilian branch can draw on civilian programmes (EIC, Horizon, OP TAK, TAČR SIGMA/TREND) – a dual-use strategy doubles your funding options."
      ],
      komercniDefence: [
        "Define the defence use scenario – a specific unit, a specific problem, not “the military in general”.",
        "Register in the Defence Hub Solutions Database – so primes and investors can find you.",
        "Apply to DIANA (via the Defence Hub) or the EUDIS accelerator – the fastest path to defence end users; consider Test in Ukraine.",
        "Take the dual-use test in this app – export control and certification come up sooner than you think.",
        "Find an integrator/patron – startups rarely sell to the military directly; watch offset opportunities too.",
        "Contact the Defence Hub – we'll map the path with you and make the connections."
      ]
    }
  },

  // -------------------------------------------------------------------
  // UKRAINE AND TESTING (desk research from public sources, 9/2026)
  // -------------------------------------------------------------------
  ukrajina: {
    uvod: "Ukraine is today the fastest way to validate a defence technology in real deployment – and the EU has concrete instruments for it. Main entry points for Czech companies:",
    cesty: [
      {
        nazev: "Test in Ukraine (Brave1)",
        program: "eudis",
        popis: "Platform of Ukraine's defence-tech incubator Brave1 (launched 17 July 2025): foreign companies test technologies in real battlefield conditions and get direct feedback from Ukrainian soldiers. By 11/2025, 126 foreign companies from 17 countries had applied. For TRL 4+. Web: brave1.gov.ua"
      },
      {
        nazev: "BraveTech EU (EU + Ukraine)",
        program: "edip",
        popis: "Joint EU–Ukraine alliance: €100m (50/50 European Commission and the Ukrainian government). Phase 1: hackathons and technology challenges; phase 2 (2026, €35m, operationally run by the European Defence Agency): scaling the best solutions plus access to EUDIS accelerators and the EDF. Web: eu.brave1.tech"
      },
      {
        nazev: "DefTech Forges – BraveTech EU technology challenges",
        program: "edip",
        popis: "A series of competitions for defence startups from the EU and Ukraine (TRL 4+): €120,000 grants with possible follow-up funding of up to €750,000. Applications until 6 September 2026 at eu.brave1.tech."
      },
      {
        nazev: "EUDIS Accelerator – Test in Ukraine module",
        program: "eudis",
        popis: "EUDIS accelerator participants can test their technology in conditions replicating the Ukrainian battlefield, alongside military operators and under real-world constraints. For TRL 4+."
      },
      {
        nazev: "Brave International – joint grant funds",
        program: "eudis",
        popis: "Brave1's international branch: 50/50 grant funds with partner countries, over €100m in total (approved by the Ukrainian government 6/2026). Competitions open to Ukrainian and foreign companies; battlefield validation via Test in Ukraine is a condition."
      },
      {
        nazev: "EDIP – support for Ukraine's defence industry",
        program: "edip",
        popis: "EDIP sets aside €260m for integrating Ukraine's defence industry into the European one; BraveTech EU is part of it."
      },
      {
        nazev: "DIANA – test centre network",
        program: "diana",
        popis: "Outside Ukraine: DIANA accelerator participants get access to a network of 200+ test centres across 32 NATO nations."
      }
    ],
    akce: "Upcoming: the Defence Tech Valley 2026 summit in Lviv (September 2026); 2026 BraveTech EU hackathons also ran in Estonia and France.",
    overeno: "Desk research from public sources, 9/2026 – verify current conditions on the listed websites before applying; the DH team is happy to help."
  },

  wizard: [
    {
      id: "zamereni",
      otazka: "Where is your technology primarily headed?",
      napoveda: "Programmes split along this line – defence (EDF, EDIP, PRODEF), dual-use (DIANA, EIC, EUDIS) and civil security (Horizon, OP TAK).",
      moznosti: [
        { v: "defence", t: "Purely defence use", p: "A product for the military, no civilian market" },
        { v: "dual", t: "Dual-use", p: "Civilian and defence use" },
        { v: "civil", t: "Civilian / security", p: "Civilian market, possibly a security angle" },
        { v: "nevim", t: "Not sure / need advice", p: "The Dual-use test in this app can help too" }
      ]
    },
    {
      id: "trl",
      otazka: "What stage is your technology at?",
      napoveda: "TRL = Technology Readiness Level, a 1–9 maturity scale.",
      moznosti: [
        { v: "1-3", t: "Research / concept (TRL 1–3)", p: "Idea, lab validation" },
        { v: "4-6", t: "Prototype (TRL 4–6)", p: "Working prototype, testing" },
        { v: "7-9", t: "Product (TRL 7–9)", p: "Proven in operation, selling or close to it" }
      ]
    },
    {
      id: "typ",
      otazka: "What form of support are you looking for?",
      napoveda: "Non-dilutive = a grant without giving up equity. Dilutive = investment in exchange for a stake.",
      moznosti: [
        { v: "grant", t: "A grant", p: "Money without diluting equity" },
        { v: "equity", t: "An investment", p: "An investor in exchange for a stake (NIF, EIC equity, STEP Defence)" },
        { v: "akcelerator", t: "Acceleration and contacts", p: "Mentoring, access to customers, network" },
        { v: "vse", t: "Anything relevant", p: "Show me all the options" }
      ]
    },
    {
      id: "konsorcium",
      otazka: "Could you see yourself in an international consortium project?",
      napoveda: "EDF and Horizon require consortia (EDF min. 3 entities from 3 countries). DIANA, EIC, PRODEF or OP TAK take single applicants.",
      moznosti: [
        { v: "ano", t: "Yes", p: "We have partners or can find them" },
        { v: "ne", t: "No / not yet", p: "We want to apply on our own" }
      ]
    },
    {
      id: "velikost",
      otazka: "Who are you?",
      napoveda: "",
      moznosti: [
        { v: "startup", t: "A startup", p: "A young company looking to grow" },
        { v: "sme", t: "An established SME", p: "A small/medium enterprise with a track record" },
        { v: "midcap", t: "A larger company (mid-cap+)", p: "" },
        { v: "research", t: "A research organisation / university", p: "" }
      ]
    }
  ]
};
