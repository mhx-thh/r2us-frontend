import React, { useEffect, useState } from "react";
import Member from "./member";
import style from "./style.module.css";

const MemberSection = function (props: { name: string }) {
  const [open, setOpen] = useState(false);
  const clickDropdown = () => {
    setOpen(!!!open);
  };
  return (
    <div className={style.section}>
      {/* Head */}
      <div className={style.section__title}>
        <div className={style.section__title__box}>
          <div className={style.section__title__text}>{props.name}</div>
        </div>
      </div>

      {/* Content */}
      <div className={style.section__member}>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
};

export default MemberSection;
