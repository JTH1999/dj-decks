import logo from "./logo.svg";
import "./App.css";
import WavePattern from "./WavePattern";
import DecksBody from "./DecksBody";
import Songs from "./Songs";

function App() {
  return (
    <div className="App">
      <div className="wave-container">
        <WavePattern />
        <WavePattern />
      </div>
      <DecksBody />
      <Songs />
    </div>
  );
}

export default App;
