import React from "react";

function ResourceLoading() {
  return (
    <div className="w-64 h-44 bg-white rounded shadow-2xl rounded-3xl">
      <div className="p-5 pt-8">
        <div className="h-4 rounded-sm bg-gray-200 animate-pulse mb-6"></div>

        <div className="grid grid-cols-4 gap-2.5">
          <div className="col-span-3 h-3 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="h-3 rounded-sm bg-gray-200 animate-pulse"></div>

          <div className="col-span-2 h-3 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-3 rounded-sm bg-gray-200 animate-pulse"></div>

          <div className="h-3 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-3 h-3 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-3 rounded-sm bg-gray-200 animate-pulse"></div>
          {/* <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div> */}
        </div>
      </div>
    </div>
  );
}

export default ResourceLoading;
