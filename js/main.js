"use strict";
console.log("Javascript loaded");

const shapeMatrix = {
    j: [
        [
            0,
            1,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            1,
            1,
            0
        ]
    ],
    i: [
        [
            0,
            2,
            0,
            0
        ],
        [
            0,
            2,
            0,
            0
        ],
        [
            0,
            2,
            0,
            0
        ],
        [
            0,
            2,
            0,
            0
        ]
    ],
    s: [
        [
            0,
            3,
            3
        ],
        [
            3,
            3,
            0
        ],
        [
            0,
            0,
            0
        ]
    ],
    l: [
        [
            0,
            4,
            0
        ],
        [
            0,
            4,
            0
        ],
        [
            0,
            4,
            4
        ]
    ],
    t: [
        [
            0,
            0,
            0
        ],
        [
            5,
            5,
            5
        ],
        [
            0,
            5,
            0
        ]
    ],
    z: [
        [
            6,
            6,
            0
        ],
        [
            0,
            6,
            6
        ],
        [
            0,
            0,
            0
        ]
    ],
    o: [
        [
            7,
            7
        ],
        [
            7,
            7
        ]
    ]
};

const colors = [
    null,
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Jz34T+Ifv3kGIOojBWYBgFkNlgADfTUeTEygjQLC3Iz3Li8G5sanGIauq5gPYwlTdvAtpMLwC6AORlkKjEA2bUYBvDxsYDN+PTpDwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Bb19cYRCW0EGNRrLCgBQXvH3/lQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQAfwJNr7nKi7AAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgKD1y/D+Ifn7sCIOklQ2YBgFkNlgADSwpK2VkBGkW4udjuLp9GzY1OMW0Pb3AehhjurrBtpMLwC6AORlkKjEA2bUYBvBzcYPN+PjtKwOIDaLRAYoByF4AuQCXJmRDCLoAm604DUB3AclhQK4Br69fYxDV1EKNRrLCgBQXvPv4iQE90aEkJGzpAKYJRIMAzACcXiA2ELEaABIkBoACDwbAXoBlDGI0w9TAMxNIgFCGgjkX5kKYC0DZGQBReJAxJHOTqwAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg6Ly04z+IfnXhJoOYgTqYBgFkNlgADfTG5TMygjQL8/EzXD90CpsanGKadmZgPYzFiyaCbScXgF0AczLIVGIAsmsxDODj4gGb8enbFwYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwD3tx+yCCiKo8ajWSFASkuePvpIwN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBvl5MXVeEacQAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg+D8l5T+I3vf0G4OTNBeYBgFkNlgADTi3L2NkBGsWFmfYd+k+NjU4xZz0FMF6GPdWRoFtJxeAXQB3sp4iUeYguxbTAH5hiCEf3zIwgNggGg2gGIDsBZC/cGlCNoOwC7DYitMADBcQEQr4vUCkARdefmUwEOdGjUaywoAkL7x9yYCe6FASEtgF6ACqiQFEgwA01eL2AiVhADKVGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZfmAthLgBlZwBvBonjT09XegAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBg2Fvy6T+IvvnlGIM6jxWYBgFkNlgADWTN8GBkBGnmE+FiOP1gDzY1OMVMFVzAehinZewA204uALsA5mSQqcQAZNdiGMAtwAw24+uHvwwgNohGBygGIHsB5AJcmpANIegCbLbiNADdBSSHAbkGPPh0hUGBTwc1GskKA1Jc8OnNNwb0RIeSkLClA5gmEA0CMANweoHYQMRqAEiQGAAKPBgAewGWMYjRDFMDz0wgAUIZCuZcmAthLgBlZwBQ3ZP3OaGtaAAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4T2NkYGBgeJXf8h9EH/n4ksGGXxxMgwAyGyyABoIWTGZkBGnmExdj2HbrMjY1OMW81HTBehjXJeSCbScXgF0AczLIVGIAsmsxDGAXEQSb8fPNewYQG0SjAxQDkL0AcgEuTciGEHQBNltxGoDuApLDgFwDrnx8w6DDL4IajWSFASku+PTyFQN6okNJSNjSAUwTiAYBmAE4vUBsIGI1ACRIDAAFHgyAvQDLGMRohqmBZyaQAKEMBXMuzIUwF4CyMwBUFZC9raUyoQAAAABJRU5ErkJggg==",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVQ4T2NkYGBg+Hln0n8QfeLSGwYLPREwDQLIbLAAGrAPamJkBGlm4+RjOHTyHjY1OMXszJXAehgPrqsD204uALsA5mSQqcQAZNdiGsDOAzHj5xcGBhAbRKMBFAOQvQB2AQ5NyGYQdgEWW3EagOECIgIBvxeINODK7bcMOqrCqNFIVhiQ4oVf3z8xoCc6lISELR3ANIFoEIAZgNsLlIQByFRiACjwYADsBVjGIEYzTA08M4EECGUomH9hLoS5AJSdASaukfnTt+kFAAAAAElFTkSuQmCC"
];

