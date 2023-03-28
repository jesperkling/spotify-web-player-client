import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarButton from "../SidebarButton/SidebarButton";
import apiClient from "../../api/Spotify";

// logo
import Avatar from "../../assets/images/user.png";

// icons
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaPlay, FaSearch } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar() {
  const [image, setImage] = useState(Avatar);

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="user-avatar" />

      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Search" to="/search" icon={<FaSearch />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
    </div>
  );
}
