import soundWaves from "./sound_waves.png";

export default function WavePattern() {
  return (
    <div>
      <div className="song-name">Song name goes here</div>
      <div>
        <img src={soundWaves} className="wave-pattern" />
      </div>
    </div>
  );
}
