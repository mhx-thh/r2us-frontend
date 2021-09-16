import React from "react";

import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";

import style from "./style.module.css";

function UserHeader() {
  const user = useAppSelector(selectUser);
  const studentID =
    user.studentCardNumber === ""
      ? "Chưa cập nhập MSSV"
      : user.studentCardNumber;

  return (
    <div className={style.title}>
      <div className={style.page}>
        <div className={style.grid}>
          <div className={style.title__m}>
            <img className={style.image} src={user.photo}></img>
            <div className={style.text}>
              <div className={style.text__1}>
                {user.familyName} {user.givenName}
              </div>
              <div className={style.text__2}>{studentID}</div>
              <div className={style.text__2}>{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
