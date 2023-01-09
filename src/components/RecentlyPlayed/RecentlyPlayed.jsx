import React from "react";

// recoil
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../../atoms/playerAtom";

export default function RecentlyPlayed({ track, index, chooseTrack }) {
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <img
        src={track.albumUrl}
        alt="album art"
        className="rounded-full w-[52px] h-[52px]"
      />
      <div>
        <h4 className="text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
          {track.title}
        </h4>
        <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
