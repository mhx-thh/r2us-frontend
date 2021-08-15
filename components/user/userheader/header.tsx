import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";
import style from "./style.module.css";

interface Props {
  param: string;
}

function UserHeader({ param }: Props) {
  const status = useAppSelector(selectStatus);
  function SideBar() {
    return (
      <div className={style.title}>
        <div className={style.page}>
          <div className={style.grid}>
            <div className={style.title__m}>
              <img
                className={style.image}
                src="https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-dai-dien-shiba-chibi-de-thuong_052908671.jpg"
              ></img>
              <div className={style.text}>
                <div className={style.text__1}>tên người</div>
                <div className={style.text__2}> MSSV</div>
                <div className={style.text__2}>email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <SideBar />;
}

export default UserHeader;
