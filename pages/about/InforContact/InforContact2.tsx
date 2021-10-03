import React from "react";
import Infor_Cuu_Quan from "./ContainInforContact/Cuu_Quan";
import Infor_Hong_Tan from "./ContainInforContact/Hong_Tan";
import Infor_Minh_Nhut from "./ContainInforContact/Minh_Nhut";
import Infor_Tuyet_Anh from "./ContainInforContact/Tuyet_Anh";
import Infor_Van_Hao from "./ContainInforContact/Van_Hao";

function InforContact2(props) {
  return (
    <div className=" flex  items-center justify-center mb-0">
      <div className=" w-auto flex  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Đặng Huỳnh Cửu Quân
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Member
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Cuu_Quan.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Cuu_Quan />
          </div>
        </div>
      </div>
      <div className=" w-auto flex px-3  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Nguyễn Thị Tuyết Anh
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Member
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Tuyet_Anh.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Tuyet_Anh />
          </div>
        </div>
      </div>
      <div className=" w-auto flex   py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Nguyễn Hồng Tấn
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Member
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Hong_Tan.png"
            alt="about picture"
          />
          <div className="py-20">
            <Infor_Hong_Tan />
          </div>
        </div>
      </div>
      <div className=" w-auto flex px-3 py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Nguyễn Văn Hào
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Member
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Van_Hao.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Van_Hao />
          </div>
        </div>
      </div>
      <div className=" w-auto flex  py-22 ">
        <div className="w-2    py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight "></p>
        </div>
        <div className="w-12  py-12 ">
          <div className="py-20"></div>
        </div>
      </div>
    </div>
  );
}

export default InforContact2;
