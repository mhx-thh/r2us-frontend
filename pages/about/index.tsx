import Footer from "components/footer/FooterComponent";
import React, { FC, useEffect, useState } from "react";
import InforContact from "./InforContact/InforContact";
import APP1 from "./carouselInfor";
import style from "./style.module.css";
import Cover from "./cover";
const TogglePage: FC = () => {
  return (
    <React.Fragment>
      {/* sentence */}
      <div className="overflow-x-hidden">
        <div className="  m-10 items-center justify-between ">
          <p className="ml-28 not-italic font-normal text-base leading-6 ">
            _ABOUT US{" "}
          </p>
          <p className="ml-40 mt-4 text-indigo-500 text-4xl font-extrabold tracking-tight max-w-7xl">
            {" "}
            Resouces and Review{" "}
            <p className="break-words "> Trải nghiệm với cách nghĩ </p>{" "}
            <p className="break-words">của riêng bạn. </p>
          </p>
          <div className="items-center">
            <Cover />
          </div>
        </div>

        <div className=" flex items-center mt-40 ">
          <div>
            <svg
              width="639"
              height="720"
              viewBox="0 0 639 720"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="189" cy="360" rx="450" ry="360" fill="#EEF2FF" />
              <svg
                x="170"
                y="60"
                width="350"
                height="150"
                viewBox="0 0 350 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 5.92487 5.92487 1 12 1H338C344.075 1 349 5.92487 349 12V138C349 144.075 344.075 149 338 149H12C5.92487 149 1 144.075 1 138V12Z"
                  fill="white"
                  stroke="#6366F1"
                  strokeWidth={2}
                />
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="35"
                >
                  Giao diện thân thiện với việc R2US
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="59"
                >
                  tập trung vào sự đơn giản và thao tác
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="83"
                >
                  dễ dàng khi mang đến sự chuyên
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="106"
                >
                  nghiệp, thân thiện trên chính sự trải
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="132"
                >
                  nghiệm của bạn.
                </text>
              </svg>
              <text
                className="text-4xl font-medium mb-3 "
                fill="black"
                x="190"
                y="72"
              >
                1
              </text>
              <svg
                x="288"
                y="300"
                width="350"
                height="150"
                viewBox="0 0 350 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 5.92487 5.92487 1 12 1H338C344.075 1 349 5.92487 349 12V138C349 144.075 344.075 149 338 149H12C5.92487 149 1 144.075 1 138V12Z"
                  fill="white"
                  stroke="#6366F1"
                  strokeWidth={2}
                />
                <text
                  className=" font-semibold text-lg"
                  fill="black"
                  x="20"
                  y="35"
                >
                  R2US cung cấp cung cụ chia sẻ tài
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="59"
                >
                  liệu và cảm nhận nhanh chóng, dễ
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="83"
                >
                  dàng và bảo mật giúp bạn có thể
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="106"
                >
                  trao đổi và tìm kiếm tài liệu, cảm
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="132"
                >
                  nhận phù hợp, thuận tiện.
                </text>
              </svg>
              <text
                className="text-4xl font-medium mb-3 "
                fill="black"
                x="310"
                y="310"
              >
                2
              </text>
              <svg
                x="170"
                y="540"
                width="350"
                height="150"
                viewBox="0 0 350 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12C1 5.92487 5.92487 1 12 1H338C344.075 1 349 5.92487 349 12V138C349 144.075 344.075 149 338 149H12C5.92487 149 1 144.075 1 138V12Z"
                  fill="white"
                  stroke="#6366F1"
                  strokeWidth={2}
                />
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="35"
                >
                  Lo lắng về chọn môn? Đừng lo, với tính
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="59"
                >
                  tính năng chia sẻ cảm nhận của
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="83"
                >
                  R2US, bạn có thể tìm kiếm và chia
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="106"
                >
                  sẻ những cảm nhận về các môn
                </text>
                <text
                  className=" font-semibold text-lg "
                  fill="black"
                  x="20"
                  y="132"
                >
                  học hay giáo viên.
                </text>
              </svg>
              <text
                className="text-4xl font-medium mb-3 "
                fill="black"
                x="190"
                y="554"
              >
                3
              </text>
            </svg>
          </div>
          <p className="pl-24 ">
            <p className="text-indigo-500 text-6xl leading-none font-extrabold tracking-tight">
              R2US
            </p>
            <p className="text-3xl font-inter py-6 pr-4">
              Nền tảng chia sẻ tài liệu và cảm nhận R2US dành riêng cho sinh
              viên trường ĐH KHTN, ĐHQG-HCM
            </p>
            <p className="font-inter text-xl leading-6 font-normal pr-2">
              Với nhu cầu về tìm kiếm và liên kết tài liệu học tập lớn như hiện
              nay, R2US là nơi tổng hợp các tài liệu và cảm nhận về những môn
              học của sinh viên các trường đại học nói chung hay trường Đại học
              Khoa học Tự nhiên, ĐHQG-HCM nói riêng nhằm giúp các bạn sinh viên
              có thể tìm kiếm tài liệu đơn giản nhất.
            </p>
            <div className="w-30 flex items-center  ">
              <div className=" text-2xl pt-7 leading-none  tracking-tight ">
                <p className="pt-6 ">
                  <svg
                    className="h-10 w-10 text-black "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                    <line x1="8" y1="2" x2="8" y2="18" />
                    <line x1="16" y1="6" x2="16" y2="22" />
                  </svg>
                </p>
                <p className="pt-8 text-indigo-500 text-4xl leading-none font-extrabold tracking-tight">
                  65+
                </p>
                <p className="text-black text-lg leading-10 pt-7 font-semibold">
                  Nguồn tài liệu
                </p>
              </div>
              <div className=" text-2xl px-14 pt-3 leading-none   tracking-tight ">
                <p className="pt-7 m-3">
                  <svg
                    className="h-10 w-10 text-black "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                </p>
                <p className="pt-4 text-indigo-500 text-4xl leading-none font-extrabold tracking-tight">
                  689K+
                </p>
                <p className="text-black text-lg leading-10 pt-7 font-semibold">
                  Người sử dụng
                </p>
              </div>
              <div className=" text-2xl px-14 pt-3 leading-none  tracking-tight ">
                <p className="pt-10 ">
                  <svg
                    className="h-10 w-10 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </p>
                <p className="pt-7 text-indigo-500 text-4xl leading-none font-extrabold tracking-tight">
                  12+
                </p>
                <p className="text-black text-lg leading-10 pt-7 font-semibold">
                  Thành viên
                </p>
              </div>
            </div>
          </p>
        </div>

        {/* Infor members R2US */}

        <div className="items-center pt-20 ">
          <div>
            <p className="text-indigo-500 text-4xl leading-none font-extrabold tracking-tight flex justify-center ">
              Thành viên đội ngũ thành lập R2US
            </p>
            <p className=" text-black text-xl font-normal pt-7 flex justify-center">
              Đội hình Tin Học Hóa, CDTN MHX 2021
            </p>
          </div>
        </div>

        <APP1 />

        <div className="w-full flex items-center px-28 py-24 bg-indigo-50 mt-20">
          <div>
            {/* Infor update */}
            <p className="text-indigo-500 text-4xl leading-none font-extrabold tracking-tight">
              Cập nhật theo tuần
            </p>
            <p className="w-96 h-50 text-black text-base leading-6 font-normal pt-3">
              Chúng tôi sẽ cập nhật các thông tin, chức năng và thông báo trạng
              thái hàng tuần để thuận tiện cho các thao tác
            </p>
          </div>
          <div>
            <p className="text-indigo-400 text-2xl px-80 leading-none font-extrabold tracking-tight ">
              Nhận thông báo
            </p>
            {/* Enter mail */}
            <form className="px-80 rounded-md pt-4">
              <label>
                <input
                  className="w-96 border-blue-500 rounded-md pt-4"
                  type="text"
                  name="name"
                  placeholder="Hãy nhập lại email ở đây"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
    // <ClassDocument />
  );
};
export default TogglePage;
