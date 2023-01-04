import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import TrackSearchResult from "../TrackSearchResult/TrackSearchResult";
import Player from "../Player/Player";
import SpotifyWebApi from "spotify-web-api-node";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Right from "../Right/Right";

const spotifyApi = new SpotifyWebApi({
  clientId: "2353e1ccf7464652a66074ee88dc47b5",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImg = track.album.images.reduce(
            (smallest, img) => {
              if (img.height < smallest.height) return img;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImg.url,
          };
        })
      );
    });

    return () => {
      cancel = true;
    };
  }, [search, accessToken]);

  return (
    <div>
      <form>
        <input
          className="w-full border-gray-300 rounded"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <Sidebar />
      <Body />
      <Right />
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
