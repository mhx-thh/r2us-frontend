import React, { useEffect, useState } from "react";

import CreateResource from "components/Resource/ResourceCreateModal";
import PopUp from "components/class/PopUp/popup";
import ResourceItem from "components/Resource/ResourceItem";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

const DocumentPage = function () {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await userApi.getMyResources(token);
        const data = res?.data?.data?.result;
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      getData();
    }
  }, [status]);

  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Chia sẻ tài liệu</div>
            <div className={style.button__image}>
              <img src="/icons/title.svg" width="27" height="23" />
            </div>
          </button>
        </div>

        {create === true && (
          <PopUp closepopup={setCreate}>
            <CreateResource />
          </PopUp>
        )}

        {/* Document */}
        <div className={style.documentsection}>
          <div className="w-full grid grid-cols-4 gap-11 justify-around">
            {data.map((val, key) => (
              <ResourceItem aresource={val} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
