import React from "react";
import "./AlbumImage.css";

export default function AlbumImage({ url }) {
  return (
    <div className="album-image flex">
      <img src={url} alt="album-art" className="album-image-art" />
    </div>
  );
}
