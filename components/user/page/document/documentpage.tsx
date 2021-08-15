import NewClassAPI from "api/NewClassAPI";
import ResourceItem from "components/Resource/ResourceItem";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const Document = function () {
  return (
    <div className={style.document}>
      <div className={style.document__document}>
        <ResourceItem />
      </div>
    </div>
  );
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
  const user = "admin";

  const [newClass, setNewClass] = useState([]);

  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button}>
            <div className={style.button__text}>Chia sẻ tài liệu</div>
            <div className={style.button__image}>
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.60714 0.5H24.8929L26.75 2.35714V20.9286L24.8929 22.7857H2.60714L0.75 20.9286V2.35714L2.60714 0.5ZM2.60714 20.9286H24.8929V2.35714H2.60714V20.9286ZM23.0357 4.21429H4.46429V9.78572H23.0357V4.21429ZM21.1786 7.92857H6.32143V6.07143H21.1786V7.92857ZM15.6071 19.0714H23.0357V11.6429H15.6071V19.0714ZM17.4643 13.5H21.1786V17.2143H17.4643V13.5ZM11.8929 11.6429H4.46429V13.5H11.8929V11.6429ZM4.46429 17.2143H11.8929V19.0714H4.46429V17.2143Z"
                  fill="#6366F1"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Document */}
        <div className={style.documentsection}>
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
