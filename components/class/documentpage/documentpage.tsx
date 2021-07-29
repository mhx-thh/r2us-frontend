import React, { useEffect, useState } from "react";
import AddDoc from "../AddDoc/AddDoc";
import Header from "../header/header";
import PopUp from "../PopUp/popup";
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

  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };

  console.log(data);

  return (
    <div>
      <Header />
      <div className="container items-center pt-40">
        <div className="flex flex-row-reverse">
          <button className="border p-3" onClick={ClickpopupDoc}>
            A
          </button>
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
      {/*        */}
      {addDoc === 1 && (
        <PopUp closepopup={setAddDoc}>
          <AddDoc />
        </PopUp>
      )}
    </div>
  );
};

export default DocumentPage;
