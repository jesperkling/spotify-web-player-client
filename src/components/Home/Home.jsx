import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { setClientToken } from "../../api/Spotify";

import "./Home.css";

import Library from "../Library/Library";
import Feed from "../Feed/Feed";
import Player from "../Player/Player";
import Favorites from "../Favorites/Favorites";
import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="*" element={<Feed />} />
          <Route path="/library" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/player" element={<Player token={token} />} />
          <Route path="/favorites" element={<Favorites token={token} />} />
          <Route path="/search" element={<Search token={token} />} />
        </Routes>
      </div>
    </Router>
  );
}
