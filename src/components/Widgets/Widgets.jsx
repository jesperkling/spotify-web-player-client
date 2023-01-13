import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";
import WidgetCard from "../WidgetCard/WidgetCard";
// import "./Widgets.css";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((response) => {
          const list = response.data?.artists.slice(0, 3);
          setSimilar(list);
        })
        .catch((error) => console.error(error));

      apiClient
        .get(`/browse/featured-playlists`)
        .then((response) => {
          const list = response.data?.playlists.items.slice(0, 3);
          setFeatured(list);
        })
        .catch((error) => console.error(error));

      apiClient
        .get(`/browse/new-releases`)
        .then((response) => {
          const list = response.data?.albums.items.slice(0, 3);
          setNewReleases(list);
        })
        .catch((error) => console.error(error));
    }
  }, [artistID]);

  return (
    <div>
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newReleases={newReleases} />
    </div>
  );
}
