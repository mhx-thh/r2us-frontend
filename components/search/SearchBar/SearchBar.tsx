/* eslint-disable react/jsx-key */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from "../style.module.css";

type typeInputText = {
  register: any;
  name: string;
  placeholder: string;
};

function InputText(props: typeInputText) {
  const a = "picked";
  const { register, name, placeholder } = props;

  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.value === "Tài liệu") {
      router.replace("/search/resource", "/search/resource", {
        shallow: true,
        scroll: false,
      });
    }
    if (e.target.value === "Cảm nhận") {
      router.replace("/search/review", "/search/review", {
        shallow: true,
        scroll: false,
      });
    }
    if (e.target.value === "Nhóm lớp") {
      router.replace("/search/group", "/search/group", {
        shallow: true,
        scroll: false,
      });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/5 relative focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ">
        <input
          {...register(name)}
          type="text"
          id="search"
          className="rounded rounded-2xl shadow-xl text-base border-transparent w-full leading-6 appearance-none py-4 pl-16 bg-white placeholder-black shadow-sm text-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder={placeholder}
        />
        <div className="absolute top-4 left-4">
          <label htmlFor="search">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.975 24.9823L24.9072 19.9145L21.0093 18.3041C22.3072 16.4583 23.0025 14.2564 23 12C23 5.93456 18.0654 1 12 1C5.93456 1 1 5.93456 1 12C1 18.0654 5.93456 23 12 23C14.276 23.0026 16.4962 22.2952 18.3512 20.9764L19.9574 24.8639L25.025 29.9319C25.35 30.257 25.7358 30.5148 26.1605 30.6907C26.5851 30.8666 27.0403 30.9571 27.4999 30.9572C27.9595 30.9572 28.4147 30.8667 28.8393 30.6908C29.264 30.5149 29.6498 30.2571 29.9748 29.9321C30.2999 29.6071 30.5577 29.2213 30.7336 28.7966C30.9095 28.372 31.0001 27.9168 31.0001 27.4572C31.0001 26.9976 30.9096 26.5424 30.7337 26.1178C30.5578 25.6931 30.3 25.3073 29.975 24.9823ZM3 12C3 7.0375 7.0375 3 12 3C16.9625 3 21 7.0375 21 12C21 16.9625 16.9625 21 12 21C7.0375 21 3 16.9625 3 12ZM28.5607 28.5177C28.2792 28.7986 27.8977 28.9564 27.5 28.9564C27.1023 28.9564 26.7208 28.7986 26.4393 28.5177L21.6536 23.732L20.1602 20.1173L23.775 21.6107L28.5608 26.3964C28.8417 26.678 28.9994 27.0594 28.9994 27.4571C28.9993 27.8548 28.8416 28.2362 28.5607 28.5177Z"
                fill="#6366F1"
              />
            </svg>
          </label>
        </div>

        <div className="absolute top-2 right-0 ">
          <select
            className="block text-black text-xl mb-5 font-bold items-center text-lg py-2 pr-10 pl-2 border border-l-2 rounded rounded-xl border-r-0 border-b-0 border-t-0 border-gray-300 bg-white leading-7 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name={name}
            onChange={handleChange}
            id="type"
          >
            {(router.pathname === "/search/resource" && (
              <>
                <option value="Tài liệu" selected>
                  Tài liệu
                </option>
                <option value="Cảm nhận">Cảm nhận</option>
                <option value="Nhóm lớp">Nhóm lớp</option>
              </>
            )) ||
              (router.pathname === "/search/review" && (
                <>
                  <option value="Tài liệu">Tài liệu</option>
                  <option value="Cảm nhận" selected>
                    Cảm nhận
                  </option>
                  <option value="Nhóm lớp">Nhóm lớp</option>
                </>
              )) ||
              (router.pathname === "/search/group" && (
                <>
                  <option value="Tài liệu">Tài liệu</option>
                  <option value="Cảm nhận">Cảm nhận</option>
                  <option value="Nhóm lớp" selected>
                    Nhóm lớp
                  </option>
                </>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputText;
