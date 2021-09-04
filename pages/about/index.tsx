import style from "../style.module.css";
import Footer from "components/footer/FooterComponent";
import React, { FC, useEffect, useState } from "react";
import IconContact from "./icon";
import InforContact from "./InforContact";
const TogglePage: FC = () => {
  return (
    <React.Fragment>
      {/* sentence */}
      <div className="w-full  items-center px-28 py-24 ">
        <p className="px-40 py-2 pt-4">_ABOUT US </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60  font-bold pt-2">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60 font-bold pt-2">
          consectetuer adipiscing elit,enean
        </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60 font-bold  pt-2">
          commodo liguala eget dolor.
        </p>
      </div>

      {/* Image */}
      <img src="picture/about.png" alt="about picture" />

      <div className="w-full flex items-center  py-24 ">
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
                y="30"
              >
                Lorem ipsum dolor sit amet,
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="55"
              >
                consectetuer adipiscing elit. Aenean
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="78"
              >
                commodo ligula eget dolor. Cum
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="100"
              >
                sociis natoque penatibus et magnis
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="125"
              >
                dis parturient montes.
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
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="30"
              >
                Lorem ipsum dolor sit amet,
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="55"
              >
                consectetuer adipiscing elit. Aenean
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="78"
              >
                commodo ligula eget dolor. Cum
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="100"
              >
                sociis natoque penatibus et magnis
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="125"
              >
                dis parturient montes.
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
                y="30"
              >
                Lorem ipsum dolor sit amet,
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="55"
              >
                consectetuer adipiscing elit. Aenean
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="78"
              >
                commodo ligula eget dolor. Cum
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="100"
              >
                sociis natoque penatibus et magnis
              </text>
              <text
                className=" font-semibold text-lg "
                fill="black"
                x="20"
                y="125"
              >
                dis parturient montes.
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
        <p className=" text-2xl px-40 pt-3 leading-none  tracking-tight ">
          <p className="text-indigo-500 text-6xl leading-none font-extrabold tracking-tight">
            R2US
          </p>
          <p className=" text-3xl font-semibold mb-2  w-10/12 pt-5">
            Nền tảng chia sẻ tài liệu và cảm nhận R2US dành riêng cho sinh viên
            trường ĐH KHTN, ĐHQG-HCM
          </p>
          <p className="w-10/12  text-black text-xl  leading-6 font-normal pt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            smontes, nascetur ridiculus mus.
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
      <div className="w-full  items-center px-28 py-24 ">
        <div>
          <p className="text-indigo-500 text-4xl leading-none font-extrabold tracking-tight flex justify-center ">
            Thành viên đội ngũ thành lập R2US
          </p>
          <p className=" text-black text-base leading-6 font-normal pt-7 flex justify-center">
            Đội hình Tin học hóa, CDTN MHX 2021
          </p>
        </div>
        <div className="overflow-x-auto">
          <InforContact />
        </div>
      </div>

      <div className="w-full flex items-center px-28 py-24 bg-indigo-50">
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
      <Footer />
    </React.Fragment>
    // <ClassDocument />
  );
};

export default TogglePage;
