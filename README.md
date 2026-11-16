# Łukasz Butowski: strona portfolio

Prosta strona statyczna (HTML, CSS, JavaScript), bez instalowania czegokolwiek i bez kroku budowania.
Działa na GitHub Pages, na każdym zwykłym hostingu i po dwukrotnym kliknięciu w `index.html` na dysku.

## Co jest w środku

| Plik / folder | Do czego służy | Czy edytujesz? |
|---|---|---|
| `dane.js` | prace, bio, CV, kontakt, nazwy technik | **tak, to jedyny plik do edycji** |
| `obrazy/prace/`, `obrazy/wystawy/` | zdjęcia prac i wystaw (w podfolderach `m/` mniejsze wersje do galerii) | tak, dokładasz nowe pliki |
| `index.html` | szkielet strony | nie |
| `style.css` | wygląd | tylko gdy chcesz zmienić wygląd |
| `strona.js` | działanie (pokaz, galeria, podgląd, PL/EN) | nie |
| `fonty/` | kroje Jost i Półtawski Nowy (licencja SIL OFL) | nie |

## Jak dodać nową pracę

1. **Przygotuj zdjęcie** w Photoshopie: *Plik → Eksportuj → Zapisz dla Internetu* albo *Eksportuj jako*:
   - JPG, jakość ok. 80%,
   - **profil sRGB** (zaznacz „Konwertuj do sRGB”); CMYK i Adobe RGB wyświetlają się w przeglądarkach z przekłamanymi kolorami,
   - dłuższy bok **2000 px**,
   - nazwa pliku bez polskich liter i spacji, np. `niebo-wewnetrzne-ostateczne.jpg`.
2. Wrzuć plik do folderu `obrazy/prace/`. Jeśli chcesz, zrób też mniejszą kopię (dłuższy bok ok. 1000 px)
   o tej samej nazwie i wrzuć ją do `obrazy/prace/m/` (patrz pole `mini` niżej).
3. Otwórz `dane.js` w zwykłym edytorze tekstu (Notatnik wystarczy, wygodniejszy jest darmowy VS Code) i w sekcji `prace: [` dopisz wpis, np.:

```js
{ id: "nowa-praca", plik: "obrazy/prace/nowa-praca.jpg", mini: "obrazy/prace/m/nowa-praca.jpg", szer: 1400, wys: 2000,
  tytul: "Nowa praca", technika: "litografia barwna, chine collé", wymiary: "100 × 70 cm", rok: 2026, dzial: "grafika", glowna: true },
```

- `szer` i `wys` to wymiary **pliku** w pikselach (widać je w Photoshopie albo we właściwościach pliku w Windows).
- `technika` piszesz normalnie po polsku. Angielska wersja tworzy się sama ze słownika `TECHNIKI_EN`;
  nowy termin (np. „akwaforta”) dopisz tam razem z tłumaczeniem.
- `dzial`: `"grafika"`, `"malarstwo"`, `"rysunek"` albo `"szkice"`; na stronie są przyciski do filtrowania.
  Szkice mają w `DZIALY` ustawione `osobno: true`: widać je tylko pod przyciskiem „Szkice”, nie w „Wszystkie”
  ani w pokazie na stronie głównej. Każdy dział ma też własny adres, np. `#prace-szkice`, `#prace-rysunek`.
- `wymiaryEn`: wymiary po angielsku, tylko gdy jest w nich tekst (np. „szer. 150 cm” → „width 150 cm”).
- `glowna: true` sprawia, że praca pojawi się w pokazie na stronie głównej.
- Gdy praca powstawała kilka lat, dodaj `daty: "2020–2024"`, a w `rok` wpisz rok zakończenia.
- Dopisek pod opisem (np. kolekcja): `uwaga: "kolekcja Muzeum Gdańska", uwagaEn: "Museum of Gdańsk collection"`.
- Pole `mini` (mniejszy plik do galerii) jest nieobowiązkowe; bez niego galeria użyje dużego pliku.
- Każdy wpis kończy się przecinkiem. Jeśli po zapisaniu strona jest pusta, najczęściej brakuje przecinka albo cudzysłowu.
- Kolejność na stronie ustala się sama: lata od najnowszego, w obrębie roku tak jak w pliku.

