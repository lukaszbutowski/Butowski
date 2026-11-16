/*
  DANE STRONY. To jedyny plik, który trzeba edytować, żeby dodać pracę,
  zdjęcia z wystawy albo zmienić tekst. Instrukcja jest w pliku README.md.

  Każda praca (lista "prace" na dole pliku):
    id         nazwa w adresie, tylko małe litery, cyfry i myślniki (np. "sztafeta-pokolen-1")
    plik       ścieżka do obrazu (JPG w sRGB, dłuższy bok najlepiej 2000 px)
    mini       (nieobowiązkowe) mniejsza wersja do galerii, dłuższy bok ok. 1000 px
    szer, wys  wymiary pliku w pikselach (pozwalają ułożyć stronę, zanim obraz się wczyta)
    tytul      tytuł oryginalny; tytulEn tylko gdy tytuł ma wersję angielską
    technika   po polsku, np. "litografia barwna, chine collé" (angielski z listy TECHNIKI_EN)
    wymiary    wymiary pracy, np. "100 × 70 cm"; wymiaryEn tylko gdy jest w nich tekst, np. "(każda)" → "(each)"
    rok        liczba, np. 2018, albo null, jeśli nieznany (według niego praca trafia do roku)
    daty       (nieobowiązkowe) zapis lat do wyświetlenia, np. "2020–2024"
    dzial      "grafika" albo "malarstwo"
    glowna     true = praca pojawia się w pokazie na stronie głównej
    uwaga      (nieobowiązkowe) dopisek pod opisem, np. "kolekcja Muzeum Gdańska"; uwagaEn po angielsku
  Puste pola ("" albo null) po prostu się nie wyświetlają.
*/

