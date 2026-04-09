let Gallo = {
 specie:"Gallo",
 razza:"Andalusa",
 zampe:2,
};

let outputGallo = document.getElementById("outputGallo");

document.getElementById("BtnGallo").onclick = function() {
  outputGallo.textContent = "Specie: " + Gallo.specie + "- Razza: " + Gallo.razza + "- Zampe: " + Gallo.zampe;
};