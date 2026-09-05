# Nasazení DH Kompas backendu — klikací návod

**Co vlastně nasazuješ:** složku [`backend/`](.) z tohoto repozitáře — malý
Node.js server (jeden soubor `server.js`, žádná databáze). Nic se nikam
nenahrává ručně: Render si kód vezme sám z GitHubu podle připraveného
`render.yaml` v kořeni repa a při každém merge do `main` se sám přenasadí.

Doporučené pořadí: nejdřív **varianta 1 (zdarma, bez AI)** — sbírá kontakty
firem. AI se pak zapne kdykoli doplněním jedné proměnné (varianta 2).

---

## Varianta 1 — ZDARMA, bez AI: sběr kontaktů firem (~10 min)

### 1. Render.com (5 min)

1. Otevři **render.com** → **Sign up with GitHub** (účtem, který vidí repo `hub`).
2. **New → Blueprint** → vyber repozitář **hub** → Render najde `render.yaml`
   a předvyplní službu `dh-kompas-backend` → **Apply**.
3. Proměnné **ANTHROPIC_API_KEY** a **KNOWLEDGE_ZIP_URL** nech **prázdné**
   → **Deploy**. (Server bez klíče jede v režimu „jen kontakty" — aplikace to
   pozná sama přes `/api/health`, chat zůstane bez AI a nic se nerozbije.)
4. Po ~2 minutách běží. Kontrola: otevři
   `https://…onrender.com/api/health` → má vrátit `{"ok":true,…,"klicNastaven":false}`.

### 2. Google tabulka na leady (5 min)

1. Vytvoř Google tabulku „DH Kompas – leady" se záhlavím
   `kdy | firma | email | profil | lang`.
2. **Rozšíření → Apps Script** → vlož:
   ```js
   function doPost(e) {
     const d = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
       .appendRow([d.kdy, d.firma, d.email, d.profil, d.lang]);
     return ContentService.createTextOutput("ok");
   }
   ```
3. **Nasadit → Nová implementace** → typ **Webová aplikace** → spouštět jako
   „já", přístup **kdokoli** → Nasadit → zkopíruj URL implementace.
4. V Renderu: služba → **Environment** → přidej proměnnou
   **LEADS_WEBHOOK_URL** = ta URL → **Save** (služba se restartuje sama).

### 3. Zapnout v aplikaci (1 min)

Adresu služby (`https://dh-kompas-backend-XXXX.onrender.com`) zapiš do
`navigator/config.js` (`backendUrl: "https://…"`) a mergni do `main` — nebo
ji pošli Claudovi, zapíše a nasadí to. Od té chvíle záložka **Konzultant**
odesílá kontakty firem do tvé tabulky.

---

## Varianta 2 — zapnout AI (kdykoli později, ~5 min)

1. **console.anthropic.com** → Sign up (účet pro API je oddělený od
   předplatného claude.ai) → **Billing**: karta + malý kredit (5–10 USD).
2. **Settings → Workspaces → Create workspace** `DH Kompas` → nastav
   **Spend limit** (např. 25 USD/měsíc) — tvrdý strop útraty.
3. **API keys → Create key** ve workspace → zkopíruj klíč (`sk-ant-…`).
   **Klíč nikdy nedávej do chatu ani do repozitáře** — jen do dalšího kroku.
4. Render → **Environment** → vyplň **ANTHROPIC_API_KEY** → Save.
   Aplikace pozná AI sama — chat Poradce se přepne na plný AI režim.

### Knowledge base pro AI (volitelné, 3 min)

1. Na Drivu pravým na složku **Knowledge-Base-Ultimate** → **Stáhnout** (ZIP).
2. ZIP nahraj na Drive jako soubor → **Sdílet → Kdokoli s odkazem**.
3. Z odkazu vezmi `ID_SOUBORU` a sestav
   `https://drive.google.com/uc?export=download&id=ID_SOUBORU`.
4. Render → **Environment** → **KNOWLEDGE_ZIP_URL** = tento odkaz → Save.
   V logu uvidíš „Znalosti rozbaleny ze ZIP … N souborů".

---

## Poznámky k provozu

- **Free plán Renderu** službu po ~15 min nečinnosti uspí — první požadavek
  pak trvá ~30–60 s (studený start). Pro sběr kontaktů OK; placený plán
  (7 USD/měs.) to řeší.
- Leady se ukládají i do `backend/data/leads.jsonl` na serveru, ale na free
  plánu je disk efemérní — **tabulka přes LEADS_WEBHOOK_URL je hlavní úložiště**.
- Limity: 5 odeslání kontaktu/IP/den; AI limity viz `.env.example`.
- Text GDPR souhlasu v aplikaci musí před ostrým spuštěním ověřit právník.
- Aktualizace: každý merge do `main` Render automaticky přenasadí.
