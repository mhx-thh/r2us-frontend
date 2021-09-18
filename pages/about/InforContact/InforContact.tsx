import React from "react";
import Infor_Bao_Tran from "./ContainInforContact/Bao_Tran";
import Infor_Minh_Nhut from "./ContainInforContact/Minh_Nhut";

function InforContact(props) {
  return (
    <div className=" flex  px-26 py-0.5 ">
      <div className=" w-auto flex px-3  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Phạm Văn Minh Nhựt
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Leader
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Minh_Nhut.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Minh_Nhut />
          </div>
        </div>
      </div>
      <div className=" w-auto flex px-3  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                Huỳnh Thị Bảo Trân
              </p>
              <p className="  text-black text-2xl leading-6 font-normal ">
                Supper Leader
              </p>
            </p>
          </p>
        </div>
        <div className="w-56  py-12 ">
          <img
            className="rounded-lg"
            src="picture/avatar/Bao_Tran.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Bao_Tran />
          </div>
        </div>
      </div>
      <div className=" w-auto flex px-3  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                ..............................
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
            src="picture/avt1.png"
            alt="about picture"
          />
          <div className="py-20">
            <Infor_Minh_Nhut />
          </div>
        </div>
      </div>
      <div className=" w-auto flex px-3  py-22 ">
        <div className="w-2  px-8  py-20">
          <p className="text-indigo-500 text-5xl leading-none font-extrabold tracking-tight ">
            <p className="border-2 border-blue-500 p-2 w-72 h-96  rounded-xl pt-4 text-center">
              <p className="py-28"></p>
              <p className="  text-black text-2xl leading-8 font-semibold ">
                .................
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
            src="picture/avt2.png"
            alt="about picture"
            width="260"
            height="220"
          />
          <div className="py-20">
            <Infor_Minh_Nhut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforContact;
