import React from "react";
import ConvertTime from "../ConvertTime";
import style from "./style.module.css";

type classInfo = {
  academicId: {
    schoolyear: string;
  };
  courseId: {
    courseName: string;
    facultyId: {
      facultyName: string;
    };
  };
  className: string;
  instructorId: {
    instructorName: string;
  };
  updateAt: string;
};

const Title = function (props: { data: classInfo }) {
  return (
    <div className={style.title}>
      <div className={style.page}>
        <div className={style.title__upper}>
          <div className={style.grid}>
            <div className={style.title__upper__left}>
              <div className={style.title__upper__left__image}>
                {/* Ảnh đại diện môn */}
                <svg
                  width="60"
                  height="50"
                  viewBox="0 0 60 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M57.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 47.5C0 48.1631 0.263392 48.7989 0.732233 49.2678C1.20107 49.7366 1.83696 50 2.5 50H57.5C58.163 50 58.7989 49.7366 59.2678 49.2678C59.7366 48.7989 60 48.1631 60 47.5V2.5C60 1.83696 59.7366 1.20107 59.2678 0.732233C58.7989 0.263392 58.163 0 57.5 0ZM55 45H50V42.5H37.5V45H5V5H55V45ZM25.725 19.275C25.725 18.1412 26.1754 17.0538 26.9771 16.2521C27.7788 15.4504 28.8662 15 30 15C32.375 15 34.275 16.925 34.275 19.275C34.275 21.65 32.375 23.575 30 23.575C27.625 23.575 25.725 21.65 25.725 19.275ZM14.275 23.225C14.275 21.45 15.725 20 17.5 20C18.3553 20 19.1756 20.3398 19.7804 20.9446C20.3852 21.5494 20.725 22.3697 20.725 23.225C20.725 25 19.275 26.425 17.5 26.425C15.725 26.425 14.275 25 14.275 23.225ZM39.275 23.225C39.275 22.3697 39.6148 21.5494 40.2196 20.9446C40.8244 20.3398 41.6447 20 42.5 20C43.3553 20 44.1756 20.3398 44.7804 20.9446C45.3852 21.5494 45.725 22.3697 45.725 23.225C45.725 25 44.275 26.425 42.5 26.425C40.725 26.425 39.275 25 39.275 23.225ZM50 32.85V35H10V32.85C10 30.5 13.875 28.575 17.5 28.575C18.875 28.575 20.275 28.85 21.5 29.325C23.375 27.6 26.75 26.425 30 26.425C33.25 26.425 36.625 27.6 38.5 29.325C39.725 28.85 41.125 28.575 42.5 28.575C46.125 28.575 50 30.5 50 32.85Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>

              {/* Chữ của môn */}
              <div className={style.title__upper__left__text}>
                {props.data.className}
              </div>
            </div>

            <div className={style.title__upper__right}>
              <div className="flex">
                <div className={style.title__upper__right__image}>
                  {/* Yêu thích môn? */}
                  <img src="/icons/heart.svg" width="24" className="py-1" />
                </div>

                {/* Nút quản trị viên */}
                <button className="w-36 h-8 rounded-md border-solid border border-indigo-500">
                  <div className="font-Inter font-semibold text-base leading-6 text-indigo-500">
                    Quản trị viên
                  </div>
                </button>
              </div>
            </div>
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
              {props.data.academicId.schoolyear}
            </div>

            {/* Khoa */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/facuty.svg" width="20" />
              </div>
              {props.data.courseId.facultyId.facultyName}
            </div>

            {/* Môn học */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/course.svg" width="20" />
              </div>
              {props.data.courseId.courseName}
            </div>

            {/* Giáo viên */}
            <div className={style.title__lower__information__group}>
              <div className={style.title__lower__information__image}>
                <img src="/icons/teacher.svg" width="20" />
              </div>
              {props.data.instructorId.instructorName}
            </div>
          </div>

          {/* Update */}
          <div className={style.title__lower__right}>
            <div className={style.title__lower__right__text}>
              <div className={style.title__lower__right__text_highlight}>
                Cập nhật lần cuối:
              </div>
              <div className={style.title__lower__right__text_normal}>
                <ConvertTime time={props.data.updateAt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
