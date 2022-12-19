import WaveSurfer from "wavesurfer.js";
import React, { useRef, useEffect, useState } from "react";

function Waveform({ id, songs, track }) {
  let [waveSurfer, setWaveSurfer] = useState(null);

  const waveformRef = useRef();

  // if (waveformRef.current) {
  //   var wavesurfer = WaveSurfer.create({
  //     container: waveformRef.current,
  //     waveColor: "violet",
  //     progressColor: "purple",
  //   });
  //   if (id) {
  //     wavesurfer.destroy();
  //     const song = songs[id];
  //     let audio = new Audio();
  //     const url = URL.createObjectURL(song);
  //     audio.src = url;
  //     wavesurfer.load(audio);
  //   }
  // }

  // useEffect(() => {
  //   if (waveformRef.current) {
  //     setWaveSurfer(
  //       WaveSurfer.create({
  //         container: waveformRef.current,
  //       })
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (id) {
  //     const song = songs[id];
  //     let audio = new Audio();
  //     const url = URL.createObjectURL(song);
  //     audio.src = url;
  //     waveSurfer.load(audio);
  //   }
  //   //return () => waveSurfer.destroy();
  // }, [waveSurfer]);

  // useEffect(() => {
  //   if(waveSurfer) {
  //     waveSurfer.load(audioFile)
  //   }
  // }, [waveSurfer])

  // useEffect(() => {
  //   if (waveformRef.current) {
  //     var wavesurfer = WaveSurfer.create({
  //       container: waveformRef.current,
  //       waveColor: "violet",
  //       progressColor: "purple",
  //     });
  //     if (id) {
  //       // const song = songs[id];
  //       let audio = new Audio();
  //       // const url = URL.createObjectURL(song);
  //       audio.src = track.src;
  //       wavesurfer.load(track.src);
  //     }
  //   }
  // }, []);

  return <div ref={waveformRef}></div>;
}

export default function WavePattern({ track, songs }) {
  let trackName;
  let id;
  if (Object.keys(track).length === 1) {
    id = Object.keys(track)[0];
    const song = songs[id];
    trackName = song.name;
  } else {
    trackName = "Load a track";
  }

  return (
    <div>
      <div className="song-name">{trackName}</div>
      {/* <Waveform id={id} songs={songs} track={track} /> */}
    </div>
  );
}
