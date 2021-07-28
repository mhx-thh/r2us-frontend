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
    <div className="w-36 h-48 flex flex-wrap p-2">
      <div className="rounded cursor-pointer" onClick={ClickpopupDoc}>
        <img
          className="w-32 h-32 items-center justify-center flex-center object-cover"
          src="https://64.media.tumblr.com/8de6a8b665f42a8bf32d7deb8284122b/tumblr_n4g7k2KxDh1s64yzgo1_500.gifv"
          alt="Tên tài liệu"
        />
        <div className="px-2 py-2 ">
          <div className="font-semibold text-sm mb-2">Blank Report</div>
          <p className="font-semibold text-gray-400 text-xs">Data Studio</p>
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
