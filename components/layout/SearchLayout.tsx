import FilterBar from "components/search/FilterBar/FilterBar";
import React from "react";

// eslint-disable-next-line react/prop-types
function SearchLayout({ getData, getPagination, setDone, children }) {
  return (
    <div className="w-full">
      <FilterBar
        getData={getData}
        getPagination={getPagination}
        setDone={setDone}
      />
      {children}
    </div>
  );
}

export default SearchLayout;
