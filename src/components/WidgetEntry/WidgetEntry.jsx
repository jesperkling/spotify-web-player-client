import React from "react";

export default function WidgetEntry({ title, image }) {
  return (
    <div className="flex py-2">
      <img src={image} alt={title} className="rounded h-[58px] w-[58px]" />
      <div className="p-2">
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
}
