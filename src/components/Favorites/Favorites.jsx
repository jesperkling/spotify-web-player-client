import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { AiFillHeart } from "react-icons/ai";

export default function Favorites({ token }) {
  const [favorites, setFavorites] = useState(null);
  const [trackUri, setTrackUri] = useState(null);

  useEffect(() => {
    apiClient.get("me/tracks").then((response) => {
      console.log(response.data);
      setFavorites(response.data.items);
    });
  }, []);

  const playTrack = (trackUri) => {
    setTrackUri(trackUri);
  };

  const removeSong = (id) => {
    apiClient
      .delete(`me/tracks?ids=${id}`)
      .then((response) => {
        const updatedFavorites = favorites.filter(
          (song) => song.track.id !== id
        );
        setFavorites(updatedFavorites);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="screen-container grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
      <div>
        <h3 className="text-white font-bold p-2 text-2xl">Liked songs</h3>
        {favorites?.map((songs) => {
          return (
            <div key={songs.track.id} className="flex py-2">
              <div className="p-2 flex items-center">
                <img
                  src={songs.track.album.images[2].url}
                  alt="album-art"
                  className="h-9 w-9 max-w-none rounded cursor-pointer mr-4"
                  onClick={() => playTrack(songs.track.uri)}
                />
              </div>

              <div>
                <p className="text-white font-bold">{songs.track.name}</p>
                <p className="text-white/50">{songs.track.artists[0].name}</p>
              </div>

              <button onClick={() => removeSong(songs.track.id)}>
                <AiFillHeart className="text-white text-2xl ml-2 sm:ml-4 w-6" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="absolute left-0 right-0 bottom-0">
        <MusicPlayer
          token={token}
          trackUri={trackUri}
          chooseTrack={playTrack}
        />
      </div>
    </div>
  );
}
