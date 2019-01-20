"use strict";

class AudioController {

    constructor() {
        const song = new Audio('../src/music/Tetris_Original.mp3');
        song.volume = 0.1;
        song.loop = true;
        let music_playing;

        song.play()
            .then(() => {
                console.log("Started playing the music.");
                music_playing = true;
            })
            .catch((e) => console.error(`Failed playing the music: ${e.message}`));
    }

    /**
     * Function controlSound
     * Toggles whether the sound is playing or not, loads different sound icons
     */
    controlSound() {
        console.log("Audio Toggle");
        if (music_playing) {
            song.pause();
            document.getElementById("speaker").src = "../src/speaker_icons/speaker_icon_off.jpg";
            music_playing = false;
        } else {
            song.play()
                .then(() => {
                    console.log("Started playing the music.");
                    document.getElementById("speaker").src = "../src/speaker_icons/speaker_icon_on.jpg";
                    music_playing = true;
                })
                .catch((e) => console.error(`Failed playing the music: ${e.message}`));
        }
    }
}