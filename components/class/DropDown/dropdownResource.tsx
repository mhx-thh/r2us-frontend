import React, { useEffect, useRef, useState } from "react";
import EditResource from "../EditResource";
import PopUp from "../PopUp/popup";

type AppProps = {
  close: any;
  data: any;
};

function DropdownResource({ close, data }: AppProps) {
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
  console.log(data);
  const ref = useClickOutside(() => {
    close(0);
  });
  const [patch, setPatch] = useState(false);
  const handleUpdate = () => {
    setPatch(true);
  };

  return (
    <div ref={ref} className="absolute my-8 -mx-24">
      <ul className="w-28  h-28 text-base leading-6 font-normal shadow rounded-xl py-1">
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
          Duyệt
        </li>
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
          Xóa
        </li>
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200">
          <button onClick={handleUpdate}>Chỉnh sửa</button>
        </li>
      </ul>
      {patch && (
        <PopUp closepopup={close}>
          <EditResource eresource={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownResource;
