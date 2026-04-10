let Gallo = {
 descrivi:function(){
  let desc = "Specie: " + Gallo.specie + "- Razza: " + Gallo.razza + "- Zampe: " + Gallo.zampe;
  return desc;
 },
 specie:"Gallo",
 razza:"Andalusa",
 zampe:2,
};

let outputGallo = document.getElementById("outputGallo");

document.getElementById("BtnGallo").onclick = function() {
  outputGallo.textContent = Gallo.descrivi();
};