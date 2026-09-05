# DH Kompas – backend (fáze 2)

Malý Node.js server, který do aplikace DH Kompas přidává:

- **POST `/api/chat`** – chatbot poradce: odpovídá výhradně ze znalostní báze
  (programy, výzvy, export, certifikace), česky i anglicky.
- **POST `/api/analyza`** – předběžné zatřídění vložené technické specifikace
  (profil vojenský/dual-use/civilní, kandidátní kategorie přílohy I, co ověřit,
  vhodné programy). Vždy s disclaimerem – nenahrazuje Licenční správu MPO.
- **POST `/api/lead`** – sběr kontaktů firem z záložky Konzultant
  (název, e-mail, profil, GDPR souhlas). Ukládá se do `backend/data/leads.jsonl`
  (soubor je v .gitignore a na Render free je disk efemérní!) a hlavně se
  přeposílá na `LEADS_WEBHOOK_URL`, pokud je nastavená – doporučeně Google
  tabulka přes Apps Script (viz níže).
- **GET `/api/health`** – kontrola stavu.

## Sběr leadů do Google tabulky (5 minut)

1. Vytvořte Google tabulku (např. „DH Kompas – leady") se záhlavím
   `kdy | firma | ico | email | profil | lang`.
2. Rozšíření → Apps Script → vložte:
   ```js
   function doPost(e) {
     const d = JSON.parse(e.postData.contents);
     SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
       .appendRow([d.kdy, d.firma, d.ico, d.email, d.profil, d.lang]);
     return ContentService.createTextOutput("ok");
   }
   ```
3. Nasadit → Nová implementace → typ **Webová aplikace** → spouštět jako „já",
   přístup „kdokoli" → Nasadit → zkopírujte URL.
4. Na serveru (Render → Environment) nastavte `LEADS_WEBHOOK_URL` na tu URL.

Každý odeslaný kontakt pak přistane jako řádek v tabulce, kterou má tým DH
pod kontrolou. Text GDPR souhlasu v aplikaci musí před spuštěním ověřit
právník (v UI je označený).

Znalostní bázi čte přímo ze souborů aplikace (`navigator/kb.js`, `kb-en.js`,
`vyzvy.js`) – jeden zdroj pravdy, žádná duplicitní správa obsahu.

**Nahrání plné knowledge base:** cokoli vložíte do složky `backend/knowledge/`
(markdown/text, např. celou Knowledge-Base-Ultimate staženou z Drivu jako ZIP),
se při startu serveru přidá do kontextu chatbota i analýzy. Obsah složky se
nekomituje do veřejného repozitáře (interní/licencované podklady) – nahrává se
přímo na server. Detaily v `backend/knowledge/README.md`.

## Režim bez AI (jen sběr kontaktů) – zdarma

Server jde nasadit i **bez Anthropic klíče**: pak funguje jen `/api/lead`
(sběr kontaktů firem do Google tabulky) a aplikace to pozná sama přes
`/api/health` – chat zůstane v režimu bez AI a nic se nerozbije.
Žádný Anthropic účet, žádné náklady za dotazy; Render free tier je zdarma
(server po ~15 min nečinnosti usne a první požadavek pak trvá ~30 s –
pro sběr kontaktů to nevadí). AI se později zapne prostým doplněním
`ANTHROPIC_API_KEY` v Renderu – bez zásahu do kódu.

## Řízení nákladů

1. **Workspace spend limit** v [Anthropic Console](https://console.anthropic.com)
   – vytvořte samostatný workspace „DH Kompas", vygenerujte v něm API klíč
   a nastavte měsíční limit útraty. To je tvrdý strop, přes který se nejde dostat.
2. **Modely podle úlohy** (výchozí dle schváleného zadání): chat na Claude
   Haiku 4.5 (1 USD vstup / 5 USD výstup za milion tokenů), analýza na Claude
   Sonnet 5 (2/10 USD). Přepnutí: `MODEL_CHAT` / `MODEL_ANALYZA`.
3. **Prompt caching** – znalostní báze se cachuje (TTL 1 h), takže opakované
   dotazy platí jen zlomek vstupních tokenů.
4. **Limity v serveru**: dotazů na IP a den, analýz na IP a den, celkový denní
   strop volání, max. délky vstupů a odpovědí (viz `.env.example`).

Orientačně: 1 000 chat dotazů měsíčně ≈ jednotky USD; jedna analýza
specifikace ≈ jednotky centů.

## Nasazení

```bash
cd backend
npm install
ANTHROPIC_API_KEY=sk-ant-... ALLOWED_ORIGIN=https://<web-s-aplikaci> node server.js
```

Nebo přes Docker (z kořene repozitáře):

```bash
docker build -f backend/Dockerfile -t dh-kompas-backend .
docker run -p 8787:8787 -e ANTHROPIC_API_KEY=sk-ant-... -e ALLOWED_ORIGIN=https://<web> dh-kompas-backend
```

Funguje kdekoli, kde běží Node 20+ (VPS, kontejner u CzechInvest IT, Fly.io,
Railway…). Server je bezstavový – restart nic neztratí (limity se počítají
od restartu, tvrdý strop drží workspace limit).

### Zapnutí ve frontendu

Do `navigator/config.js` doplňte veřejnou adresu backendu:

```js
window.DH_CONFIG = { backendUrl: "https://kompas-api.example.cz" };
```

Dokud je `backendUrl` prázdné, aplikace záložku Poradce veřejnosti neukazuje
(tým ji vidí v admin režimu `#admin` s návodem na aktivaci).

## Test bez API klíče

```bash
MOCK_AI=1 node server.js
curl -s localhost:8787/api/health
curl -s -X POST localhost:8787/api/chat -H 'Content-Type: application/json' \
  -d '{"messages":[{"role":"user","content":"Jaké programy se hodí pro dual-use startup?"}],"lang":"cs"}'
```

Mock režim vrací testovací odpověď a nevolá API – hodí se pro ověření
nasazení, CORS a limitů před vložením klíče.

## Bezpečnost a data

- API klíč žije jen v prostředí serveru – nikdy ve frontendu ani v repozitáři.
- Server nahrané specifikace nikam neukládá (jen je předá API a odpověď vrátí).
  Anthropic standardně nepoužívá data z API k trénování modelů; podmínky
  retence potvrdí IT/právník dle zadání backendu.
- Před ostrým provozem doporučujeme: HTTPS (reverse proxy), potvrzení GDPR
  textace u nahrávání specifikací a revizi limitů.
