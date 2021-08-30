import React, { useEffect, useRef, useState } from "react";
import EditReview from "../EditReview";
import PopUp from "../PopUp/popup";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

function DropdownReview({ close, data }: any) {
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
  const ClickUpdate = () => {
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
          <button onClick={ClickUpdate}>Chỉnh sửa</button>
        </li>
      </ul>
      {update === true && (
        <PopUp closepopup={close}>
          <EditReview review={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownReview;
