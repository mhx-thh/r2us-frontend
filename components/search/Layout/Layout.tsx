import React from "react";
import FilterBar from "../FilterBar/FilterBar";

function Layout({ getData, children }) {
  return (
    <div className="w-full">
      <FilterBar getData={getData} />
      {children}
    </div>
  );
}

export default Layout;
