import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/Spotify";

export default function Feed({ track, chooseTrack }) {
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
    <div className="screen-container grid grid-cols-3 gap-4 p-4 overflow-auto">
      {topLists?.map((list) => {
        return (
          <div key={list.id} className="">
            <img
              src={list.images[0].url}
              alt="playlist-art"
              onClick={() => playTopList(list.id)}
              className="cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
}
