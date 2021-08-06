import React from "react";
import SmBage from "components/homepage/SmBage";
const Review = () => {
  return (
    <div className="relative border border-indigo-500 w-64 h-32 rounded-2xl bg-white border-indigo-500 shadow-lg mr-12  ">
      <div className="absolute flex items-center text-left pl-4 pr-3 pt-4">
        <p className="text-lg leading-6 font-semibold">
          Cảm nhận về lớp thân yêu của tôi
        </p>
      </div>
      {/* <p className="text-black text-sm leading-8 font-normal w-64 text-center ">
          <p>Detail</p>
        </p> */}
      <div className="p-0 flex justify-start pl-10 pt-20">
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
            stroke="#6366F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1Z"
            stroke="#6366F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="pl-2 text-sm leading-5 font-normal">2021 - 2022</p>
      </div>
      <div className="absolute bottom-3 right-5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66664 10.8334L7.49997 18.3334L7.49997 14.1667C17.4608 14.1667 18.61 6.10171 18.3333 1.66671C17.915 3.90421 17.7208 7.50004 7.49997 7.50004L7.49997 3.33337L1.66664 10.8334Z"
            stroke="#6366F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute -top-2.5 left-36">
        <SmBage>Lớp học</SmBage>
      </div>
    </div>
  );
};
export default Review;
