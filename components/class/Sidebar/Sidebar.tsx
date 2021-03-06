import React from "react";

import Link from "next/link";

import style from "./style.module.css";

function Sidebar(props: { param: string; id: string }) {
  const SideBarData = [
    {
      Title: "Thông tin",
      Link: `/group/${props.id}`,
      Borderright: true,
    },
    {
      Title: "Đề thi",
      Link: `/group/${props.id}/exam`,
      Borderright: false,
    },
    {
      Title: "Tài liệu",
      Link: `/group/${props.id}/document`,
      Borderright: false,
    },
    {
      Title: "Đề cương",
      Link: `/group/${props.id}/outline`,
      Borderright: true,
    },
    {
      Title: "Giáo viên",
      Link: `/group/${props.id}/teacher`,
      Borderright: false,
    },
    {
      Title: "Môn học",
      Link: `/group/${props.id}/course`,
      Borderright: true,
    },
    {
      Title: "Thành viên",
      Link: `/group/${props.id}/member`,
      Borderright: false,
    },
  ];

  return (
    <div className={style.sidebar}>
      {SideBarData.map((val) => (
        <div key={val.Title} className="flex">
          <Link href={val.Link}>
            <button
              className={
                props.param === val.Link
                  ? style.button_highlight
                  : style.button_normal
              }
            >
              <a
                className={
                  props.param === val.Link
                    ? style.button__text_highlight
                    : style.button__text_normal
                }
              >
                {val.Title}
              </a>
            </button>
          </Link>
          <div className={val.Borderright ? style.line : undefined} />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
