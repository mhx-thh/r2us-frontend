import React, { FC, useState } from "react";

import AdminLayout from "components/layout/AdminLayout";
import { selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";

const AdminPage: FC = () => {
  const date = new Date();
  const user = useAppSelector(selectUser);

  const [resource, setResource] = useState(0);
  const [review, setReview] = useState(0);
  const [group, setGroup] = useState(0);
  return (
    <AdminLayout>
      <div className="mb-24 ml-12">
        {date.getHours() <= 12 && (
          <p className="text-3xl leading-9 font-bold">
            Good Morning,Mr {user.familyName}
          </p>
        )}
        {date.getHours() > 12 && date.getHours() <= 18 && (
          <p className="text-3xl leading-9 font-bold">
            Good Afternoon,Mr {user.familyName}
          </p>
        )}
        {date.getHours() > 18 && date.getHours() <= 24 && (
          <p className="text-3xl leading-9 font-bold">
            Good evening,Mr {user.familyName}
          </p>
        )}
        <p className="text-3xl"></p>
        <p className="text-base leading-6 font-normal">
          Đây là nơi cập nhật chính những hoạt động trên ứng dụng của chúng ta
        </p>
      </div>
      <div className="grid grid-cols-4 ml-12 gap-1">
        <div className=" w-44 h-40  py-3.5 rounded-3xl border border-indigo-500   shadow-lg">
          <div className="flex mb-2 px-6 ">
            <img
              src="/icons/adminpage/blueResource.svg"
              height={21}
              width={18}
            />
            <p className="text-lg leading-6 font-normal ml-4">Tài liệu</p>
          </div>
          <hr className="w-full border-indigo-500" />
          <p className="flex justify-center  items-center text-5xl leading-none font-extrabold w-full h-4/6 ">
            {resource}
          </p>
        </div>
        <div className=" w-44 h-40  py-3.5 rounded-3xl border border-indigo-500   shadow-lg">
          <div className="flex mb-2 px-6 ">
            <img src="/icons/adminpage/blueReview.svg" height={21} width={18} />
            <p className="text-lg leading-6 font-normal ml-4">Tài liệu</p>
          </div>
          <hr className="w-full border-indigo-500" />
          <p className="flex justify-center  items-center text-5xl leading-none font-extrabold w-full h-4/6 ">
            {review}
          </p>
        </div>
        <div className=" w-44 h-40  py-3.5 rounded-3xl border border-indigo-500   shadow-lg">
          <div className="flex mb-2 px-6 ">
            <img src="/icons/adminpage/blueGroup.svg" height={21} width={18} />
            <p className="text-lg leading-6 font-normal ml-4">Tài liệu</p>
          </div>
          <hr className="w-full border-indigo-500" />
          <p className="flex justify-center  items-center text-5xl leading-none font-extrabold w-full h-4/6 ">
            {group}
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};
export default AdminPage;
