import { useState } from "react";
import { useRef } from "react";
import angie from "./Angie.mp3";
import { Howl, Howler } from "howler";

function UploadButton(props) {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const files = event.target.files;
    props.handleFiles(files);
  };
  return (
    <div>
      <input
        type="file"
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={handleChange}
        accept=".mp3"
        multiple
      />
      <button onClick={handleClick}>Upload some songs</button>
    </div>
  );
}

function SongTableRow(props) {
  const handleClick = () => {
    const sound = new Howl({
      src: [
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg",
      ],
      html5: true,
      onload: function () {
        console.log("LOADED");
        sound.play();
      },
      onloaderror: function (e, msg) {
        console.log(
          "Unable to load file: " + "bob" + " | error message : " + msg
        );
        console.log("First argument error " + e);
      },
    });

    console.log(sound);

    // Fires when the sound finishes playing.
    sound.on("end", function () {
      console.log("Finished!");
    });
  };
  return (
    <tr>
      <td>{props.song.name}</td>
      <td>{props.id}</td>
      <td>
        <button onClick={handleClick}>Play</button>
      </td>
    </tr>
  );
}

function SongsTable(props) {
  const rows = [];
  for (const key in props.songs) {
    console.log("got here");
    rows.push(<SongTableRow song={props.songs[key]} id={key} />);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
        {rows}
      </tbody>
    </table>
  );
}

export default function Songs() {
  // songs key value pairing of id and file
  const [songs, setSongs] = useState({});

  const updateSongs = (files) => {
    let id;

    // set starting id as the current max id + 1, else 1
    // Bit janky but should work fine
    console.log(songs);
    if (!(Object.keys(songs).length === 0)) {
      const keys = Object.keys(songs);
      let keysInt = [];
      for (let key of keys) {
        const keyInt = parseInt(key);
        keysInt.push(keyInt);
      }
      id = Math.max(...keysInt);
    } else {
      id = 0;
    }

    let songsCopy = { ...songs };

    for (let file of files) {
      id++;
      songsCopy[id] = file;
    }
    setSongs(songsCopy);
  };

  return (
    <div>
      <h2>Songs</h2>
      <UploadButton handleFiles={updateSongs} />
      <SongsTable songs={songs} />
    </div>
  );
}
