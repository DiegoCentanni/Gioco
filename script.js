let Animale1 = {
 specie:"mucca",
 razza:"chianina",
 zampe:"4",
};

let Animale2 = {
 specie:"cane",
 razza:"bassotto",
 zampe:"4",
};

let Animale3 = {
 specie:"gallina",
 razza:"andalusa",
 zampe:"2",
};

let output = document.getElementById("output");

document.getElementById("Animale1").onclick = function() {
  output.textContent =
    "Specie: " + Animale1.specie +
    ", Razza: " + Animale1.razza +
    ", Zampe: " + Animale1.zampe;
};

document.getElementById("Animale2").onclick = function() {
  output.textContent =
    "Specie: " + Animale2.specie +
    ", Razza: " + Animale2.razza +
    ", Zampe: " + Animale2.zampe;
};

document.getElementById("Animale3").onclick = function() {
  output.textContent =
    "Specie: " + Animale3["specie"] +
    ", Razza: " + Animale3["razza"] +
    ", Zampe: " + Animale3["zampe"];
};