//Get canvas and context for scaling
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(40, 32);

//set intervall in which a dropShape should occur
const dropIntervall = 100;

//initialize current time
let currentTime = 0;

//create GameMatrix, initialize player and other vars
const gameMatrix = createMatrix(10, 20);
const player = {
    currentPosition: {
        x: 0,
        y: 0
    },
    currentShape: null,
    score: 0
};

const direction = 1;
let gameLoop;
let gameIsRunning = false;


resetShape();
checkGameOver();
draw();
endGame();

//Load shapeMatrix json into variable so it can be used afterwards
/*let shapeMatrix;
loadJSON("./../src/shapeMatrix", function (data) {
    console.log("shapeMatrix.json loaded successfully");
    shapeMatrix = data
}, (error) => console.error(error));*/

//Add eventlistener for keyboard events
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 37) {
        moveHorizontally(-direction);
    } else if (e.keyCode === 39) {
        moveHorizontally(+direction);
    } else if (e.keyCode === 40) {
        if (gameIsRunning) {
            dropShape();
        }
    } else if (e.keyCode === 38) {
        handleRotation(-direction);
    }
});

document.getElementById("start_game").onclick = function () {
    gameIsRunning = true;
    resetShape();
    gameLoop = setInterval(function () {
        if (gameIsRunning) {
            updateGame();
        } else {
            endGame();
        }
    }, 10);
    this.disabled = true;
};

/**
 * Function endGame
 * Ends the game..
 */
