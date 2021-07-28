import React, { useEffect, useState } from "react";
import PopUp from "./PopUp/popup";
import DocForm from "./ShowDoc/DocForm";

type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const Document = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [openDoc, setOpenDoc] = useState(0);
  const ClickpopupDoc = () => {
    setOpenDoc(1);
  };

  console.log(data);

  return (
    <div className="w-48 h-56 border">
      <div className="rounded cursor-pointer" onClick={ClickpopupDoc}>
        <img
          className="w-48 h-48 object-cover"
          src="https://64.media.tumblr.com/8de6a8b665f42a8bf32d7deb8284122b/tumblr_n4g7k2KxDh1s64yzgo1_500.gifv"
          alt="Tên tài liệu"
        />

        <div className="text-center">
          <div className="font-semibold text-sm mb-2">Blank Report</div>
        </div>
      </div>
      {openDoc === 1 && (
        <PopUp closepopup={setOpenDoc}>
          <DocForm />
        </PopUp>
      )}
    </div>
  );
};

export default Document;
