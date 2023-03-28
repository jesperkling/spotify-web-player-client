import React from "react";

export default function AlbumImage({ url }) {
  return (
    <div className="p-2">
      <img src={url} alt="album-art" className="rounded" />
    </div>
  );
}
