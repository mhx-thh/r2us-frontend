import React, { useEffect, useState } from "react";

import InputField from "components/class/page/information/inputfield";
import Title from "components/class/Title/Title";
import Sidebar from "components/class/Sidebar/Sidebar";
import TitleField from "./titlefield";

import Swal from "sweetalert2";

import style from "./style.module.css";
import { classInfo, titleGroup } from "lib/models";

import userApi from "api/userApi";
import GroupAPI from "api/groupAPI";

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
  const [flag, setFlag] = useState(false);

  const [dataPatch, setDataPatch] = useState({
    className: props.data.className,
    description: props.data.description,
  });

  const token = useAppSelector(selectToken);
  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    setEnroll(props.role === "" || props.role === undefined ? false : true);
    setRole(props.role);
  }, [props.role]);

  useEffect(() => {
    async function fetchSlug() {
      Swal.fire({
        title: "Đang lấy dữ liệu",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await GroupAPI.getGroups();
        const data = res?.data?.data;
        data?.result.map(
          (val) =>
            val._id === props.data._id &&
            (setInfo(val),
            setTitle({
              ...title,
              className: val.className,
              updatedAt: val.updatedAt,
            }),
            router.push(`/group/${val.slug}`))
        );
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchSlug();
  }, [flag]);

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

  const ClickEnroll = async () => {
    try {
      setEnroll(true);
      await userApi.postEnroll({ classId: props.data._id }, token);
      Swal.fire(
        "Tham gia lớp học thành công",
        `Đã thêm bạn vào danh sách lớp ${dataPatch.className}`,
        "success"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const ClickUpdate = async () => {
    try {
      await GroupAPI.patchClass(dataPatch, props.data._id, token);
      setFlag(!flag);
      Swal.fire(
        "Cập nhập thành công",
        `Đã cập nhập thông tin lớp ${dataPatch.className}`,
        "success"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const ClickDelete = async () => {
    try {
      await Swal.fire({
        title: `Bạn chắc chắn muốn xóa lớp 
        ${title.className} ??`,
        text: "Bạn sẽ không thể hoàn tác nếu đã xóa lớp này !!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Tôi chắc chắn!",
        cancelButtonText: "Quay lại",
      }).then(async function (result) {
        if (result.isConfirmed) {
          await GroupAPI.deleteClass(props.data._id, token);
          Swal.fire(
            "Xóa thành công",
            `Lớp học "${title.className}"`,
            "success"
          );
          router.push("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Title & SideBar */}
      <Title
        initTitle={title}
        role={!enroll ? "" : enroll && role === "" ? " " : role}
      />
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
                    Chỉnh sửa
                  </button>
                  <button
                    className={style.button__delete}
                    onClick={ClickDelete}
                  >
                    Xóa lớp
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
