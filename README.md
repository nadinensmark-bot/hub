# Hub Relay — Defence CRM

> **Nové:** ve složce [`navigator/`](navigator/) je **DH Kompas** — průvodce EU programy
> pro defence & dual-use startupy: výběr programu, hlídání výzev a uzávěrek, jak napsat
> přihlášku, dual-use test podle kontrolních seznamů (Společný vojenský seznam EU
> a příloha I nařízení 2021/821, kategorie 0–9) s návodem „co dál" kvůli exportu,
> a dual-use překladač use casů. Dvojjazyčné CZ/EN. Statický web bez serveru; obsah se
> spravuje v `navigator/kb.js` (česky) a `navigator/kb-en.js` (anglicky) — oba soubory
> udržovat souběžně; to je skutečná správa obsahu („backend" = tento repozitář).
> Záznamy **výzev** (termíny, uzávěrky) se spravují v `data/vyzvy.csv` — GitHub Action
> (`.github/workflows/vyzvy.yml`) z něj denně (a při každé změně CSV) generuje
> `navigator/vyzvy.js`, který má v aplikaci přednost. Volitelně lze místo CSV v repu
> nastavit proměnnou `VYZVY_CSV_URL` (Settings → Secrets and variables → Actions →
> Variables) na Google tabulku publikovanou jako CSV — tým pak edituje jen tabulku.
> **Backend (fáze 2)** je připravený ve složce [`backend/`](backend/): chatbot poradce
> nad knowledge base a analýza specifikací přes Claude API, s denními limity, stropy
> délky a prompt cachingem. Aktivace = nasadit server (návod v `backend/README.md`,
> jde otestovat i bez API klíče v mock režimu) a vyplnit adresu do
> `navigator/config.js`. Do té doby je záložka Poradce veřejnosti skrytá.
> Záložka Knowledge base v aplikaci je jen pro tým: v menu se zobrazí po otevření
> adresy s `#admin` (skryje se přes `#noadmin`) a její editor ukládá pouze lokálně
> do prohlížeče. Po nasazení na GitHub Pages běží aplikace na adrese `…/navigator/`.

Followupy, párování poptávek a nabídek, pipeline, kalendář z Microsoft Teams, import z Excelu a AI generování zpráv z pracovních cest. Pro **Defence Hub CzechInvest**.

Aplikace běží jako statický web — **bez serveru** (ideální pro GitHub Pages).

---

## Soubory

```
index.html        # aplikace
support.js        # runtime (needed — nech vedle index.html)
msal-config.js    # JEDINÉ, co upravuješ — přihlášení přes Microsoft
README.md
```

---

## A) Rychlé nasazení (DEMO režim, ~3 min)

Funguje hned, přihlášení je ukázkové (neptá se Microsoftu).

1. **github.com → + → New repository** → název např. `hub-relay-crm` → **Public** → Create
2. V repu **Add file → Upload files** → přetáhni `index.html`, `support.js`, `msal-config.js`, `README.md` → **Commit**
3. **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**
4. Za ~1 min běží na `https://<účet>.github.io/hub-relay-crm/`

---

## B) Skutečné přihlášení přes Microsoft / Teams

Aby se appka přihlašovala doopravdy a četla **tvůj reálný kalendář z Teams**, potřebuje jednu věc: **Application (client) ID** z registrace aplikace v Microsoft Entra ID. Většinou to zvládneš sama, bez IT správce.

### 1. Zaregistruj aplikaci (cca 5 min)
1. Otevři **https://entra.microsoft.com** → přihlas se pracovním účtem
2. **Applications → App registrations → New registration**
3. **Name:** `Hub Relay CRM`
4. **Supported account types:** *Accounts in this organizational directory only*
5. **Redirect URI:** vyber **Single-page application (SPA)** a vlož PŘESNOU adresu, kde appka běží — tu z kroku A4, např.
   `https://<účet>.github.io/hub-relay-crm/`
6. **Register**
7. Na stránce **Overview** zkopíruj **Application (client) ID** a **Directory (tenant) ID**
8. **API permissions → Add a permission → Microsoft Graph → Delegated permissions** → zaškrtni **User.Read** a **Calendars.Read** → **Add**
   *(Calendars.Read pro vlastní kalendář nevyžaduje souhlas správce.)*

### 2. Vlož údaje do `msal-config.js`
```js
window.HUBRELAY_MSAL = {
  clientId: "SEM-VLOŽ-CLIENT-ID",
  tenantId: "SEM-VLOŽ-TENANT-ID",
  redirectUri: window.location.origin + window.location.pathname,
  scopes: ["User.Read", "Calendars.Read"]
};
```
Ulož, nahraj upravený `msal-config.js` do repa (Commit). Hotovo — tlačítko „Přihlásit přes Microsoft" teď přihlásí doopravdy a v **Kalendáři** se tlačítkem **„Načíst můj kalendář"** stáhnou tvoje skutečné schůzky z tohoto týdne.

> Pokud krok 1.2 (New registration) účet nepustí, má váš tenant vypnuté self-service registrace → požádej IT o Client ID. Jinak to ale projde.

---

## Co je hotové a co je další fáze

**Funguje teď:** všechny obrazovky, pipeline, kontakty, import z Excelu, export do CSV, kalendář (vždy aktuální týden), demo i reálné Microsoft přihlášení + čtení vlastního kalendáře přes Graph, import `.ics`, a **zprávy z cest** — tlačítko „Vygenerovat" vždy vrátí hotový koncept: pokud je dostupný AI model, použije ho; jinak zprávu sestaví lokálně z vyplněných podkladů (místo, účel, přepis, vizitky). Data se ukládají do prohlížeče; tlačítko **„Vymazat data"** v levém panelu vrátí ukázkový stav.

**Další fáze (vyžaduje backend / IT):**
- Sdílená databáze místo lokálních dat (kontakty, shody, historie pro celý tým)
- Kalendáře *ostatních* členů týmu (vyžaduje jejich přihlášení nebo aplikační oprávnění se souhlasem správce)
- Automatický přepis hlasu a OCR vizitek
- AI generování zpráv v ostrém provozu přes server (vlastní API klíč modelu) — místo lokálního konceptu
