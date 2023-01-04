import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  }

  return (
    <div
      className="flex flex-row p-2"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt="album-art"
      />
      <div className="p-2">
        <div>{track.title}</div>
        <div className="text-slate-500">{track.artist}</div>
      </div>
    </div>
  );
}
