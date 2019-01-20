"use strict";

class Score {
    /**
     * Function scoreInLocalStorage
     * Saves the players score in Local Storage
     */
    static scoreInLocalStorage() {
        let scores = [];
        if (localStorage['scores']) {
            scores = JSON.parse(localStorage['scores']);
            if (scores[9] < player.score) {
                scores[9] = player.score;
                scores.sort(function (a, b) {
                    return b - a
                });
            }
        } else {
            scores.length = 10;
            for (let i = 0; i < 10; i++) {
                scores[i] = 0;
            }
        }
        localStorage['scores'] = JSON.stringify(scores);
    }

    /**
     * Function updateScore
     * updates the players score corresponding to the lines completed
     */
    static updateScore() {
        let multiplier = 1;

        outerLoop: for (let i = gameMatrix.length - 1; i > 0; --i) {
            for (let j = 0; j < gameMatrix[i].length; ++j) {
                if (gameMatrix[i][j] === 0) {
                    continue outerLoop;
                }
            }
            const rowToUnshift = gameMatrix.splice(i, 1)[0].fill(0);
            gameMatrix.unshift(rowToUnshift);
            i++;//Add 1 to outerloop to "skip" next row
            player.score += multiplier * 100;
            multiplier *= 2;
        }
        Game.higherDifficulty();
    }

    /**
     * Function drawScore
     * Writes the current Score to the Canvas
     */
    static drawScore() {
        context.font = "1px Times New Roman";
        context.fillStyle = "#ffffff";
        context.textAlign = "left";
        context.textBaseline = "top";
        context.fillText("Score:" + player.score, 0.2, 0);
    }
}