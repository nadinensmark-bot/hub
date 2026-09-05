# DH Kompas – backend (fáze 2)

Malý Node.js server, který do aplikace DH Kompas přidává:

- **POST `/api/chat`** – chatbot poradce: odpovídá výhradně ze znalostní báze
  (programy, výzvy, export, certifikace), česky i anglicky.
- **POST `/api/analyza`** – předběžné zatřídění vložené technické specifikace
  (profil vojenský/dual-use/civilní, kandidátní kategorie přílohy I, co ověřit,
  vhodné programy). Vždy s disclaimerem – nenahrazuje Licenční správu MPO.
- **GET `/api/health`** – kontrola stavu.

Znalostní bázi čte přímo ze souborů aplikace (`navigator/kb.js`, `kb-en.js`,
`vyzvy.js`) – jeden zdroj pravdy, žádná duplicitní správa obsahu.

**Nahrání plné knowledge base:** cokoli vložíte do složky `backend/knowledge/`
(markdown/text, např. celou Knowledge-Base-Ultimate staženou z Drivu jako ZIP),
se při startu serveru přidá do kontextu chatbota i analýzy. Obsah složky se
nekomituje do veřejného repozitáře (interní/licencované podklady) – nahrává se
přímo na server. Detaily v `backend/knowledge/README.md`.

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
