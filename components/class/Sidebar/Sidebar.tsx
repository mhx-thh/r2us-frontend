import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus, selectUser } from "redux/userSlice";
import styled from "styled-components";

interface Props {
  param: string;
}

function Sidebar(props: { param: string; id: string }) {
  const SideBarData = [
    {
      Title: "Thông tin",
      Link: `/groups/class/${props.id}`,
      Borderright: true,
    },
    {
      Title: "Đề thi",
      Link: `/groups/class/${props.id}/exam`,
      Borderright: false,
    },
    {
      Title: "Tài liệu",
      Link: `/groups/class/${props.id}/document`,
      Borderright: false,
    },
    {
      Title: "Đề cương môn học",
      Link: `/groups/class/${props.id}/outline`,
      Borderright: true,
    },
    {
      Title: "Giáo viên",
      Link: `/groups/class/${props.id}/teacher`,
      Borderright: false,
    },
    {
      Title: "Môn học",
      Link: `/groups/class/${props.id}/course`,
      Borderright: true,
    },
    {
      Title: "Thành viên",
      Link: `/groups/class/${props.id}/member`,
      Borderright: false,
    },
  ];

  return (
    <div className="items-center text-center justify-center w-full fixed inline-flex">
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
