"use strict";

class Game {

    /**
     * Function moveHorizontally
     * Moves the current shape into the desired direction
     * @param direction the desired direction (1 = right, -1 = left)
     */
    static moveHorizontally(direction) {
        player.currentPosition.x += direction;
        if (Matrix.isColliding(player.currentPosition, player.currentShape)) {
            player.currentPosition.x -= direction;
        }
    }

    /**
     * Function startGame
     * st
     * Starts the game
     */
    startGame() {
        if (!document.getElementById("start_game").disabled) {
            if (gameIsOver) {
                init();
                gameIsOver = false;
                document.getElementById("start_game").disabled = true;
                gameIsRunning = true;
                Game.resetShape();
            }
            gameIsRunning = true;
            gameLoop = setInterval(function () {
                if (gameIsRunning) {
                    Game.updateGame();
                } else {
                    document.getElementById("start_game").disabled = false;
                    if (gameIsOver) {
                        Game.endGame();
                    }
                }
            }, 10);
        }
    }

    /**
     * Function checkGameOver
     * Checks whether the game is lost and if so, ends the game
     */
    static checkGameOver() {
        if (Matrix.isColliding(player.currentPosition, player.currentShape)) { //Is the game lost?
            gameMatrix.forEach(row => row.fill(0));
            Score.scoreInLocalStorage();
            gameIsOver = true;
            gameIsRunning = false;
        }
    }

    /**
     * Function pauseGame()
     * Pauses the current game
     */
    static pauseGame() {
        document.getElementById("start_game").disabled = false;
        clearInterval(gameLoop);
        gameIsRunning = false;
    }

    /**
     * Function resetShape
     * Get called when the last shape is used, generates a random new shape for the player and resets the position
     */
    static resetShape() {
        player.currentShape = Matrix.getRandomShape();
        player.currentPosition.y = 0;
        player.currentPosition.x = Math.floor(gameMatrix[0].length / 2) - 1;
    }

    /**
     * Function dropShape
     * drops the currentShape and updates the score
     */
    static dropShape() {
        player.currentPosition.y++;
        if (Matrix.isColliding(player.currentPosition, player.currentShape)) {
            player.currentPosition.y--;
            actualMatrix.mergeShapeToGameMatrix(player.currentPosition);
            Score.updateScore();
            Game.resetShape();
            Game.checkGameOver();
            Score.drawScore();
        }
    }

    /**
     * Function drawMatrix
     * draws the current Matrix to the canvas
     * @param matrix the matrix you want to draw to the canvas
     * @param position the position you want to draw to matrix at
     */
    drawMatrix(matrix, position) {
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
    static endGame() {
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
    static updateGame() {
        currentTime++;
        if (currentTime >= dropIntervall) {
            Game.dropShape();
            currentTime = 0;
        }
        if (gameIsRunning)
            Matrix.draw();
    }

    /**
     * Function higherDifficulty
     * Decreases the variable dropInterval, if the score is higher than a certain amount
     */
    static higherDifficulty() {
        if (player.score >= scoreBorder) {
            dropIntervall *= 0.8;
            scoreBorder += 500;
        }
    }
}