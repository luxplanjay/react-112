/**
 * Необхідно прибрати атрибут controls та за допомогою Audio API
 * зробити кастомні контроли (play, pause, currentTime, timeupdate).
 */

export default function Player() {
  return (
    <div>
      <audio
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        controls
      ></audio>
      {/* <button>Play</button>
      <button>Pause</button>*/}
    </div>
  );
}
