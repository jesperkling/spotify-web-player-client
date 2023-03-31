import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/Spotify";
import SongCard from "../../components/SongCard/SongCard";
import Queue from "../../components/Queue/Queue";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export default function Player({ token }) {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trackUri, setTrackUri] = useState("");

  useEffect(() => {
    if (location.state) {
      apiClient
        .get(`playlists/${location.state?.id}/tracks`)
        .then((response) => {
          setTracks(response.data.items);
          setCurrentTrack(response.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
    setTrackUri(currentTrack?.uri);
  }, [currentIndex, tracks, currentTrack, trackUri]);

  return (
    <div className="screen-container overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {tracks.length >= 1 ? (
          <>
            <div>
              <SongCard album={currentTrack?.album} />
              <div className="pb-8">
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
              </div>
            </div>
          </>
        ) : (
          <div className="text-white flex font-bold text-center">
            <p className="text-center p-6">No song playing...</p>
          </div>
        )}

        <div className="absolute left-0 right-0 bottom-0">
          <MusicPlayer token={token} trackUri={trackUri} />
        </div>
      </div>
    </div>
  );
}
