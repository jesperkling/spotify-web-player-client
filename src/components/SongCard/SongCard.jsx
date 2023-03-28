import React from "react";
import AlbumImage from "../../components/AlbumImage/AlbumImage";
import AlbumInfo from "../../components/AlbumInfo/AlbumInfo";

export default function SongCard({ album }) {
  return (
    <div className="p-2">
      <AlbumImage url={album?.images[1].url} />
      <AlbumInfo album={album} />
    </div>
  );
}
