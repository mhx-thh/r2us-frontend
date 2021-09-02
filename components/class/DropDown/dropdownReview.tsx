import React, { useState } from "react";
import ReviewEditModal from "components/Review/ReviewEditModal";
import PopUp from "../PopUp/popup";
import useClickOutside from "components/clickOutside/clickOutside";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

function DropdownReview({ close, data }: any) {
  const token = useAppSelector(selectToken);
  const ref = useClickOutside(() => {
    close(0);
  });

  const [update, setUpdate] = useState(false);
  const ClickUpdate = () => {
    setUpdate(true);
  };

  const ClickDelete = () => {
    GroupAPI.deleteReview(data._id, token);
  };

  return (
    <div ref={ref} className="absolute my-8 -mx-24 bg-white">
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
          <ReviewEditModal review={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownReview;
