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
              <svg
                width="30"
                height="36"
                viewBox="0 0 30 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M28.75 2.96051H1.25C0.918479 2.96051 0.600537 3.11647 0.366117 3.39407C0.131696 3.67167 0 4.04818 0 4.44077L0 31.0855C0 31.4781 0.131696 31.8546 0.366117 32.1322C0.600537 32.4098 0.918479 32.5658 1.25 32.5658H28.75C29.0815 32.5658 29.3995 32.4098 29.6339 32.1322C29.8683 31.8546 30 31.4781 30 31.0855V4.44077C30 4.04818 29.8683 3.67167 29.6339 3.39407C29.3995 3.11647 29.0815 2.96051 28.75 2.96051ZM27.5 29.6053H25V28.125H18.75V29.6053H2.5V5.92104H27.5V29.6053ZM12.8625 14.3733C12.8625 13.702 13.0877 13.0582 13.4886 12.5835C13.8894 12.1088 14.4331 11.8421 15 11.8421C16.1875 11.8421 17.1375 12.9819 17.1375 14.3733C17.1375 15.7796 16.1875 16.9194 15 16.9194C13.8125 16.9194 12.8625 15.7796 12.8625 14.3733ZM7.1375 16.7122C7.1375 15.6612 7.8625 14.8026 8.75 14.8026C9.17766 14.8026 9.58781 15.0038 9.89021 15.3619C10.1926 15.72 10.3625 16.2057 10.3625 16.7122C10.3625 17.7631 9.6375 18.6069 8.75 18.6069C7.8625 18.6069 7.1375 17.7631 7.1375 16.7122ZM19.6375 16.7122C19.6375 16.2057 19.8074 15.72 20.1098 15.3619C20.4122 15.0038 20.8223 14.8026 21.25 14.8026C21.6777 14.8026 22.0878 15.0038 22.3902 15.3619C22.6926 15.72 22.8625 16.2057 22.8625 16.7122C22.8625 17.7631 22.1375 18.6069 21.25 18.6069C20.3625 18.6069 19.6375 17.7631 19.6375 16.7122ZM25 22.4112V23.6842H5V22.4112C5 21.0197 6.9375 19.8799 8.75 19.8799C9.4375 19.8799 10.1375 20.0427 10.75 20.324C11.6875 19.3026 13.375 18.6069 15 18.6069C16.625 18.6069 18.3125 19.3026 19.25 20.324C19.8625 20.0427 20.5625 19.8799 21.25 19.8799C23.0625 19.8799 25 21.0197 25 22.4112Z"
                    fill="#6366F1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="30" height="35.5263" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
