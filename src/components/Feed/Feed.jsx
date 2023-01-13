import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";

export default function Feed() {
  const [topLists, setTopLists] = useState(null);

  useEffect(() => {
    apiClient.get("browse/categories/toplists/playlists").then((response) => {
      setTopLists(response.data.playlists.items);
    });
  }, []);

  return (
    <div className="screen-container">
      {topLists?.map((list) => {
        return (
          <div>
            <img src={list.images[0].url} alt="playlist-art" />
            <p>{list.name}</p>
            <p>{list.description}</p>
          </div>
        );
      })}
    </div>
  );
}
