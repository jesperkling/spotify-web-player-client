import React from "react";

// styles
import "./Sidebar.css";

// icons
import { HiHome } from "react-icons/hi";
import { RiCompassFill } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { ImClock } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="fixed top-0 z-40 flex flex-col p-4 bg-black items-center w-[90px] h-screen space-y-8">
      <img src="" alt="logo" />
      <div className="flex flex-col space-y-8">
        <HiHome className="sidebarIcon" />
        <RiCompassFill className="sidebarIcon" />
        <FaMicrophone className="sidebarIcon" />
        <HiChartBar className="sidebarIcon" />
        <ImClock className="sidebarIcon " />
        <HiDotsHorizontal className="sidebarIcon" />
      </div>
    </div>
  );
}
