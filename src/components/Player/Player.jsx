// import React, { useEffect } from "react";

// import SpotifyPlayer from "react-spotify-web-playback";

// import { useRecoilState } from "recoil";
// import { playState } from "../../atoms/playerAtom";

export default function Player({ token, trackUri }) {
  // const [play, setPlay] = useRecoilState(playState);

  // useEffect(() => {
  //   if (trackUri) {
  //     setPlay(true);
  //   }
  // }, [trackUri, setPlay]);

  // if (!token) return null;

  return (
    // <SpotifyPlayer
    //   token={token}
    //   play={play}
    //   uris={trackUri ? [trackUri] : []}
    //   showSaveIcon
    //   callback={(state) => {
    //     setPlay(state.isPlaying);
    //   }}
    //   magnifySliderOnHover={true}
    // />
    <div className="screen-container">Player</div>
  );
}
