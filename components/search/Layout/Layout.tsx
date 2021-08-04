import React from "react";
import FilterBar from "../FilterBar/FilterBar";

function Layout({ getData, children }) {
  return (
    <div className="md:p-4 p-2">
      <FilterBar getData={getData} />
      {children}
    </div>
  );
}

export default Layout;
