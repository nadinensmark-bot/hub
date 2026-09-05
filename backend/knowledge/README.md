# Rozšířená znalostní báze chatbota

Do této složky se nahrávají soubory (`.md`, `.txt`, klidně v podsložkách),
ze kterých má chatbot a analýza specifikací čerpat **navíc** ke kompaktní
znalostní bázi aplikace. Typicky: celá **Knowledge-Base-Ultimate** —
na Google Drivu klik pravým na složku → Stáhnout (ZIP) → rozbalit sem.

Server soubory načte při startu (viz log: „Rozšířené znalosti: N souborů").
Po přidání souborů server restartujte. Kontrola: `GET /api/health`
vrací `znalostniSoubory`.

**Důležité:** obsah této složky se **nekomituje do veřejného repozitáře**
(je v .gitignore) — knowledge base obsahuje interní a licencované podklady
(kurz © Dr Kristýna Helm). Nahrává se přímo na server při nasazení.

Limit celkového objemu: 600 000 znaků (cca 150–200 tisíc tokenů);
při překročení se soubory nad limit přeskočí (viz log). Kdyby báze
v budoucnu narostla víc, je čas přejít na vyhledávání (RAG) — viz
zadání backendu.
