import React, { useEffect, useState } from "react";

import InputField from "components/class/page/information/inputfield";
import Title from "components/class/Title/Title";
import Sidebar from "components/class/Sidebar/Sidebar";
import TitleField from "./titlefield";

import style from "./style.module.css";
import { classInfo, titleGroup } from "lib/models";

import userApi from "api/userApi";
import GroupAPI from "api/groupAPI";

import Link from "next/link";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type AppProps = {
  data: classInfo;
  role: string;
  initTitle: titleGroup;
};

const InformationPage = function (props: AppProps) {
  const [info, setInfo] = useState(props.data);
  const [role, setRole] = useState(props.role);
  const [title, setTitle] = useState(props.initTitle);
  const [enroll, setEnroll] = useState(false);

  const [dataPatch, setDataPatch] = useState({
    className: props.data.className,
    description: props.data.description,
  });

  const router = useRouter();
  const path = router.asPath;
  const [name, setName] = useState(props.data.className); // Để tạm để effect

  const token = useAppSelector(selectToken);

  useEffect(() => {
    setEnroll(props.role === "" || props.role === undefined ? false : true);
    setRole(props.role);
  }, [props.role]);

  // Effect cái này
  useEffect(() => {
    async function fetchSlug() {
      try {
        const res = await GroupAPI.getGroups();
        const data = res?.data?.data;
        data?.result.map(
          (val) =>
            val._id === props.data._id &&
            (setInfo(val),
            window.history.replaceState({}, null, `/group/${val.slug}`),
            setTitle({ ...title, updatedAt: val.updatedAt }))
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchSlug();
  }, [name]);

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

  const ClickUpdate = async () => {
    await GroupAPI.patchClass(dataPatch, props.data._id, token);
    setTitle({
      ...title,
      className: dataPatch.className,
    });
    setName(dataPatch.className); // để tạm
  };

  const ClickDelete = () => {
    GroupAPI.deleteClass(props.data._id, token);
  };

  return (
    <div>
      <Title
        initTitle={title}
        role={!enroll ? "" : enroll && role === "" ? " " : role}
      />
      {/* Vẫn còn lỗi mất hiển thị thông tin khi thay đổi tên lớp*/}
      <Sidebar param={path} id={info.slug} />
      <hr />
      <div className={style.page}>
        <div className={style.grid}>
          {/* Information field */}
          <div className={style.field}>
            {props.role === "provider" ? (
              <div className={style.field__m}>
                <div onChange={handleChangeClassName}>
                  <InputField
                    name="Tên nhóm"
                    icon="/icons/write_pencil.svg"
                    editable
                    data={dataPatch.className}
                    multiline={false}
                  />
                </div>
                <div onChange={handleChangeDescription}>
                  <InputField
                    name="Mô tả"
                    icon="/icons/descriptionIcon.svg"
                    editable
                    data={dataPatch.description}
                    multiline={true}
                  />
                </div>
              </div>
            ) : (
              <div className={style.field__m}>
                <InputField
                  icon="/icons/write_pencil.svg"
                  name="Tên nhóm"
                  editable={false}
                  data={dataPatch.className}
                  multiline={false}
                />
                <InputField
                  name="Mô tả"
                  icon="/icons/descriptionIcon.svg"
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
              <TitleField
                name="Nhóm học"
                data={props.data.courseId.courseName}
              />
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
                  <button className={style.button} onClick={ClickDelete}>
                    <Link href="/">
                      <a>
                        <img src="/icons/buttonReset.svg" />
                      </a>
                    </Link>
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
    </div>
  );
};

export default InformationPage;
