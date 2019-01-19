"use strict";
console.log("Loading controls.");

//Add eventlistener for keyboard events
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "ArrowLeft":
            moveHorizontally(-direction);
            break;
        case "ArrowRight":
            moveHorizontally(+direction);
            break;
        case "ArrowUp":
            handleRotation(-direction);
            break;
        case "ArrowDown":
            dropShape();
            break;
    }
});

document.getElementById("start_game").onclick = function () {
    if (!this.disabled) {
        init();
        this.disabled = true;
        gameIsRunning = true;
        resetShape();
        gameLoop = setInterval(function () {
            if (gameIsRunning) {
                updateGame();
            } else {
                document.getElementById("start_game").disabled = false;
                endGame();
            }
        }, 10);
    }
};

console.log("Controls loaded.");