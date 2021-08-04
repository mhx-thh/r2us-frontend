import React, { FC } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
// import pic from "./public/Picture/";

import { useAppSelector } from "redux/hooks";
import { selectToken, selectStatus } from "redux/userSlice";
import Feature from "components/homepage/Feature";
import Footer from "components/footer/FooterComponent";
import Group from "components/homepage/Group";
import Document from "components/homepage/Document";
import Review from "components/homepage/Review";
import LgBage from "components/homepage/LgBage";
import SmBage from "components/homepage/SmBage";

const TogglePage: FC = () => {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  return (
    <React.Fragment>
      <Link href="/login">
        <a>Login </a>
      </Link>
      {status === "logined" && <div>{token}</div>}
      <div className="w-full flex items-center px-28 py-24 bg-indigo-50">
        <div>
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight">
            R2US
          </p>
          <p className="text-black text-xl leading-8 font-semibold">
            Nền tảng chia sẻ tài liệu và cảm nhận
          </p>
          <p className="w-96 h-50 text-black text-base leading-6 font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          </p>
          <div className="flex justify-between items-center w-96 mt-3.5 p-0">
            <button className="w-48 h-10 bg-indigo-500 rounded-xl flex justify-center items-center mr-5">
              <p className="text-lg text-white leading-6 font-semibold tracking-wider uppercase">
                Tìm kiếm
              </p>
            </button>
            <button className="w-48 h-10 bg-indigo-500 rounded-xl flex justify-center items-center">
              <p className="text-lg text-white leading-6 font-semibold tracking-wider uppercase">
                Chia sẻ
              </p>
            </button>
          </div>
        </div>
        <img
          src="public\Picture\Human_Resource_Management__Converted.png"
          alt=""
        />
      </div>
      <div className="relative -mt-16 py-0 px-28 w-full text-center">
        <div className="border w-8/12 h-72 inline-block bg-white shadow-xl mb-0 rounded-3xl">
          <p className="text-indigo-500 text-2xl leading-7 font-bold indigo-500 text-center">
            Đặc điểm nổi bật
          </p>
        </div>
        <div className="py-0 px-0 absolute bottom-14 flex justify-between items-center">
          <div className="py-0 flex justify-around items-center">
            <div className="w-9/12 h-40 bg-indigo-300 rounded-2xl mr-8 pt-2 px-3.5">
              <div className="p-0 mb-2 flex justify-start">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ic:outline-rate-review">
                    <path
                      id="Vector"
                      d="M43.3333 4.33333H8.66665C6.28331 4.33333 4.35498 6.28333 4.35498 8.66666L4.33331 47.6667L13 39H43.3333C45.7166 39 47.6666 37.05 47.6666 34.6667V8.66666C47.6666 6.28333 45.7166 4.33333 43.3333 4.33333ZM43.3333 34.6667H11.2016L9.92331 35.945L8.66665 37.2017V8.66666H43.3333V34.6667ZM22.75 30.3333H39V26H27.0833L22.75 30.3333ZM31.1133 17.615C31.5466 17.1817 31.5466 16.51 31.1133 16.0767L27.2783 12.2417C26.845 11.8083 26.1733 11.8083 25.74 12.2417L13 24.9817V30.3333H18.3516L31.1133 17.615Z"
                      fill="#6366F1"
                    />
                  </g>
                </svg>

                <p className="text-2xl leading-7 font-bold text-white ml-1.5">
                  Giao diện thân thiện
                </p>
              </div>
              <p className="text-sm leading-5 font-medium text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes{" "}
              </p>
            </div>
            <div className="w-9/12 h-40 bg-indigo-300 rounded-2xl mr-8 pt-2 px-3.5">
              <div className="p-0 mb-2 flex justify-start">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ic:outline-rate-review">
                    <path
                      id="Vector"
                      d="M43.3333 4.33333H8.66665C6.28331 4.33333 4.35498 6.28333 4.35498 8.66666L4.33331 47.6667L13 39H43.3333C45.7166 39 47.6666 37.05 47.6666 34.6667V8.66666C47.6666 6.28333 45.7166 4.33333 43.3333 4.33333ZM43.3333 34.6667H11.2016L9.92331 35.945L8.66665 37.2017V8.66666H43.3333V34.6667ZM22.75 30.3333H39V26H27.0833L22.75 30.3333ZM31.1133 17.615C31.5466 17.1817 31.5466 16.51 31.1133 16.0767L27.2783 12.2417C26.845 11.8083 26.1733 11.8083 25.74 12.2417L13 24.9817V30.3333H18.3516L31.1133 17.615Z"
                      fill="#6366F1"
                    />
                  </g>
                </svg>

                <p className="text-2xl leading-7 font-bold text-white ml-1.5">
                  Giao diện thân thiện
                </p>
              </div>
              <p className="text-sm leading-5 font-medium text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes{" "}
              </p>
            </div>
            <div className="w-9/12 h-40 bg-indigo-300 rounded-2xl pt-2 px-3.5">
              <div className="p-0 mb-2 flex justify-start">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="ic:outline-rate-review">
                    <path
                      id="Vector"
                      d="M43.3333 4.33333H8.66665C6.28331 4.33333 4.35498 6.28333 4.35498 8.66666L4.33331 47.6667L13 39H43.3333C45.7166 39 47.6666 37.05 47.6666 34.6667V8.66666C47.6666 6.28333 45.7166 4.33333 43.3333 4.33333ZM43.3333 34.6667H11.2016L9.92331 35.945L8.66665 37.2017V8.66666H43.3333V34.6667ZM22.75 30.3333H39V26H27.0833L22.75 30.3333ZM31.1133 17.615C31.5466 17.1817 31.5466 16.51 31.1133 16.0767L27.2783 12.2417C26.845 11.8083 26.1733 11.8083 25.74 12.2417L13 24.9817V30.3333H18.3516L31.1133 17.615Z"
                      fill="#6366F1"
                    />
                  </g>
                </svg>

                <p className="text-2xl leading-7 font-bold text-white ml-1.5">
                  Giao diện thân thiện
                </p>
              </div>
              <p className="text-sm leading-5 font-medium text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-36 w-full pb-20 bg-indigo-50 px-28 mb-24">
        <div className="px-5 h-16 py-14 bg-white rounded-full shadow-xl absolute text-center right-2/4 -top-6 inline-block">
          <p className="text-indigo-500 text-2xl leading-7 font-bold ">
            Các nhóm vừa mở
          </p>
        </div>
        <div className="p-0 flex justify-between items-center mt-14">
          <Group />
          <Group />
          <Group />
        </div>
      </div>
      <div className="relative mt-28 rounded-br-3xl rounded-tr-3xl bg-indigo-100 my-0 w-56 py-14 px-28">
        <div className="absolute px-4 top-12">
          <div className="relative rounded-xl px-14 py-5">
            <p className="text-2xl leading-7 font-bold">Tài liệu mới nhất</p>
            <div className="absolute -top-2.5 left-36">
              <LgBage>Xem thêm</LgBage>
            </div>
          </div>
          <div className="flex justify-center items-center p-0">
            <Document />
            <Document />
            <Document />
          </div>
        </div>
        <div className="absolute px-4 bottom-24">
          <div className="relative rounded-br-3xl rounded-tr-3xl px-14 py-5">
            <p className="text-2xl leading-7 font-bold">Cảm nhận mới nhất</p>
            <div className="absolute -top-2.5 left-36">
              <LgBage>Xem thêm</LgBage>
            </div>
          </div>
          <div className="flex justify-center items-center p-0">
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    
        <Footer />
    </React.Fragment>
  );
};

export default TogglePage;
