import React, { useState } from "react";
import style from "./style.module.css";

const TeacherForm = function () {
  const [copy, setCopy] = useState("Copy");
  const onCopy = () => {
    setCopy("Copied");
  };

  return (
    <div className={style.content}>
      <div className={style.title}>
        <p>Cảm nhận về giáo viên</p>
      </div>
      <div className={style.group}>
        <ul className={style.info}>
          <li>
            <p>Người đăng:</p>
            <span>Name</span>
          </li>
          <li>
            <p>Mô tả:</p>
            <span>Description</span>
          </li>
        </ul>
      </div>
      <div className={style.gr_bg_btn}>
        <button>Like</button>
      </div>
    </div>
  );
};

export default TeacherForm;
