import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { playState, playingTrackState } from "../../atoms/playerAtom";

export default function Poster({ track, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative cursor-pointer hover:scale-105 transition duration-200 ease-out group mx-auto text-white/80 hover:text-white/100"
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt=""
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />
      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-xl" />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>
      </div>
    </div>
  );
}
