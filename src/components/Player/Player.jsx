import React, { useEffect } from "react";

import SpotifyPlayer from "react-spotify-web-playback";

import { useRecoilState } from "recoil";
import { playState } from "../../atoms/playerAtom";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useRecoilState(playState);

  useEffect(() => {
    if (trackUri) {
      setPlay(true);
    }
  }, [trackUri, setPlay]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      play={play}
      uris={trackUri ? [trackUri] : []}
      showSaveIcon
      callback={(state) => {
        setPlay(state.isPlaying);
        console.log(state);
      }}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
}
