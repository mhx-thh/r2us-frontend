import React, { useState } from "react";
import ResourceEditModal from "components/Resource/ResourceEditModal";
import PopUp from "../PopUp/popup";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import useClickOutside from "components/clickOutside/clickOutside";

function DropdownResource({ close, data }: any) {
  const token = useAppSelector(selectToken);
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

      {update === true && (
        <PopUp closepopup={close}>
          <ResourceEditModal resource={data} />
        </PopUp>
      )}
    </div>
  );
}

export default DropdownResource;
