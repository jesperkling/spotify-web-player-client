import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/Spotify";
import SongCard from "../../components/SongCard/SongCard";
import Queue from "../../components/Queue/Queue";
import "./Player.css";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
