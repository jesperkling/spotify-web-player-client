import React from "react";
import WidgetEntry from "../WidgetEntry/WidgetEntry";

export default function WidgetCard({ title, similar }) {
  return (
    <div>
      <p className="text-white font-bold py-2">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist.id}
              title={artist?.name}
              image={artist?.images[2]?.url}
            />
          ))
        : null}
    </div>
  );
}
