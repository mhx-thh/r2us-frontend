import React, { useEffect, useState } from "react";
import Document from "./document";
import Header from "./header/header";

type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const DocumentPage = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  console.log(data);

  return (
    <div>
      <Header />
      <div className="container items-center pt-40">
        <div className="flex mt-5">
          <div className="w-full rounded overflow-hidden shadow-lg my-2 py-4 border border-gray-300 inline-flex">
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
            <Document />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
