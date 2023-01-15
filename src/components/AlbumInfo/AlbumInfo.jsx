import React, { useState } from "react";
import { useEffect } from "react";

export default function AlbumInfo({ album }) {
  const [albumName, setAlbumName] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    setAlbumName(album?.name);
    setArtist(album?.artists[0].name);
  }, [album]);

  return (
    <div className="p-2 ">
      <div className="">
        <p className="text-white font-bold">{albumName}</p>
        <p className="text-[14px] text-white">{artist}</p>
      </div>
      <div className="text-[14px] text-white">
        <p>Release Date: {album?.release_date}</p>
      </div>
    </div>
  );
}
