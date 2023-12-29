function check() {
  const place = document.getElementById("place").value;
  const beerCount = document.getElementById("beers").value;
  const shots = document.getElementById("strongerDrinks").value;
  const answer = document.querySelector("p.answer");
  const image = document.querySelector("img.answer-img");
  let chances = 100;
  const randomize = Math.floor(Math.random() * 100);

  function checkin(chances) {
    if (chances > randomize) {
      return false;
    } else {
      return true;
    }
  }

  if (beerCount == 0 && shots == 0) {
    answer.innerHTML = "Zaczynamy! Pij!";
    image.src = "beer1.gif";
  } else if (beerCount > 0 && beerCount <= 2 && shots == 0) {
    chances -= 5;
    if (checkin(chances)) {
      answer.innerHTML = "No niestety, koniec picia :/";
      image.src = "zakaz.jpeg";
    } else {
      answer.innerHTML = "No jak to tak się nie napić!";
      image.src = "beerwin.gif";
    }
  } else if (beerCount > 2 && beerCount <= 4 && shots == 0) {
    chances -= 15;
    if (checkin(chances)) {
      answer.innerHTML = "A to pech! Czas zostawić to piwo w spokoju.";
      image.src = "nobeer.jpeg";
    } else {
      answer.innerHTML = "Tylko browary dziś? Ciekawe. Dawaj dalej!";
      image.src = "beerwin2.gif";
    }
  } else if (beerCount <= 4 && shots <= 3 && beerCount >= 2 && shots >= 1) {
    chances -= 30;
    if (checkin(chances)) {
      answer.innerHTML =
        "Robi się gorąco. Mix ten doprowadził Cie do <strong>końca</strong> zabawy.";
      image.src = "too_much.gif";
    } else {
      answer.innerHTML =
        "Chyba mamy tu do czynienia ze <strong>SMAKOŁYSZEM</strong>. Pij dalej!";
      image.src = "smako.jpeg";
    }
  } else if (beerCount > 4 && beerCount <= 6 && shots <= 1) {
    chances -= 40;
    if (checkin(chances)) {
      answer.innerHTML =
        "Konkretny wynik, <em>szacuneczek</em>. I tu mamy koniec. :(";
      image.src = "ricky.gif";
    } else {
      answer.innerHTML =
        "Szanse na kolejne piwka lecą w dół!!! <strong>Ciesz się wygraną!</strong>";
      image.src = "too_much.gif";
    }
  } else if (beerCount == 6 && shots == 9) {
    answer.innerHTML = "69 Nice... Tu zawsze wygrana!";
    image.src = "nice.gif";
  } else if (beerCount >= 6 && shots > 0) {
    chances -= 60;
    if (checkin(chances) && place === "Knajpa") {
      answer.innerHTML =
        "<em>Szaleństwo!!!</em> Ile to można? Kto Ci tyle sprzedał? Do domu <strong>DEFINITYWNIE</strong>.";
      image.src = "bartender.jpeg";
    } else if (checkin(chances) && place === "Prywatka") {
      answer.innerHTML =
        "Jak jeszcze nie zgonujesz, to zaraz zaczniesz pewnie. <strong>Basta!</strong>";
      image.src = "zgon.jpeg";
    } else {
      answer.innerHTML =
        "Zwolnienie blokady.... Dziwne, wygrana. Ciesz się i pij!";
      image.src = "zwolnienie.avif";
    }
  } else if (shots >= 3 && beerCount <= 7) {
    chances -= 45;
    if (checkin(chances) && place === "Knajpa") {
      answer.innerHTML =
        "Portfel wysuszony jak Ty jutro rano. Wody co najwyżej Ci powinni polać.";
      image.src = "water.jpeg";
    } else if (checkin(chances) && place === "Prywatka") {
      answer.innerHTML =
        "No i lipa. Koniec chlania. Ktoś musi chałupe ogarnąć z rana. :D";
      image.src = "NerdParty.jpeg";
    } else if (!checkin(chances) && place === "Knajpa") {
      answer.innerHTML = "Pić by sie napił! A kto stawia?!";
      image.src = "partyyy.jpeg";
    } else {
      answer.innerHTML = "A teraz idziemy na jednego!!!";
      image.src = "vodka.webp";
    }
  } else {
    answer.innerHTML = "Pij nie pierdol!";
    image.src = "monkey.jpeg";
  }
  answer.classList.add("info1");
  image.classList.add("borderin");
}
