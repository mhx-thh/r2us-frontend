import { memberType } from "lib/models";
import React from "react";
import Member from "./member";
import style from "./style.module.css";

type AppProps = {
  title: string;
  members: Array<memberType>;
  role: string;
};

const MemberSection = function (props: AppProps) {
  return (
    <div className={style.section}>
      {/* Head */}
      <div className={style.section__title}>
        <div className={style.section__title__box}>
          <div className={style.section__title__text}>{props.title}</div>
        </div>
      </div>

      {/* Content */}
      <div className={style.section__member}>
        {props.members?.map(
          (val) =>
            val.role === props.role && <Member member={val} key={val._id} />
        )}
      </div>
    </div>
  );
};

export default MemberSection;
