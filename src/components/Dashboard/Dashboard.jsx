import { useEffect, useState } from "react";

// hooks
import useAuth from "../../hooks/useAuth";

// api
import SpotifyWebApi from "spotify-web-api-node";

// components
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Right from "../Right/Right";
import Player from "../Player/Player";

// recoil.js
import { useRecoilState } from "recoil";
import { playingTrackState } from "../../atoms/playerAtom";

const spotifyApi = new SpotifyWebApi({
  clientId: "2353e1ccf7464652a66074ee88dc47b5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <div className="flex min-h-screen min-w-max lg:pb-24">
      <Sidebar />
      <Body
        accessToken={accessToken}
        spotifyApi={spotifyApi}
        chooseTrack={chooseTrack}
      />
      <Right
        accessToken={accessToken}
        spotifyApi={spotifyApi}
        chooseTrack={chooseTrack}
      />
      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <Player accessToken={accessToken} trackUri={playingTrack.uri} />
        </div>
      )}
    </div>
  );
}
