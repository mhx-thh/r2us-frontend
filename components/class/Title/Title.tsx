import React from "react";
import ConvertTime from "components/ConvertTime";

import { titleGroup } from "lib/models";
import style from "./style.module.css";

type AppProps = {
  initTitle: titleGroup;
  role: string;
};

const Title = function (props: AppProps) {
  return (
    <div className={style.title}>
      <div className={style.page}>
        <div className={style.title__upper}>
          <div className={style.grid}>
            <div className={style.title__upper__left}>
              <div className={style.title__upper__left__image}>
                {/* Ảnh đại diện môn */}
                <img src="/icons/group.svg" width="60" />
              </div>

              {/* Chữ của môn */}
              <div className={style.title__upper__left__text}>
                {props.initTitle.className}
              </div>
            </div>
            {props.role !== "" && (
              <div className={style.title__upper__right}>
                <div className="flex">
                  <div className={style.title__upper__right__image}>
                    {/* Yêu thích môn? */}
                    <img src="/icons/heart.svg" width="24" className="py-1" />
                  </div>

                  {/* Vai trò */}

                  <button className="w-36 h-8 rounded-md border-solid border border-indigo-500">
                    <div className="font-Inter font-semibold text-base leading-6 text-indigo-500">
                      {props.role === "member" ? "Thành viên" : "Quản trị viên"}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={style.title__lower}>
          {/* Thông tin lớp */}
          <div className={style.title__lower__information}>
            {/* Năm học */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/calender.svg" width="20" />
              </div>
              {props.initTitle?.academicId?.schoolyear}
            </div>

            {/* Khoa */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/facuty.svg" width="20" />
              </div>
              {props.initTitle?.courseId?.facultyId?.facultyName}
            </div>

            {/* Môn học */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/course.svg" width="20" />
              </div>
              {props.initTitle?.courseId?.courseName}
            </div>

            {/* Giáo viên */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/teacher.svg" width="20" />
              </div>
              {props.initTitle?.instructorId?.instructorName}
            </div>
          </div>

          {/* Update */}
          <div className={style.title__lower__right}>
            <div className={style.title__lower__right__text}>
              <div className={style.title__lower__right__text_highlight}>
                Cập nhật lần cuối:
              </div>
              <div className={style.title__lower__right__text_normal}>
                <ConvertTime time={props.initTitle.updatedAt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
