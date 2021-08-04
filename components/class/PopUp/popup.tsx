import React, { useEffect } from "react";
import style from "./style.module.css";
import { useRef } from "react";

type AppProps = {
  children: any;
  closepopup: any;
};

// eslint-disable-next-line react/prop-types
function PopUp({ closepopup, children }: AppProps) {
  const triggerclose = () => {
    closepopup(0);
  };
  const popupRef = useRef(null);

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
        <button className={style.close} onClick={triggerclose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;
