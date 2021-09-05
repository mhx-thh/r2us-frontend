import React, { useRef } from "react";
import style from "./style.module.css";

import useClickOutside from "components/clickOutside/clickOutside";

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
