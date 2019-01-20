"use strict";

console.log("Loading controls.");
//Add eventlistener for keyboard events
document.addEventListener('keydown', function (e) {
    if (gameIsRunning) {
        switch (e.key) {
            case "ArrowLeft":
                Game.moveHorizontally(-direction);
                break;
            case "ArrowRight":
                Game.moveHorizontally(+direction);
                break;
            case "ArrowUp":
                Matrix.handleRotation(-direction);
                break;
            case "ArrowDown":
                Game.dropShape();
                break;
        }
    }
});

document.getElementById("start_game").onclick = function () {
    actualGame.startGame();
};

document.getElementById("pause_game").onclick = function () {
    Game.pauseGame();
};

document.getElementById("sound").onclick = function () {
    audioControl.controlSound();
};
console.log("Controls loaded.");