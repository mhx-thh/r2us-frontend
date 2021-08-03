import React, { FC } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";
// import pic from "./public/Picture/";

import { useAppSelector } from "redux/hooks";
import { selectToken, selectStatus } from "redux/userSlice";
import Feature from "components/homepage/Feature";
import Footer from "components/footer/FooterComponent";

const TogglePage: FC = () => {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  return (
    <React.Fragment>
      <Link href="/login">
        <a>Login </a>
      </Link>
      {status === "logined" && <div>{token}</div>}
      <div>
        <p className=" text-indigo-500 text-5xl leading-none font-extrabold tracking-tight">
          R2US
        </p>
        <p className="text-black text-xl leading-8 font-semibold">
          Nền tảng chia sẻ tài liệu và cảm nhận
        </p>
        <p className="w-96 h-50 text-black text-base leading-6 font-normal">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel,
        </p>
        <button className="w-48 h-10 bg-indigo-500 mr-5">Tìm kiếm</button>
        <button className="w-48 h-10 bg-indigo-500">Chia sẻ</button>
        {/* <img src={pic} alt={"pic"} /> */}
        <p className="text-indigo-500 text-2xl leading-7 font-bold indigo-500 text-center">
          Đặc điểm nổi bật
        </p>
        <Feature />
        <p className="text-indigo-500 text-2xl leading-7 font-bold indigo-500 text-center">
          Các nhóm vừa mở
        </p>
        <div className="w-80 h-16 rounded-xl bg-indigo-500 text-white flex justify-center items-center">
          <p className="text-2xl leading-7 font-bold">Tài liệu mới nhất</p>
        </div>

        <div className="w-80 h-16 rounded-xl">Cảm nhận mới nhất</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default TogglePage;
