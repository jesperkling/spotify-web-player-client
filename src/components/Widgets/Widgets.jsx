import React, { useState, useEffect } from "react";
import apiClient from "../../api/Spotify";
import WidgetCard from "../WidgetCard/WidgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((response) => {
          const list = response.data?.artists.slice(0, 3);
          setSimilar(list);
        })
        .catch((error) => console.error(error));
    }
  }, [artistID]);

  return (
    <div>
      <WidgetCard title="Similar Artists" similar={similar} />
    </div>
  );
}
