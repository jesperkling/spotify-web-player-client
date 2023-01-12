import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  const handlePlay = () => {
    chooseTrack(track);
  };
  return (
    <div className="m-2" style={{ cursor: "pointer" }} onClick={handlePlay}>
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt="album-art"
      />
      <div className="ml-3">
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  );
}
