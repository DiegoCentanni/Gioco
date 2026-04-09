let Mucca = {
 specie:"Mucca",
 razza:"Chianina",
 zampe:4,
};

let outputMucca = document.getElementById("outputMucca");

document.getElementById("BtnMucca").onclick = function() {
  outputMucca.textContent = "Specie: " + Mucca.specie + "- Razza: " + Mucca.razza + "- Zampe: " + Mucca.zampe;
};