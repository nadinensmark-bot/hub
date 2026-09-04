// =====================================================================
// DH Kompas – knowledge base, ENGLISH version
// ---------------------------------------------------------------------
// English mirror of kb.js. Maintain BOTH files together: any change in
// kb.js (programmes, calls, checklists…) should be mirrored here.
// The in-app editor (Knowledge base tab) edits the language currently
// selected and stores changes in the browser only; a permanent change
// means uploading a new kb-en.js to the repository.
//
// IMPORTANT: items flagged overit:true carry amounts/deadlines that
// must be checked against official sources before launch. The app
// shows them with a "verify" tag.
// =====================================================================

window.DH_KB_EN = {

  meta: {
    verze: "0.1 (concept)",
    aktualizovano: "2026-09-04",
    kontakt: "Defence Hub CzechInvest – our team will personally help you pick a programme and prepare the application."
  },

  // The stavRucne field overrides the automatic status computation –
  // useful for states like "under evaluation" that dates can't express.
  vyzvy: [
    {
      program: "diana",
      nazev: "DIANA – call for the 2027 cohort",
      otevreniOd: "",
      uzaverka: "",
      stavRucne: "under evaluation (call ran in June 2026)",
      odkaz: "https://www.diana.nato.int",
      pozn: "DIANA will announce the evaluation results; we are tracking it.",
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
      program: "edf",
      nazev: "EDF calls [ADD year]",
      otevreniOd: "[ADD]",
      uzaverka: "[ADD]",
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pozn: "Deadlines to be added by the DH team from the current work programme.",
      priklad: false
    },
    {
      program: "eic-accelerator",
      nazev: "EIC Accelerator – next cut-off [ADD]",
      otevreniOd: "[ADD]",
      uzaverka: "[ADD]",
      odkaz: "https://eic.ec.europa.eu",
      pozn: "The short application can be submitted any time; the cut-off applies to the full application.",
      priklad: false
    }
  ],

  programy: [

    {
      id: "diana",
      nazev: "NATO DIANA Accelerator",
      kratce: "NATO's accelerator for dual-use deep tech. Czechia has its own accelerator site hosted by the Defence Hub.",
      typ: "akcelerator",
      zamereni: "dual",
      trl: [4, 7],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "€100,000 grant in phase 1; selected companies advance to phase 2 with a €300,000 grant",
      overit: false,
      proKoho: "Startups from NATO member countries with technology usable both in civilian and defence contexts (dual-use). A single company applies – no consortium needed.",
      jakFunguje: [
        "Calls (challenges) are published for topics defined by NATO – e.g. sensing, energy, secure communications, autonomy.",
        "Six-month acceleration programme: grant, mentoring, access to test centres and a network of end users across NATO.",
        "The best companies advance to phase 2 and gain visibility with the NATO Innovation Fund and allied customers."
      ],
      vhodnyKdyz: [
        "You have a working prototype or technology close to deployment (roughly TRL 4+).",
        "Your technology has both civilian and defence uses and you can demonstrate it.",
        "You want to reach defence end users but lack the contacts."
      ],
      nevhodnyKdyz: [
        "The technology is purely a weapon (lethal) – DIANA focuses on dual-use.",
        "You are at the pure-research stage with no prototype."
      ],
      terminy: "Calls typically once a year. The last call (2027 cohort) ran in June 2026 and is under evaluation; the next call opens in June 2027.",
      terminyOverit: false,
      odkaz: "https://www.diana.nato.int",
      pomocDH: "The Defence Hub hosts the Czech DIANA accelerator – we are right at the source. Talk to us before you apply."
    },

    {
      id: "edf",
      nazev: "EDF – European Defence Fund",
      kratce: "The EU's main grant programme for defence R&D. Large projects in international consortia.",
      typ: "grant",
      zamereni: "defence",
      trl: [2, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Grants from single to tens of millions € per project; research actions funded up to 100%, development actions co-financed",
      overit: true,
      proKoho: "Companies and research organisations from the EU/Norway. Requires a consortium of at least 3 entities from 3 different eligible countries. Selected topics carry SME bonuses.",
      jakFunguje: [
        "The European Commission (DG DEFIS) publishes annual calls in thematic categories (sensing, cyber, air and ground systems, materials…).",
        "The consortium submits the application; evaluation covers excellence, impact and quality of implementation.",
        "Development actions usually require support from the ministries of defence of the participating states."
      ],
      vhodnyKdyz: [
        "You target the defence market and are ready to work in an international consortium.",
        "You have the capacity for a multi-year project and the administration of a European grant.",
        "You can plug into a larger system integrator (including as a subcontractor/partner)."
      ],
      nevhodnyKdyz: [
        "You need money fast (from call to grant signature typically takes over a year).",
        "You can't or won't share the project with partners from other countries."
      ],
      terminy: "Calls once a year, usually with an autumn deadline. Current dates to be added by the DH team.",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu/eu-defence-industry/european-defence-fund-edf_en",
      pomocDH: "We help with consortium building (matchmaking) and connect you with the national focal point."
    },

    {
      id: "eudis",
      nazev: "EUDIS – EU Defence Innovation Scheme",
      kratce: "An umbrella of support for startups and SMEs in defence: business accelerator, matchmaking, hackathons, cascade funding.",
      typ: "mix",
      zamereni: "dual",
      trl: [3, 8],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Depends on the instrument – from free participation (accelerator, matchmaking) to grants from cascade funding",
      overit: true,
      proKoho: "Startups and SMEs from the EU/Norway that want to enter the defence sector but can't yet reach a full EDF project.",
      jakFunguje: [
        "Business accelerator: coaching and preparing companies for the defence market.",
        "Matchmaking events: connections to large players and integrators (a path to EDF consortia).",
        "Cascade funding: smaller grants via intermediaries – faster and simpler than full EDF.",
        "Hackathons and innovation prizes."
      ],
      vhodnyKdyz: [
        "You are at the start of your defence journey and need contacts, references and a smaller grant.",
        "You want to get into an EDF consortium over time."
      ],
      nevhodnyKdyz: [
        "You are after a single large amount of funding – that's rather EDF or investment."
      ],
      terminy: "Each instrument has its own calendar – ongoing through the year.",
      terminyOverit: true,
      odkaz: "https://eudis.europa.eu",
      pomocDH: "We track EUDIS calls continuously – tell us what you work on and we'll watch the relevant deadlines."
    },

    {
      id: "eic-accelerator",
      nazev: "EIC Accelerator",
      kratce: "The EU's flagship instrument for deep tech scale-ups: grant + equity investment. Newly open to dual-use technologies.",
      typ: "mix",
      zamereni: "dual",
      trl: [5, 9],
      konsorcium: false,
      velikost: ["startup", "sme"],
      castka: "Grant up to €2.5m + equity investment from the EIC Fund (single millions €, more for strategic technologies)",
      overit: true,
      proKoho: "Individual innovative SMEs/startups from the EU with technology around TRL 5–8 and the ambition to scale on the European/global market.",
      jakFunguje: [
        "Step 1: short application (pitch deck, video, brief description) – submitted any time.",
        "Step 2: full application by a fixed cut-off date.",
        "Step 3: jury interview. Winners receive a grant, an investment, or both (blended finance)."
      ],
      vhodnyKdyz: [
        "You have validated technology and a clear commercial plan – EIC is a business-plan competition, not just research.",
        "Your technology is dual-use with a primarily civilian market."
      ],
      nevhodnyKdyz: [
        "The project is purely defence/weapons – that belongs to EDF/EUDIS.",
        "You are pre-prototype (look at EIC Pathfinder/Transition)."
      ],
      terminy: "Short application any time; full applications by cut-off dates several times a year.",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en",
      pomocDH: "We connect you with the national EIC contacts and with companies that have been through EIC."
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
      castka: "Pathfinder grants around €3–4m; Transition up to ~€2.5m",
      overit: true,
      proKoho: "Research teams and spin-offs at the start of development. Pathfinder Open typically a consortium; Challenges and Transition also allow single applicants.",
      jakFunguje: [
        "Pathfinder: high-risk research with a vision of a future technology.",
        "Transition: builds on results (Pathfinder/ERC) and moves them towards a prototype and a first business plan."
      ],
      vhodnyKdyz: [
        "You are a university team / spin-off with a breakthrough idea far before the market."
      ],
      nevhodnyKdyz: [
        "You already have a product and customers – that's EIC Accelerator or DIANA."
      ],
      terminy: "Calls per the EIC work programme – current dates to be added by the DH team.",
      terminyOverit: true,
      odkaz: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en",
      pomocDH: "We'll advise whether Pathfinder, Transition or Accelerator comes first for you."
    },

    {
      id: "nif",
      nazev: "NATO Innovation Fund (NIF)",
      kratce: "A billion-euro venture fund of NATO countries. It doesn't buy projects, it buys stakes – equity investment into deep tech and dual-use startups.",
      typ: "equity",
      zamereni: "dual",
      trl: [4, 9],
      konsorcium: false,
      velikost: ["startup"],
      castka: "Equity investment typically in early rounds (pre-seed to series B), amount per round",
      overit: true,
      proKoho: "Startups headquartered in participating NATO countries. Czech participation in the fund to be verified – [ADD status].",
      jakFunguje: [
        "Standard VC process: pitch, due diligence, investment for a stake in the company.",
        "Invests directly into startups as well as into other funds; closely tied to DIANA (alumni gain visibility)."
      ],
      vhodnyKdyz: [
        "You don't want a grant project but an investor who understands the defence market and opens doors to government customers."
      ],
      nevhodnyKdyz: [
        "You don't want to dilute the founders' stake – then stick with grants."
      ],
      terminy: "Ongoing – no deadlines, standard investment process.",
      terminyOverit: false,
      odkaz: "https://www.nif.fund",
      pomocDH: "Through the DIANA network we can broker a first contact."
    },

    {
      id: "horizon-cl3",
      nazev: "Horizon Europe – Cluster 3 (Civil Security)",
      kratce: "Research for civil security: protection of citizens, critical infrastructure, cybersecurity, borders. Exclusively civilian applications.",
      typ: "grant",
      zamereni: "civil",
      trl: [3, 8],
      konsorcium: true,
      velikost: ["sme", "midcap", "research"],
      castka: "Grants of single millions € per consortium project",
      overit: true,
      proKoho: "Consortia of companies, research organisations and end users (police, fire services, infrastructure operators). Projects must be exclusively civilian.",
      jakFunguje: [
        "Annual calls by destination (resilient infrastructure, fighting crime, cybersecurity, disaster management…).",
        "Strong emphasis on involving end users in the consortium."
      ],
      vhodnyKdyz: [
        "Your technology has a security (not military) use – or you want to fund the civilian branch of a dual-use technology separately."
      ],
      nevhodnyKdyz: [
        "The output is to be military – that belongs to EDF."
      ],
      terminy: "Calls once a year per the work programme.",
      terminyOverit: true,
      odkaz: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/",
      pomocDH: "We'll point you to the national contact point for Horizon Europe (TC Prague)."
    },

    {
      id: "edip",
      nazev: "EDIP and follow-up instruments (watch)",
      kratce: "The upcoming EU programme to strengthen defence production and joint procurement. More relevant for established manufacturers – but worth watching.",
      typ: "grant",
      zamereni: "defence",
      trl: [7, 9],
      konsorcium: true,
      velikost: ["sme", "midcap"],
      castka: "[ADD] – programme parameters were being finalised when this KB was prepared",
      overit: true,
      proKoho: "Manufacturers and suppliers in defence supply chains. For startups mostly indirectly – as a signal of where demand will flow.",
      jakFunguje: [
        "Follows the temporary instruments ASAP (ammunition) and EDIRPA (joint procurement).",
        "Call details will be added by the DH team once the work programme is published."
      ],
      vhodnyKdyz: [
        "You have a finished product and are scaling production for defence contracts."
      ],
      nevhodnyKdyz: [
        "You are in the development phase – start with EDF/EUDIS/DIANA."
      ],
      terminy: "[ADD once published]",
      terminyOverit: true,
      odkaz: "https://defence-industry-space.ec.europa.eu",
      pomocDH: "We'll add you to our mailing list – you'll hear from us when the calls are out."
    }
  ],

  prihlaska: {
    obecneKroky: [
      {
        krok: "Get your story straight",
        popis: "One sentence: what problem you solve, for whom, and why you. Evaluators read dozens of applications – yours must be clear within the first minute."
      },
      {
        krok: "Read the call text twice",
        popis: "You are scored against the call text, not the general quality of the idea. List the evaluation criteria and prepare an answer to each."
      },
      {
        krok: "Build the team and partners early",
        popis: "A consortium (where required) takes months to build, not weeks. Signature processes at universities and large companies take time."
      },
      {
        krok: "Numbers, not adjectives",
        popis: "A “unique solution” convinces no one. TRL backed by tests, performance metrics, customer LOIs, market size with a source."
      },
      {
        krok: "Build the budget bottom-up",
        popis: "From activities to money, not the other way round. An inflated budget is the most common reason for losing points."
      },
      {
        krok: "Have an outsider read it",
        popis: "Ideally someone who has evaluated or written successful applications. The Defence Hub can broker feedback."
      },
      {
        krok: "Submit with a margin",
        popis: "Portals crash before deadlines. Goal: complete application in the system at least 48 hours early."
      }
    ],
    checklisty: {
      diana: [
        "The application responds to a specific published challenge (not generically)",
        "Dual-use described concretely: civilian customer + defence scenario",
        "Documented state of the technology (demo, video, test results)",
        "Team: who has which competences, who will actually attend the programme",
        "A plan for what you'll do with the grant in 6 months (milestones)",
        "Willingness to work with NATO test centres and end users"
      ],
      edf: [
        "Consortium: min. 3 entities from 3 eligible countries, roles assigned",
        "Fit with the call topic demonstrated point by point",
        "Support of ministries of defence (for development actions) agreed in advance",
        "Work packages (WPs) with milestones and deliverables",
        "Budget per partner and category, justified",
        "IP handled (consortium agreement at least drafted)",
        "Security aspects: who needs clearances, how sensitive data is handled"
      ],
      "eic-accelerator": [
        "Pitch deck (format per the call) and video",
        "Short application submitted and approved (step 1)",
        "Financial plan: what is grant, what equity, what own resources",
        "Evidence of traction: customers, LOIs, revenue, pilots",
        "Cap table and company structure ready for investment",
        "Interview preparation: 10-minute pitch + defending the numbers"
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

  // Dual-use self-assessment – indicative only, NOT legal advice
  // (the disclaimer field says so everywhere in the app).
  dualUseTest: {
    otazky: [
      { id: "vojenske", text: "Is the product designed or specially modified for military use?", napoveda: "E.g. integration into a weapon system, or development to a military specification." },
      { id: "civilni", text: "Does the product have real civilian uses and customers?", napoveda: "" },
      { id: "armadni", text: "Could armed or security forces use the product?", napoveda: "Military, police, intelligence services, civil protection." },
      { id: "export", text: "Do you plan to sell outside the EU?", napoveda: "Export control mainly applies to exports to third countries." },
      { id: "usa", text: "Does the product contain US components, software or technology?", napoveda: "Because of the US ITAR/EAR rules – they apply even without exporting from the US." },
      { id: "utajeni", text: "Do you expect to work with classified information?", napoveda: "E.g. contracts for ministries of defence." }
    ],
    kategorie: {
      text: "Does your technology fall into any of these areas?",
      napoveda: "Areas typically covered by EU export control lists. Multiple choices possible.",
      moznosti: [
        { v: "krypto", t: "Encryption and cyber" },
        { v: "senzory", t: "Sensors and lasers" },
        { v: "navigace", t: "Navigation and avionics" },
        { v: "letectvi", t: "Aerospace and space" },
        { v: "elektronika", t: "Electronics and computing" },
        { v: "materialy", t: "Special materials and chemistry" },
        { v: "jaderne", t: "Nuclear technologies" },
        { v: "ai", t: "AI and data processing" },
        { v: "zadna", t: "None of the above" }
      ]
    },
    verdikty: {
      vojensky: { nazev: "Likely military material", text: "A product designed specifically for military use usually falls under the military-material trade regime – stricter than dual-use. All the more reason to seek advice before talking to foreign partners." },
      dual: { nazev: "Likely dual-use", text: "Civilian use combined with potential for armed forces is the typical dual-use profile. It opens programmes such as DIANA, EUDIS or EIC – and may also mean export control." },
      civil: { nazev: "Likely purely civilian", text: "Without use by armed forces this is most likely a civilian technology. Note: export control can apply to civilian products too if they fall into controlled categories." },
      nejasny: { nazev: "Unclear – we recommend a consultation", text: "The answers don't determine the profile clearly. Contact the Defence Hub and we'll go through it with you." }
    },
    rezimy: [
      { id: "dualuse-narizeni", nazev: "EU dual-use export control", kdy: "Technology in a controlled category + export outside the EU", akce: "Check classification against the EU control list (Regulation 2021/821) and apply for an export authorisation with the Czech Licensing Authority (MPO) if needed.", podminky: { kategorie: true, export: "ano" } },
      { id: "vojmat", nazev: "Military material trade licence", kdy: "Product designed/modified for military use", akce: "Trading in military material requires permits and licences (in Czechia via the MPO Licensing Authority). Handle before the first business talks with a foreign partner.", podminky: { vojenske: "ano" } },
      { id: "itar", nazev: "US ITAR/EAR rules", kdy: "US components or technology in the product", akce: "Map which components fall under US jurisdiction – it restricts who you may sell to, even without exporting from the US.", podminky: { usa: "ano" } },
      { id: "nbu", nazev: "Classified information and clearances (NSA)", kdy: "Contracts involving classified information", akce: "Facility and personnel clearances (in Czechia via NBÚ) take months – start well in advance.", podminky: { utajeni: "ano" } },
      { id: "stanag", nazev: "Military standards and NATO codification", kdy: "Supplying armed forces", akce: "Expect requirements for military standards (STANAG, MIL-STD), resilience testing and NATO codification (NCAGE code).", podminky: { armadni: "ano" } },
      { id: "ce", nazev: "Civilian certification (CE and sector norms)", kdy: "Selling to civilian customers in the EU", akce: "Check which directives and harmonised standards apply to the product (CE marking, sector certifications).", podminky: { civilni: "ano" } },
      { id: "gdpr", nazev: "GDPR and the EU AI regulation", kdy: "Product processes personal data or uses AI", akce: "Assess the impact of GDPR and the AI Act on civilian deployment.", podminky: { kategorieAI: true } }
    ],
    disclaimer: "An indicative guide, not legal advice. Always verify the classification of your technology with export-control experts – the Defence Hub will connect you."
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
      { co: "Customer", z: "State / military – one large customer, long tenders", na: "Companies – more, smaller customers, shorter sales cycle" },
      { co: "Certification", z: "Military standards (STANAG, MIL-STD), classification", na: "Civilian norms (CE, ISO, sector certifications), GDPR" },
      { co: "Price and margin", z: "Priced for resilience and reliability in extremes", na: "Price pressure – must get cheaper, simpler, scalable" },
      { co: "Product", z: "Bespoke solutions, small series", na: "Standardised product, self-service, support" },
      { co: "Marketing", z: "References and relationships, trade fairs, tenders", na: "Digital marketing, product presentation, public pricing" }
    ],
    zmenyKomercniDefence: [
      { co: "Customer", z: "Companies – quick decisions, pilot in weeks", na: "State / military – acquisition takes years, tenders, politics" },
      { co: "Certification", z: "Civilian norms", na: "Military standards, security clearances, classified information" },
      { co: "Resilience", z: "Operation in normal conditions", na: "Extreme temperatures, jamming, GPS-denied, EMC – must be proven by tests" },
      { co: "Supply chain", z: "Global sourcing by price", na: "Verifiable component origin, supply chain security" },
      { co: "Sales", z: "Marketing and inbound", na: "Relationships with integrators, programmes (DIANA, EDF), long BD" }
    ],

    dalsiKroky: {
      defenceKomercni: [
        "Pick 1–2 commercial sectors from the map above and validate demand (5–10 customer interviews).",
        "Work out what must be stripped from the product for the price to fit the civilian market.",
        "Map civilian certifications – what do you already meet thanks to military standards?",
        "Consider a separate product line / brand for the civilian market.",
        "The civilian branch can draw on civilian programmes (EIC, Horizon) – a dual-use strategy doubles your funding options."
      ],
      komercniDefence: [
        "Define the defence use scenario – a specific unit, a specific problem, not “the military in general”.",
        "Apply to the DIANA or EUDIS accelerator – the fastest path to defence end users.",
        "Find out what resilience tests await your product and start planning them.",
        "Find an integrator/patron – startups rarely sell to the military directly.",
        "Contact the Defence Hub – we'll map the path with you and make the connections."
      ]
    }
  },

  wizard: [
    {
      id: "zamereni",
      otazka: "Where is your technology primarily headed?",
      napoveda: "European programmes split along this line – defence (EDF), dual-use (DIANA, EIC) and civil security (Horizon).",
      moznosti: [
        { v: "defence", t: "Purely defence use", p: "A product for the military, no civilian market" },
        { v: "dual", t: "Dual-use", p: "Civilian and defence use" },
        { v: "civil", t: "Civilian / security", p: "Civilian market, possibly a security angle" },
        { v: "nevim", t: "Not sure / need advice", p: "The Dual-use translator in this app can help too" }
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
      napoveda: "",
      moznosti: [
        { v: "grant", t: "A grant", p: "Money without diluting equity" },
        { v: "equity", t: "An investment", p: "An investor in exchange for a stake" },
        { v: "akcelerator", t: "Acceleration and contacts", p: "Mentoring, access to customers, network" },
        { v: "vse", t: "Anything relevant", p: "Show me all the options" }
      ]
    },
    {
      id: "konsorcium",
      otazka: "Could you see yourself in an international consortium project?",
      napoveda: "Large programmes (EDF, Horizon) require partners from several countries. Smaller instruments take single applicants.",
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
