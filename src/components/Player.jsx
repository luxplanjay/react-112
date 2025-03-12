/**
 * Необхідно прибрати атрибут controls та за допомогою Audio API
 * зробити кастомні контроли (play, pause, currentTime, timeupdate).
 */

import { useRef } from 'react';

export default function Player() {
    const playerRef = useRef();

    const play = () => {
        playerRef.current.play();
    };

    const pause = () => {
        playerRef.current.pause();
    };

    return (
        <div>
            <audio
                ref={playerRef}
                type="audio/mp3"
                src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
            ></audio>
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
        </div>
    );
}
