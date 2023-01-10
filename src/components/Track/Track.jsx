import React, { useState } from "react";

// icons
import { ImHeadphones } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

// context
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../atoms/playerAtom";

export default function Track({ track, chooseTrack }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-20 cursor-default py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt="album art"
          className="rounded-xl h-12 w-12 object-cover mr-3"
        />
        <div>
          <h4 className="text-sm font-semibold truncate w-[450px]">
            {track.title}
          </h4>
          <p className="text-[13px] font-semibold">{track.artist}</p>
        </div>
      </div>
      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="flex space-x-1 text-sm font-semibold">
          <ImHeadphones className="text-lg" />
          <h4>{track.popularity}</h4>
        </div>
        <div className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-black/40">
          <AiFillHeart
            className={`text-xl ml-3 icon ${
              hasLiked ? "text-[#1ed760]" : "text-[#868686]"
            }`}
            onClick={() => setHasLiked(!hasLiked)}
          />
          {track.uri === playingTrack.uri && play ? (
            <div
              className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
              onClick={handlePlay}
            >
              <BsFillPauseFill className="text-xl" />
            </div>
          ) : (
            <div
              className="h-10 w-10 rounded-full border border-black/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
              onClick={handlePlay}
            >
              <BsFillPlayFill className="text-xl ml-[1px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
