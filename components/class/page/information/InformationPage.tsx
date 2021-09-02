import React, { useState } from "react";

import InputField from "components/class/page/information/inputfield";
import TitleField from "./titlefield";
import style from "./style.module.css";
import { classInfo } from "lib/models";

import userApi from "api/userApi";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import GroupAPI from "api/groupAPI";

type AppProps = {
  data: classInfo;
  role: string;
};

const InformationPage = function (props: AppProps) {
  const token = useAppSelector(selectToken);
  const [enroll, setEnroll] = useState(props.role === undefined ? false : true);
  const [dataPatch, setDataPatch] = useState({
    className: props.data.className,
    description: props.data.description,
  });

  const handleChangeClassName = (e) => {
    setDataPatch({
      ...dataPatch,
      className: e.target.value,
    });
  };

  const handleChangeDescription = (e) => {
    setDataPatch({
      ...dataPatch,
      description: e.target.value,
    });
  };

  const ClickEnroll = () => {
    setEnroll(true);
    userApi.postEnroll({ classId: props.data._id }, token);
  };

  // vẫn chưa chạy được API cập nhập thông tin khóa học
  const ClickUpdate = () => {
    GroupAPI.patchClass(
      {
        data: {
          className: dataPatch.className,
          description: dataPatch.description,
        },
      },
      props.data._id,
      token
    );
  };

  return (
    <div className={style.page}>
      <div className={style.grid}>
        {/* Information field */}
        <div className={style.field}>
          {props.role === "provider" ? (
            <div className={style.field__m}>
              <div onChange={handleChangeClassName}>
                <InputField
                  name="Tên nhóm"
                  editable
                  data={dataPatch.className}
                  multiline={false}
                />
              </div>
              <div onChange={handleChangeDescription}>
                <InputField
                  name="Mô tả"
                  editable
                  data={dataPatch.description}
                  multiline={true}
                />
              </div>
            </div>
          ) : (
            <div className={style.field__m}>
              <InputField
                name="Tên nhóm"
                editable={false}
                data={dataPatch.className}
                multiline={false}
              />

              <InputField
                name="Mô tả"
                editable={false}
                data={dataPatch.description}
                multiline={true}
              />
            </div>
          )}
        </div>

        {/* General Information */}
        <div className={style.title}>
          {/* SchoolYear */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/calender.svg" width="23" />
            </div>
            <TitleField
              name="Năm học"
              data={`${props.data.academicId.schoolyear} - học kì ${props.data.academicId.semester}`}
            />
          </div>

          {/* Faculty */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/facuty.svg" width="23" />
            </div>
            <TitleField
              name="Môn học"
              data={props.data.courseId.facultyId.facultyName}
            />
          </div>

          {/* Course */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/course.svg" width="23" />
            </div>
            <TitleField name="Nhóm học" data={props.data.courseId.courseName} />
          </div>

          {/* Giáo viên */}
          <div className={style.title__input}>
            <div className={style.title__image}>
              <img src="/icons/teacher.svg" width="23" />
            </div>
            <TitleField
              name="Giáo viên"
              data={props.data.instructorId.instructorName}
            />
          </div>

          {/* Button Enroll  */}
          {enroll ? (
            props.role === "provider" && (
              <div className={style.pbutton}>
                <button className={style.button} onClick={ClickUpdate}>
                  <img src="/icons/buttonSend.svg" />
                </button>
              </div>
            )
          ) : (
            <div className={style.pbutton}>
              <button className={style.button} onClick={ClickEnroll}>
                Tham gia
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
