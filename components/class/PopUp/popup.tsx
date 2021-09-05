import React from "react";

import useClickOutside from "components/clickOutside/clickOutside";

import style from "./style.module.css";

function PopUp({ closepopup, children }: any) {
  const ClickClose = () => {
    closepopup(0);
  };

  const ref = useClickOutside(() => {
    closepopup(0);
  });

  return (
    <div className={style.background}>
      <div ref={ref} className={style.container}>
        {children}
        <button className={style.close} onClick={ClickClose}>
          <img src="/icons/exit.svg" />
        </button>
      </div>
    </div>
  );
}

export default PopUp;
