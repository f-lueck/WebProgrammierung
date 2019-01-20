"use strict";

const song = new Audio('../src/Tetris_Original.mp3');
song.volume = 0.1;
song.loop = true;
let music_playing = false;

song.play()
    .then(() => {
        console.log("Started playing the music.");
        music_playing = true;
    })
    .catch((e) => console.error(`Failed playing the music: ${e.message}`));


/**
 * Function controlSound
 * Toggles whether the sound is playing or not
 */
function controlSound() {
    console.log("Audio Toggle");
    if (music_playing) {
        song.pause();
        music_playing = false;
    } else {
        song.play()
            .then(() => {
                console.log("Started playing the music.");
                music_playing = true;
            })
            .catch((e) => console.error(`Failed playing the music: ${e.message}`));
    }
}