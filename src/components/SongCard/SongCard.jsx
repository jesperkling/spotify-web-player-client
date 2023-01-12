import React from "react";
import AlbumImage from "../../components/AlbumImage/AlbumImage";
import AlbumInfo from "../../components/AlbumInfo/AlbumInfo";
import "./SongCard.css";

export default function SongCard({ album }) {
  return (
    <div className="songcard-body flex">
      <AlbumImage url={album?.images[0].url} />
      <AlbumInfo album={album} />
    </div>
  );
}
