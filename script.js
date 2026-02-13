function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),

    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");

        // LA INSERIAMO NEL DIV, NON NEL BODY
        document.getElementById("gameContainer").appendChild(this.canvas);

        this.interval = setInterval(updateGameArea, 20); // 50 FPS
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    draw: function (component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(
            component.x,
            component.y,
            component.width,
            component.height
        );
    }
};

var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    color: "red"
};

function updateGameArea() {
    myGameArea.clear();
    myGameArea.draw(redSquare);
}

// MOVIMENTI

function moveup() {
    redSquare.y -= 30;
}

function movedown() {
    redSquare.y += 30;
}

function moveleft() {
    redSquare.x -= 30;
}

function moveright() {
    redSquare.x += 30;
}
