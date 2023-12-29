function check() {
  const place = document.getElementById("place").value;
  const beerCount = document.getElementById("beers").value;
  const shots = document.getElementById("strongerDrinks").value;
  const answer = document.querySelector("p.answer");
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
  } else if (beerCount > 0 && beerCount <= 2 && shots == 0) {
    chances -= 5;
    if (checkin(chances)) {
      answer.innerHTML = "No niestety, koniec picia :/";
    } else {
      answer.innerHTML = "No jak to tak się nie napić!";
    }
  } else if (beerCount > 2 && beerCount <= 4 && shots == 0) {
    chances -= 15;
    if (checkin(chances)) {
      answer.innerHTML = "A to pech! Czas zostawić to piwo w spokoju.";
    } else {
      answer.innerHTML = "Tylko browary dziś? Ciekawe. Dawaj dalej!";
    }
  } else if (beerCount <= 4 && shots <= 3 && beerCount >= 2 && shots >= 1) {
    chances -= 30;
    if (checkin(chances)) {
      answer.innerHTML =
        "Robi się gorąco. Mix ten doprowadził Cie do <strong>końca</strong> zabawy.";
    } else {
      answer.innerHTML =
        "Chyba mamy tu do czynienia ze <strong>SMAKOŁYSZEM</strong>. Pij dalej!";
    }
  } else if (beerCount > 4 && beerCount <= 6 && shots <= 1) {
    chances -= 40;
    if (checkin(chances)) {
      answer.innerHTML =
        "Konkretny wynik, <em>szacuneczek</em>. I tu mamy koniec. :(";
    } else {
      answer.innerHTML =
        "Szanse na kolejne piwka lecą w dół!!! <strong>Ciesz się wygraną!</strong>";
    }
  } else {
    answer.innerHTML = "Kombinacja piw i shotów? To może być ciekawe!";
  }
}
