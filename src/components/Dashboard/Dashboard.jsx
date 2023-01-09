import { useEffect } from "react";

// hooks
import useAuth from "../../hooks/useAuth";

// api
import SpotifyWebApi from "spotify-web-api-node";

// components
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Right from "../Right/Right";

// recoil.js
import { useRecoilState } from "recoil";
import { playingTrackState } from "../../atoms/playerAtom";

const spotifyApi = new SpotifyWebApi({
  clientId: "2353e1ccf7464652a66074ee88dc47b5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <div>
      <Sidebar />
      <Body
        accessToken={accessToken}
        spotifyApi={spotifyApi}
        chooseTrack={chooseTrack}
      />
      <Right />
    </div>
  );
}
