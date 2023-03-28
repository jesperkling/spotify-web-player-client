import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackSearchResult from "../TrackSearchResult/TrackSearchResult";

const spotifyApi = new SpotifyWebApi({
  clientId: "2353e1ccf7464652a66074ee88dc47b5",
});

export default function Search({ token }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!token) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((response) => {
      if (cancel) return;
      setSearchResults(
        response.body.tracks.items.map((track) => {
          const smallestImg = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0]);

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestImg.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, token]);

  return (
    <div className="screen-container overflow-auto pb-16 lg:pb-8">
      <input
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="border-none w-full lg:w-full focus:ring-0 outline-none text-xs focus:placeholder-transparent h-8"
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults?.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <MusicPlayer token={token} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
