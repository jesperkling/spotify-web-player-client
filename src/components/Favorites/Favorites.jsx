import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";

export default function Favorites() {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    apiClient.get("me/tracks").then((response) => {
      setFavorites(response.data.items);
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
    </div>
  );
}
