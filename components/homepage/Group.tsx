import React from "react";
const Group = () => {
  return (
    <div className="relative py-0 h-60 w-72">
      <div className="absoulute flex justify-center bottom-0 right-0 bg-white shadow-lg w-64 h-44 rounded-xl">
        <p className=" absolute text-sm leading-5 font-normal mt-16">detail</p>
      </div>
      <div className="absolute flex justify-center items-center top-0 left-0 w-64 h-16 bg-indigo-500 rounded-xl">
        <p className="text-lg leading-7 font-semibold">Tên lớp học</p>
      </div>
    </div>
  );
};
export default Group;
