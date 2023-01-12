import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/Spotify";
import SongCard from "../../components/SongCard/SongCard";
import Queue from "../../components/Queue/Queue";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import "./Player.css";

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
          console.log(response);
        });
    }
  }, [location.state]);

  useEffect(() => {
    console.log("token:", token);
  }, [token]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
    setTrackUri(currentTrack?.uri);
    console.log(trackUri);
  }, [currentIndex, tracks, currentTrack, trackUri]);

  return (
    <div className="screen-container flex">
      {tracks.length >= 1 ? (
        <div className="left-player-body">
          <SongCard album={currentTrack?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      ) : null}
      <div className="right-player-body">
        <MusicPlayer token={token} trackUri={trackUri} />
      </div>
    </div>
  );
}
