import React from "react";
import MemberSection from "./membersection";
import style from "./style.module.css";

const MemberPage = function () {
  return (
    <div className={style.page}>
      <div className={style.grid}>
        <div className={style.grid_left}>
          <MemberSection name="Quản trị viên" />
          <MemberSection name="Yêu cầu" />
        </div>
        <div className={style.grid_right}>
          <MemberSection name="Thành viên" />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
