"use strict";

//Initialize gamedata for initial usage
let shapeMatrix;
let colors;

//Get canvas and context for scaling
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(48, 32);

//set intervall in which a dropShape should occur
let dropIntervall;

//initialize current time
let currentTime;

//initialize score border for higher difficulty
let scoreBorder;

//create GameMatrix, initialize player and other vars
const gameMatrix = createMatrix(10, 20);
let player = {};
let gameLoop;
let direction;
let gameIsOver;
let gameIsRunning;

initGameData();


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
    if (!shapeMatrix) {
        loadJson("../src/data/shapeMatrix").then(json => shapeMatrix = json);
    }
    //Load images
    if (!colors) {
        loadJson("../src/data/colors").then(json => colors = json);
    }
    //Load init game data
    if (!dropIntervall) {
        loadJson("../src/data/initData").then((json) => {
            //Initialize data
            dropIntervall = json.dropInterval;
            currentTime = json.currentTime;
            scoreBorder = json.scoreBorder;
            player = json.player;
            direction = json.direction;
            gameIsOver = json.gameIsOver;
            gameIsRunning = json.gameIsRunning;
        });
    }
}