import React from "react";
// import "./AlbumImage.css";

export default function AlbumImage({ url }) {
  return (
    <div className="p-2">
      <img src={url} alt="album-art" className="rounded h-[100px] w-[100px]" />
    </div>
  );
}
