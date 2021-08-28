import GroupAPI from "api/groupAPI";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import EditReview from "../EditReview";
import PopUp from "../PopUp/popup";

type AppProps = {
  close: any;
  data: any;
};

function DropdownReview({ close, data }: AppProps) {
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
  console.log(data);
  const ref = useClickOutside(() => {
    close(0);
  });
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  const ClickDelete = () => {
    GroupAPI.deleteReview(data.id, token);
  };
  return (
    <div ref={ref} className="absolute my-8 -mx-24">
      <ul className="w-28  h-28 text-base leading-6 font-normal shadow rounded-xl py-1">
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
          <button>Duyệt</button>
        </li>
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
          <button onClick={ClickDelete}>Xóa</button>
        </li>
        <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200">
          <button onClick={handleUpdate}>Chỉnh sửa</button>
        </li>
      </ul>
      {update && (
        <PopUp closepopup={close}>
          <EditReview ereview={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownReview;
