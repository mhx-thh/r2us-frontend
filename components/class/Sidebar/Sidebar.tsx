import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus, selectUser } from "redux/userSlice";
import style from "./style.module.css";

interface Props {
  param: string;
}

function Sidebar(props: { param: string; id: string }) {
  console.log("ID: ", props.id);
  const SideBarData = [
    {
      Title: "Thông tin",
      Link: `/groups/${props.id}`,
      Borderright: true,
    },
    {
      Title: "Đề thi",
      Link: `/groups/${props.id}/exam`,
      Borderright: false,
    },
    {
      Title: "Tài liệu",
      Link: `/groups/${props.id}/document`,
      Borderright: false,
    },
    {
      Title: "Đề cương môn học",
      Link: `/groups/${props.id}/outline`,
      Borderright: true,
    },
    {
      Title: "Giáo viên",
      Link: `/groups/${props.id}/teacher`,
      Borderright: false,
    },
    {
      Title: "Môn học",
      Link: `/groups/${props.id}/course`,
      Borderright: true,
    },
    {
      Title: "Thành viên",
      Link: `/groups/${props.id}/member`,
      Borderright: false,
    },
  ];

  return (
    <div className={style.SideBar}>
      {SideBarData.map((val) => (
        <button
          key={val.Title}
          className="text  -sm font-semibold flex items-center focus:outline-none m-2 mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-3 py-3 font-semibold p-11"
        >
          <Link href={val.Link}>
            <a>{val.Title}</a>
          </Link>
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
