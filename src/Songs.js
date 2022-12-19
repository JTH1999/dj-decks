import { useState } from "react";
import { useRef } from "react";
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

function SongTableRow({ song, id, track1, setTrack1, setTrack1Playing }) {
  const handleClick = () => {
    if (Object.keys(track1).length != 0) {
      track1[Object.keys(track1)[0]].stop();
      setTrack1Playing(false);
    }
    const url = URL.createObjectURL(song);
    const newTrack1 = new Howl({
      src: [url],
      format: ["mp3"],
      html5: true,
      onload: function () {
        const trackObj = {};
        trackObj[id] = newTrack1;
        setTrack1(trackObj);
        URL.revokeObjectURL(newTrack1);
      },
      onloaderror: function (e, msg) {
        console.log(
          "Unable to load file: " + "bob" + " | error message : " + msg
        );
        console.log("First argument error " + e);
      },
    });
  };
  return (
    <tr>
      <td>{song.name}</td>
      <td>{id}</td>
      <td>
        <button onClick={handleClick}>load track 1</button>
      </td>
    </tr>
  );
}

function SongsTable({ songs, track1, setTrack1, setTrack1Playing }) {
  const rows = [];
  for (const key in songs) {
    rows.push(
      <SongTableRow
        song={songs[key]}
        id={key}
        setTrack1={setTrack1}
        track1={track1}
        setTrack1Playing={setTrack1Playing}
      />
    );
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function Songs({
  songs,
  setSongs,
  setTrack1,
  setTrack2,
  track1,
  track2,
  track1Playing,
  setTrack1Playing,
}) {
  // songs key value pairing of id and file
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
    <div className="songs-container">
      <h2>Songs</h2>
      <UploadButton handleFiles={updateSongs} />
      <SongsTable
        songs={songs}
        setTrack1={setTrack1}
        track1={track1}
        setTrack1Playing={setTrack1Playing}
      />
    </div>
  );
}
