console.log("CIAO")

let outputGallo = document.getElementById("outputGallo");
console.log(outputGallo);
if (outputGallo != null) {
    document.getElementById("BtnGallo").onclick = function () {
        outputGallo.textContent = Gallo.descrivi();
    };
}

let outputMucca = document.getElementById("outputMucca");
if (outputMucca != null) {

    document.getElementById("BtnMucca").onclick = function () {
        outputMucca.textContent = Mucca.descrivi();
    };
}

let outputMaiale = document.getElementById("outputMaiale");

if (outputMaiale != null) {
    document.getElementById("BtnMaiale").onclick = function () {
        outputMaiale.textContent = Maiale.descrivi();
    };
}