import Link from "next/link";
import React from "react";
import style from "./style.module.css";

type AppProps = {
  param: string;
};

function Sidebar(props: AppProps) {
  const SideBarData = [
    {
      Title: "Thông tin",
      Link: "/user",
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
      Title: "Nhóm lớp của tôi",
      Link: "/user/mygroup",
    },
  ];

  return (
    <div className={style.sidebar}>
      {SideBarData.map((val) => (
        <div key={val.Title} className="flex">
          <button
            className={
              props.param === val.Link ? style.button__highlight : style.button
            }
          >
            <Link href={val.Link}>
              <a
                className={
                  props.param === val.Link
                    ? style.button__text_highlight
                    : style.button__text_normal
                }
              >
                {val.Title}
              </a>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
