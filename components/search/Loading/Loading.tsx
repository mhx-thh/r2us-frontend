import React from "react";

function Loading(props) {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-1/2 bg-white rounded shadow-2xl">
          <div className="h-52 bg-gray-200 rounded-tr rounded-tl animate-pulse"></div>

          <div className="p-5">
            <div className="h-8 rounded-sm bg-gray-200 animate-pulse mb-4"></div>

            <div className="grid grid-cols-4 gap-1">
              <div className="col-span-3 h-6 rounded-sm bg-gray-200 animate-pulse"></div>
              <div className="h-6 rounded-sm bg-gray-200 animate-pulse"></div>

              <div className="col-span-2 h-6 rounded-sm bg-gray-200 animate-pulse"></div>
              <div className="col-span-2 h-6 rounded-sm bg-gray-200 animate-pulse"></div>

              <div className="h-6 rounded-sm bg-gray-200 animate-pulse"></div>
              <div className="col-span-3 h-6 rounded-sm bg-gray-200 animate-pulse"></div>
              <div className="col-span-2 h-6 rounded-sm bg-gray-200 animate-pulse"></div>
              <div className="h-6 rounded-sm bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
