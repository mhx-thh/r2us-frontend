import React from "react";

function GroupLoading() {
  return (
    <div className="w-64 h-60 bg-white rounded shadow-2xl rounded-3xl pb-6">
      <div className="h-16 w-64 bg-gray-200 rounded rounded-xl -ml-6 animate-pulse"></div>

      <div className="p-5">
        <div className="h-4 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

        <div className="grid grid-cols-4 gap-2.5">
          <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>

          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

          <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
          <div className="col-span-2 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default GroupLoading;
