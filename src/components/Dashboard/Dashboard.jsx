import { useEffect } from "react";

// hooks
import useAuth from "../../hooks/useAuth";

// api
import SpotifyWebApi from "spotify-web-api-node";

// components
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Right from "../Right/Right";

const spotifyApi = new SpotifyWebApi({
  clientId: "2353e1ccf7464652a66074ee88dc47b5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <div>
      <Sidebar />
      <Body accessToken={accessToken} spotifyApi={spotifyApi} />
      <Right />
    </div>
  );
}
