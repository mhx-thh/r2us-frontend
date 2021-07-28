import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Document from "./document";

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
        <div className="flex flex-row-reverse">
          <button className="border p-3">A</button>
        </div>
        <div className="flex flex-wrap items-center justify-center px-16 py-8">
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
  );
};

export default DocumentPage;
