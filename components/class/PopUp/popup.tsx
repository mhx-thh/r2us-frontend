import React, { useEffect, useRef } from "react";

import style from "./style.module.css";

function PopUp({ closepopup, children }: any) {
  const ClickClose = () => {
    closepopup(0);
  };

  const useClickOutside = (handler) => {
    const ref = useRef(null);
    useEffect(() => {
      const handle = (event) => {
        if (ref.current && !ref.current?.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", handle);
      return () => {
        document.removeEventListener("mousedown", handle);
      };
    });
    return ref;
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
