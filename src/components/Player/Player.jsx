import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/Spotify";
import SongCard from "../../components/SongCard/SongCard";
import Queue from "../../components/Queue/Queue";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Widgets from "../Widgets/Widgets";

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
      <div className="grid grid-cols-2">
        {tracks.length >= 1 ? (
          <div className="">
            <SongCard album={currentTrack?.album} />
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
          </div>
        ) : null}
        <div>
          <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
        </div>
      </div>
      <div className="fixed w-full bottom-0">
        <MusicPlayer token={token} trackUri={trackUri} />
      </div>
    </div>
  );
}
