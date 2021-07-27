import React, { useEffect, useState } from "react";
import Header from "./header/header";

type documentinfo = {
  name: string;
  src: string;
};

const DocumentPage = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
  });

  console.log(data);

  return (
    <div>
      <Header />
      <div className="container items-center pt-40">
        <div className="flex mt-5">
          <div className="max-w-xs rounded overflow-hidden shadow-lg my-2py-4 border border-gray-300">
            <img
              className="h-28  px-8 "
              src="https://ssl.gstatic.com/analytics/rap/20210322_00020000/static/pngs/blank_google_add_2x.png"
              alt="Sunset in the mountains"
            />
            <div className="px-2 py-2">
              <div className="font-semibold text-sm mb-2">Blank Report</div>
              <p className="font-semibold text-gray-400 text-xs">Data Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
