import React from "react";
import style from "./style.module.css";

const Member = function () {
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
        <img src="/icons/threedot.svg" />
      </button>
    </div>
  );
};

export default Member;
