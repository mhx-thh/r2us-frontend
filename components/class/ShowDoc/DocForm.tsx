import React, { useState } from "react";
import style from "./style.module.css";
import CopyToClipboard from "react-copy-to-clipboard";

const DocForm = function () {
  const [copy, setCopy] = useState("Copy");
  const onCopy = () => {
    setCopy("Copied");
  };

  return (
    <div className={style.content}>
      <div className={style.title}>
        <p>Tài liệu được chọn</p>
      </div>
      <div className={style.group}>
        <ul className={style.info}>
          <li>
            <p>Link:</p>
            <a href="#">
              <span>Link tai lieu</span>
            </a>
          </li>
          <li>
            <p>Người đăng:</p>
            <span>Name</span>
          </li>
          <li>
            <p>Lớp:</p>
            <span>address</span>
          </li>
          <li>
            <p>Mô tả:</p>
            <span>Description</span>
          </li>
        </ul>
        <div className={style.gr_sm_btn}>
          <CopyToClipboard text="Link tai lieu" onCopy={onCopy}>
            <button>{copy}</button>
          </CopyToClipboard>

          <button>Truy Cập</button>
        </div>
      </div>
      <div className={style.gr_bg_btn}>
        <button>Like</button>
        <button>Chia sẻ về lớp của bạn</button>
      </div>
    </div>
  );
};

export default DocForm;
