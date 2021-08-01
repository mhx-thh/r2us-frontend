import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";
import styled from "styled-components";

interface Props {
  param: string;
}

function UserHeader({ param }: Props) {
  const Button = styled.button`
    color: black;
    background-color: #9baea4;
    border-radius: 5px;
    outline: 0;
    bow-shadow: 0px 2px 2px lightgray;
  `;
  const ButtonToggle = styled(Button)`
    opacity: 0.3;
    ${({ active }) =>
      active &&
      `
    opacity: 1;
  `}
  `;
  const status = useAppSelector(selectStatus);
  const SideBarData = [
    {
      Title: "Thông tin",
      Link: "/user/",
    },
    {
      Title: "Tài liệu",
      Link: "/user/document",
    },
    {
      Title: "Cảm nhận",
      Link: "/user/review",
    },
    {
      Title: "Lớp của tôi",
      Link: "/user/classes",
    },
    {
      Title: "Sinh viên 5 tốt",
      Link: "/user/SV5T",
    },
  ];
  const [active, setActive] = useState(
    param === "/user" ? SideBarData[0].Link : param
  );
  function SideBar() {
    return (
      <div className="items-center text-center justify-center w-full fixed inline-flex">
        {SideBarData.map((val) => (
          <ButtonToggle
            key={val}
            className="text  -sm font-semibold flex items-center focus:outline-none m-2 mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-3 py-3 font-semibold p-11"
            active={active === val.Link}
          >
            <Link href={val.Link}>
              <a>{val.Title}</a>
            </Link>
          </ButtonToggle>
        ))}
      </div>
    );
  }
  return (
    <header className="bg-white shadow-sm w-full fixed z-10 top-0 ">
      <div className="max-auto px-8 py-2 bg-white flex justify-between">
        <div className="logo flex items-center space-x-4 mr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="text font-semibold -sm text-2xl focus:outline-none">
            <button>
              <Link href="/">R2US</Link>
            </button>
          </div>
        </div>
        <div className=" menu flex justify-end  items-center  flex-1 space-x-4">
          {status !== "logined" ? (
            <Link href="/login">
              <a>Login</a>
            </Link>
          ) : (
            <img
              className="h-8"
              src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg"
              alt="Name"
            />
          )}
        </div>
      </div>
      <div>
        <SideBar />
        <style
          dangerouslySetInnerHTML={{
            __html: "\n    body{\n      background-color:white;\n    }\n  ",
          }}
        />
      </div>
    </header>
  );
}

export default UserHeader;
