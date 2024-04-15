const WEDDING_ANNIVERSARIES = {
  1: "Papel",
  2: "Algodón",
  3: "Cuero",
  4: "Lino",
  5: "Madera",
  6: "Hierro",
  7: "Lana",
  8: "Bronce",
  9: "Arcilla",
  10: "Aluminio",
  11: "Acero",
  12: "Seda",
  13: "Encaje",
  14: "Marfil",
  15: "Cristal",
  16: "Hiedra",
  17: "Alhelí",
  18: "Cuarzo",
  19: "Madreselva",
  20: "Porcelana",
  21: "Roble",
  22: "Cobre",
  23: "Agua",
  24: "Granito",
  25: "Plata",
  26: "Rosas",
  27: "Azabache",
  28: "Ámbar",
  29: "Granate",
  30: "Perla",
  31: "Ébano",
  32: "Cobre",
  33: "Estaño",
  34: "Amapola",
  35: "Coral",
  36: "Sílex",
  37: "Piedra",
  38: "Jade",
  39: "Ágata",
  40: "Rubí",
  41: "Topacio",
  42: "Jaspe",
  43: "Ópalo",
  44: "Turquesa",
  45: "Zafiro",
  46: "Nácar",
  47: "Amatista",
  48: "Feldespato",
  49: "Circón",
  50: "Oro",
  55: "Esmeralda",
  60: "Diamante",
  65: "Platino",
  70: "Titanio",
  75: "Brillantes",
  80: "Roble",
  85: "Mármol",
  90: "Granito",
  95: "Ónix",
  100: "Hueso",
};
(function () {
  const WEDDING_DATE = new Date("05/03/2024 12:00:00");

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const today = new Date(),
    yyyy = today.getFullYear();

  const anniversaryNumber = yyyy - WEDDING_DATE.getFullYear();

  if (today > WEDDING_DATE) {
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    let value = `¡Papeles arreglados! ♥️`;

    if (anniversaryNumber > 0) {
      let anniversaryMatching = WEDDING_ANNIVERSARIES[anniversaryNumber];
      if (!anniversaryMatching && anniversaryNumber > 50) {
        const diff = anniversaryNumber - (anniversaryNumber % 5);
        anniversaryMatching = WEDDING_ANNIVERSARIES[diff];
      }
      value = `Ya va el ${anniversaryNumber}º aniversario darling ♥️!\nY es el año de: ${anniversaryMatching}`;
    }
    document.getElementById("anniversary").innerText = value;

    return;
  }

  const countDown = WEDDING_DATE.getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        clearInterval(x);
      }
    }, 0);
})();
