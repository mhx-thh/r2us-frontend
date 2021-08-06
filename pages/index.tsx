import NewClassAPI from "api/NewClassAPI";
import Footer from "components/footer/FooterComponent";
import Document from "components/homepage/Document";
import Group from "components/homepage/Group";
import LgBage from "components/homepage/LgBage";
import Review from "components/homepage/Review";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";
import style from "./style.module.css";

const TogglePage: FC = () => {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  const [newClass, setNewClass] = useState([]);
  useEffect(() => {
    async function fetchNewClass() {
      try {
        const res = await NewClassAPI.get();
        console.log(res);
        const data = res?.data?.data?.result;
        const mydata = data.splice(0, 4);
        console.log(mydata);
        setNewClass(mydata);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchNewClass();
  }, []);

  return (
    <React.Fragment>
      <Link href="/login">
        <a>Login </a>
      </Link>
      <Link href="/user">
        <a>User </a>
      </Link>
      <Link href="/class">
        <a>Class </a>
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
        <img src="picture/home.png" alt="home picture" />
      </div>
      {/* phần đặc điểm nổi bật */}
      <div className="relative -mt-16 py-0 px-28 w-full text-center">
        {/* // chữ đặc điểm nổi bật và cái khung */}
        <div className="border w-8/12 h-96 inline-block bg-white shadow-xl mb-0 rounded-3xl">
          <p className="text-indigo-500 text-2xl leading-7 font-bold indigo-500 text-center pt-14">
            ĐẶC ĐIỂM NỔI BẬT
          </p>
        </div>
        {/* toàn thể 3 đặc điểm */}
        <div className="py-0 px-0 absolute bottom-14 flex justify-between items-center">
          {/* đaẹđiểm thứ nhất */}
          <div className="py-0 flex justify-around items-center">
            {/* //đặc điểm thứ nhất */}
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

                <p className="text-2xl leading-7 font-bold text-white ml-1.5 pt-2">
                  Giao diện thân thiện
                </p>
              </div>
              <p className="text-sm leading-5 font-medium text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes{" "}
              </p>
            </div>
            {/* đặc điểm thứ 2 */}
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

                <p className="text-2xl leading-7 font-bold text-white ml-1.5 pt-2">
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

                <p className="text-2xl leading-7 font-bold text-white ml-1.5 pt-2">
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
      {/* //Các lớp mới mở */}
      <div className="relative mt-24 w-full flex bg-indigo-50 pt-14 justify-center items-center">
        <div className="absolute -top-8 w-80 h-20 flex justify-center items-center rounded-full mb-5 shadow-xl bg-white text-center">
          <div className="text-2xl leading-7 font-bold text-indigo-500">
            CÁC NHÓM VỪA MỞ
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-11 ml-24 justify-around mb-20">
          {newClass.map((data, index) => (
            <Group key={index} agroup={data} />
          ))}
          {/* <Group /> */}
        </div>
      </div>
      {/* tài liệu mới nhâts và cảm nhận mới nhất*/}
      <div className={style.Later}>
        {/* tài liệu mới nhất */}
        <div className="p-0 absolute left-28 pt-11 mb-96">
          <div className="relative w-80 h-16 bg-indigo-500 pl-14 pt-5 mb-14 shadow-base rounded-xl ml-5">
            <p className="text-2xl leading-7 font-bold text-white">
              Tài liệu mới nhất
            </p>
            <div className="absolute -bottom-4 left-72">
              <LgBage>Xem thêm</LgBage>
            </div>
          </div>
          <div className="-pl-10 grid grid-cols-4 gap-x-80">
            <Document />
            <Document />
            <Document />
            <Document />
          </div>
        </div>
        {/* cảm nhận mới nhất */}
        <div className="p-0 absolute left-28 mt-96">
          <div className="relative w-80 h-16 bg-indigo-500 pl-14 pt-5 mb-14 shadow-base rounded-xl ml-5">
            <p className="text-2xl leading-7 font-bold text-white">
              Cảm nhận mới nhất
            </p>
            <div className="absolute -bottom-4 left-72">
              <LgBage>Xem thêm</LgBage>
            </div>
          </div>

          <div className="-pl-10 grid grid-cols-4 gap-x-80 ">
            {/* cảm nhận 1 */}
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
    // <ClassDocument />
  );
};

export default TogglePage;
