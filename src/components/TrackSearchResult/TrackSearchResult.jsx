import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <div className="m-2 overflow-auto flex">
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px", cursor: "pointer" }}
        alt="album-art"
        onClick={handlePlay}
      />
      <div className="ml-3">
        <div className="text-white font-bold">{track.title}</div>
        <div className="text-white/50">{track.artist}</div>
      </div>
    </div>
  );
}
