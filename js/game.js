"use strict";

/**
 * Function moveHorizontally
 * Moves the current shape into the desired direction
 * @param direction the desired direction (1 = right, -1 = left)
 */
function moveHorizontally(direction) {
    player.currentPosition.x += direction;
    if (isColliding(player.currentPosition, player.currentShape)) {
        player.currentPosition.x -= direction;
    }
}

/**
 * Function checkGameOver
 * Checks whether the game is lost and if so, ends the game
 */
function checkGameOver() {
    if (isColliding(player.currentPosition, player.currentShape)) { //Is the game lost?
        gameMatrix.forEach(row => row.fill(0));
        scoreInLocalStorage();
        player.score = 0;
        gameIsOver = true;
        gameIsRunning = false;
    }
}

function pauseGame(){
    document.getElementById("start_game").disabled = false;
    controlSound();
    clearInterval(gameLoop);
    gameIsRunning = false;
}

/**
 * Function resetShape
 * Get called when the last shape is used, generates a random new shape and resets the position
 */
function resetShape() {
    player.currentShape = getRandomShape();
    player.currentPosition.y = 0;
    player.currentPosition.x = Math.floor(gameMatrix[0].length / 2) - 1;
}

/**
 * Function dropShape
 * drops the currentShape and updates the score
 */
function dropShape() {
    player.currentPosition.y++;
    if (isColliding(player.currentPosition, player.currentShape)) {
        player.currentPosition.y--;
        mergeShapeToGameMatrix(player.currentPosition);
        updateScore();
        resetShape();
        checkGameOver();
        drawScore();
    }
}

/**
 * Function drawMatrix
 * draws the current Matrix to the canvas
 * @param matrix the matrix you want to draw to the canvas
 * @param position the position you want to draw to matrix at
 */
function drawMatrix(matrix, position) {
    matrix.forEach((row, offsetY) => {
        row.forEach((set, offsetX) => {
            if (set !== 0) {
                let imgTag = document.createElement("IMG");
                imgTag.src = colors[set];
                context.drawImage(imgTag, offsetX + position.x, offsetY + position.y, 1, 1);
            }
        })
    })
}

/**
 * Function endGame
 * Ends the game..
 */
function endGame() {
    clearInterval(gameLoop);
    context.font = "1px Times New Roman";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Game Over", (canvas.width / 40) / 2, (canvas.width / 20) / 2);
    document.getElementById("start_game").disabled = false;

}

/**
 * Function updateGame
 * This function updates the main timing of the game, drops and draws
 */
function updateGame() {
    currentTime++;
    if (currentTime >= dropIntervall) {
        dropShape();
        currentTime = 0;
    }
    draw();
}
