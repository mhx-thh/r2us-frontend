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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M15.2864 27.0701L19.9997 22.3567L24.713 27.0701L27.0697 24.7134L22.3564 20.0001L27.0697 15.2867L24.713 12.9301L19.9997 17.6434L15.2864 12.9301L12.9297 15.2867L17.643 20.0001L12.9297 24.7134L15.2864 27.0701Z"
              fill="#6366F1"
            />
            <path
              d="M20.0002 36.6667C29.1902 36.6667 36.6668 29.19 36.6668 20C36.6668 10.81 29.1902 3.33337 20.0002 3.33337C10.8102 3.33337 3.3335 10.81 3.3335 20C3.3335 29.19 10.8102 36.6667 20.0002 36.6667ZM20.0002 6.66671C27.3518 6.66671 33.3335 12.6484 33.3335 20C33.3335 27.3517 27.3518 33.3334 20.0002 33.3334C12.6485 33.3334 6.66683 27.3517 6.66683 20C6.66683 12.6484 12.6485 6.66671 20.0002 6.66671Z"
              fill="#6366F1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PopUp;
