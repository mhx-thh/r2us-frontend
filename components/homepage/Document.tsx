import React from "react";
import SmBage from "components/homepage/SmBage";
const Document = () => {
  return (
    <div className="relative w-64 h-40 rounded-2xl bg-white border-indigo-500 shadow-lg mr-12">
      <p className="text-black text-lg leading-7 font-semibold p-0 mb-0 mx-6 mt-4">
        Tên tài liệu
      </p>
      <p className="text-black text-sm leading-8 font-normal flex justify-center items-center">
        <span>icon tên giáo viên</span>
        <span>icon Tên môn học</span>
        <span>
          icon Tên lớp
          <param name="" value="" />
        </span>
      </p>
      <div className="absolute -top-2.5 rigth-5">
        <SmBage>
          <p className=" text-indigo-800 text-xs leading-4 font-medium ">
            loại tài liệu
          </p>
        </SmBage>
      </div>
      <div className="absolute bottom-5 rigth-5">icon</div>
    </div>
  );
};
export default Document;
