import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIKit from "../../api/Spotify";

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="p-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto">
        {playlists?.map((playlist) => {
          return (
            <div key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
              <img
                src={playlist.images[0]?.url}
                alt="playlist-art"
                className="cursor-pointer rounded"
              />
              <p className="text-white font-bold">{playlist.name}</p>
              <p className="text-white/50">{playlist.tracks.total} Songs</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