## Jak dodać zdjęcia z wystawy lub wydarzenia

1. Zdjęcia wnętrz przygotuj tak jak zdjęcia prac (JPG, sRGB, dłuższy bok 2000 px)
   i wrzuć do folderu `obrazy/wystawy/`.
2. W `dane.js`, w sekcji `wystawy: [`, dopisz wpis według wzoru, który jest tam w komentarzu.
   `rodzaj` to `"indywidualna"`, `"zbiorowa"` albo `"kuratorska"`. Katalog do pobrania:
   `katalog: { plik: "pliki/katalog.pdf", rozmiar: "12 MB" }`.

```js
{ id: "sztuka-katastrofy-tubaza", tytul: "Sztuka Katastrofy", tytulEn: "Art of Disaster",
  miejsce: "Galeria TuBaza, Gdynia", miejsceEn: "TuBaza Gallery, Gdynia", rok: 2025,
  zdjecia: [
    { plik: "obrazy/wystawy/tubaza-1.jpg", szer: 2000, wys: 1333, glowna: true },
    { plik: "obrazy/wystawy/tubaza-2.jpg", szer: 2000, wys: 1333 }
  ] },
```

- Zakładka **Wystawy** pojawi się w menu sama, gdy będzie pierwszy wpis.
- Zdjęcia z `glowna: true` przewijają się na stronie głównej na przemian z pracami
  i wypełniają cały kadr, więc brzegi mogą być lekko przycięte. Najlepiej sprawdzają się
  szerokie ujęcia sali.

## Podgląd na komputerze

Kliknij dwukrotnie `index.html`. Strona otworzy się w przeglądarce. Jeśli plik obrazu ma złą nazwę,
w miejscu pracy pojawi się komunikat z nazwą pliku, którego brakuje.

## Publikacja na GitHub Pages (za darmo)

1. Wgraj wszystkie pliki do repozytorium `lukaszbutowski/Butowski` (gałąź `main`, katalog główny),
   zastępując stary `index.html`. Stary folder z obrazami `obraz1.jpg`… można usunąć.
2. Na GitHubie: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   wybierz `main` i `/ (root)`, kliknij **Save**.
3. Po minucie lub dwóch strona będzie pod adresem `https://lukaszbutowski.github.io/Butowski/`.

**Ograniczenia wgrywania przez przeglądarkę:** GitHub przyjmuje w ten sposób najwyżej 100 plików naraz
i pliki do 25 MB. Strona ma ok. 280 plików, więc za pierwszym razem wygodniej użyć darmowej aplikacji
**GitHub Desktop** (wgrywa cały folder jednym ruchem). Katalog PDF ma 24,6 MB, czyli mieści się tuż pod limitem.

**Późniejsze zmiany:** dodając jedną pracę, wgrywasz tylko nowy obraz (i jego mniejszą kopię) oraz `dane.js`.
`dane.js` można też poprawić bezpośrednio na GitHubie (ikona ołówka przy pliku). Przed wgraniem warto
otworzyć `index.html` u siebie na dysku: jeśli strona jest pusta, w `dane.js` brakuje przecinka albo cudzysłowu.
4. Własna domena (np. `butowski.pl`): w tym samym miejscu pole **Custom domain**, plus wpis DNS u rejestratora domeny.

## Adresy podstron

- `#prace`, `#bio`, `#kontakt`
- pojedyncza praca: `#praca-` + `id`, np. `…/#praca-locomotor-ataxia` (dobre do wysyłania komuś konkretnej grafiki)

## Odświeżanie po zmianach

Przeglądarki trzymają `dane.js`, `strona.js` i `style.css` w pamięci do 10 minut. W `index.html` te pliki mają
dopisek `?v=20261116`. Po zmianie któregoś z nich podmień ten numer (np. na dzisiejszą datę), a odwiedzający
od razu dostaną nową wersję.
