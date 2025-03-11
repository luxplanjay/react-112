/**
 * Необхідно прибрати атрибут controls та за допомогою Audio API
 * зробити кастомні контроли (play, pause, currentTime, timeupdate).
 */

// export default function Player() {
//   return (
//     <div>
//       <audio
//         type="audio/mp3"
//         src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
//         controls
//       ></audio>
//       {/* <button>Play</button>
//       <button>Pause</button>
//       <button>Stop</button> */}
//     </div>
//   );
// }

import { useRef, useState } from 'react';
import styles from './Player.module.css';

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <div className={styles.playerContainer}>
      <audio
        ref={audioRef}
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={handlePlay}
          disabled={isPlaying}
        >
          Play
        </button>
        <button
          className={styles.button}
          onClick={handlePause}
          disabled={!isPlaying}
        >
          Pause
        </button>
      </div>
      <div className={styles.timeDisplay}>
        {Math.floor(currentTime)} / {Math.floor(duration)} sec
      </div>
      <input
        className={styles.progressBar}
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => {
          audioRef.current.currentTime = Number(e.target.value);
          setCurrentTime(Number(e.target.value));
        }}
      />
    </div>
  );
}
