import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/Spotify";

export default function Feed() {
  const [topLists, setTopLists] = useState(null);

  useEffect(() => {
    apiClient.get("browse/categories/toplists/playlists").then((response) => {
      setTopLists(response.data.playlists.items);
    });
  }, []);

  const navigate = useNavigate();

  const playTopList = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      {topLists?.map((list) => {
        return (
          <div>
            <img
              src={list.images[0].url}
              alt="playlist-art"
              onClick={() => playTopList(list.id)}
            />
            <p>{list.description}</p>
          </div>
        );
      })}
    </div>
  );
}
