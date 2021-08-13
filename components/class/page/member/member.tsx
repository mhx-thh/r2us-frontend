import { styled } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const Member = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });
  const tempImg =
    "https://64.media.tumblr.com/7df6b6950a6731869e53b8a556aeb7c5/a249d0532f9a3100-1a/s2048x3072/f195ef08b8ae5053af86738f4371bdd0e9f9afba.png";

  return (
    <div className={style.member}>
      <div className={style.member__preimg}>
        <img className={style.member__img} src={tempImg} alt="a"></img>
      </div>
      <div className={style.member__text}>
        <div>
          <input
            disabled
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAaAAAAAAAAAAAAAa"
            className={style.member__text__name}
          />
        </div>
        <div>
          <input
            disabled
            value="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAaAAAAAAAAAAAAAa"
            className={style.member__text__email}
          />
        </div>
      </div>
      <button className={style.member__button}>
        <svg
          width="15"
          height="4"
          viewBox="0 0 15 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99396 3.11364C2.69709 3.11364 3.27237 2.53835 3.27237 1.83523C3.27237 1.1321 2.69709 0.556818 1.99396 0.556818C1.29084 0.556818 0.715554 1.1321 0.715554 1.83523C0.715554 2.53835 1.29084 3.11364 1.99396 3.11364ZM7.50178 3.11364C8.2049 3.11364 8.78018 2.53835 8.78018 1.83523C8.78018 1.1321 8.2049 0.556818 7.50178 0.556818C6.79865 0.556818 6.22337 1.1321 6.22337 1.83523C6.22337 2.53835 6.79865 3.11364 7.50178 3.11364ZM13.0096 3.11364C13.7127 3.11364 14.288 2.53835 14.288 1.83523C14.288 1.1321 13.7127 0.556818 13.0096 0.556818C12.3065 0.556818 11.7312 1.1321 11.7312 1.83523C11.7312 2.53835 12.3065 3.11364 13.0096 3.11364Z"
            fill="#6366F1"
          />
        </svg>
      </button>
    </div>
  );
};

export default Member;
