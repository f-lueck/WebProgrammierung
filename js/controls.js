"use strict";

console.log("Loading controls.");
//Add eventlistener for keyboard events
document.addEventListener('keydown', (e) => {
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

document.getElementById("start_game").onclick = () => {
    if (!this.disabled) {
        if (gameIsOver) {
            init();
            gameIsOver = false;
            this.disabled = true;
            gameIsRunning = true;
            resetShape();
        }
        gameIsRunning = true;
        gameLoop = setInterval(function () {
            if (gameIsRunning) {
                updateGame();
            } else {
                document.getElementById("start_game").disabled = false;
                if (gameIsOver) {
                    endGame();
                }
            }
        }, 10);

    }
};
console.log("Controls loaded.");