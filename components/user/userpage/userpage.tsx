import InputField from "components/user/userpage/inputfield";
import React from "react";
import style from "./style.module.css";

type AppProps = {
  user: any;
};

const UserPage = function ({ user }: AppProps) {
  return (
    <div className="pl-56 grid grid-cols-12">
      {/* User field */}
      <div className="pt-16 flex col-span-6">
        <div className="flex-grow">
          <InputField
            name="Họ"
            editable
            data={`${user.familyName}`}
            multiline={false}
          />
          <InputField
            name="Tên"
            editable
            data={`${user.givenName}`}
            multiline={false}
          />
          <InputField
            name="Biệt danh"
            editable
            data={user.bio}
            multiline={false}
          />
          <InputField
            name="MSSV"
            editable
            data={user.studentCardNumber}
            multiline={false}
          />
          <InputField
            name="Email"
            editable
            data={user.email}
            multiline={false}
          />
          <InputField name="Mô tả" editable data={user.role} multiline={true} />
        </div>
      </div>
      <div className="relative w-52 h-48 bg-white shadow-md rounded-2xl left-48 top-28">
        <div className="text-base leading-6 font-semibold text-indigo-500 pl-4 pt-3 tracking-normal">
          Ảnh đại diện
        </div>
        <img src={user.photo} width="80" className="rounded-full m-auto my-3" />
        <button className=" ml-16 p-2 shadow-sm border border-gray-300 rounded-xl tracking-normal">
          Cập nhập
        </button>
      </div>
    </div>
  );
};

export default UserPage;