window.STRONA = {
  imie: "Łukasz Butowski",

  kontakt: {
    email: "lukaszbutowski@gmail.com",
    instagram: "https://www.instagram.com/lukaszbutowski/",
    facebook: "https://www.facebook.com/butaps"
  },

  bio: {
    pl: [
      "Łukasz Butowski (ur. 1981) jest grafikiem i malarzem, absolwentem Akademii Sztuk Pięknych w Gdańsku. Zajmuje się grafiką warsztatową, przede wszystkim tradycyjną litografią na kamieniu, oraz malarstwem. Od 2017 roku kieruje Pracownią Litografii ASP w Gdańsku.",
      "Jest autorem kilkunastu wystaw indywidualnych i uczestnikiem kilkudziesięciu wystaw zbiorowych w Polsce i za granicą. Organizuje wystawy i warsztaty promujące grafikę warsztatową."
    ],
    en: [
      "Łukasz Butowski (b. 1981) is a printmaker and painter, a graduate of the Academy of Fine Arts in Gdańsk. He works mainly in traditional stone lithography, as well as in painting. Since 2017 he has headed the Lithography Studio at the Academy of Fine Arts in Gdańsk.",
      "He has had more than a dozen solo exhibitions and has taken part in dozens of group shows in Poland and abroad. He organises exhibitions and workshops that promote fine-art printmaking."
    ]
  },

  // CV w skrócie. Kursywa: <i>tytuł</i>. Pole rokEn tylko wtedy, gdy rok ma słowa ("od 2017").
  cv: [
    {
      pl: "Wykształcenie", en: "Education",
      wpisy: [
        { rok: "2013", pl: "Stopień doktora sztuki, rozprawa <i>Kalipsis – Przeciwieństwo Apokalipsy</i>",
                       en: "Doctor of Arts, dissertation <i>Kalipsis – Przeciwieństwo Apokalipsy</i> (Kalipsis: The Opposite of Apocalypse)" },
        { rok: "2007", pl: "Dyplom na Wydziale Malarstwa i Grafiki ASP w Gdańsku, pracownia prof. Teresy Miszkin",
                       en: "MA diploma, Faculty of Painting and Printmaking, Academy of Fine Arts in Gdańsk, studio of Prof. Teresa Miszkin" }
      ]
    },
    {
      pl: "Praca", en: "Positions",
      wpisy: [
        { rok: "od 2017", rokEn: "since 2017", pl: "Kierownik Pracowni Litografii, ASP w Gdańsku",
                                               en: "Head of the Lithography Studio, Academy of Fine Arts in Gdańsk" },
        { rok: "2016–2024", pl: "Prodziekan Wydziału Grafiki, ASP w Gdańsku",
                            en: "Vice-Dean of the Faculty of Graphic Arts, Academy of Fine Arts in Gdańsk" }
      ]
    },
    {
      pl: "Nagrody i stypendia", en: "Awards and grants",
      wpisy: [
        { rok: "2024", pl: "Stypendium Miasta Gdańska dla Twórców Kultury na cykl <i>Gdańska Sztuka Nieba</i>",
                       en: "City of Gdańsk Grant for Artists, for the cycle <i>Gdańska Sztuka Nieba</i>" },
        { rok: "2021", pl: "Grand Prix, III Międzynarodowe Biennale Grafiki, Erywań, Armenia",
                       en: "Grand Prix, 3rd International Print Biennale, Yerevan, Armenia" },
        { rok: "2019", pl: "II nagroda w konkursie Pomorska Grafika Roku, GTPS, Gdańsk",
                       en: "Second Prize, Pomeranian Print of the Year competition, GTPS, Gdańsk" }
      ]
    },
    {
      pl: "Wystawy indywidualne (wybór)", en: "Selected solo exhibitions",
      wpisy: [
        { rok: "2025", pl: "<i>If I Should Fall from Grace With God</i>, Galeria Wydziału Grafiki ASP, Gdańsk",
                       en: "<i>If I Should Fall from Grace With God</i>, Faculty of Graphic Arts Gallery, Academy of Fine Arts, Gdańsk" },
        { rok: "2025", pl: "<i>Sztuka Katastrofy</i>, Galeria TuBaza, Gdynia",
                       en: "<i>Sztuka Katastrofy</i> (Art of Disaster), TuBaza Gallery, Gdynia" },
        { rok: "2023", pl: "<i>Obrazy Epikurejskie</i>, Oliwski Ratusz Kultury, Gdańsk",
                       en: "<i>Obrazy Epikurejskie</i> (Epicurean Paintings), Oliwa Town Hall of Culture, Gdańsk" },
        { rok: "2019", pl: "<i>Art of Disaster 1</i> i <i>2</i>, Kragujevac i Belgrad, Serbia",
                       en: "<i>Art of Disaster 1</i> and <i>2</i>, Kragujevac and Belgrade, Serbia" },
        { rok: "2017", pl: "<i>Sztafeta Pokoleń</i>, Gdynia, Koszalin, Kartuzy",
                       en: "<i>Sztafeta Pokoleń</i> (Relay of Generations), Gdynia, Koszalin, Kartuzy" },
        { rok: "2014", pl: "<i>Kalipsis</i>, Galeria Poly, Karlsruhe, Niemcy",
                       en: "<i>Kalipsis</i>, Galerie Poly, Karlsruhe, Germany" }
      ]
    },
    {
      pl: "Wystawy zbiorowe (wybór)", en: "Selected group exhibitions",
      wpisy: [
        { rok: "2026", pl: "12th Silk Road International Arts Festival, Shaanxi Provincial Art Museum, Xi’an, Chiny",
                       en: "12th Silk Road International Arts Festival, Shaanxi Provincial Art Museum, Xi’an, China" },
        { rok: "2026", pl: "<i>Venice – Gdańsk Lithography Exchange</i>, Accademia di Belle Arti di Venezia, Wenecja",
                       en: "<i>Venice – Gdańsk Lithography Exchange</i>, Accademia di Belle Arti di Venezia, Venice" },
        { rok: "2025", pl: "Litho Kielce, BWA Kielce (także 2016, 2019)",
                       en: "Litho Kielce, BWA Kielce, Poland (also 2016, 2019)" },
        { rok: "2024", pl: "Międzynarodowe Triennale Kolor w Grafice, Galeria Wozownia, Toruń (także 2021)",
                       en: "International Triennial Colour in Printmaking, Wozownia Gallery, Toruń (also 2021)" },
        { rok: "2024", pl: "<i>Magia Symboli</i>, Grafikmuseum Stiftung Schreiner, Bad Steben, Niemcy",
                       en: "<i>Magic of Symbols</i>, Grafikmuseum Stiftung Schreiner, Bad Steben, Germany" },
        { rok: "2021", pl: "Międzynarodowe Triennale Grafiki, Kraków (także 2015, 2018)",
                       en: "International Print Triennial, Kraków (also 2015, 2018)" }
      ]
    },
    {
      pl: "Publikacje", en: "Publications",
      wpisy: [
        { rok: "2025", pl: "<i>Sztuka Katastrofy</i>, katalog wystawy retrospektywnej 2005–2025, ASP w Gdańsku (<a href=\"pliki/Butowski_Sztuka_Katastrofy_katalog_2025.pdf\" target=\"_blank\" rel=\"noopener\">PDF, 26 MB</a>)",
                       en: "<i>Sztuka Katastrofy</i> (Art of Disaster), catalogue of the 2005–2025 retrospective, Academy of Fine Arts in Gdańsk (<a href=\"pliki/Butowski_Sztuka_Katastrofy_katalog_2025.pdf\" target=\"_blank\" rel=\"noopener\">PDF, 26 MB</a>)" }
      ]
    },
    {
      pl: "Kuratorstwo (wybór)", en: "Selected curatorial projects",
      wpisy: [
        { rok: "2024", pl: "<i>Sztuka Grafiki Warsztatowej</i>, wystawa międzynarodowa, ASP w Gdańsku",
                       en: "<i>Sztuka Grafiki Warsztatowej</i> (The Art of Fine-Art Printmaking), international exhibition, Academy of Fine Arts in Gdańsk" },
        { rok: "2019", pl: "<i>1+1: The Exhibition of Polish Printmaking</i>, Central Academy of Fine Arts (CAFA), Pekin",
                       en: "<i>1+1: The Exhibition of Polish Printmaking</i>, Central Academy of Fine Arts (CAFA), Beijing" },
        { rok: "2018", pl: "<i>Pinch Tip: China Contemporary Prints</i>, artyści CAFA w Pekinie i China Academy of Art w Hangzhou",
                       en: "<i>Pinch Tip: China Contemporary Prints</i>, artists from CAFA Beijing and the China Academy of Art, Hangzhou" }
      ]
    },
    {
      pl: "Prace w kolekcjach", en: "Collections",
      wpisy: [
        { rok: "", pl: "Muzeum Gdańska", en: "Museum of Gdańsk" },
        { rok: "", pl: "Muzeum Okręgowe w Bydgoszczy", en: "District Museum in Bydgoszcz" },
        { rok: "", pl: "Centrum Spotkania Kultur, Lublin", en: "Centre for the Meeting of Cultures, Lublin" },
        { rok: "", pl: "Kultur Dialog Armenien, Erywań", en: "Kultur Dialog Armenien, Yerevan" },
        { rok: "", pl: "Kolekcje prywatne", en: "Private collections" }
      ]
    }
  ],

  /*
    ZDJĘCIA Z WYSTAW I WYDARZEŃ. Zakładka „Wystawy” pojawi się sama, gdy dodasz pierwszy wpis.
    Zdjęcia z glowna: true przewijają się w pokazie na stronie głównej na przemian z pracami
    i wypełniają cały kadr (mogą być lekko przycięte na brzegach). Wzór:

    { id: "sztuka-katastrofy-tubaza", tytul: "Sztuka Katastrofy", tytulEn: "Art of Disaster",
      miejsce: "Galeria TuBaza, Gdynia", miejsceEn: "TuBaza Gallery, Gdynia", rok: 2025,
      zdjecia: [
        { plik: "obrazy/wystawy/tubaza-1.jpg", szer: 2000, wys: 1333, glowna: true },
        { plik: "obrazy/wystawy/tubaza-2.jpg", szer: 2000, wys: 1333 }
      ] },
  */
  wystawy: [
    { id: "if-i-should-fall", tytul: "If I Should Fall from Grace With God", miejsce: "Galeria Wydziału Grafiki ASP, Gdańsk", miejsceEn: "Faculty of Graphic Arts Gallery, Academy of Fine Arts, Gdańsk", rok: 2025, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/if-i-should-fall-1.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-1.jpg", szer: 1628, wys: 1228, glowna: true },
        { plik: "obrazy/wystawy/if-i-should-fall-2.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-2.jpg", szer: 1628, wys: 1220, glowna: true },
        { plik: "obrazy/wystawy/if-i-should-fall-3.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-3.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/if-i-should-fall-4.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-4.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/if-i-should-fall-5.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-5.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/if-i-should-fall-6.jpg", mini: "obrazy/wystawy/m/if-i-should-fall-6.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "sztuka-katastrofy-tubaza", tytul: "Sztuka Katastrofy", tytulEn: "Art of Disaster", miejsce: "Galeria TuBaza, Gdynia", miejsceEn: "TuBaza Gallery, Gdynia", rok: 2025, rodzaj: "indywidualna",
      katalog: { plik: "pliki/Butowski_Sztuka_Katastrofy_katalog_2025.pdf", rozmiar: "26 MB" },
      zdjecia: [
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-1.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-1.jpg", szer: 1624, wys: 1216, glowna: true },
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-2.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-2.jpg", szer: 1576, wys: 1184 },
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-3.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-3.jpg", szer: 1258, wys: 1800 },
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-4.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-4.jpg", szer: 1576, wys: 1180 },
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-5.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-5.jpg", szer: 1258, wys: 1800 },
        { plik: "obrazy/wystawy/sztuka-katastrofy-tubaza-6.jpg", mini: "obrazy/wystawy/m/sztuka-katastrofy-tubaza-6.jpg", szer: 1258, wys: 1800 }
      ] },
    { id: "tidaholm-2026", tytul: "9th International Lithographic Symposium", miejsce: "Muzeum Litografii, Tidaholm, Szwecja", miejsceEn: "Museum of Lithography, Tidaholm, Sweden", rok: 2026, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/tidaholm-2026-1.jpg", mini: "obrazy/wystawy/m/tidaholm-2026-1.jpg", szer: 1576, wys: 1184, glowna: true },
        { plik: "obrazy/wystawy/tidaholm-2026-2.jpg", mini: "obrazy/wystawy/m/tidaholm-2026-2.jpg", szer: 1576, wys: 1180 },
        { plik: "obrazy/wystawy/tidaholm-2026-3.jpg", mini: "obrazy/wystawy/m/tidaholm-2026-3.jpg", szer: 1258, wys: 1800 }
      ] },
    { id: "wenecja-2026", tytul: "Venice – Gdańsk Lithography Exchange Exhibition", miejsce: "Accademia di Belle Arti di Venezia, Forte Marghera, Wenecja", miejsceEn: "Accademia di Belle Arti di Venezia, Forte Marghera, Venice", rok: 2026, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/wenecja-2026-1.jpg", mini: "obrazy/wystawy/m/wenecja-2026-1.jpg", szer: 1576, wys: 1184 },
        { plik: "obrazy/wystawy/wenecja-2026-2.jpg", mini: "obrazy/wystawy/m/wenecja-2026-2.jpg", szer: 846, wys: 1184 },
        { plik: "obrazy/wystawy/wenecja-2026-3.jpg", mini: "obrazy/wystawy/m/wenecja-2026-3.jpg", szer: 721, wys: 1184 }
      ] },
    { id: "birds-eye-view", tytul: "Bird’s Eye View", miejsce: "Galeria Wydziału Sztuk Pięknych UR, Rzeszów", miejsceEn: "Faculty of Fine Arts Gallery, University of Rzeszów", rok: 2026, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/birds-eye-view-1.jpg", mini: "obrazy/wystawy/m/birds-eye-view-1.jpg", szer: 1576, wys: 1184 },
        { plik: "obrazy/wystawy/birds-eye-view-2.jpg", mini: "obrazy/wystawy/m/birds-eye-view-2.jpg", szer: 1576, wys: 1184 }
      ] },
    { id: "magia-symboli", tytul: "Magia Symboli", tytulEn: "Magic of Symbols", miejsce: "Grafikmuseum Stiftung Schreiner, Bad Steben, Niemcy", miejsceEn: "Grafikmuseum Stiftung Schreiner, Bad Steben, Germany", rok: 2024, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/magia-symboli-1.jpg", mini: "obrazy/wystawy/m/magia-symboli-1.jpg", szer: 1258, wys: 1800 },
        { plik: "obrazy/wystawy/magia-symboli-2.jpg", mini: "obrazy/wystawy/m/magia-symboli-2.jpg", szer: 1258, wys: 1800 }
      ] },
    { id: "obrazy-epikurejskie", tytul: "Obrazy Epikurejskie", tytulEn: "Epicurean Paintings", miejsce: "Galeria Sztuki Nowy Warzywniak, Oliwski Ratusz Kultury, Gdańsk", miejsceEn: "Nowy Warzywniak Gallery, Oliwa Town Hall of Culture, Gdańsk", rok: 2023, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/obrazy-epikurejskie-1.jpg", mini: "obrazy/wystawy/m/obrazy-epikurejskie-1.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/obrazy-epikurejskie-2.jpg", mini: "obrazy/wystawy/m/obrazy-epikurejskie-2.jpg", szer: 1628, wys: 1220 }
      ] },
    { id: "synergia-przeciwienstw", tytul: "Synergia Przeciwieństw", tytulEn: "Synergy of Opposites", miejsce: "Muzeum Narodowe Czarnogóry, Cetinje", miejsceEn: "National Museum of Montenegro, Cetinje", rok: 2023, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/synergia-przeciwienstw-1.jpg", mini: "obrazy/wystawy/m/synergia-przeciwienstw-1.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/synergia-przeciwienstw-2.jpg", mini: "obrazy/wystawy/m/synergia-przeciwienstw-2.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/synergia-przeciwienstw-3.jpg", mini: "obrazy/wystawy/m/synergia-przeciwienstw-3.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "odmienne-slady-litografii", tytul: "Odmienne Ślady Litografii", tytulEn: "Different Traces of Lithography", miejsce: "Centrum Spotkania Kultur, Lublin", miejsceEn: "Centre for the Meeting of Cultures, Lublin", rok: 2020, rodzaj: "zbiorowa",
      zdjecia: [
        { plik: "obrazy/wystawy/odmienne-slady-litografii-1.jpg", mini: "obrazy/wystawy/m/odmienne-slady-litografii-1.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/odmienne-slady-litografii-2.jpg", mini: "obrazy/wystawy/m/odmienne-slady-litografii-2.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/odmienne-slady-litografii-3.jpg", mini: "obrazy/wystawy/m/odmienne-slady-litografii-3.jpg", szer: 1628, wys: 1220 }
      ] },
    { id: "art-of-disaster-2", tytul: "Art of Disaster 2", miejsce: "Galeria KNU Kolarac, Belgrad", miejsceEn: "Kolarac Gallery, Belgrade", rok: 2019, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/art-of-disaster-2-1.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-1.jpg", szer: 1628, wys: 1228, glowna: true },
        { plik: "obrazy/wystawy/art-of-disaster-2-2.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-2.jpg", szer: 1350, wys: 1800 },
        { plik: "obrazy/wystawy/art-of-disaster-2-3.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-3.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/art-of-disaster-2-4.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-4.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/art-of-disaster-2-5.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-5.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/art-of-disaster-2-6.jpg", mini: "obrazy/wystawy/m/art-of-disaster-2-6.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "art-of-disaster-1", tytul: "Art of Disaster 1", miejsce: "Galeria Mostovi Balkana, Kragujevac", miejsceEn: "Balkan Bridges Gallery, Kragujevac", rok: 2019, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/art-of-disaster-1-1.jpg", mini: "obrazy/wystawy/m/art-of-disaster-1-1.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/art-of-disaster-1-2.jpg", mini: "obrazy/wystawy/m/art-of-disaster-1-2.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/art-of-disaster-1-3.jpg", mini: "obrazy/wystawy/m/art-of-disaster-1-3.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/art-of-disaster-1-4.jpg", mini: "obrazy/wystawy/m/art-of-disaster-1-4.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/art-of-disaster-1-5.jpg", mini: "obrazy/wystawy/m/art-of-disaster-1-5.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "cafa-pekin", tytul: "Exchange Exhibition of Polish Printmaking", miejsce: "Central Academy of Fine Arts (CAFA), Pekin", miejsceEn: "Central Academy of Fine Arts (CAFA), Beijing", rok: 2019, rodzaj: "kuratorska",
      zdjecia: [
        { plik: "obrazy/wystawy/cafa-pekin-1.jpg", mini: "obrazy/wystawy/m/cafa-pekin-1.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/cafa-pekin-2.jpg", mini: "obrazy/wystawy/m/cafa-pekin-2.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "humberta-2018", tytul: "Łukasz Butowski", miejsce: "Galeria Humberta, ASP w Krakowie", miejsceEn: "Humberta Gallery, Academy of Fine Arts in Kraków", rok: 2018, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/humberta-2018-1.jpg", mini: "obrazy/wystawy/m/humberta-2018-1.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/humberta-2018-2.jpg", mini: "obrazy/wystawy/m/humberta-2018-2.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/humberta-2018-3.jpg", mini: "obrazy/wystawy/m/humberta-2018-3.jpg", szer: 1628, wys: 1228 }
      ] },
    { id: "sztafeta-pokolen", tytul: "Sztafeta Pokoleń", tytulEn: "Relay of Generations", miejsce: "Galeria Debiut (Gdynia), Galeria Na Piętrze (Koszalin), Galeria Refektarz (Kartuzy)", miejsceEn: "Debiut Gallery (Gdynia), Na Piętrze Gallery (Koszalin), Refektarz Gallery (Kartuzy)", rok: 2017, rodzaj: "indywidualna",
      zdjecia: [
        { plik: "obrazy/wystawy/sztafeta-pokolen-1.jpg", mini: "obrazy/wystawy/m/sztafeta-pokolen-1.jpg", szer: 1628, wys: 1220, glowna: true },
        { plik: "obrazy/wystawy/sztafeta-pokolen-2.jpg", mini: "obrazy/wystawy/m/sztafeta-pokolen-2.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/sztafeta-pokolen-3.jpg", mini: "obrazy/wystawy/m/sztafeta-pokolen-3.jpg", szer: 1628, wys: 1220 },
        { plik: "obrazy/wystawy/sztafeta-pokolen-4.jpg", mini: "obrazy/wystawy/m/sztafeta-pokolen-4.jpg", szer: 1628, wys: 1228 },
        { plik: "obrazy/wystawy/sztafeta-pokolen-5.jpg", mini: "obrazy/wystawy/m/sztafeta-pokolen-5.jpg", szer: 1628, wys: 1228 }
      ] }
  ],

  // Tłumaczenie technik na angielski: każdy człon techniki osobno (np. "litografia barwna, chine collé")
  TECHNIKI_EN: {
    "litografia barwna": "colour lithograph",
    "litografia": "lithograph",
    "czarny karton": "black card",
    "serigrafia barwna": "colour screen print",
    "serigrafia": "screen print",
    "algrafia": "algraphy",
    "karborund": "carborundum print",
    "szablon": "stencil",
    "tusz": "ink",
    "collage": "collage",
    "chine collé": "chine collé",
    "rysunek markerem": "marker drawing",
    "akryl na płótnie": "acrylic on canvas",
    "akryl i olej na płótnie": "acrylic and oil on canvas",
    "olej na płótnie": "oil on canvas",
    "akwarela": "watercolour",
    "gwasz": "gouache"
  },

  DZIALY: {
    "grafika":   { pl: "Grafika",   en: "Prints" },
    "malarstwo": { pl: "Malarstwo", en: "Paintings" },
    "rysunek":   { pl: "Rysunek",   en: "Drawings" },
    // osobno: true — dział widoczny tylko pod własnym przyciskiem, nie w „Wszystkie” ani w pokazie
    "szkice":    { pl: "Szkice",    en: "Sketches", osobno: true }
  },

  prace: [
    // ---------- GRAFIKA ----------
    { id: "niebo-wewnetrzne-ostateczne", plik: "obrazy/prace/niebo-wewnetrzne-ostateczne.jpg", mini: "obrazy/prace/m/niebo-wewnetrzne-ostateczne.jpg", szer: 1462, wys: 2000, tytul: "Niebo wewnętrzne ostateczne", technika: "litografia barwna, rysunek markerem", wymiary: "100 × 70 cm", rok: 2025, dzial: "grafika", glowna: true },
    { id: "mors-informatica", plik: "obrazy/prace/mors-informatica.jpg", mini: "obrazy/prace/m/mors-informatica.jpg", szer: 1445, wys: 2000, tytul: "Mors Informatica", technika: "serigrafia barwna", wymiary: "100 × 70 cm", rok: 2025, dzial: "grafika", glowna: true },
    { id: "siedzimy-w-okopach-2", plik: "obrazy/prace/siedzimy-w-okopach-2.jpg", mini: "obrazy/prace/m/siedzimy-w-okopach-2.jpg", szer: 1433, wys: 2000, tytul: "Siedzimy w okopach 2", technika: "litografia barwna, chine collé", wymiary: "70 × 50 cm", rok: 2025, daty: "2022–2025", dzial: "grafika", glowna: false },
    { id: "ostatnia-komunia", plik: "obrazy/prace/ostatnia-komunia.jpg", mini: "obrazy/prace/m/ostatnia-komunia.jpg", szer: 2000, wys: 1108, tytul: "Ostatnia komunia", technika: "litografia barwna, chine collé, collage", wymiary: "112 × 240 cm", rok: 2024, daty: "2020–2024", dzial: "grafika", glowna: false },
    { id: "dmmnp", plik: "obrazy/prace/dmmnp.jpg", mini: "obrazy/prace/m/dmmnp.jpg", szer: 1301, wys: 2000, tytul: "D.M.M.N.P", technika: "serigrafia barwna", wymiary: "70 × 50 cm", rok: 2023, dzial: "grafika", glowna: false },
    { id: "eine-fantastische-position", plik: "obrazy/prace/eine-fantastische-position.jpg", mini: "obrazy/prace/m/eine-fantastische-position.jpg", szer: 1481, wys: 2000, tytul: "Eine Fantastische Position", technika: "serigrafia barwna", wymiary: "70 × 50 cm", rok: 2021, dzial: "grafika", glowna: false },
    { id: "siedzimy-w-okopach-1", plik: "obrazy/prace/siedzimy-w-okopach-1.jpg", mini: "obrazy/prace/m/siedzimy-w-okopach-1.jpg", szer: 1564, wys: 2000, tytul: "Siedzimy w Okopach 1", technika: "serigrafia", wymiary: "70 × 50 cm", rok: 2020, dzial: "grafika", glowna: false },
    { id: "locomotor-ataxia", plik: "obrazy/prace/locomotor-ataxia.jpg", mini: "obrazy/prace/m/locomotor-ataxia.jpg", szer: 2000, wys: 1504, tytul: "Locomotor Ataxia", technika: "litografia barwna", wymiary: "112 × 76 cm", rok: 2019, dzial: "grafika", glowna: false },
    { id: "my-heart-of-all-sorrows", plik: "obrazy/prace/my-heart-of-all-sorrows.jpg", mini: "obrazy/prace/m/my-heart-of-all-sorrows.jpg", szer: 1267, wys: 2000, tytul: "My Heart of all Sorrows", technika: "litografia barwna", wymiary: "112 × 76 cm", rok: 2019, dzial: "grafika", glowna: false },
    { id: "moj-pas-shahida", plik: "obrazy/prace/moj-pas-shahida.jpg", mini: "obrazy/prace/m/moj-pas-shahida.jpg", szer: 804, wys: 2000, tytul: "Mój Pas Shahida", tytulEn: "My Martyr Belt", technika: "litografia barwna", wymiary: "200 × 70 cm", rok: 2019, dzial: "grafika", glowna: false },
    { id: "stone-hands-of-l", plik: "obrazy/prace/stone-hands-of-l.jpg", mini: "obrazy/prace/m/stone-hands-of-l.jpg", szer: 1544, wys: 2000, tytul: "Stone hands of (L)", technika: "litografia barwna", wymiary: "76 × 56 cm", rok: 2019, dzial: "grafika", glowna: false },
    { id: "nie-przejdziemy-do-historii", plik: "obrazy/prace/nie-przejdziemy-do-historii.jpg", mini: "obrazy/prace/m/nie-przejdziemy-do-historii.jpg", szer: 2000, wys: 1459, tytul: "Nie przejdziemy do Historii", technika: "litografia, szablon", wymiary: "100 × 70 cm", rok: 2019, daty: "2018–2019", dzial: "grafika", glowna: false },
    { id: "glowa-holofernesa", plik: "obrazy/prace/glowa-holofernesa.jpg", mini: "obrazy/prace/m/glowa-holofernesa.jpg", szer: 1542, wys: 2000, tytul: "Głowa Holofernesa", tytulEn: "The Head of Holofernes", technika: "litografia barwna", wymiary: "107 × 78 cm", rok: 2018, dzial: "grafika", glowna: true },
    { id: "romantyczny-chlopczyk", plik: "obrazy/prace/romantyczny-chlopczyk.jpg", mini: "obrazy/prace/m/romantyczny-chlopczyk.jpg", szer: 2000, wys: 1515, tytul: "Romantyczny chłopczyk", technika: "litografia barwna, algrafia", wymiary: "130 × 170 cm", rok: 2018, dzial: "grafika", glowna: false },
    { id: "nowoczesna-dziewczyna", plik: "obrazy/prace/nowoczesna-dziewczyna.jpg", mini: "obrazy/prace/m/nowoczesna-dziewczyna.jpg", szer: 2000, wys: 1509, tytul: "Nowoczesna dziewczyna", technika: "litografia barwna, algrafia", wymiary: "130 × 170 cm", rok: 2018, dzial: "grafika", glowna: false },
    { id: "soldat-inconnu", plik: "obrazy/prace/soldat-inconnu.jpg", mini: "obrazy/prace/m/soldat-inconnu.jpg", szer: 2000, wys: 1511, tytul: "Soldat Inconnu", technika: "litografia barwna", wymiary: "100 × 70 cm", rok: 2017, dzial: "grafika", glowna: false },
    // Z Dysku (folder „Wystawa w Tu Baza”): tytuł, technika i rok z sygnatury ołówkiem („JA - LEŃ … sito … 2024”); wymiary nieznane
    { id: "ja-len", plik: "obrazy/prace/ja-len.jpg", mini: "obrazy/prace/m/ja-len.jpg", szer: 2000, wys: 1425, tytul: "Ja-leń", technika: "serigrafia", wymiary: "", rok: 2024, dzial: "grafika", glowna: false },
    // Z Dysku: technika i wymiary nieznane, rok wzięty z daty pliku (2012) — do sprawdzenia
    { id: "africae-terra", plik: "obrazy/prace/africae-terra.jpg", mini: "obrazy/prace/m/africae-terra.jpg", szer: 2000, wys: 1500, tytul: "Africae terra", technika: "", wymiary: "", rok: 2012, dzial: "grafika", glowna: false },
    { id: "tak-sobie-chlapie", plik: "obrazy/prace/tak-sobie-chlapie.jpg", mini: "obrazy/prace/m/tak-sobie-chlapie.jpg", szer: 2000, wys: 1509, tytul: "Tak sobie chlapię", tytulEn: "I like to splash a lot meaninglessly", technika: "litografia barwna", wymiary: "100 × 70 cm", rok: 2017, dzial: "grafika", glowna: false },
    { id: "lewi-i-prawi", plik: "obrazy/prace/lewi-i-prawi.jpg", mini: "obrazy/prace/m/lewi-i-prawi.jpg", szer: 2000, wys: 693, tytul: "Lewi i prawi", technika: "litografia barwna, collage", wymiary: "70 × 200 cm", rok: 2017, dzial: "grafika", glowna: false },
    { id: "huomi-famosi", plik: "obrazy/prace/huomi-famosi.jpg", mini: "obrazy/prace/m/huomi-famosi.jpg", szer: 1515, wys: 2000, tytul: "Huomi Famosi", technika: "litografia", wymiary: "70 × 50 cm", rok: 2017, dzial: "grafika", glowna: false },
    { id: "above-the-city-of-bandits", plik: "obrazy/prace/above-the-city-of-bandits.jpg", mini: "obrazy/prace/m/above-the-city-of-bandits.jpg", szer: 1427, wys: 2000, tytul: "Above the city of bandits", technika: "litografia barwna", wymiary: "70 × 50 cm", rok: 2017, dzial: "grafika", glowna: false },
    { id: "sztafeta-pokolen-1", plik: "obrazy/prace/sztafeta-pokolen-1.jpg", mini: "obrazy/prace/m/sztafeta-pokolen-1.jpg", szer: 2000, wys: 1621, tytul: "Sztafeta Pokoleń 1", tytulEn: "The relay of the generations 1", technika: "litografia barwna", wymiary: "130 × 170 cm", rok: 2016, dzial: "grafika", glowna: false },
    { id: "sztafeta-pokolen-2", plik: "obrazy/prace/sztafeta-pokolen-2.jpg", mini: "obrazy/prace/m/sztafeta-pokolen-2.jpg", szer: 2000, wys: 1637, tytul: "Sztafeta Pokoleń 2", tytulEn: "The relay of the generations 2", technika: "litografia barwna", wymiary: "140 × 100 cm", rok: 2016, dzial: "grafika", glowna: true },
    { id: "havana-ginger", plik: "obrazy/prace/havana-ginger.jpg", mini: "obrazy/prace/m/havana-ginger.jpg", szer: 2000, wys: 1513, tytul: "Havana Ginger", technika: "serigrafia, tusz", wymiary: "140 × 170 cm", rok: 2016, dzial: "grafika", glowna: false },
    { id: "wielki-p", plik: "obrazy/prace/wielki-p.jpg", mini: "obrazy/prace/m/wielki-p.jpg", szer: 2000, wys: 1447, tytul: "Wielki P", technika: "litografia barwna", wymiary: "50 × 70 cm", rok: 2015, dzial: "grafika", glowna: false },
    { id: "lewica-i-prawica", plik: "obrazy/prace/lewica-i-prawica.jpg", mini: "obrazy/prace/m/lewica-i-prawica.jpg", szer: 2000, wys: 1388, tytul: "Lewica i Prawica", tytulEn: "Left side and right side", technika: "litografia barwna", wymiary: "140 × 100 cm", rok: 2014, dzial: "grafika", glowna: false },
    // ---------- GRAFIKA 2008–2013 (dane z katalogu „Sztuka Katastrofy” 2025 i katalogu „Apokalipsa słodko-kwaśna” 2013) ----------
    { id: "adam", plik: "obrazy/prace/adam.jpg", mini: "obrazy/prace/m/adam.jpg", szer: 2000, wys: 1751, tytul: "Adam", technika: "litografia", wymiary: "152 × 168 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "ewa", plik: "obrazy/prace/ewa.jpg", mini: "obrazy/prace/m/ewa.jpg", szer: 2000, wys: 1369, tytul: "Ewa", technika: "litografia", wymiary: "152 × 224 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "diabel", plik: "obrazy/prace/diabel.jpg", mini: "obrazy/prace/m/diabel.jpg", szer: 1406, wys: 2000, tytul: "Diabeł", technika: "litografia", wymiary: "185 × 132 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "ostatnie-spojrzenie", plik: "obrazy/prace/ostatnie-spojrzenie.jpg", mini: "obrazy/prace/m/ostatnie-spojrzenie.jpg", szer: 2000, wys: 1788, tytul: "Ostatnie spojrzenie", technika: "litografia", wymiary: "152 × 168 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "deprywacja-sensoryczna", plik: "obrazy/prace/deprywacja-sensoryczna.jpg", mini: "obrazy/prace/m/deprywacja-sensoryczna.jpg", szer: 2000, wys: 555, tytul: "Deprywacja sensoryczna", technika: "litografia", wymiary: "76 × 250 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "utrata-dziewictwa", plik: "obrazy/prace/utrata-dziewictwa.jpg", mini: "obrazy/prace/m/utrata-dziewictwa.jpg", szer: 2000, wys: 679, tytul: "Utrata dziewictwa", technika: "litografia", wymiary: "76 × 224 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "trup-2", plik: "obrazy/prace/trup-2.jpg", mini: "obrazy/prace/m/trup-2.jpg", szer: 2000, wys: 662, tytul: "Trup 2", technika: "litografia", wymiary: "60 × 200 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "rozklad-1", plik: "obrazy/prace/rozklad-1.jpg", mini: "obrazy/prace/m/rozklad-1.jpg", szer: 2000, wys: 1404, tytul: "Rozkład 1", technika: "litografia", wymiary: "70 × 100 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "cobe", plik: "obrazy/prace/cobe.jpg", mini: "obrazy/prace/m/cobe.jpg", szer: 2000, wys: 829, tytul: "Cobe", technika: "litografia", wymiary: "35 × 76 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "wniebowstapienie-onanisty", plik: "obrazy/prace/wniebowstapienie-onanisty.jpg", mini: "obrazy/prace/m/wniebowstapienie-onanisty.jpg", szer: 2000, wys: 1428, tytul: "Wniebowstąpienie onanisty", technika: "litografia barwna", wymiary: "76 × 112 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "erasmus-0", plik: "obrazy/prace/erasmus-0.jpg", mini: "obrazy/prace/m/erasmus-0.jpg", szer: 1956, wys: 1618, tytul: "Erasmus 0", technika: "litografia barwna", wymiary: "32 × 42 cm", rok: 2013, dzial: "grafika", glowna: false },
    { id: "trup-1", plik: "obrazy/prace/trup-1.jpg", mini: "obrazy/prace/m/trup-1.jpg", szer: 2000, wys: 718, tytul: "Trup 1", technika: "litografia", wymiary: "60 × 200 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "trup-3", plik: "obrazy/prace/trup-3.jpg", mini: "obrazy/prace/m/trup-3.jpg", szer: 2000, wys: 949, tytul: "Trup 3", technika: "karborund", wymiary: "210 × 100 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "postepujacy-nowotwor-wszystkiego", plik: "obrazy/prace/postepujacy-nowotwor-wszystkiego.jpg", mini: "obrazy/prace/m/postepujacy-nowotwor-wszystkiego.jpg", szer: 1360, wys: 2000, tytul: "Postępujący nowotwór wszystkiego", technika: "litografia", wymiary: "112 × 78 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "weseli-muzykanci", plik: "obrazy/prace/weseli-muzykanci.jpg", mini: "obrazy/prace/m/weseli-muzykanci.jpg", szer: 2000, wys: 941, tytul: "Weseli muzykanci", technika: "litografia, algrafia", wymiary: "100 × 210 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "plazmat-1", plik: "obrazy/prace/plazmat-1.jpg", mini: "obrazy/prace/m/plazmat-1.jpg", szer: 2000, wys: 1447, tytul: "Plazmat 1", technika: "algrafia", wymiary: "100 × 140 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "plazmat-2", plik: "obrazy/prace/plazmat-2.jpg", mini: "obrazy/prace/m/plazmat-2.jpg", szer: 2000, wys: 1424, tytul: "Plazmat 2", technika: "algrafia, szablon", wymiary: "100 × 140 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "policja-konna", plik: "obrazy/prace/policja-konna.jpg", mini: "obrazy/prace/m/policja-konna.jpg", szer: 2000, wys: 1475, tytul: "Policja konna", technika: "litografia barwna", wymiary: "56 × 76 cm", rok: 2012, dzial: "grafika", glowna: true },
    { id: "budowa-stadionu", plik: "obrazy/prace/budowa-stadionu.jpg", mini: "obrazy/prace/m/budowa-stadionu.jpg", szer: 2000, wys: 1438, tytul: "Budowa stadionu", technika: "litografia barwna", wymiary: "50 × 70 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "chorazy", plik: "obrazy/prace/chorazy.jpg", mini: "obrazy/prace/m/chorazy.jpg", szer: 1427, wys: 2000, tytul: "Chorąży", technika: "litografia barwna", wymiary: "70 × 50 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "ostatni-oddech", plik: "obrazy/prace/ostatni-oddech.jpg", mini: "obrazy/prace/m/ostatni-oddech.jpg", szer: 1424, wys: 2000, tytul: "Ostatni oddech", technika: "litografia", wymiary: "70 × 50 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "start", plik: "obrazy/prace/start.jpg", mini: "obrazy/prace/m/start.jpg", szer: 1426, wys: 2000, tytul: "Start", technika: "litografia barwna, szablon", wymiary: "70 × 50 cm", rok: 2012, dzial: "grafika", glowna: false },
    { id: "wstyd-ostatni", plik: "obrazy/prace/wstyd-ostatni.jpg", mini: "obrazy/prace/m/wstyd-ostatni.jpg", szer: 1293, wys: 2000, tytul: "Wstyd ostatni", technika: "litografia", wymiary: "112 × 76 cm", rok: 2011, dzial: "grafika", glowna: false },
    { id: "pleban", plik: "obrazy/prace/pleban.jpg", mini: "obrazy/prace/m/pleban.jpg", szer: 1383, wys: 2000, tytul: "Pleban", technika: "algrafia", wymiary: "100 × 70 cm", rok: 2011, dzial: "grafika", glowna: false },
    { id: "procesja-2", plik: "obrazy/prace/procesja-2.jpg", mini: "obrazy/prace/m/procesja-2.jpg", szer: 2000, wys: 1412, tytul: "Procesja 2", technika: "litografia barwna", wymiary: "50 × 70 cm", rok: 2011, dzial: "grafika", glowna: false },
    { id: "procesja-3", plik: "obrazy/prace/procesja-3.jpg", mini: "obrazy/prace/m/procesja-3.jpg", szer: 2000, wys: 1417, tytul: "Procesja 3", technika: "litografia barwna", wymiary: "50 × 70 cm", rok: 2011, dzial: "grafika", glowna: false },
    { id: "procesja-4", plik: "obrazy/prace/procesja-4.jpg", mini: "obrazy/prace/m/procesja-4.jpg", szer: 2000, wys: 1411, tytul: "Procesja 4", technika: "litografia barwna", wymiary: "50 × 70 cm", rok: 2011, dzial: "grafika", glowna: false },
    { id: "a-man-from-rotterdam", plik: "obrazy/prace/a-man-from-rotterdam.jpg", mini: "obrazy/prace/m/a-man-from-rotterdam.jpg", szer: 847, wys: 1809, tytul: "A man from Rotterdam", technika: "litografia barwna", wymiary: "150 × 70 cm", rok: 2010, dzial: "grafika", glowna: false },
    { id: "in-memory-of-mario-sironi-1", plik: "obrazy/prace/in-memory-of-mario-sironi-1.jpg", mini: "obrazy/prace/m/in-memory-of-mario-sironi-1.jpg", szer: 1386, wys: 2000, tytul: "In Memory of Mario Sironi 1", technika: "litografia", wymiary: "76 × 56 cm", rok: 2010, dzial: "grafika", glowna: false },
    { id: "in-memory-of-mario-sironi-2", plik: "obrazy/prace/in-memory-of-mario-sironi-2.jpg", mini: "obrazy/prace/m/in-memory-of-mario-sironi-2.jpg", szer: 1372, wys: 2000, tytul: "In Memory of Mario Sironi 2", technika: "litografia", wymiary: "76 × 56 cm", rok: 2010, dzial: "grafika", glowna: false },
    { id: "going-gone", plik: "obrazy/prace/going-gone.jpg", mini: "obrazy/prace/m/going-gone.jpg", szer: 1383, wys: 2000, tytul: "Going Gone", technika: "litografia", wymiary: "76 × 56 cm", rok: 2010, dzial: "grafika", glowna: false },
    { id: "going-gone-2", plik: "obrazy/prace/going-gone-2.jpg", mini: "obrazy/prace/m/going-gone-2.jpg", szer: 1404, wys: 2000, tytul: "Going Gone 2", technika: "litografia", wymiary: "76 × 56 cm", rok: 2010, dzial: "grafika", glowna: false },
    { id: "game-over", plik: "obrazy/prace/game-over.jpg", mini: "obrazy/prace/m/game-over.jpg", szer: 1272, wys: 1869, tytul: "Game Over", technika: "litografia", wymiary: "", rok: 2010, dzial: "grafika", glowna: false },
    { id: "bez-tytulu-2010", plik: "obrazy/prace/bez-tytulu-2010.jpg", mini: "obrazy/prace/m/bez-tytulu-2010.jpg", szer: 1368, wys: 2000, tytul: "Bez tytułu", technika: "litografia", wymiary: "", rok: 2010, dzial: "grafika", glowna: false },
    { id: "confusao", plik: "obrazy/prace/confusao.jpg", mini: "obrazy/prace/m/confusao.jpg", szer: 1004, wys: 2000, tytul: "Confusao", technika: "litografia barwna", wymiary: "100 × 50 cm", rok: 2008, dzial: "grafika", glowna: false },
    { id: "niekompletny", plik: "obrazy/prace/niekompletny.jpg", mini: "obrazy/prace/m/niekompletny.jpg", szer: 1400, wys: 2000, tytul: "Niekompletny", technika: "litografia barwna", wymiary: "76 × 56 cm", rok: 2008, dzial: "grafika", glowna: false },
    // Uzupełnij tytuł (jeśli inny), technikę, wymiary i rok
    { id: "osoby", plik: "obrazy/prace/osoby.jpg", mini: "obrazy/prace/m/osoby.jpg", szer: 1430, wys: 2000, tytul: "Osoby", technika: "litografia, czarny karton", wymiary: "70 × 50 cm (każda)", wymiaryEn: "70 × 50 cm (each)", rok: 2025, daty: "2018–2025", uwaga: "zestaw 9 prac", uwagaEn: "set of 9 works", dzial: "grafika", glowna: false },
    // Dane z katalogu „Sztuka Katastrofy” (na planszy habilitacyjnej podpis był skopiowany z „Siedzimy w okopach 2”)
    { id: "sine-qua-non", plik: "obrazy/prace/sine-qua-non.jpg", mini: "obrazy/prace/m/sine-qua-non.jpg", szer: 1532, wys: 2000, tytul: "Sine Qua Non", technika: "litografia", wymiary: "76 × 56 cm", rok: 2020, dzial: "grafika", glowna: false },

    // ---------- MALARSTWO ----------
    { id: "gdanska-sztuka-nieba-2", plik: "obrazy/prace/gdanska-sztuka-nieba-2.jpg", mini: "obrazy/prace/m/gdanska-sztuka-nieba-2.jpg", szer: 985, wys: 2000, tytul: "Gdańska Sztuka Nieba 2", technika: "akryl i olej na płótnie", wymiary: "190 × 90 cm", rok: 2025, dzial: "malarstwo", glowna: false },
    { id: "gdanska-sztuka-nieba-3", plik: "obrazy/prace/gdanska-sztuka-nieba-3.jpg", mini: "obrazy/prace/m/gdanska-sztuka-nieba-3.jpg", szer: 1038, wys: 2000, tytul: "Gdańska Sztuka Nieba 3", technika: "akryl i olej na płótnie", wymiary: "190 × 90 cm", rok: 2025, dzial: "malarstwo", glowna: false },
    { id: "gdanska-sztuka-nieba-4", plik: "obrazy/prace/gdanska-sztuka-nieba-4.jpg", mini: "obrazy/prace/m/gdanska-sztuka-nieba-4.jpg", szer: 1312, wys: 2000, tytul: "Gdańska Sztuka Nieba 4", technika: "akryl i olej na płótnie", wymiary: "180 × 120 cm", rok: 2025, dzial: "malarstwo", glowna: true },
    { id: "gdanska-sztuka-nieba-5", plik: "obrazy/prace/gdanska-sztuka-nieba-5.jpg", mini: "obrazy/prace/m/gdanska-sztuka-nieba-5.jpg", szer: 985, wys: 2000, tytul: "Gdańska Sztuka Nieba 5", technika: "akryl i olej na płótnie", wymiary: "190 × 90 cm", rok: 2025, dzial: "malarstwo", glowna: false },
    { id: "podroznik-15", plik: "obrazy/prace/podroznik-15.jpg", mini: "obrazy/prace/m/podroznik-15.jpg", szer: 1338, wys: 2000, tytul: "Podróżnik 15", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2025, daty: "2011–2025", dzial: "malarstwo", glowna: false },
    { id: "gdanska-sztuka-nieba-1", plik: "obrazy/prace/gdanska-sztuka-nieba-1.jpg", mini: "obrazy/prace/m/gdanska-sztuka-nieba-1.jpg", szer: 1307, wys: 2000, tytul: "Gdańska Sztuka Nieba 1", technika: "akryl na płótnie", wymiary: "150 × 100 cm", rok: 2024, dzial: "malarstwo", glowna: false },
    { id: "czeskie-swiete", plik: "obrazy/prace/czeskie-swiete.jpg", mini: "obrazy/prace/m/czeskie-swiete.jpg", szer: 1322, wys: 2000, tytul: "Czeskie Święte", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2024, dzial: "malarstwo", glowna: false },
    { id: "poprzez-zlote-dzwigi", plik: "obrazy/prace/poprzez-zlote-dzwigi.jpg", mini: "obrazy/prace/m/poprzez-zlote-dzwigi.jpg", szer: 2000, wys: 1478, tytul: "Poprzez złote dźwigi, potrójne wyścigi", technika: "akryl i olej na płótnie", wymiary: "200 × 130 cm", rok: 2023, dzial: "malarstwo", glowna: true, uwaga: "kolekcja Muzeum Gdańska", uwagaEn: "Museum of Gdańsk collection" },
    { id: "joeline-2022", plik: "obrazy/prace/joeline-2022.jpg", mini: "obrazy/prace/m/joeline-2022.jpg", szer: 1327, wys: 2000, tytul: "Joeline 2022", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2023, dzial: "malarstwo", glowna: false },
    { id: "let-me-finish", plik: "obrazy/prace/let-me-finish.jpg", mini: "obrazy/prace/m/let-me-finish.jpg", szer: 1349, wys: 2000, tytul: "Let me Finish", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2023, dzial: "malarstwo", glowna: false },
    { id: "day-dream", plik: "obrazy/prace/day-dream.jpg", mini: "obrazy/prace/m/day-dream.jpg", szer: 1335, wys: 2000, tytul: "Day Dream", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2023, dzial: "malarstwo", glowna: false },
    { id: "sins-and-virtues", plik: "obrazy/prace/sins-and-virtues.jpg", mini: "obrazy/prace/m/sins-and-virtues.jpg", szer: 1366, wys: 2000, tytul: "Sins and Virtues", technika: "akryl i olej na płótnie", wymiary: "120 × 80 cm", rok: 2023, dzial: "malarstwo", glowna: false },
    { id: "red-right-hand", plik: "obrazy/prace/red-right-hand.jpg", mini: "obrazy/prace/m/red-right-hand.jpg", szer: 1338, wys: 2000, tytul: "Red Right Hand", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2022, dzial: "malarstwo", glowna: false },
    { id: "niebianski-spokoj", plik: "obrazy/prace/niebianski-spokoj.jpg", mini: "obrazy/prace/m/niebianski-spokoj.jpg", szer: 1349, wys: 2000, tytul: "Niebiański Spokój", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2022, dzial: "malarstwo", glowna: false },
    { id: "oswajanie-drapieznikow", plik: "obrazy/prace/oswajanie-drapieznikow.jpg", mini: "obrazy/prace/m/oswajanie-drapieznikow.jpg", szer: 1349, wys: 2000, tytul: "Oswajanie Drapieżników", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2021, dzial: "malarstwo", glowna: false },
    { id: "gdzie-przykazan-brak-10", plik: "obrazy/prace/gdzie-przykazan-brak-10.jpg", mini: "obrazy/prace/m/gdzie-przykazan-brak-10.jpg", szer: 1349, wys: 2000, tytul: "Gdzie przykazań brak 10", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2021, dzial: "malarstwo", glowna: false },
    { id: "zdjecie-z-krzyza", plik: "obrazy/prace/zdjecie-z-krzyza.jpg", mini: "obrazy/prace/m/zdjecie-z-krzyza.jpg", szer: 1349, wys: 2000, tytul: "Zdjęcie z Krzyża z Diplodokiem i Tyranozaurem", technika: "akryl i olej na płótnie", wymiary: "150 × 100 cm", rok: 2020, dzial: "malarstwo", glowna: false },
    // Z folderu „malarstwo dla kloda”: tytuł i rok „Charon” z sygnatury na obrazie („Charon, Buto 2009”); pozostałe bez danych
    { id: "charon", plik: "obrazy/prace/charon.jpg", mini: "obrazy/prace/m/charon.jpg", szer: 1862, wys: 2000, tytul: "Charon", technika: "", wymiary: "", rok: 2009, dzial: "malarstwo", glowna: false },
    { id: "bez-tytulu-obraz-1", plik: "obrazy/prace/bez-tytulu-obraz-1.jpg", mini: "obrazy/prace/m/bez-tytulu-obraz-1.jpg", szer: 1722, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "malarstwo", glowna: false },
    { id: "bez-tytulu-obraz-2", plik: "obrazy/prace/bez-tytulu-obraz-2.jpg", mini: "obrazy/prace/m/bez-tytulu-obraz-2.jpg", szer: 1332, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "malarstwo", glowna: false },
    { id: "bez-tytulu-obraz-3", plik: "obrazy/prace/bez-tytulu-obraz-3.jpg", mini: "obrazy/prace/m/bez-tytulu-obraz-3.jpg", szer: 1873, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "malarstwo", glowna: false },
    { id: "bez-tytulu-obraz-4", plik: "obrazy/prace/bez-tytulu-obraz-4.jpg", mini: "obrazy/prace/m/bez-tytulu-obraz-4.jpg", szer: 1856, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "malarstwo", glowna: false },
    { id: "wykopaliska-1", plik: "obrazy/prace/wykopaliska-1.jpg", mini: "obrazy/prace/m/wykopaliska-1.jpg", szer: 1600, wys: 1120, tytul: "Wykopaliska 1", technika: "akwarela, gwasz", wymiary: "100 × 70 cm", rok: null, dzial: "malarstwo", glowna: false },

    // ---------- RYSUNEK ----------
    // Z folderu „rysunek dla kloda”: kody p1…p11 i szerokość z maszynowych podpisów pod pracami; technika, wysokość i rok nieznane
    { id: "rysunek-1", plik: "obrazy/prace/rysunek-1.jpg", mini: "obrazy/prace/m/rysunek-1.jpg", szer: 1550, wys: 2000, tytul: "Bez tytułu (p1)", tytulEn: "Untitled (p1)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-2", plik: "obrazy/prace/rysunek-2.jpg", mini: "obrazy/prace/m/rysunek-2.jpg", szer: 1475, wys: 2000, tytul: "Bez tytułu (p3)", tytulEn: "Untitled (p3)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-3", plik: "obrazy/prace/rysunek-3.jpg", mini: "obrazy/prace/m/rysunek-3.jpg", szer: 1580, wys: 2000, tytul: "Bez tytułu (p2)", tytulEn: "Untitled (p2)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-4", plik: "obrazy/prace/rysunek-4.jpg", mini: "obrazy/prace/m/rysunek-4.jpg", szer: 1607, wys: 2000, tytul: "Bez tytułu (p5)", tytulEn: "Untitled (p5)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-5", plik: "obrazy/prace/rysunek-5.jpg", mini: "obrazy/prace/m/rysunek-5.jpg", szer: 1531, wys: 2000, tytul: "Bez tytułu (p5)", tytulEn: "Untitled (p5)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-6", plik: "obrazy/prace/rysunek-6.jpg", mini: "obrazy/prace/m/rysunek-6.jpg", szer: 1506, wys: 2000, tytul: "Bez tytułu (p11)", tytulEn: "Untitled (p11)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-7", plik: "obrazy/prace/rysunek-7.jpg", mini: "obrazy/prace/m/rysunek-7.jpg", szer: 1475, wys: 2000, tytul: "Bez tytułu (p7)", tytulEn: "Untitled (p7)", technika: "", wymiary: "szer. 150 cm", wymiaryEn: "width 150 cm", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-8", plik: "obrazy/prace/rysunek-8.jpg", mini: "obrazy/prace/m/rysunek-8.jpg", szer: 1561, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-9", plik: "obrazy/prace/rysunek-9.jpg", mini: "obrazy/prace/m/rysunek-9.jpg", szer: 1494, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-10", plik: "obrazy/prace/rysunek-10.jpg", mini: "obrazy/prace/m/rysunek-10.jpg", szer: 1458, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "rysunek", glowna: false },
    { id: "rysunek-11", plik: "obrazy/prace/rysunek-11.jpg", mini: "obrazy/prace/m/rysunek-11.jpg", szer: 1490, wys: 2000, tytul: "Bez tytułu", tytulEn: "Untitled", technika: "", wymiary: "", rok: null, dzial: "rysunek", glowna: false },

    // ---------- SZKICE (osobny dział, nie pokazuje się w „Wszystkie”) ----------
    // Tytuły z nazw plików; „Szkic N” = bez tytułu (wg info od autora: szkicownik A4)
    { id: "szkic-chrystus", plik: "obrazy/prace/szkic-chrystus.jpg", mini: "obrazy/prace/m/szkic-chrystus.jpg", szer: 1430, wys: 2000, tytul: "Chrystus", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-erasmus-jedzie-na-kazn", plik: "obrazy/prace/szkic-erasmus-jedzie-na-kazn.jpg", mini: "obrazy/prace/m/szkic-erasmus-jedzie-na-kazn.jpg", szer: 1410, wys: 2000, tytul: "Erasmus jedzie na kaźń", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-germinal", plik: "obrazy/prace/szkic-germinal.jpg", mini: "obrazy/prace/m/szkic-germinal.jpg", szer: 1370, wys: 2000, tytul: "Germinal", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-charon", plik: "obrazy/prace/szkic-charon.jpg", mini: "obrazy/prace/m/szkic-charon.jpg", szer: 1324, wys: 2000, tytul: "Charon", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-menel", plik: "obrazy/prace/szkic-menel.jpg", mini: "obrazy/prace/m/szkic-menel.jpg", szer: 1505, wys: 2000, tytul: "Menel", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-1", plik: "obrazy/prace/szkic-samoloty-1.jpg", mini: "obrazy/prace/m/szkic-samoloty-1.jpg", szer: 2000, wys: 1423, tytul: "Samoloty 1", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-2", plik: "obrazy/prace/szkic-samoloty-2.jpg", mini: "obrazy/prace/m/szkic-samoloty-2.jpg", szer: 2000, wys: 1559, tytul: "Samoloty 2", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-3", plik: "obrazy/prace/szkic-samoloty-3.jpg", mini: "obrazy/prace/m/szkic-samoloty-3.jpg", szer: 1420, wys: 2000, tytul: "Samoloty 3", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-4", plik: "obrazy/prace/szkic-samoloty-4.jpg", mini: "obrazy/prace/m/szkic-samoloty-4.jpg", szer: 1804, wys: 1512, tytul: "Samoloty 4", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-5", plik: "obrazy/prace/szkic-samoloty-5.jpg", mini: "obrazy/prace/m/szkic-samoloty-5.jpg", szer: 1786, wys: 1613, tytul: "Samoloty 5", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-6", plik: "obrazy/prace/szkic-samoloty-6.jpg", mini: "obrazy/prace/m/szkic-samoloty-6.jpg", szer: 1630, wys: 1876, tytul: "Samoloty 6", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-7", plik: "obrazy/prace/szkic-samoloty-7.jpg", mini: "obrazy/prace/m/szkic-samoloty-7.jpg", szer: 1796, wys: 1644, tytul: "Samoloty 7", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-8", plik: "obrazy/prace/szkic-samoloty-8.jpg", mini: "obrazy/prace/m/szkic-samoloty-8.jpg", szer: 2000, wys: 1419, tytul: "Samoloty 8", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-samoloty-9", plik: "obrazy/prace/szkic-samoloty-9.jpg", mini: "obrazy/prace/m/szkic-samoloty-9.jpg", szer: 2000, wys: 1567, tytul: "Samoloty 9", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-procesja-niebieska", plik: "obrazy/prace/szkic-procesja-niebieska.jpg", mini: "obrazy/prace/m/szkic-procesja-niebieska.jpg", szer: 1421, wys: 2000, tytul: "Procesja niebieska", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-procesja-solarna-boze-cialo", plik: "obrazy/prace/szkic-procesja-solarna-boze-cialo.jpg", mini: "obrazy/prace/m/szkic-procesja-solarna-boze-cialo.jpg", szer: 1438, wys: 2000, tytul: "Procesja solarna (Boże Ciało)", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-batozenie", plik: "obrazy/prace/szkic-batozenie.jpg", mini: "obrazy/prace/m/szkic-batozenie.jpg", szer: 2000, wys: 1422, tytul: "Batożenie", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-bol-glowy", plik: "obrazy/prace/szkic-bol-glowy.jpg", mini: "obrazy/prace/m/szkic-bol-glowy.jpg", szer: 1422, wys: 2000, tytul: "Ból głowy", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-brus", plik: "obrazy/prace/szkic-brus.jpg", mini: "obrazy/prace/m/szkic-brus.jpg", szer: 1376, wys: 699, tytul: "Brus", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-dyskusje-przy-stole", plik: "obrazy/prace/szkic-dyskusje-przy-stole.jpg", mini: "obrazy/prace/m/szkic-dyskusje-przy-stole.jpg", szer: 2000, wys: 1443, tytul: "Dyskusje przy stole", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-hustawka", plik: "obrazy/prace/szkic-hustawka.jpg", mini: "obrazy/prace/m/szkic-hustawka.jpg", szer: 1502, wys: 2000, tytul: "Huśtawka", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-imogena", plik: "obrazy/prace/szkic-imogena.jpg", mini: "obrazy/prace/m/szkic-imogena.jpg", szer: 1422, wys: 2000, tytul: "Imogena", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-korejba", plik: "obrazy/prace/szkic-korejba.jpg", mini: "obrazy/prace/m/szkic-korejba.jpg", szer: 1422, wys: 2000, tytul: "Korejba", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-krol", plik: "obrazy/prace/szkic-krol.jpg", mini: "obrazy/prace/m/szkic-krol.jpg", szer: 1387, wys: 2000, tytul: "Król", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-madonna", plik: "obrazy/prace/szkic-madonna.jpg", mini: "obrazy/prace/m/szkic-madonna.jpg", szer: 1420, wys: 2000, tytul: "Madonna", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-morda-na-szybie", plik: "obrazy/prace/szkic-morda-na-szybie.jpg", mini: "obrazy/prace/m/szkic-morda-na-szybie.jpg", szer: 2000, wys: 1428, tytul: "Morda na szybie", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-offeret-1", plik: "obrazy/prace/szkic-offeret-1.jpg", mini: "obrazy/prace/m/szkic-offeret-1.jpg", szer: 2000, wys: 1314, tytul: "Offeret 1", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-poranek-w-pracowni", plik: "obrazy/prace/szkic-poranek-w-pracowni.jpg", mini: "obrazy/prace/m/szkic-poranek-w-pracowni.jpg", szer: 427, wys: 514, tytul: "Poranek w pracowni", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-pulawski", plik: "obrazy/prace/szkic-pulawski.jpg", mini: "obrazy/prace/m/szkic-pulawski.jpg", szer: 2000, wys: 1446, tytul: "Puławski", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-sama", plik: "obrazy/prace/szkic-sama.jpg", mini: "obrazy/prace/m/szkic-sama.jpg", szer: 1312, wys: 2000, tytul: "Sama", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-sama-2", plik: "obrazy/prace/szkic-sama-2.jpg", mini: "obrazy/prace/m/szkic-sama-2.jpg", szer: 1394, wys: 2000, tytul: "Sama 2", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-schowana", plik: "obrazy/prace/szkic-schowana.jpg", mini: "obrazy/prace/m/szkic-schowana.jpg", szer: 2000, wys: 1411, tytul: "Schowana", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-stadion-swietlisty", plik: "obrazy/prace/szkic-stadion-swietlisty.jpg", mini: "obrazy/prace/m/szkic-stadion-swietlisty.jpg", szer: 1392, wys: 2000, tytul: "Stadion świetlisty", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-superkosmos", plik: "obrazy/prace/szkic-superkosmos.jpg", mini: "obrazy/prace/m/szkic-superkosmos.jpg", szer: 1422, wys: 2000, tytul: "Superkosmos", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-to-nie-jest-blad", plik: "obrazy/prace/szkic-to-nie-jest-blad.jpg", mini: "obrazy/prace/m/szkic-to-nie-jest-blad.jpg", szer: 2000, wys: 1393, tytul: "To nie jest błąd", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-wiczkraft", plik: "obrazy/prace/szkic-wiczkraft.jpg", mini: "obrazy/prace/m/szkic-wiczkraft.jpg", szer: 1416, wys: 2000, tytul: "Wiczkraft", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-z-barcelony", plik: "obrazy/prace/szkic-z-barcelony.jpg", mini: "obrazy/prace/m/szkic-z-barcelony.jpg", szer: 1422, wys: 2000, tytul: "Z Barcelony", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-1", plik: "obrazy/prace/szkic-1.jpg", mini: "obrazy/prace/m/szkic-1.jpg", szer: 2000, wys: 1500, tytul: "Szkic 1", tytulEn: "Sketch 1", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-2", plik: "obrazy/prace/szkic-2.jpg", mini: "obrazy/prace/m/szkic-2.jpg", szer: 2000, wys: 1500, tytul: "Szkic 2", tytulEn: "Sketch 2", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-3", plik: "obrazy/prace/szkic-3.jpg", mini: "obrazy/prace/m/szkic-3.jpg", szer: 2000, wys: 1500, tytul: "Szkic 3", tytulEn: "Sketch 3", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-4", plik: "obrazy/prace/szkic-4.jpg", mini: "obrazy/prace/m/szkic-4.jpg", szer: 2000, wys: 1500, tytul: "Szkic 4", tytulEn: "Sketch 4", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-5", plik: "obrazy/prace/szkic-5.jpg", mini: "obrazy/prace/m/szkic-5.jpg", szer: 2000, wys: 1500, tytul: "Szkic 5", tytulEn: "Sketch 5", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-6", plik: "obrazy/prace/szkic-6.jpg", mini: "obrazy/prace/m/szkic-6.jpg", szer: 2000, wys: 1500, tytul: "Szkic 6", tytulEn: "Sketch 6", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-7", plik: "obrazy/prace/szkic-7.jpg", mini: "obrazy/prace/m/szkic-7.jpg", szer: 2000, wys: 1500, tytul: "Szkic 7", tytulEn: "Sketch 7", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-8", plik: "obrazy/prace/szkic-8.jpg", mini: "obrazy/prace/m/szkic-8.jpg", szer: 2000, wys: 1500, tytul: "Szkic 8", tytulEn: "Sketch 8", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-9", plik: "obrazy/prace/szkic-9.jpg", mini: "obrazy/prace/m/szkic-9.jpg", szer: 2000, wys: 1500, tytul: "Szkic 9", tytulEn: "Sketch 9", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-10", plik: "obrazy/prace/szkic-10.jpg", mini: "obrazy/prace/m/szkic-10.jpg", szer: 2000, wys: 1500, tytul: "Szkic 10", tytulEn: "Sketch 10", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-11", plik: "obrazy/prace/szkic-11.jpg", mini: "obrazy/prace/m/szkic-11.jpg", szer: 2000, wys: 1500, tytul: "Szkic 11", tytulEn: "Sketch 11", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-12", plik: "obrazy/prace/szkic-12.jpg", mini: "obrazy/prace/m/szkic-12.jpg", szer: 2000, wys: 1500, tytul: "Szkic 12", tytulEn: "Sketch 12", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-13", plik: "obrazy/prace/szkic-13.jpg", mini: "obrazy/prace/m/szkic-13.jpg", szer: 2000, wys: 1500, tytul: "Szkic 13", tytulEn: "Sketch 13", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-14", plik: "obrazy/prace/szkic-14.jpg", mini: "obrazy/prace/m/szkic-14.jpg", szer: 2000, wys: 1500, tytul: "Szkic 14", tytulEn: "Sketch 14", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-15", plik: "obrazy/prace/szkic-15.jpg", mini: "obrazy/prace/m/szkic-15.jpg", szer: 2000, wys: 1500, tytul: "Szkic 15", tytulEn: "Sketch 15", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-16", plik: "obrazy/prace/szkic-16.jpg", mini: "obrazy/prace/m/szkic-16.jpg", szer: 1333, wys: 2000, tytul: "Szkic 16", tytulEn: "Sketch 16", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-17", plik: "obrazy/prace/szkic-17.jpg", mini: "obrazy/prace/m/szkic-17.jpg", szer: 1393, wys: 2000, tytul: "Szkic 17", tytulEn: "Sketch 17", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-18", plik: "obrazy/prace/szkic-18.jpg", mini: "obrazy/prace/m/szkic-18.jpg", szer: 1395, wys: 2000, tytul: "Szkic 18", tytulEn: "Sketch 18", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-19", plik: "obrazy/prace/szkic-19.jpg", mini: "obrazy/prace/m/szkic-19.jpg", szer: 1336, wys: 2000, tytul: "Szkic 19", tytulEn: "Sketch 19", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-20", plik: "obrazy/prace/szkic-20.jpg", mini: "obrazy/prace/m/szkic-20.jpg", szer: 1464, wys: 2000, tytul: "Szkic 20", tytulEn: "Sketch 20", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-21", plik: "obrazy/prace/szkic-21.jpg", mini: "obrazy/prace/m/szkic-21.jpg", szer: 1453, wys: 2000, tytul: "Szkic 21", tytulEn: "Sketch 21", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-22", plik: "obrazy/prace/szkic-22.jpg", mini: "obrazy/prace/m/szkic-22.jpg", szer: 2000, wys: 1318, tytul: "Szkic 22", tytulEn: "Sketch 22", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-23", plik: "obrazy/prace/szkic-23.jpg", mini: "obrazy/prace/m/szkic-23.jpg", szer: 1213, wys: 2000, tytul: "Szkic 23", tytulEn: "Sketch 23", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-24", plik: "obrazy/prace/szkic-24.jpg", mini: "obrazy/prace/m/szkic-24.jpg", szer: 2000, wys: 1415, tytul: "Szkic 24", tytulEn: "Sketch 24", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-25", plik: "obrazy/prace/szkic-25.jpg", mini: "obrazy/prace/m/szkic-25.jpg", szer: 1492, wys: 2000, tytul: "Szkic 25", tytulEn: "Sketch 25", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-26", plik: "obrazy/prace/szkic-26.jpg", mini: "obrazy/prace/m/szkic-26.jpg", szer: 1397, wys: 2000, tytul: "Szkic 26", tytulEn: "Sketch 26", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-27", plik: "obrazy/prace/szkic-27.jpg", mini: "obrazy/prace/m/szkic-27.jpg", szer: 1415, wys: 2000, tytul: "Szkic 27", tytulEn: "Sketch 27", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-28", plik: "obrazy/prace/szkic-28.jpg", mini: "obrazy/prace/m/szkic-28.jpg", szer: 1419, wys: 2000, tytul: "Szkic 28", tytulEn: "Sketch 28", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-29", plik: "obrazy/prace/szkic-29.jpg", mini: "obrazy/prace/m/szkic-29.jpg", szer: 1405, wys: 2000, tytul: "Szkic 29", tytulEn: "Sketch 29", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-30", plik: "obrazy/prace/szkic-30.jpg", mini: "obrazy/prace/m/szkic-30.jpg", szer: 1363, wys: 2000, tytul: "Szkic 30", tytulEn: "Sketch 30", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-31", plik: "obrazy/prace/szkic-31.jpg", mini: "obrazy/prace/m/szkic-31.jpg", szer: 1372, wys: 2000, tytul: "Szkic 31", tytulEn: "Sketch 31", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-32", plik: "obrazy/prace/szkic-32.jpg", mini: "obrazy/prace/m/szkic-32.jpg", szer: 1228, wys: 2000, tytul: "Szkic 32", tytulEn: "Sketch 32", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-33", plik: "obrazy/prace/szkic-33.jpg", mini: "obrazy/prace/m/szkic-33.jpg", szer: 1251, wys: 2000, tytul: "Szkic 33", tytulEn: "Sketch 33", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-34", plik: "obrazy/prace/szkic-34.jpg", mini: "obrazy/prace/m/szkic-34.jpg", szer: 1272, wys: 2000, tytul: "Szkic 34", tytulEn: "Sketch 34", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-35", plik: "obrazy/prace/szkic-35.jpg", mini: "obrazy/prace/m/szkic-35.jpg", szer: 1370, wys: 2000, tytul: "Szkic 35", tytulEn: "Sketch 35", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-36", plik: "obrazy/prace/szkic-36.jpg", mini: "obrazy/prace/m/szkic-36.jpg", szer: 1565, wys: 2000, tytul: "Szkic 36", tytulEn: "Sketch 36", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-37", plik: "obrazy/prace/szkic-37.jpg", mini: "obrazy/prace/m/szkic-37.jpg", szer: 2000, wys: 1390, tytul: "Szkic 37", tytulEn: "Sketch 37", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-38", plik: "obrazy/prace/szkic-38.jpg", mini: "obrazy/prace/m/szkic-38.jpg", szer: 1360, wys: 2000, tytul: "Szkic 38", tytulEn: "Sketch 38", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-39", plik: "obrazy/prace/szkic-39.jpg", mini: "obrazy/prace/m/szkic-39.jpg", szer: 1510, wys: 2000, tytul: "Szkic 39", tytulEn: "Sketch 39", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-40", plik: "obrazy/prace/szkic-40.jpg", mini: "obrazy/prace/m/szkic-40.jpg", szer: 1414, wys: 2000, tytul: "Szkic 40", tytulEn: "Sketch 40", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-41", plik: "obrazy/prace/szkic-41.jpg", mini: "obrazy/prace/m/szkic-41.jpg", szer: 1382, wys: 2000, tytul: "Szkic 41", tytulEn: "Sketch 41", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-42", plik: "obrazy/prace/szkic-42.jpg", mini: "obrazy/prace/m/szkic-42.jpg", szer: 1414, wys: 2000, tytul: "Szkic 42", tytulEn: "Sketch 42", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-43", plik: "obrazy/prace/szkic-43.jpg", mini: "obrazy/prace/m/szkic-43.jpg", szer: 2000, wys: 1414, tytul: "Szkic 43", tytulEn: "Sketch 43", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-44", plik: "obrazy/prace/szkic-44.jpg", mini: "obrazy/prace/m/szkic-44.jpg", szer: 1414, wys: 2000, tytul: "Szkic 44", tytulEn: "Sketch 44", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-45", plik: "obrazy/prace/szkic-45.jpg", mini: "obrazy/prace/m/szkic-45.jpg", szer: 1414, wys: 2000, tytul: "Szkic 45", tytulEn: "Sketch 45", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-46", plik: "obrazy/prace/szkic-46.jpg", mini: "obrazy/prace/m/szkic-46.jpg", szer: 1414, wys: 2000, tytul: "Szkic 46", tytulEn: "Sketch 46", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-47", plik: "obrazy/prace/szkic-47.jpg", mini: "obrazy/prace/m/szkic-47.jpg", szer: 1414, wys: 2000, tytul: "Szkic 47", tytulEn: "Sketch 47", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-48", plik: "obrazy/prace/szkic-48.jpg", mini: "obrazy/prace/m/szkic-48.jpg", szer: 2000, wys: 1441, tytul: "Szkic 48", tytulEn: "Sketch 48", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-49", plik: "obrazy/prace/szkic-49.jpg", mini: "obrazy/prace/m/szkic-49.jpg", szer: 1414, wys: 2000, tytul: "Szkic 49", tytulEn: "Sketch 49", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-50", plik: "obrazy/prace/szkic-50.jpg", mini: "obrazy/prace/m/szkic-50.jpg", szer: 1414, wys: 2000, tytul: "Szkic 50", tytulEn: "Sketch 50", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-51", plik: "obrazy/prace/szkic-51.jpg", mini: "obrazy/prace/m/szkic-51.jpg", szer: 1246, wys: 2000, tytul: "Szkic 51", tytulEn: "Sketch 51", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-52", plik: "obrazy/prace/szkic-52.jpg", mini: "obrazy/prace/m/szkic-52.jpg", szer: 1400, wys: 2000, tytul: "Szkic 52", tytulEn: "Sketch 52", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-53", plik: "obrazy/prace/szkic-53.jpg", mini: "obrazy/prace/m/szkic-53.jpg", szer: 2000, wys: 1414, tytul: "Szkic 53", tytulEn: "Sketch 53", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-54", plik: "obrazy/prace/szkic-54.jpg", mini: "obrazy/prace/m/szkic-54.jpg", szer: 1414, wys: 2000, tytul: "Szkic 54", tytulEn: "Sketch 54", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-55", plik: "obrazy/prace/szkic-55.jpg", mini: "obrazy/prace/m/szkic-55.jpg", szer: 1414, wys: 2000, tytul: "Szkic 55", tytulEn: "Sketch 55", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-56", plik: "obrazy/prace/szkic-56.jpg", mini: "obrazy/prace/m/szkic-56.jpg", szer: 1472, wys: 2000, tytul: "Szkic 56", tytulEn: "Sketch 56", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-57", plik: "obrazy/prace/szkic-57.jpg", mini: "obrazy/prace/m/szkic-57.jpg", szer: 2000, wys: 1540, tytul: "Szkic 57", tytulEn: "Sketch 57", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-58", plik: "obrazy/prace/szkic-58.jpg", mini: "obrazy/prace/m/szkic-58.jpg", szer: 1614, wys: 2000, tytul: "Szkic 58", tytulEn: "Sketch 58", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-59", plik: "obrazy/prace/szkic-59.jpg", mini: "obrazy/prace/m/szkic-59.jpg", szer: 2000, wys: 1790, tytul: "Szkic 59", tytulEn: "Sketch 59", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false },
    { id: "szkic-60", plik: "obrazy/prace/szkic-60.jpg", mini: "obrazy/prace/m/szkic-60.jpg", szer: 1414, wys: 2000, tytul: "Szkic 60", tytulEn: "Sketch 60", technika: "", wymiary: "szkicownik A4", wymiaryEn: "A4 sketchbook", rok: null, dzial: "szkice", glowna: false }
  ]
};
