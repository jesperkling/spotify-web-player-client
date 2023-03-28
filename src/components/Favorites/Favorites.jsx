import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const playSong = async (uri) => {
    try {
      await apiClient.put("me/player/play", { uris: [uri] });
      navigate("/player", { state: { trackUris: [uri] } });
    } catch (error) {
      console.error(error);
    }
  };

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
    <div className="screen-container grid grid-cols-1 gap-4 sm:grid-cols-3 p-4">
      <div className="border">
        <h3 className="text-white font-bold p-2">Liked songs</h3>
        {favorites?.map((songs) => {
          return (
            <div
              key={songs.track.id}
              className="flex py-2"
              onClick={() => playSong(songs.track.uri)}
            >
              <div className="p-2">
                <img
                  src={songs.track.album.images[2].url}
                  alt="album-art"
                  className="h-9 w-9 rounded"
                />
              </div>
              <div className="flex-col">
                <p className="text-white font-bold">{songs.track.name}</p>
                <p className="text-white/50">{songs.track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border">
        <h3 className="text-white font-bold p-2">Top Artists</h3>
        {topArtists?.map((artist) => {
          return (
            <div key={artist.id} className="flex py-2">
              <div className="p-2">
                <img
                  src={artist.images[0].url}
                  alt="artist"
                  className="h-9 w-9 rounded"
                />
              </div>
              <div>
                <p className="text-white font-bold">{artist.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border">
        <h3 className="text-white font-bold p-2">Top Tracks</h3>
        {topTracks?.map((track) => {
          return (
            <div
              key={track.id}
              className="flex py-2"
              onClick={() => playSong(track.uri)}
            >
              <div className="p-2">
                <img
                  src={track.album.images[2].url}
                  alt="album-art"
                  className="rounded h-9 w-9"
                />
              </div>
              <div className="flex-col">
                <p className="text-white font-bold">{track.name}</p>
                <p className="text-white/50">{track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
