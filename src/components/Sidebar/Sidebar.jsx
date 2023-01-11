import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarButton from "../SidebarButton/SidebarButton";
import apiClient from "../../api/Spotify";

// logo
import Logo from "../../assets/images/spotify-color-svgrepo-com.svg";
import Avatar from "../../assets/images/user.png";

// icons
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar() {
  const [image, setImage] = useState(Avatar);
  const [name, setName] = useState("");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      console.log(response);
      setImage(response.data.images[0].url);
      setName(response.data.display_name);
    });
  }, []);

  return (
    <div className="sidebar-container">
      {/* <img src={Logo} alt="logo" className="logo" /> */}
      <img src={image} className="profile-img" alt="user-avatar" />

      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Search" to="/search" icon={<FaSearch />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
