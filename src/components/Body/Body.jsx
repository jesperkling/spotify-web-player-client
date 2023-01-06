import React, { useState } from "react";
import { useEffect } from "react";

// components
import Search from "../Search/Search";

export default function Body({ accessToken, spotifyApi }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    if (!spotifyApi) return;
  }, [accessToken, spotifyApi]);

  useEffect(() => {
    if (!search) return setResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setResults(
        res.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [accessToken, search, spotifyApi]);

  console.log(results);

  return (
    <div className="ml-24 py-4 space-y-8 md:max-w-6l flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4"></div>
    </div>
  );
}
