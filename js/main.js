"use strict";

//Initialize gamedata for initial usage
let shapeMatrix;
let colors;
initGameData();

//Get canvas and context for scaling
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(48, 32);

//set intervall in which a dropShape should occur
let dropIntervall = 100;

//initialize current time
let currentTime = 0;

//initialize score border for higher difficulty
let scoreBorder = 500;

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
let gameIsOver = true;
let gameIsRunning = false;

/**
 * Function init
 * Does all needed initializations for the game to start running.
 */
function init() {
    resetShape();
    checkGameOver();
    draw();
    endGame();
}

/**
 * Function initGameData
 * initializes the gameData from Jsons in src dir
 */
function initGameData() {
    //Load shapes
    loadJson("../src/shapeMatrix").then(json => shapeMatrix = json);
    //Load images
    loadJson("../src/colors").then(json => colors = json);
}