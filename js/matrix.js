"use strict";

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
 * Function draw
 * Draws the actual canvas
 */
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawMatrix(gameMatrix, {x: 0, y: 0});
    drawMatrix(player.currentShape, player.currentPosition);
}

/**
 * Function handleRotation
 * Handles the given rotation by the actual human player
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
 * Function mergeShapeToGameMatrix
 * Merges the used shape into the gameMatrix
 * @param position the position of the current shape
 */
function mergeShapeToGameMatrix(position) {
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

    for (let i = 0; i < shape.length; ++i) {
        for (let j = 0; j < shape[i].length; ++j) {
            if (shape[i][j] !== 0 && (gameMatrix[i + y] && gameMatrix[i + y][j + x]) !== 0) {
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