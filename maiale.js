let Maiale = {
 specie:"Maiale",
 razza:"Suino",
 zampe:4,
};

let outputMaiale = document.getElementById("outputMaiale");

document.getElementById("BtnMaiale").onclick = function() {
  outputMaiale.textContent = "Specie: " + Maiale.specie + "- Razza: " + Maiale.razza + "- Zampe: " + Maiale.zampe;
};