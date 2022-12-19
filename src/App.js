import logo from "./logo.svg";
import "./App.css";
import WavePattern from "./WavePattern";
import DecksBody from "./DecksBody";
import Songs from "./Songs";
import { useState } from "react";

function App() {
  const [track1, setTrack1] = useState({});
  const [track2, setTrack2] = useState({});
  const [songs, setSongs] = useState({});
  const [track1Playing, setTrack1Playing] = useState(false);

  return (
    <div className="App">
      <div className="wave-container">
        <WavePattern track={track1} songs={songs} />
        <WavePattern track={track2} songs={songs} />
      </div>
      <DecksBody
        track1={track1}
        track2={track2}
        track1Playing={track1Playing}
        setTrack1Playing={setTrack1Playing}
      />
      <Songs
        track1={track1}
        setTrack1={setTrack1}
        track2={track2}
        setTrack2={setTrack2}
        songs={songs}
        setSongs={setSongs}
        track1Playing={track1Playing}
        setTrack1Playing={setTrack1Playing}
      />
    </div>
  );
}

export default App;
