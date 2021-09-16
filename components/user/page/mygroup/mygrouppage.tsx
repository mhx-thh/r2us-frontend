import React, { useEffect, useState } from "react";

import PopUp from "components/class/PopUp/popup";
import GroupCreateModal from "components/Group/GroupCreateModal";
import GroupItem from "components/Group/GroupItem";
import GroupLoading from "components/user/Loading/GroupLoading";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

type pageStatus = "loading" | "done";

const GroupPage = function () {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  const [pageStatus, setPageStatus] = useState<pageStatus>("loading");

  const [isCreated, setIsCreated] = useState(false);
  const handleClick = function () {
    setIsCreated(!isCreated);
  };

  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    async function fetchMyClass() {
      try {
        const res = await userApi.getMyClass(token);
        const myClass = res?.data?.data?.result;
        setMyClass(myClass);
        setPageStatus("done");
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyClass();
  }, [status]);

  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Tạo nhóm</div>
            <div className={style.button__image}>
              <img src="/icons/group.svg" width="27" height="23" />
            </div>
          </button>
        </div>

        {isCreated === true && (
          <PopUp closepopup={setIsCreated}>
            <GroupCreateModal />
          </PopUp>
        )}

        {/* Group */}
        {pageStatus === "done" ? (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            {myClass.map((val, key) => (
              <GroupItem key={key} agroup={val.classId} />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            <GroupLoading />
            <GroupLoading />
            <GroupLoading />
            <GroupLoading />
            <GroupLoading />
            <GroupLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupPage;
