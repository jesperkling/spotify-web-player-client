import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/Spotify";

export default function Trending() {
  const [newReleases, setNewReleases] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient.get("browse/new-releases").then((response) => {
      setNewReleases(response.data.albums.items);
    });
  }, []);

  const handleAlbumClick = (id) => {
    navigate("/player", { state: { id } });
  };

  return (
    <div className="screen-container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-4 overflow-auto">
      {newReleases?.map((releases) => {
        return (
          <div key={releases.id} onClick={() => handleAlbumClick(releases.id)}>
            <img src={releases.images[0].url} alt="album-art" />
            <p className="text-white">{releases.name}</p>
            <p className="text-white/50">{releases.artists[0].name}</p>
          </div>
        );
      })}
    </div>
  );
}
