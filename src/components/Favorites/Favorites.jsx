import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export default function Favorites({ token }) {
  const [favorites, setFavorites] = useState(null);
  const [trackUri, setTrackUri] = useState(null);

  useEffect(() => {
    apiClient.get("me/tracks").then((response) => {
      setFavorites(response.data.items);
    });
  }, []);

  const playTrack = (trackUri) => {
    setTrackUri(trackUri);
  };

  return (
    <div className="screen-container grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
      <div>
        <h3 className="text-white font-bold p-2 text-2xl">Liked songs</h3>
        {favorites?.map((songs) => {
          return (
            <div key={songs.track.id} className="m-2 overflow-auto flex">
              <img
                className="rounded"
                src={songs.track.album.images[2].url}
                alt="album-art"
                style={{ height: "64px", width: "64px", cursor: "pointer" }}
                onClick={() => playTrack(songs.track.uri)}
              />
              <div className="ml-3">
                <p className="text-white font-bold">{songs.track.name}</p>
                <p className="text-white/50">{songs.track.artists[0].name}</p>
              </div>
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
