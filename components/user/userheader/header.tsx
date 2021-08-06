import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";
import style from "./style.module.css";
// import styled from "styled-components";

interface Props {
  param: string;
}

function UserHeader({ param }: Props) {
  // const Button = styled.button`
  //   color: black;
  //   background-color: #A5B4FC;
  //   border: 1px solid #D1D5DB;
  //   box-sizing: border-box;
  //   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  //   border-radius: 6px;
  // `;
  // const ButtonToggle = styled(Button)`
  //   opacity: 0.4;
  //   ${({ active }) =>
  //     active &&
  //     `
  //   opacity: 1;
  // `}
  // `;
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
      Link: "/user/myclass",
    },
  ];
  const [active, setActive] = useState(
    param === "/user" ? SideBarData[0].Link : param
  );
  function SideBar() {
    return (
      <div className={style.BG}>
        <div className="wrap">
          <div className="inline-block">
            <img className={style.circle} src='https://img4.thuthuatphanmem.vn/uploads/2020/08/27/anh-dai-dien-shiba-chibi-de-thuong_052908671.jpg'></img>
          </div>
          <div className={style.Name}>
            <div className={style.text1}>tên người</div>
            <div className={style.text2}> MSSV</div>
            <div className={style.text2}>email</div>
          </div>
        </div>
        <div className="items-center text-center   inline-flex ">

          {SideBarData.map((val) => (
            <button
              className="text-xl font-semibold flex items-center focus:outline-none m-2 mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-3 py-3 font-semibold p-11"

            >
              <Link href={val.Link}>
                <a>{val.Title}</a>
              </Link>
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (<>
    <SideBar />
    <style
      dangerouslySetInnerHTML={{
        __html: "\n    body{\n      background-color:white;\n    }\n  ",
      }}
    />
  );
}

export default UserHeader;
