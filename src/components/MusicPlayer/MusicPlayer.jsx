import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function MusicPlayer({ token, trackUri, chooseTrack }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackUri]);

  if (!token) return null;

  return (
    <SpotifyPlayer
      autoPlay
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      token={token}
      uris={trackUri ? [trackUri] : []}
      showSaveIcon
      styles={{
        activeColor: "#fff",
        bgColor: "#6495ed",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "55px",
      }}
    />
  );
}
