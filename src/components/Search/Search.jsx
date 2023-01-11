import React from "react";

export default function Search({ search, setSearch }) {
  return (
    <div className="screen-container">
      <input
        type="search"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="border-none w-full lg:w-full focus:ring-0 outline-none text-xs focus:placeholder-transparent"
      />
    </div>
  );
}
