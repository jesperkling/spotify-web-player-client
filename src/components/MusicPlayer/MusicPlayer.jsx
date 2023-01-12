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
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={true}
      token={token}
      uris={trackUri ? [trackUri] : []}
      showSaveIcon
    />
  );
}
