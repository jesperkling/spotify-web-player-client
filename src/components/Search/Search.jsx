import React from "react";

export default function Search({ search, setSearch }) {
  return (
    <div className="max-w-[1150px] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-1 flex-shrink-0" />
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
