import React, { useEffect, useState } from "react";
import UserDocument from "./userdocument";
import style from "./style.module.css"
type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const UserDocumentPage = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const user = "admin";

  console.log(data);

  return (
    <div>
      <div className={style.button}>
        chia se tai lieu
      </div>
      <div className="container items-center pt-40">
        <div className="flex flex-wrap items-center justify-center px-16 py-8 pt-40">
          <UserDocument />
          <UserDocument />
          <UserDocument />

        </div>
      </div>
    </div>
  );
};

export default UserDocumentPage;
