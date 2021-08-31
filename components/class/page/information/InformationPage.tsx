import React from "react";

import InputField from "components/class/page/information/inputfield";
import TitleField from "./titlefield";
import style from "./style.module.css";
import { classInfo } from "lib/models";

import userApi from "api/userApi";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type AppProps = {
  data: classInfo;
  role: string;
};
const InformationPage = function (props: AppProps) {
  const token = useAppSelector(selectToken);
  const ClickEnroll = () => {
    userApi.postEnroll({ classId: props.data._id }, token);
  };

  return (
    <div className={style.page}>
      <div className={style.grid}>
        {/* Information field */}
        <div className={style.field}>
          <div className={style.field__m}>
            <InputField
              name="Tên nhóm"
              editable
              data={props.data.className}
              multiline={false}
            />
            <InputField
              name="Mô tả"
              editable
              data={props.data.description}
              multiline={true}
            />
          </div>
        </div>

        {/* General Information */}
        <div className={style.title}>
          {/* SchoolYear */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/calender.svg" width="25" />
            </div>
            <TitleField
              name="Năm học"
              data={`${props.data.academicId.schoolyear} - học kì ${props.data.academicId.semester}`}
            />
          </div>

          {/* Faculty */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/facuty.svg" width="25" />
            </div>
            <TitleField
              name="Môn học"
              data={props.data.courseId.facultyId.facultyName}
            />
          </div>

          {/* Course */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/course.svg" width="25" />
            </div>
            <TitleField name="Nhóm học" data={props.data.courseId.courseName} />
          </div>

          {/* Giáo viên */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/teacher.svg" width="25" />
            </div>
            <TitleField
              name="Giáo viên"
              data={props.data.instructorId.instructorName}
            />
          </div>

          {/* Button Enroll  */}
          {props.role === "" ? (
            <div className={style.pbutton}>
              <button className={style.button} onClick={ClickEnroll}>
                Tham gia
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