function endGame() {
    console.log("Ending game.");
    clearInterval(gameLoop);
    context.font = "2px Comic Sans MS";
    context.fillStyle = "#ffffff";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Game Over", (canvas.width / 20) / 2, (canvas.width / 20) / 2);
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

/**
 * Function draw
 * Draws the actual canvas
 */
function draw() {
    console.log("Does its thing");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawMatrix(gameMatrix, {x: 0, y: 0});
    drawMatrix(player.currentShape, player.currentPosition);
}

/**
 * Function handleRotation
 * Handles the given rotation by the actualy human player
 */
function handleRotation() {
    let direction = -1;
    const initialPositionX = player.currentPosition.x;
    let helper = 1;

    rotateShape(player.currentShape, direction);
    while (isColliding(player.currentPosition, player.currentShape)) { //as long as it collides, keep on rotating
        player.currentPosition.x += helper;
        helper = -(helper + (helper > 0 ? 1 : -1));

        if (helper > player.currentShape[0].length) { //If the next rotation would go out of bounds, rotate back
            rotateShape(player.currentShape, -direction);
            player.currentPosition.x = initialPositionX;
            return;
        }
    }
}

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
 * Function updateScore
 * updates the players score corresponding to the lines completed
 */
function updateScore() {
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
    console.log("Dropping the shape!: ", gameMatrix);
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
 * Function drawScore
 * Writes the current Score to the Canvas
 */
function drawScore() {
    context.font = "bold 1px Comic Sans MS";
    context.fillStyle = "#ffffff";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.fillText("Score:" + player.score, 0.2, 0);
}

/**
 * Function checkGameOver
 * Checks whether the game is lost and if so, ends the game
 */
function checkGameOver() {
    if (isColliding(player.currentPosition, player.currentShape)) { //Is the game lost?
        gameMatrix.forEach(row => row.fill(0));
        player.score = 0;
        gameIsRunning = false;
    }
}

/**
 * Function getRandomShape
 * Generates a random shape from all the available shape types
 * @returns {Array} the Matrix of a randomly generated shape
 */
function getRandomShape() {
    const availableShapes = "ijsltzo";
    const randomShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
    return getMatrixForShape(randomShape);
}

/**
 * Function mergeShapeToGameMatrix
 * Merges the used shape into the gameMatrix
 * @param position the position of the current shape
 */
function mergeShapeToGameMatrix(position) {
    console.log("merging!");
    //Extract x and y positions to use them easier
    const x = position.x;
    const y = position.y;

    player.currentShape.forEach((row, i) => {
        row.forEach((set, j) => {
            if (set !== 0) { //if there is a shape at the position => merge it!
                gameMatrix[i + y][j + x] = set;
            }
        });
    });
}

/**
 * Function isColliding
 * Checks whether the currentShape is colliding with the actual gameMatrix
 * @param position the position of the currentShape
 * @param shape matrix of the current Shape
 * @returns {boolean} whether it is colliding or not
 */
function isColliding(position, shape) {
    //Extract x and y positions to use them easier
    const x = position.x;
    const y = position.y;

    console.log("ex: " + y);

    for (let i = 0; i < shape.length; ++i) {
        for (let j = 0; j < shape[i].length; ++j) {
            if (shape[i][j] !== 0 && (gameMatrix[i + y] && gameMatrix[i + y][j + x]) !== 0) {
                console.log("Colission!");
                return true;
            }
        }
    }
    return false;
}

/**
 * Function rotateShape
 * This Function rotates a given shape
 * @param shape the given matrix
 * @param direction the given direction to rotate for (in case rotation collides)
 */
function rotateShape(shape, direction) {
    for (let i = 0; i < shape.length; ++i) {
        for (let j = 0; j < i; ++j) {
            //The actual rotation
            [
                shape[j][i],
                shape[i][j]
            ] = [
                shape[i][j],
                shape[j][i],
            ]
        }
    }

    if (direction > 0) {
        shape.forEach(row => row.reverse());
    } else {
        shape.reverse();
    }
}

/**
 * Function createMatrix
 * Creates a matrix with the desired width and height
 * @param width Width of the Matrix
 * @param height Height of the Matrix
 * @returns {Array} The Matrix
 */
function createMatrix(width, height) {
    const matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push(new Array(width).fill(0))
    }
    return matrix;
}

/**
 * Function getMatrixForShape
 * This Function returns the appropriate Matrix for a given shape
 * @param shape the shape you want the matrix for
 * @returns {Array} The desired matrix
 */
function getMatrixForShape(shape) {
    switch (shape) {
        case "j":
            return shapeMatrix.j;
        case "i":
            return shapeMatrix.i;
        case "s":
            return shapeMatrix.s;
        case "l":
            return shapeMatrix.l;
        case "t":
            return shapeMatrix.t;
        case "z":
            return shapeMatrix.z;
        case "o":
            return shapeMatrix.o;
        default:
            console.log("No matrix found for shape " + shape);
    }
}


/**
 * Function loadJSON
 * This function enables you to load a locally stored JSON file
 * @param pathToLocalJson the path to the locally stored JSON file
 * @param success callback function for success-case
 * @param error callback function for error-case
 */
function loadJSON(pathToLocalJson, success, error) {
    let myXhr = new XMLHttpRequest();
    myXhr.onreadystatechange = function () {
        if (myXhr.readyState === XMLHttpRequest.DONE) {
            if (myXhr.status === 200) {
                if (success)
                    success(JSON.parse(myXhr.responseText));
            } else {
                if (error)
                    error(myXhr);
            }
        }
    };
    myXhr.open("GET", pathToLocalJson, true);
    myXhr.send();
}

/**
 * Function handlePlayerInput
 * Handles the keyboard input made by the player
 * @param key the key that was pressed by the player
 */
function handlePlayerInput(key) {
    switch (key) {
        case "ArrowDown":
            if (gameIsRunning) {
                dropShape();
            }
            break;
        case "ArrowUp":
            handleRotation(-direction);
            break;
        case "ArrowLeft":
            moveHorizontally(-direction);
            break;
        case "ArrowRight":
            moveHorizontally(direction);
            break
    }
}