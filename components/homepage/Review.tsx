import React from "react";
import SmBage from "components/homepage/SmBage";
const Review = () => {
  return (
    <div className="relative w-64 h-32 rounded-2xl bg-white border-indigo-500 shadow-lg   ">
      <p className="text-black text-lg leading-7 font-semibold p-0 mb-0 mx-6 mt-4">
        Cảm nhận về gì đó
      </p>
      <p className="text-black text-sm leading-8 font-normal w-64 text-center ">
        icon Tên lớp
      </p>
      <div className="absolute -top-2.5 rigth-5">
        <SmBage>
          <p className="text-indigo-800 text-xs leading-4 font-medium ">
            loại cảm nhận
          </p>
        </SmBage>
      </div>
    </div>
  );
};
export default Review;
