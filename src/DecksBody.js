import playButton from "./play button v1.svg";

function Jogwheel() {
  return <div className="jogwheel"></div>;
}

export default function DecksBody() {
  return (
    <div className="decks-container">
      <div>
        <Jogwheel />
        <img src={playButton} className="play-button" />
      </div>

      <Jogwheel />
    </div>
  );
}
