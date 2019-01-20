"use strict";
let song1 = new Audio('../src/Tetris_Original.mp3');
song1.volume = 0.25;
song1.loop = true;
song1.play();

let on_off = 1;

/**
 * Function controlSound
 * Toggles whether the sound is playing or not
 */
function controlSound() {
    console.log("Audio Toggle");
    switch (on_off) {
        case 0:
            song1.play();
            on_off = 1;
            break;
        case 1:
            song1.pause();
            on_off = 0;
            break;
    }
}