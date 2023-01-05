import React, { useState } from "react";

// components
import Search from "../Search/Search";

export default function Body() {
  const [search, setSearch] = useState("");
  return (
    <div className="ml-24 py-4 space-y-8 md:max-w-6l flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
    </div>
  );
}
