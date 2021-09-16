import React, { useEffect, useState } from "react";

import PopUp from "components/class/PopUp/popup";
import GroupCreateModal from "components/Group/GroupCreateModal";
import GroupItem from "components/Group/GroupItem";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

const GroupPage = function () {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);

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
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      fetchMyClass();
    }
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

        {/* Group */}
        <div className="w-full grid grid-cols-4 gap-11 justify-around">
          {myClass.map((val, key) => (
            <GroupItem key={key} agroup={val.classId} />
          ))}
        </div>

        {isCreated === true && (
          <PopUp closepopup={setIsCreated}>
            <GroupCreateModal />
          </PopUp>
        )}
      </div>
    </div>
  );
};

export default GroupPage;
