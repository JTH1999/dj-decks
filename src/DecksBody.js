import { useState } from "react";
import jw from "./jwPlaceholder.svg";
import playButton from "./play button v1.svg";

function Jogwheel({ trackPlaying }) {
  return (
    <img
      className={trackPlaying ? "jogwheel playing" : "jogwheel"}
      src={jw}
    ></img>
  );
}

export default function DecksBody({
  track1,
  track2,
  track1Playing,
  setTrack1Playing,
}) {
  const track1File = track1[Object.keys(track1)[0]];
  const handleClick = () => {
    if (track1Playing) {
      track1File.pause();
      setTrack1Playing(!track1Playing);
    } else {
      track1File.play();
      setTrack1Playing(!track1Playing);
    }
  };

  return (
    <div className="decks-container">
      <div className="fill c1 r1">
        <Jogwheel trackPlaying={track1Playing} />
      </div>
      <div className="fill c1 r2 play-button-div">
        <img src={playButton} className="play-button" onClick={handleClick} />
      </div>
      <div className="fill c2 r1">
        <Jogwheel />
      </div>
    </div>
  );
}
