"use strict";

class AudioController {

    constructor() {
        this.song = new Audio('../src/music/Tetris_Original.mp3');
        this.song.volume = 0.1;
        this.song.loop = true;
        this.music_playing = false;

        this.song.play()
            .then(() => {
                console.log("Started playing the music.");
                this.music_playing = true;
            })
            .catch((e) => console.error(`Failed playing the music: ${e.message}`));
    }

    /**
     * Function controlSound
     * Toggles whether the sound is playing or not, loads different sound icons
     */
    controlSound() {
        console.log("Audio Toggle");
        if (this.music_playing) {
            this.song.pause();
            document.getElementById("speaker").src = "../src/speaker_icons/speaker_icon_off.jpg";
            this.music_playing = false;
        } else {
            this.song.play()
                .then(() => {
                    console.log("Started playing the music.");
                    document.getElementById("speaker").src = "../src/speaker_icons/speaker_icon_on.jpg";
                    this.music_playing = true;
                })
                .catch((e) => console.error(`Failed playing the music: ${e.message}`));
        }
    }
}