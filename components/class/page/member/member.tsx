import { memberType } from "lib/models";
import React from "react";
import style from "./style.module.css";

type AppProps = {
  member: memberType;
};

const Member = function (props: AppProps) {
  const image = props.member.userId.photo;
  return (
    <div className={style.member}>
      {/* Image */}
      <div className={style.member__preimg}>
        <img
          className={style.member__img}
          src={image}
          alt={`${props.member.userId._id}`}
        />
      </div>

      {/* Text */}
      <div className={style.member__text}>
        {/* Name */}
        <div>
          <input
            disabled
            value={`${props.member.userId.familyName} ${props.member.userId.givenName}`}
            className={style.member__text__name}
          />
        </div>
        <div>
          {/* Email */}
          <input
            disabled
            value={props.member.userId.email}
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
