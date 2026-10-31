// =====================================================================
// JEŽTOK – ježek (maskot). Čisté SVG, žádné obrázky, žádné knihovny.
// jezekSVG({nalada, uroven}) vrací SVG řetězec.
//   nalada: "klid" | "radost" | "smutek" | "premysli" | "party" | "spi"
//   uroven: 0–4 (doplňky podle úrovně hráče)
// =====================================================================
(function () {
  "use strict";

  const UROVNE = [
    { xp: 0,    nazev: "Ježčí mimino",     popis: "Teprve se rozkoukává." },
    { xp: 120,  nazev: "Bodlinka",         popis: "Už má pár bodlin a sluchátka." },
    { xp: 400,  nazev: "Ježek v tenisce",  popis: "Běhá za feedem jako o život." },
    { xp: 900,  nazev: "Punk ježek",       popis: "Číro, brýle, nula respektu k biflování." },
    { xp: 1800, nazev: "Profesor Ježek",   popis: "Ví všechno. Nebo to tak aspoň vypadá." }
  ];

  function urovenPodleXp(xp) {
    let u = 0;
    for (let i = 0; i < UROVNE.length; i++) if (xp >= UROVNE[i].xp) u = i;
    return u;
  }

  // Ostny: vějíř trojúhelníků kolem horní poloviny těla
  function ostny(barva, punk) {
    let s = "";
    const cx = 100, cy = 112, r = 62;
    for (let i = 0; i < 13; i++) {
      const a0 = Math.PI + (i / 13) * Math.PI;         // úhel od levé po pravou
      const a1 = Math.PI + ((i + 1) / 13) * Math.PI;
      const am = (a0 + a1) / 2;
      const len = punk && i >= 4 && i <= 8 ? 34 : 22;
      const x0 = cx + Math.cos(a0) * r, y0 = cy + Math.sin(a0) * r;
      const x1 = cx + Math.cos(a1) * r, y1 = cy + Math.sin(a1) * r;
      const xt = cx + Math.cos(am) * (r + len), yt = cy + Math.sin(am) * (r + len);
      const f = punk && i >= 4 && i <= 8 ? "#e11d48" : barva;
      s += `<polygon points="${x0.toFixed(1)},${y0.toFixed(1)} ${xt.toFixed(1)},${yt.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}" fill="${f}"/>`;
    }
    return s;
  }

  function oci(nalada) {
    switch (nalada) {
      case "radost":
      case "party":
        return `<path d="M78 112 q7 -8 14 0" stroke="#1f1a17" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path d="M108 112 q7 -8 14 0" stroke="#1f1a17" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      case "smutek":
        return `<circle cx="85" cy="112" r="4.5" fill="#1f1a17"/><circle cx="115" cy="112" r="4.5" fill="#1f1a17"/>
                <path d="M77 109 l14 -5" stroke="#1f1a17" stroke-width="3" stroke-linecap="round"/>
                <path d="M123 109 l-14 -5" stroke="#1f1a17" stroke-width="3" stroke-linecap="round"/>
                <ellipse cx="121" cy="124" rx="2.5" ry="4" fill="#60a5fa" class="jz-slza"/>`;
      case "premysli":
        return `<circle cx="85" cy="112" r="4.5" fill="#1f1a17"/><circle cx="115" cy="110" r="3.5" fill="#1f1a17"/>
                <path d="M106 101 l16 -3" stroke="#1f1a17" stroke-width="3" stroke-linecap="round"/>`;
      case "spi":
        return `<path d="M78 112 q7 6 14 0" stroke="#1f1a17" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                <path d="M108 112 q7 6 14 0" stroke="#1f1a17" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
      default:
        return `<g class="jz-oko"><circle cx="85" cy="112" r="4.5" fill="#1f1a17"/><circle cx="115" cy="112" r="4.5" fill="#1f1a17"/>
                <circle cx="86.5" cy="110.5" r="1.5" fill="#fff"/><circle cx="116.5" cy="110.5" r="1.5" fill="#fff"/></g>`;
    }
  }

  function pusa(nalada) {
    switch (nalada) {
      case "radost": return `<path d="M90 130 q10 10 20 0" stroke="#1f1a17" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      case "party":  return `<path d="M88 128 q12 16 24 0 z" fill="#1f1a17"/><path d="M93 132 q7 6 14 0 z" fill="#f87171"/>`;
      case "smutek": return `<path d="M91 135 q9 -8 18 0" stroke="#1f1a17" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      case "premysli": return `<path d="M92 132 l14 -2" stroke="#1f1a17" stroke-width="3" stroke-linecap="round"/>`;
      case "spi": return `<ellipse cx="100" cy="131" rx="4" ry="3" fill="#1f1a17"/>`;
      default: return `<path d="M92 130 q8 6 16 0" stroke="#1f1a17" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    }
  }

  function doplnky(uroven) {
    let s = "";
    if (uroven >= 1) { // sluchátka
      s += `<path d="M46 118 q0 -62 54 -62 q54 0 54 62" stroke="#111827" stroke-width="7" fill="none" stroke-linecap="round"/>
            <rect x="38" y="108" width="16" height="26" rx="7" fill="#111827"/><rect x="146" y="108" width="16" height="26" rx="7" fill="#111827"/>
            <rect x="42" y="113" width="8" height="16" rx="4" fill="#ef4444"/><rect x="150" y="113" width="8" height="16" rx="4" fill="#ef4444"/>`;
    }
    if (uroven >= 2) { // tenisky
      s += `<path d="M66 166 h26 v8 q0 6 -6 6 h-26 q-6 0 -6 -6 v-2 q0 -4 6 -4 z" fill="#f43f5e"/><path d="M60 174 h32" stroke="#fff" stroke-width="2"/>
            <path d="M108 166 h26 q6 0 6 4 v2 q0 6 -6 6 h-26 q-6 0 -6 -6 v-6 z" fill="#f43f5e"/><path d="M108 174 h32" stroke="#fff" stroke-width="2"/>`;
    }
    if (uroven >= 3) { // sluneční brýle
      s += `<rect x="72" y="104" width="24" height="15" rx="5" fill="#111827"/><rect x="104" y="104" width="24" height="15" rx="5" fill="#111827"/>
            <path d="M96 110 h8" stroke="#111827" stroke-width="3"/><path d="M76 108 h10" stroke="#fff" stroke-width="2" opacity=".5"/><path d="M108 108 h10" stroke="#fff" stroke-width="2" opacity=".5"/>`;
    }
    if (uroven >= 4) { // promoční čepice
      s += `<polygon points="100,28 150,46 100,64 50,46" fill="#111827"/><rect x="92" y="52" width="16" height="16" fill="#111827"/>
            <path d="M150 46 v18" stroke="#fbbf24" stroke-width="3"/><circle cx="150" cy="66" r="4" fill="#fbbf24"/>`;
    }
    return s;
  }

  function jezekSVG(o) {
    o = o || {};
    const nalada = o.nalada || "klid";
    const uroven = Math.max(0, Math.min(4, o.uroven || 0));
    const punk = uroven >= 3;
    const telo = "#6b4423", ostnyB = "#3f2a16", oblicej = "#f3d9b1";
    const zzz = nalada === "spi" ? `<text x="140" y="70" font-size="22" font-weight="800" fill="#93c5fd" class="jz-zzz">z</text><text x="152" y="52" font-size="16" font-weight="800" fill="#93c5fd" class="jz-zzz jz-zzz2">z</text>` : "";
    const party = nalada === "party" ? `<text x="30" y="60" font-size="26" class="jz-konf">🎉</text><text x="150" y="80" font-size="22" class="jz-konf jz-konf2">✨</text>` : "";
    return `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" class="jezek jezek-${nalada}" aria-label="ježek">
      <g class="jz-telo">
        ${ostny(ostnyB, punk)}
        <ellipse cx="100" cy="118" rx="62" ry="54" fill="${telo}"/>
        <ellipse cx="100" cy="128" rx="46" ry="40" fill="${oblicej}"/>
        <ellipse cx="72" cy="128" rx="9" ry="5" fill="#f9a8b4" opacity=".7"/>
        <ellipse cx="128" cy="128" rx="9" ry="5" fill="#f9a8b4" opacity=".7"/>
        ${oci(nalada)}
        <ellipse cx="100" cy="121" rx="6" ry="4.5" fill="#1f1a17"/>
        <circle cx="98" cy="119.5" r="1.5" fill="#fff"/>
        ${pusa(nalada)}
        <ellipse cx="78" cy="168" rx="13" ry="7" fill="${telo}"/>
        <ellipse cx="122" cy="168" rx="13" ry="7" fill="${telo}"/>
        ${doplnky(uroven)}
      </g>
      ${zzz}${party}
    </svg>`;
  }

  // Hlášky ježka – náhodný výběr podle situace
  const HLASKY = {
    vitej: ["Ahoj! Já jsem {j}. Projeď prstem nahoru a jedem.", "Čau, tady {j}. Dneska se něco naučíme, ať to bolí nebo ne.", "{j} na příjmu. Hudba hraje, karty čekají."],
    spravne: ["Jo! Přesně tak.", "Bum. Správně.", "To je ono! Bodlinky se ježí radostí.", "Správně. Já věděl, že to dáš.", "Čistá práce."],
    spatne: ["Au. To nevadí – teď si to budeš pamatovat líp.", "Vedle. Ale chyba + vysvětlení = učení. Čti dál.", "Hmm, ne. Koukni na vysvětlení, vrátím ti to později.", "Nic se neděje. Tahle karta se za chvíli vrátí."],
    umim: ["Jasně, bereme. Za chvíli tě z toho vyzkouším.", "Uloženo do bodlin. Ověřím to.", "Super. Vrátím ti to, až to budeš skoro zapomínat – to je ten trik."],
    pozdeji: ["Ok, odložím to. Ale neuteče ti to.", "Vrátí se to. Všechno se vrátí."],
    streak: ["{n} dní v kuse! Tohle je přesně to, co paměť potřebuje.", "Streak {n}. Ježčí srdce plesá."],
    testStart: ["Test! Žádný stres, žádný strach. Nikdo to nevidí. Jen já.", "Tak ukaž, co v tobě je."],
    testSkvely: ["Tohle bylo brutální. V dobrém.", "Profesorský výkon. Smekám čepici."],
    testDobry: ["Solidní. Pár věcí ti vrátím do feedu.", "Dobrý! Chyby máš dole vysvětlené."],
    testSlaby: ["To byl trénink, ne rozsudek. Projeď chyby a za den to zkus znovu.", "Hele, každá chyba s vysvětlením je plus. Jedem dál."],
    vysvetleni: ["Jasně, vysvětlím to jinak.", "Dobře, pojďme na to pomalu.", "Tak tady je dovysvětlení."],
    prazdno: ["Nic nového. Přidej si kurz v záložce Kurzy, nebo si dej test.", "Všechno jsi viděl/a. Vrať se za chvíli, až budou karty k opakování."],
    nocni: ["Je pozdě. Ještě jednu kartu a pak spát – spánek je součást učení.", "Hodně pozdě. Spánek ti látku uloží líp než další hodina."]
  };

  function hlaska(klic, data) {
    const pole = HLASKY[klic] || ["…"];
    let t = pole[Math.floor(Math.random() * pole.length)];
    data = Object.assign({ j: "Bodlík" }, data || {});
    return t.replace(/\{(\w+)\}/g, (m, k) => (data[k] !== undefined ? data[k] : m));
  }

  window.JEZEK = { svg: jezekSVG, hlaska, UROVNE, urovenPodleXp };
})();
