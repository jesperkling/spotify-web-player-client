import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";

export default function Trending() {
  const [newReleases, setNewReleases] = useState(null);

  useEffect(() => {
    apiClient.get("browse/new-releases").then((response) => {
      setNewReleases(response.data.albums.items);
      console.log(response.data.albums.items);
    });
  }, []);

  console.log("new releases:", newReleases);
  return (
    <div className="screen-container">
      {newReleases?.map((releases) => {
        return (
          <div>
            <img src={releases.images[2].url} alt="album-art" />
            <p>{releases.name}</p>
            <p>{releases.artists[0].name}</p>
          </div>
        );
      })}
    </div>
  );
}
