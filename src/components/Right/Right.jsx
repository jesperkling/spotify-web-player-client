import React, { useEffect, useState } from "react";

// components
import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";

// icons
import { HiViewGrid } from "react-icons/hi";

export default function Right({ accessToken, spotifyApi, chooseTrack }) {
  const [recentlyPlayed, setRecentPlayed] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken, spotifyApi]);

  return (
    <div className="p-4 space-y-8 pr-8">
      <div className="flex space-x-2 items-center justify-between">
        {/* Recently played tracks */}
        <div className="border-2 border-[#262626] p-4 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm">Recently Played</h4>
            <HiViewGrid className="text-[#686868] h-6" />
          </div>
          <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[400px]">
            {recentlyPlayed.map((track, index) => (
              <RecentlyPlayed
                key={index}
                track={track}
                chooseTrack={chooseTrack}
              />
            ))}
          </div>
          <button className="text-[13px] py-3.5 px-4 rounded-2xl w-full font-bold border">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
