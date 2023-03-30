import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function SidebarButton(props) {
  return (
    <Link to={props.to}>
      <div className="text-white py-4 flex flex-col items-center justify-center">
        <IconContext.Provider value={{ size: "24px" }}>
          {props.icon}
          <p className="ml-2 hidden sm:inline">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
