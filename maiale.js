let Maiale = {
 descrivi:function(){
  let desc = "Specie: " + Maiale.specie + "- Razza: " + Maiale.razza + "- Zampe: " + Maiale.zampe;
  return desc;
 },
 specie:"Maiale",
 razza:"Suino",
 zampe:4,
};

let outputMaiale = document.getElementById("outputMaiale");

document.getElementById("BtnMaiale").onclick = function() {
  outputMaiale.textContent = Maiale.descrivi();
};