/* ============================================================
   Hub Relay — konfigurace přihlášení přes Microsoft / Teams
   ============================================================

   TADY DOPLŇ ÚDAJE Z REGISTRACE APLIKACE (návod níže).
   Dokud je clientId prázdné, appka běží v DEMO režimu
   (přihlášení je jen ukázkové, kalendář používá vzorová data).

   ----- JAK ZÍSKAT clientId (cca 5 minut, BEZ IT správce) -----
   1. Otevři https://entra.microsoft.com  → přihlas se pracovním účtem
   2. Vlevo: Applications → App registrations → New registration
   3. Name: Hub Relay CRM
   4. Supported account types: "Accounts in this organizational directory only"
   5. Redirect URI: vyber "Single-page application (SPA)" a vlož přesnou
      adresu, kde appka poběží, např.:
        https://nadinensmark-bot.github.io/hub-relay-crm/
      (a klidně přidej i http://localhost pro testování)
   6. Register
   7. Na stránce Overview zkopíruj:
        - Application (client) ID   → sem níže jako clientId
        - Directory (tenant) ID     → sem níže jako tenantId
   8. Vlevo API permissions → Add a permission → Microsoft Graph →
      Delegated permissions → zaškrtni  User.Read  a  Calendars.Read → Add
      (Calendars.Read pro vlastní kalendář NEvyžaduje souhlas správce.)

   Pozn.: Pokud krok 2 (New registration) nepustí, má váš tenant
   vypnuté self-service registrace — pak je potřeba IT. Většinou to ale jde.
   ============================================================ */

window.HUBRELAY_MSAL = {
  clientId: "",                 // <-- sem Application (client) ID
  tenantId: "common",           // <-- sem Directory (tenant) ID (nebo nech "common")
  redirectUri: window.location.origin + window.location.pathname,
  scopes: ["User.Read", "Calendars.Read"]
};
