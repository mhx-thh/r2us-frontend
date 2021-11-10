import React from "react";
import { user } from "lib/models";
import style from "./style.module.css";

type AppProps = {
  user: user;
};

function UserHeader({ user }: AppProps) {
  const studentID =
    user.studentCardNumber === ""
      ? "Chưa cập nhập MSSV"
      : user.studentCardNumber;

  return (
    <div className={style.title_span}>
      <div className={style.page}>
        <div className={style.grid}>
          <div className={style.title}>
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
