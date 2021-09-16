import React, { useEffect, useState } from "react";

import CreateResource from "components/Resource/ResourceCreateModal";
import PopUp from "components/class/PopUp/popup";
import ResourceItem from "components/Resource/ResourceItem";
import ResourceLoading from "components/user/Loading/ResourceLoading";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

type pageStatus = "loading" | "done";

const DocumentPage = function () {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  const [pageStatus, setPageStatus] = useState<pageStatus>("loading");

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
        setPageStatus("done");
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
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
        {pageStatus === "done" ? (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            {data.map((val, key) => (
              <ResourceItem aresource={val} key={key} />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            <ResourceLoading />
            <ResourceLoading />
            <ResourceLoading />
            <ResourceLoading />
            <ResourceLoading />
            <ResourceLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentPage;
