import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function SidebarButton(props) {
  return (
    <Link to={props.to}>
      <div className="text-white py-4">
        <IconContext.Provider value={{ size: "24px" }}>
          {props.icon}
          <p className="">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
