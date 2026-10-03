# Formy vlády: prezidencialismus (vzdělávací hra)

Interaktivní rozhodovací hra pro střední školy. Odpovídá na otázku
**Jaké jsou výhody a rizika prezidentského systému?** (politologie UHK, téma 8).

- Jeden soubor `index.html`, bez serveru, bez knihoven, funguje offline.
- Po nasazení na GitHub Pages běží na adrese `…/prezidencialismus/`.
- Hráč volí zemi (USA / Latinská Amerika) a roli (prezident / zákonodárná moc),
  projde třemi rozhodnutími a dojde k jednomu ze čtyř konců
  (stabilita, pat, impeachment, rozpad). Pak dostane debrief krok po kroku.

## Kde se upravují texty

Vše je v `index.html` v bloku `<script id="data">` (nahoře, nad logikou):
`GLOSSARY` (slovníček), `PRIMER` (úvodní panely), `ZEME`, `ROLE`, `KONCE`,
`SHRNUTI` (závěrečná tabulka) a `SCENARIOS` (čtyři cesty). Návod je
v komentáři na začátku souboru. Pojmy v textech se píší jako `[[id]]`
nebo `[[id|skloňovaný tvar]]`.

## Fakta k ověření před odevzdáním

Hra uvádí reálné případy. Tým je musí ověřit a v seminárce odcitovat.
Seznam tvrzení, která jsou ve hře (data v závorce jsou tak, jak jsou ve hře):

**USA**
- Nejdelší shutdown: 22. 12. 2018 až 25. 1. 2019, 35 dní, spor o peníze na zeď.
- Stav nouze na jižní hranici: únor 2019, následné soudní blokace části financování.
- Watergate: Nejvyšší soud nařídil vydat nahrávky (červenec 1974), Nixon
  rezignoval 9. 8. 1974 po sdělení republikánů, že v Senátu neobstojí.
- Impeachment Clintona: obžalován prosinec 1998, Senát zprostil únor 1999.
- Impeachment Trumpa: prosinec 2019 (zproštěn únor 2020) a leden 2021 (zproštěn únor 2021).
- Sněmovna v lednu 2020 několik týdnů zadržovala předání obžaloby Senátu.
- Zákony po Watergate: zákon o válečných pravomocech (1973), rozpočtový zákon (1974).
- Zákaz financování operací v Kambodži (1973).
- Rozdělená vláda zhruba 60 % doby po 2. světové válce (z přednášky).
- Kongres: Sněmovna 435 členů na 2 roky, Senát 100 členů na 6 let.
- Volitelský sbor: vítěz bez většiny hlasů v letech 2000 a 2016.
- Strana prezidenta ve volbách v polovině období skoro vždy ztrácí (výjimka 2002).

**Chile**
- Allende zvolen 1970 s přibližně 36 % hlasů, Kongres ho potvrdil po dohodě s opozicí.
- Využívání dekretů a zákona z roku 1932 k přebírání podniků.
- Inflace 1973 přes 300 %, stávky dopravců, zabírání továren.
- Usnesení Kongresu o porušování ústavy vládou: 22. 8. 1973.
- Rezignace generála Pratse 23. 8. 1973, nástup Pinocheta.
- Pokus o dohodu s křesťanskými demokraty za zprostředkování kardinála Silvy Henríqueze (srpen 1973).
- Allende plánoval oznámit referendum (plebiscit) 11. 9. 1973.
- Převrat 11. 9. 1973, Allende zemřel v paláci La Moneda, diktatura do roku 1990.

**Venezuela**
- Opozice vyhrála volby do Národního shromáždění v prosinci 2015.
- Nejvyšší soud obsazený narychlo prezidentovými lidmi (prosinec 2015),
  od 2016 rušil rozhodnutí parlamentu, v březnu 2017 na sebe přenesl jeho pravomoci.
- Rozpočet 2017 schválil Nejvyšší soud místo parlamentu (říjen 2016).
- Ústavodárné shromáždění zvoleno v červenci 2017 při bojkotu opozice.
- Bojkot prezidentských voleb 2018.
- Protesty 2017: přes čtyři měsíce, přes 120 mrtvých; emigrace přes 7 milionů lidí.
- Guaidó: prohlášení úřadujícím prezidentem (leden 2019), uznání přes 50 zeměmi,
  výzva armádě 30. 4. 2019.
- Jednání: Vatikán 2016, Norsko 2019, Mexiko 2021, dohoda z Barbadosu 2023,
  sporné volby červenec 2024.
- Chávezova ústava referendem 1999.

**Ostatní**
- Brazílie: impeachment Collora (1992, rezignoval během procesu) a Rousseffové (2016).
- Honduras 2009: sesazení prezidenta Zelayi armádou s podporou Kongresu a soudu.

## Zdroje, o které se obsah opírá

- Hague, Harrop, McCormick (2011): Comparative government and politics, kap. 9.
- O'Neil, Fields, Share (2017): Cases in Comparative Politics, kapitola United States.
- Hloušek, Kopeček (eds.) (2005): Demokracie, kap. 8.
- Linz, J. J. (1990): The Perils of Presidentialism. Journal of Democracy.
- Mainwaring a Shugart (1997), Elgie (2008): citováno v přednášce u tabulky výhod a nevýhod.
