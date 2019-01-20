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
let player = {};
let gameLoop;
let direction;
let gameIsOver;
let gameIsRunning;

initGameData();

let actualGame = new Game();
let audioControl = new AudioController();
let actualMatrix = new Matrix();

const gameMatrix = Matrix.createMatrix(10, 20);


/**
 * Function init
 * Does all needed initializations for the game to start running.
 */
function init() {
    player.score = 0;
    Game.resetShape();
    Game.checkGameOver();
    Matrix.draw();
    Game.endGame();
}

/**
 * Function initGameData
 * initializes the gameData from Jsons in src dir
 */
function initGameData() {
    //Load shapes
    if (!shapeMatrix) {
        Utility.loadJson("../src/data/shapeMatrix").then(json => shapeMatrix = json);
    }
    //Load images
    if (!colors) {
        Utility.loadJson("../src/data/colors").then(json => colors = json);
    }
    //Load init game data
    if (!dropIntervall) {
        Utility.loadJson("../src/data/initData").then((json) => {
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