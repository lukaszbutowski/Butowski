/* Logika strony. Treść (prace, wystawy, bio, CV, kontakt) jest w pliku dane.js. */
(function () {
  "use strict";

  var D = window.STRONA;
  var tresc = document.getElementById("tresc");
  if (!D || !Array.isArray(D.prace)) {
    tresc.innerHTML = '<p class="uklad">Nie udało się wczytać pliku dane.js. Sprawdź, czy nie ma w nim błędu (np. brakującego przecinka).</p>';
    return;
  }
  D.wystawy = Array.isArray(D.wystawy) ? D.wystawy : [];

  // ---------- Teksty interfejsu ----------
  var T = {
    pl: {
      prace: "Prace", wystawy: "Wystawy", bio: "Bio", kontakt: "Kontakt", bezDaty: "Bez daty", wszystkie: "Wszystkie",
      powieksz: "Powiększ", zamknij: "Zamknij", poprzednia: "Poprzednie", nastepna: "Następne",
      pauza: "Zatrzymaj pokaz", wznow: "Wznów pokaz", menu: "Menu", pomin: "Przejdź do treści",
      lata: "Lata", dzialy: "Rodzaj prac", jezyk: "Język strony", nawigacja: "Nawigacja główna",
      pokaz: "Wybrane prace i wystawy", podglad: "Podgląd",
      pracownia: "Pracownia Litografii<br>Akademia Sztuk Pięknych w Gdańsku",
      zdjecie: "zdjęcie", brakObrazu: "Nie udało się wczytać pliku: ",
      indywidualna: "Wystawa indywidualna", zbiorowa: "Wystawa zbiorowa", kuratorska: "Kuratorstwo i udział",
      katalog: "Katalog wystawy (PDF",
      opis: "Łukasz Butowski: grafika warsztatowa, litografia, serigrafia i malarstwo."
    },
    en: {
      prace: "Work", wystawy: "Exhibitions", bio: "Bio", kontakt: "Contact", bezDaty: "Undated", wszystkie: "All",
      powieksz: "Enlarge", zamknij: "Close", poprzednia: "Previous", nastepna: "Next",
      pauza: "Pause slideshow", wznow: "Play slideshow", menu: "Menu", pomin: "Skip to content",
      lata: "Years", dzialy: "Type of work", jezyk: "Site language", nawigacja: "Main navigation",
      pokaz: "Selected works and exhibitions", podglad: "Preview",
      pracownia: "Lithography Studio<br>Academy of Fine Arts in Gdańsk",
      zdjecie: "photo", brakObrazu: "Could not load file: ",
      indywidualna: "Solo exhibition", zbiorowa: "Group exhibition", kuratorska: "Curator and exhibitor",
      katalog: "Exhibition catalogue (PDF",
      opis: "Łukasz Butowski: printmaking, lithography, screen printing and painting."
    }
  };

  var WIDOKI = ["start", "prace", "wystawy", "bio", "kontakt"];
  var ograniczRuch = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Stan ----------
  var jezyk = wczytajJezyk();
  var biezacyWidok = null;
  var filtr = "wszystkie";
  var doSekcji = null;          // id sekcji, do której przewinąć po zmianie widoku
  var podglad = null;           // element otwarty w podglądzie
  var podgladZKlikniecia = false;
  var ostatniFokus = null;
  var pokazIndeks = 0;
  var pokazGra = !ograniczRuch;
  var pokazTimer = null;

  var $ = function (id) { return document.getElementById(id); };
  var t = function (k) { return T[jezyk][k]; };

  // ---------- Pomocnicze ----------
  function wczytajJezyk() {
    try {
      var z = localStorage.getItem("jezyk");
      if (z === "pl" || z === "en") return z;
    } catch (e) { /* brak dostępu do pamięci przeglądarki */ }
    var langs = navigator.languages || [navigator.language || "pl"];
    for (var i = 0; i < langs.length; i++) {
      if (/^pl/i.test(langs[i])) return "pl";
    }
    return "en";
  }

  function el(tag, attrs, dzieci) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "class") e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (dzieci || []).forEach(function (d) { if (d) e.appendChild(d); });
    return e;
  }

  // Polska typografia: jednoliterowe słowa (w, i, z, o, a, u) nie zostają na końcu wiersza
  function sierotki(s) {
    var r = /(^|[\s(„>])([aiouwzAIOUWZ])\s+/g;
    return String(s).replace(r, "$1$2 ").replace(r, "$1$2 ");
  }

  function wJezyku(obj, pole) {
    return (jezyk === "en" && obj[pole + "En"]) ? obj[pole + "En"] : (obj[pole] || "");
  }

  function klucz(rok) { return rok ? String(rok) : "bez-daty"; }

  function poRoku(lista, rok) {
    return lista.map(function (x, i) { return { x: x, i: i }; }).sort(function (a, b) {
      var ra = rok(a.x) || -Infinity, rb = rok(b.x) || -Infinity;
      return rb === ra ? a.i - b.i : rb - ra;
    }).map(function (o) { return o.x; });
  }

  // ---------- Elementy do pokazania: prace i zdjęcia z wystaw ----------
  // Każdy element ma: klucz (adres #...), plik, szer, wys, tytul, lewy, prawy, alt, rok, typ
  // Technika po polsku; po angielsku każdy człon tłumaczony osobno ze słownika TECHNIKI_EN
  function technika(p) {
    var t = p.technika || "";
    if (D.TECHNIKI && D.TECHNIKI[t]) return D.TECHNIKI[t][jezyk];
    if (jezyk !== "en") return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
    if (p.technikaEn) return p.technikaEn;
    var en = t.split(/,\s*/).map(function (c) { return (D.TECHNIKI_EN && D.TECHNIKI_EN[c.toLowerCase()]) || c; }).join(", ");
    return en ? en.charAt(0).toUpperCase() + en.slice(1) : "";
  }

  function elementPracy(p) {
    var tech = technika(p);
    var lata = p.daty || (p.rok ? String(p.rok) : "");
    var wym = wJezyku(p, "wymiary");
    var lewy = [tech, wym].filter(Boolean).join(", ");
    var opis = [tech, wym, lata].filter(Boolean).join(", ");
    var tyt = wJezyku(p, "tytul");
    return {
      typ: "praca", klucz: "praca-" + p.id, zrodlo: p,
      plik: p.plik, mini: p.mini, szer: p.szer, wys: p.wys, rok: p.rok,
      tytul: tyt, lewy: lewy, prawy: lata, opis: opis, uwaga: wJezyku(p, "uwaga"),
      alt: tyt + (opis ? ". " + opis : "")
    };
  }

  function elementyZdjec(w) {
    var tyt = wJezyku(w, "tytul"), miejsce = wJezyku(w, "miejsce");
    return (w.zdjecia || []).map(function (z, i) {
      return {
        typ: "zdjecie", klucz: "wystawa-" + w.id + "-" + (i + 1), zrodlo: z, wystawa: w,
        plik: z.plik, mini: z.mini, szer: z.szer, wys: z.wys, rok: w.rok, glowna: !!z.glowna,
        tytul: tyt, lewy: miejsce, prawy: w.rok ? String(w.rok) : "",
        alt: [tyt, miejsce, w.rok].filter(Boolean).join(", ") + (w.zdjecia.length > 1 ? ", " + t("zdjecie") + " " + (i + 1) : "")
      };
    });
  }

  function osobny(dzial) { return !!(D.DZIALY && D.DZIALY[dzial] && D.DZIALY[dzial].osobno); }

  function listaPrac(f) {
    f = f || filtr;
    var lista = D.prace.filter(function (p) { return f === "wszystkie" ? !osobny(p.dzial) : p.dzial === f; });
    return poRoku(lista, function (p) { return p.rok; }).map(elementPracy);
  }

  function wystawyPosortowane() { return poRoku(D.wystawy, function (w) { return w.rok; }); }

  function listaZdjec() {
    var wynik = [];
    wystawyPosortowane().forEach(function (w) { wynik = wynik.concat(elementyZdjec(w)); });
    return wynik;
  }

  function znajdzElement(k) {
    var listy = [listaPrac()];
    if (D.DZIALY) Object.keys(D.DZIALY).forEach(function (d) { listy.push(listaPrac(d)); });
    listy.push(D.prace.map(elementPracy), listaZdjec());
    for (var l = 0; l < listy.length; l++) {
      for (var i = 0; i < listy[l].length; i++) {
        if (listy[l][i].klucz === k) return { el: listy[l][i], lista: listy[l] };
      }
    }
    return null;
  }

  function obraz(item, leniwy, maly) {
    var img = el("img", { src: (maly && item.mini) || item.plik, alt: item.alt, decoding: "async" });
    if (leniwy) img.loading = "lazy";
    if (item.szer && item.wys) { img.width = item.szer; img.height = item.wys; }
    return img;
  }

  function proporcja(item) { return (item.szer && item.wys) ? (item.szer / item.wys) : 1.4; }

  // Kafelek w galerii (praca albo zdjęcie z wystawy)
  function kafelek(item, zPodpisem) {
    var link = el("a", { class: "praca-obraz", href: "#" + item.klucz, "aria-label": t("powieksz") + ": " + item.alt });
    var img = obraz(item, true, true);
    img.alt = "";
    img.addEventListener("error", function () {
      link.classList.add("blad");
      link.textContent = t("brakObrazu") + item.plik;
    });
    link.appendChild(img);
    link.addEventListener("click", function () { podgladZKlikniecia = true; });
    return el("figure", { class: "praca", style: "--r:" + proporcja(item).toFixed(4) }, [
      link,
      zPodpisem ? el("figcaption", null, [
        el("span", { class: "praca-tytul", text: item.tytul }),
        // w działach oddzielnych (szkice) opis tylko w powiększeniu, żeby nie powtarzać go pod każdym kafelkiem
        item.opis && !(item.zrodlo && osobny(item.zrodlo.dzial)) ? el("span", { class: "praca-opis", text: item.opis }) : null,
        item.uwaga ? el("span", { class: "praca-opis praca-uwaga", text: item.uwaga }) : null
      ]) : null
    ]);
  }

  // ---------- Elementy stałe ----------
  function odswiezStale() {
    document.documentElement.lang = jezyk;
    $("pomin").textContent = t("pomin");
    $("burger").setAttribute("aria-label", t("menu"));
    $("menu").setAttribute("aria-label", t("nawigacja"));
    $("jezyk").setAttribute("aria-label", t("jezyk"));
    $("widok-start").setAttribute("aria-label", t("pokaz"));
    $("podglad").setAttribute("aria-label", t("podglad"));
    document.querySelectorAll("#menu a[data-cel]").forEach(function (a) {
      var cel = a.getAttribute("data-cel");
      a.textContent = t(cel);
      if (cel === "wystawy") a.hidden = !D.wystawy.length;
    });
    document.querySelectorAll("#jezyk button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-jezyk") === jezyk));
    });
    $("podglad-zamknij").setAttribute("aria-label", t("zamknij"));
    $("podglad-wstecz").setAttribute("aria-label", t("poprzednia"));
    $("podglad-dalej").setAttribute("aria-label", t("nastepna"));
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("opis"));
    var stopka = $("stopka");
    stopka.innerHTML = "";
    stopka.appendChild(el("span", { text: "© " + new Date().getFullYear() + " " + D.imie }));
    var k = D.kontakt || {};
    [["instagram", "Instagram"], ["facebook", "Facebook"]].forEach(function (s) {
      if (k[s[0]]) stopka.appendChild(el("a", { href: k[s[0]], rel: "noopener", target: "_blank", text: s[1] }));
    });
  }

  // ---------- Pokaz na stronie głównej: prace na przemian ze zdjęciami z wystaw ----------
  var slajdy = [];

  function zbierzSlajdy() {
    var prace = D.prace.filter(function (p) { return p.glowna; }).map(elementPracy);
    if (!prace.length && !D.wystawy.length) prace = D.prace.slice(0, 5).map(elementPracy);
    var zdjecia = listaZdjec().filter(function (z) { return z.glowna; });
    var wynik = [], i = 0;
    while (i < prace.length || i < zdjecia.length) {
      if (zdjecia[i]) wynik.push(zdjecia[i]);
      if (prace[i]) wynik.push(prace[i]);
      i++;
    }
    return wynik;
  }

  function zbudujPokaz() {
    slajdy = zbierzSlajdy();
    var scena = $("pokaz-scena");
    scena.innerHTML = "";
    var waski = window.matchMedia("(max-width: 760px)").matches;
    slajdy.forEach(function (item, i) {
      var img = obraz(item, false, waski);
      if (i > 0) { img.setAttribute("data-src", img.getAttribute("src")); img.removeAttribute("src"); }
      var a = el("a", { href: "#" + item.klucz }, [img]);
      a.addEventListener("click", function () { podgladZKlikniecia = true; });
      scena.appendChild(el("div", { class: "slajd" + (item.typ === "zdjecie" ? " slajd-zdjecie" : "") }, [a]));
    });
    if (pokazIndeks >= slajdy.length) pokazIndeks = 0;
    ustawSlajd(pokazIndeks);
  }

  function ustawSlajd(i) {
    var n = slajdy.length;
    if (!n) return;
    pokazIndeks = ((i % n) + n) % n;
    var item = slajdy[pokazIndeks];
    document.querySelectorAll("#pokaz-scena .slajd").forEach(function (s, k) {
      var akt = k === pokazIndeks;
      s.classList.toggle("aktywny", akt);
      s.setAttribute("aria-hidden", String(!akt));
      var link = s.querySelector("a");
      if (link) link.tabIndex = akt ? 0 : -1;
      if (akt || k === (pokazIndeks + 1) % n) {
        var im = s.querySelector("img[data-src]");
        if (im) { im.src = im.getAttribute("data-src"); im.removeAttribute("data-src"); }
      }
    });
    var zdj = item.typ === "zdjecie";
    var et = $("pokaz-etykieta");
    et.textContent = item.tytul || "";
    et.setAttribute("href", zdj ? "#wystawy" : "#prace");
    et.setAttribute("data-sekcja", zdj ? "ws-" + item.wystawa.id : "rok-" + klucz(item.rok));
    $("pokaz-opis").textContent = [item.lewy, item.prawy].filter(Boolean).join(", ");
    $("pokaz-licznik").textContent = (pokazIndeks + 1) + " / " + n;
    $("pokaz-licznik").hidden = n < 2;
    $("pokaz-pauza").hidden = n < 2;
  }

  function ustawPrzyciskPauzy() {
    var b = $("pokaz-pauza");
    b.setAttribute("aria-label", pokazGra ? t("pauza") : t("wznow"));
    b.innerHTML = pokazGra
      ? '<svg class="pelna" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="2.2" height="14"/><rect x="14.8" y="5" width="2.2" height="14"/></svg>'
      : '<svg class="pelna" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>';
  }

  function cyklPokazu() {
    clearTimeout(pokazTimer);
    if (!pokazGra || slajdy.length < 2 || biezacyWidok !== "start" || podglad || document.hidden) return;
    pokazTimer = setTimeout(function () { ustawSlajd(pokazIndeks + 1); cyklPokazu(); }, 6000);
  }

  $("pokaz-pauza").addEventListener("click", function () {
    pokazGra = !pokazGra;
    ustawPrzyciskPauzy();
    cyklPokazu();
  });
  $("pokaz-etykieta").addEventListener("click", function () {
    doSekcji = this.getAttribute("data-sekcja");
  });
  document.addEventListener("visibilitychange", cyklPokazu);

  przesuniecie($("widok-start"), function (kier) {
    ustawSlajd(pokazIndeks + kier);
    cyklPokazu();
  });

  // ---------- Prace ----------
  function zbudujPrace() {
    var w = $("widok-prace");
    w.innerHTML = "";
    var lista = listaPrac();

    var lata = [];
    lista.forEach(function (it) { var k = klucz(it.rok); if (lata.indexOf(k) < 0) lata.push(k); });

    var pasek = el("div", { class: "pasek" });
    var dzialyObecne = [];
    D.prace.forEach(function (p) { if (p.dzial && dzialyObecne.indexOf(p.dzial) < 0) dzialyObecne.push(p.dzial); });
    if (D.DZIALY) {  // kolejność przycisków jak w DZIALY
      var kolej = Object.keys(D.DZIALY);
      dzialyObecne.sort(function (a, b) { return (kolej.indexOf(a) + 1 || 99) - (kolej.indexOf(b) + 1 || 99); });
    }
    if (dzialyObecne.length > 1) {
      var grupa = el("div", { class: "pasek pasek-wew", role: "group", "aria-label": t("dzialy") });
      ["wszystkie"].concat(dzialyObecne).forEach(function (d) {
        var nazwa = d === "wszystkie" ? t("wszystkie") : ((D.DZIALY && D.DZIALY[d]) ? D.DZIALY[d][jezyk] : d);
        var b = el("button", { type: "button", text: nazwa, "aria-pressed": String(filtr === d) });
        b.addEventListener("click", function () {
          filtr = d; zbudujPrace();
          try { history.replaceState(null, "", d === "wszystkie" ? "#prace" : "#prace-" + d); } catch (e) { /* bez zmiany adresu */ }
        });
        grupa.appendChild(b);
      });
      pasek.appendChild(grupa);
      pasek.appendChild(el("span", { class: "przerwa", "aria-hidden": "true" }));
    }
    if (lata.length > 1) {
      var nawLat = el("nav", { class: "pasek pasek-wew", "aria-label": t("lata") });
      lata.forEach(function (k) {
        var b = el("button", { type: "button", text: k === "bez-daty" ? t("bezDaty") : k });
        b.addEventListener("click", function () { przewinDo("rok-" + k); });
        nawLat.appendChild(b);
      });
      pasek.appendChild(nawLat);
    }
    w.appendChild(el("h1", { class: "niewidoczny", text: t("prace") }));
    if (pasek.childNodes.length) w.appendChild(pasek);

    lata.forEach(function (k) {
      var rzad = el("div", { class: "rzad" });
      lista.filter(function (it) { return klucz(it.rok) === k; }).forEach(function (it) {
        rzad.appendChild(kafelek(it, true));
      });
      w.appendChild(el("section", { class: "wiersz rok", id: "rok-" + k }, [
        el("h2", { class: "etykieta-boczna", text: k === "bez-daty" ? t("bezDaty") : k }),
        rzad
      ]));
    });
  }

  // ---------- Wystawy ----------
  function zbudujWystawy() {
    var w = $("widok-wystawy");
    w.innerHTML = "";
    if (!D.wystawy.length) return;
    w.appendChild(el("h1", { class: "niewidoczny", text: t("wystawy") }));
    wystawyPosortowane().forEach(function (wys) {
      var rzad = el("div", { class: "rzad rzad-zdjec" });
      elementyZdjec(wys).forEach(function (it) { rzad.appendChild(kafelek(it, false)); });
      w.appendChild(el("section", { class: "wiersz wystawa", id: "ws-" + wys.id }, [
        el("p", { class: "etykieta-boczna", "aria-hidden": "true", text: wys.rok ? String(wys.rok) : "" }),
        el("div", null, [
          el("h2", { class: "wystawa-tytul", text: wJezyku(wys, "tytul") }),
          el("p", { class: "wystawa-miejsce", text: [wys.rodzaj && T[jezyk][wys.rodzaj], wJezyku(wys, "miejsce"), wys.rok].filter(Boolean).join(", ") }),
          wys.katalog ? el("p", { class: "wystawa-katalog" }, [
            el("a", { href: wys.katalog.plik, target: "_blank", rel: "noopener", text: t("katalog") + (wys.katalog.rozmiar ? ", " + wys.katalog.rozmiar : "") + ")" })
          ]) : null,
          rzad
        ])
      ]));
    });
  }

  function przewinDo(id) {
    var s = $(id);
    if (!s) return;
    var y = s.getBoundingClientRect().top + window.scrollY - $("naglowek").offsetHeight - 16;
    window.scrollTo({ top: Math.max(0, y), behavior: ograniczRuch ? "auto" : "smooth" });
  }

  // ---------- Bio i CV ----------
  function zbudujBio() {
    var w = $("widok-bio");
    w.innerHTML = "";
    var tekst = el("div", { class: "tekst" });
    ((D.bio && D.bio[jezyk]) || []).forEach(function (akapit) { tekst.appendChild(el("p", { text: sierotki(akapit) })); });

    var cv = el("div", { class: "cv" });
    (D.cv || []).forEach(function (sekcja) {
      var ul = el("ul");
      (sekcja.wpisy || []).forEach(function (wpis) {
        ul.appendChild(el("li", null, [
          el("span", { class: "cv-rok", text: wJezyku(wpis, "rok") }),
          el("span", { html: sierotki(wpis[jezyk] || wpis.pl || "") })
        ]));
      });
      cv.appendChild(el("section", null, [el("h2", { text: sekcja[jezyk] || sekcja.pl }), ul]));
    });

    w.appendChild(el("div", { class: "wiersz" }, [
      el("h1", { class: "etykieta-boczna", text: t("bio") }),
      el("div", null, [tekst, cv.childNodes.length ? cv : null])
    ]));
  }

  // ---------- Kontakt ----------
  function zbudujKontakt() {
    var w = $("widok-kontakt");
    w.innerHTML = "";
    var k = D.kontakt || {};
    var linki = el("ul", { class: "kontakt-linki" });
    if (k.email) linki.appendChild(el("li", null, [el("a", { class: "adres", href: "mailto:" + k.email, text: k.email })]));
    if (k.instagram) linki.appendChild(el("li", null, [el("a", { href: k.instagram, rel: "noopener", target: "_blank", text: "Instagram" })]));
    if (k.facebook) linki.appendChild(el("li", null, [el("a", { href: k.facebook, rel: "noopener", target: "_blank", text: "Facebook" })]));

    w.appendChild(el("div", { class: "wiersz" }, [
      el("h1", { class: "etykieta-boczna", text: t("kontakt") }),
      el("div", { class: "tekst" }, [
        el("p", { html: D.imie + "<br>" + sierotki(t("pracownia")) }),
        linki.childNodes.length ? linki : null
      ])
    ]));
  }

  // ---------- Podgląd ----------
  function otworzPodglad(item, lista) {
    var bylZamkniety = !podglad;
    podglad = { item: item, lista: lista };
    var img = $("podglad-obraz");
    img.src = item.plik;
    img.alt = item.alt;
    if (item.szer && item.wys) { img.width = item.szer; img.height = item.wys; }
    $("podglad-technika").textContent = item.lewy;
    $("podglad-tytul").textContent = item.tytul;
    $("podglad-rok").textContent = item.prawy;

    var i = lista.indexOf(item);
    $("podglad-licznik").textContent = (i + 1) + " / " + lista.length;
    [lista[i - 1], lista[i + 1]].forEach(function (s) { if (s) { var pre = new Image(); pre.src = s.plik; } });
    $("podglad-wstecz").hidden = lista.length < 2;
    $("podglad-dalej").hidden = lista.length < 2;

    document.title = item.tytul + " – " + D.imie;
    if (bylZamkniety) {
      ostatniFokus = document.activeElement;
      $("podglad").hidden = false;
      ["naglowek", "tresc", "stopka"].forEach(function (id) { $(id).inert = true; });
      document.documentElement.style.overflow = "hidden";
      $("podglad-zamknij").focus();
      clearTimeout(pokazTimer);
    }
  }

  function zamknijPodglad() {
    if (!podglad) return;
    var k = podglad.item.klucz;
    podglad = null;
    $("podglad").hidden = true;
    ["naglowek", "tresc", "stopka"].forEach(function (id) { $(id).inert = false; });
    document.documentElement.style.overflow = "";
    var cel = (ostatniFokus && document.contains(ostatniFokus) && ostatniFokus !== document.body) ? ostatniFokus
      : document.querySelector('#widok-' + biezacyWidok + ' a[href="#' + k + '"]');
    if (cel) cel.focus({ preventScroll: false });
    ustawTytul();
    cyklPokazu();
  }

  function sasiad(kier) {
    if (!podglad) return;
    var lista = podglad.lista;
    var i = lista.indexOf(podglad.item);
    var nast = lista[(i + kier + lista.length) % lista.length];
    location.replace("#" + nast.klucz);
  }

  function zamknijPrzyciskiem() {
    if (podgladZKlikniecia) {
      podgladZKlikniecia = false;
      history.back();
    } else {
      location.replace("#" + (biezacyWidok === "prace" && filtr !== "wszystkie" ? "prace-" + filtr : (biezacyWidok || "prace")));
    }
  }

  $("podglad-zamknij").addEventListener("click", zamknijPrzyciskiem);
  $("podglad-wstecz").addEventListener("click", function () { sasiad(-1); });
  $("podglad-dalej").addEventListener("click", function () { sasiad(1); });
  przesuniecie($("podglad-scena"), sasiad);

  document.addEventListener("keydown", function (e) {
    if (podglad) {
      if (e.key === "Escape") { e.preventDefault(); zamknijPrzyciskiem(); }
      else if (e.key === "ArrowLeft") sasiad(-1);
      else if (e.key === "ArrowRight") sasiad(1);
    } else if (e.key === "Escape" && document.body.classList.contains("menu-otwarte")) {
      ustawMenu(false);
      $("burger").focus();
    }
  });

  // Przesunięcie palcem w lewo / w prawo
  function przesuniecie(elem, fn) {
    var x0 = null, y0 = null;
    elem.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    elem.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) fn(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  // ---------- Menu na telefonie ----------
  function ustawMenu(otwarte) {
    document.body.classList.toggle("menu-otwarte", otwarte);
    $("burger").setAttribute("aria-expanded", String(otwarte));
  }
  $("burger").addEventListener("click", function () {
    ustawMenu($("burger").getAttribute("aria-expanded") !== "true");
  });
  $("menu").addEventListener("click", function (e) {
    if (e.target.closest("a")) ustawMenu(false);
  });

  // ---------- Język ----------
  document.querySelectorAll("#jezyk button").forEach(function (b) {
    b.addEventListener("click", function () {
      var nowy = b.getAttribute("data-jezyk");
      if (nowy === jezyk) return;
      jezyk = nowy;
      try { localStorage.setItem("jezyk", jezyk); } catch (e) { /* bez zapamiętania */ }
      var otwarty = podglad && podglad.item.klucz;
      zbudujWszystko();
      if (otwarty) {
        var z = znajdzElement(otwarty);
        if (z) { podglad = null; otworzPodglad(z.el, z.lista); }
      }
      ustawTytul();
    });
  });

  // ---------- Widoki i adresy (#prace, #wystawy, #bio, #kontakt, #praca-..., #wystawa-...) ----------
  function ustawTytul() {
    if (podglad) return;
    document.title = (biezacyWidok && biezacyWidok !== "start") ? t(biezacyWidok) + " – " + D.imie : D.imie;
  }

  function pokazWidok(w) {
    if (w === biezacyWidok) return;
    biezacyWidok = w;
    WIDOKI.forEach(function (n) { $("widok-" + n).hidden = n !== w; });
    document.body.className = "widok-" + w;
    document.querySelectorAll("#menu a[data-cel]").forEach(function (a) {
      if (a.getAttribute("data-cel") === w) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
    ustawTytul();
  }

  function trasa() {
    var h = location.hash.replace(/^#/, "");
    try { h = decodeURIComponent(h); } catch (e) { /* zostaw jak jest */ }

    if (h.indexOf("praca-") === 0 || h.indexOf("wystawa-") === 0) {
      var z = znajdzElement(h);
      if (z && z.el.typ === "praca" && z.el.zrodlo && filtr !== z.el.zrodlo.dzial && osobny(z.el.zrodlo.dzial)) {
        filtr = z.el.zrodlo.dzial; zbudujPrace();
        z = znajdzElement(h);
      }
      if (z) {
        var tlo = z.el.typ === "zdjecie" ? "wystawy" : "prace";
        pokazWidok(biezacyWidok || tlo);
        if (podglad && podglad.item.klucz === h) return;
        if (podglad) podglad.item = z.el;
        otworzPodglad(z.el, z.lista);
        return;
      }
      h = h.indexOf("praca-") === 0 ? "prace" : "wystawy";
    }
    podgladZKlikniecia = false;
    zamknijPodglad();
    if (h.indexOf("prace-") === 0) {
      var dz = h.slice(6);
      if (D.DZIALY && D.DZIALY[dz] && filtr !== dz) { filtr = dz; zbudujPrace(); }
      h = "prace";
    } else if (h === "prace" && filtr !== "wszystkie" && location.hash === "#prace") {
      filtr = "wszystkie"; zbudujPrace();
    }
    if (h === "wystawy" && !D.wystawy.length) h = "prace";
    var w = WIDOKI.indexOf(h) > 0 ? h : "start";
    pokazWidok(w);
    if (doSekcji) {
      var s = doSekcji;
      doSekcji = null;
      requestAnimationFrame(function () { przewinDo(s); });
    }
    if (w === "start") ustawSlajd(pokazIndeks);
    cyklPokazu();
  }

  function zbudujWszystko() {
    odswiezStale();
    zbudujPokaz();
    ustawPrzyciskPauzy();
    zbudujPrace();
    zbudujWystawy();
    zbudujBio();
    zbudujKontakt();
  }

  zbudujWszystko();
  window.addEventListener("hashchange", trasa);
  trasa();
})();
