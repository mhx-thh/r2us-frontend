import React, { useEffect, useRef, useState } from "react";
import EditResource from "../EditResource";
import PopUp from "../PopUp/popup";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type AppProps = {
  close: any;
  data: any;
};

function DropdownResource({ close, data }: AppProps) {
  console.log("close", close);
  console.log("data", data);
  const token = useAppSelector(selectToken);
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
    close(0);
  });
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  const ClickDelete = () => {
    GroupAPI.deleteResource(data.id, token);
  };
  return (
    <div ref={ref} className="absolute my-8 -mx-24">
      <ul className="w-28  h-28 text-base leading-6 font-normal shadow rounded-xl py-1 bg-white">
        {data.status === "accept" ? (
          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
            <button>Duyệt</button>
          </li>
        ) : (
          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
            <button>Thêm</button>
          </li>
        )}
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
          <button onClick={ClickDelete}>Xóa</button>
        </li>
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200">
          <button onClick={handleUpdate}>Chỉnh sửa</button>
        </li>
      </ul>
      {update && (
        <PopUp closepopup={close}>
          <EditResource eresource={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownResource;
