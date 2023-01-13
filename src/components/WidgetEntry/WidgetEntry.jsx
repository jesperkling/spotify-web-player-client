import React from "react";
import "./WidgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="flex">
      <img src={image} alt={title} className="widget-entry-image" />
      <div className="widget-entry-right-body flex">
        <p className="widget-entry-title">{title}</p>
        <p className="widget-entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
