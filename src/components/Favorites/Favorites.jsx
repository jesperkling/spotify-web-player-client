import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";

export default function Favorites() {
  const [favorites, setFavorites] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    apiClient.get("me/tracks").then((response) => {
      setFavorites(response.data.items);
    });
  }, []);

  useEffect(() => {
    apiClient.get(`me/top/artists`).then((response) => {
      setTopArtists(response.data.items);
    });
  }, []);

  useEffect(() => {
    apiClient.get(`me/top/tracks`).then((response) => {
      setTopTracks(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      {favorites?.map((songs) => {
        return (
          <div key={songs.track.id}>
            <img src={songs.track.album.images[2].url} alt="album-art" />
            <p>{songs.track.name}</p>
          </div>
        );
      })}

      {topArtists?.map((artist) => {
        return (
          <div key={artist.id}>
            <img src={artist.images[2].url} alt="artist" />
            <p>{artist.name}</p>
          </div>
        );
      })}

      {topTracks?.map((track) => {
        return (
          <div key={track.id}>
            <img src={track.album.images[2].url} alt="album-art" />
            <p>{track.name}</p>
            <p>{track.artists[0].name}</p>
          </div>
        );
      })}
    </div>
  );
}
