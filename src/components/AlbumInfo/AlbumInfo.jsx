import React, { useState } from "react";
import { useEffect } from "react";
import "./AlbumInfo.css";

export default function AlbumInfo({ album }) {
  const [albumName, setAlbumName] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    console.log(album?.artists[0].name);
    setAlbumName(album?.name);
    setArtist(album?.artists[0].name);
  }, [album]);

  return (
    <div className="album-info-card">
      <div className="album-name-container">
        <p className="">{albumName}</p>
        <p className="text-[14px]">{artist}</p>
      </div>
      <div className="album-release">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
