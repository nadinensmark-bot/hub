# Nasazení DH Kompas backendu — klikací návod (cca 10 minut)

Dva účty musí založit člověk (kvůli identitě a platbě) — všechno ostatní je
připravené. **API klíč nikdy nikam nevkládej kromě kroku B3 (Render env var) —
ani do chatu, ani do repozitáře.**

## A) Anthropic Console — API klíč s tvrdým stropem (5 min)

1. Otevři **console.anthropic.com** → Sign up (klidně stejný e-mail jako claude.ai;
   účet pro API je oddělený od předplatného).
2. V **Billing** přidej kartu a dobij malý kredit (na pilot stačí 5–10 USD).
3. **Settings → Workspaces → Create workspace** → název `DH Kompas`.
   U workspace nastav **Spend limit** (např. 25 USD/měsíc) — tvrdý strop.
4. **API keys → Create key** v workspace `DH Kompas` → zkopíruj klíč
   (`sk-ant-…`) do schránky. Zobrazí se jen jednou.

## B) Render.com — hosting zdarma (5 min)

1. Otevři **render.com** → **Sign up with GitHub** (přihlásíš se GitHub účtem,
   který vidí repozitář `hub`).
2. **New → Blueprint** → vyber repozitář **hub** → Render sám najde
   `render.yaml` a předvyplní službu `dh-kompas-backend` → **Apply**.
3. U proměnné **ANTHROPIC_API_KEY** vlož klíč ze schránky.
   **KNOWLEDGE_ZIP_URL** zatím nech prázdné (doplní se v kroku C), → **Deploy**.
4. Po ~2 minutách běží. Zkopíruj adresu služby
   (`https://dh-kompas-backend-XXXX.onrender.com`) — tu pošli Claudovi/týmu,
   doplní se do `navigator/config.js` a Poradce se objeví na webu.

Kontrola: otevři `https://…onrender.com/api/health` — má vrátit `{"ok":true,…}`.

## C) Knowledge base pro chatbota (volitelné, 3 min)

1. Na Google Drivu klikni pravým na složku **Knowledge-Base-Ultimate**
   → **Stáhnout** (vznikne ZIP).
2. Nahraj ZIP zpět na Drive jako **soubor**, dej **Sdílet → Kdokoli s odkazem**.
3. Z odkazu `https://drive.google.com/file/d/ID_SOUBORU/view…` vezmi `ID_SOUBORU`
   a sestav přímý odkaz: `https://drive.google.com/uc?export=download&id=ID_SOUBORU`.
4. V Renderu: služba → **Environment** → vyplň `KNOWLEDGE_ZIP_URL` tímto
   odkazem → **Save** (služba se sama restartuje). V logu uvidíš
   „Znalosti rozbaleny ze ZIP … Rozšířené znalosti: N souborů".

Pozn.: „kdokoli s odkazem" je slabá ochrana — odkaz žije jen v nastavení
Renderu, pro pilot OK. Až se přejde na server CzechInvest IT, knowledge se
nahraje přímo na disk (`backend/knowledge/`) a odkaz se zruší.

## Poznámky k provozu

- **Free plán Renderu** službu po ~15 min nečinnosti uspí — první dotaz pak
  trvá ~30–60 s (studený start). Na pilot v pohodě; placený plán (7 USD/měs.)
  to řeší.
- Limity nákladů: workspace spend limit (krok A3) + denní limity v serveru
  (viz `.env.example`).
- Aktualizace: každý merge do `main` Render automaticky přenasadí.
