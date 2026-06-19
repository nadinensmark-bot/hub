# Hub Relay — Defence CRM

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

**Funguje teď:** všechny obrazovky, pipeline, kontakty, import z Excelu, kalendář, zprávy z cest (UI), demo i reálné Microsoft přihlášení + čtení vlastního kalendáře přes Graph.

**Další fáze (vyžaduje backend / IT):**
- Sdílená databáze místo lokálních dat (kontakty, shody, historie pro celý tým)
- Kalendáře *ostatních* členů týmu (vyžaduje jejich přihlášení nebo aplikační oprávnění se souhlasem správce)
- Automatický přepis hlasu a OCR vizitek
- AI generování zpráv v ostrém provozu (vlastní API klíč modelu)
