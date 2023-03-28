import React from "react";

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className="p-2">
      <div className="p-2 overflow-auto">
        <p className="text-white font-bold">Up Next</p>
        <div>
          {tracks?.map((track, index) => (
            <div
              key={track?.track.id}
              className="cursor-pointer flex items-center"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={track?.track.album.images[2].url}
                alt="album-art"
                className="rounded py-2"
              />
              <div className="flex flex-col ml-2">
                <p className="text-white/75 font-bold mb-1">
                  {track?.track?.name}
                </p>
                <p className="text-white/50">{track?.track.artists[0].name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
