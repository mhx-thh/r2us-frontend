import React, { useState } from "react";
import Swal from "sweetalert2";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type createStatus = "loading" | "done";

const GroupCreateModal = function ({ data }: any) {
  const token = useAppSelector(selectToken);

  const [createStatus, setCreateStatus] = useState<createStatus>("done");

  const [facultyId, setFacultyId] = useState("");
  const [create, setCreate] = useState({
    academicId: "",
    courseId: "",
    instructorId: "",
    className: "",
  });

  const handleFacultyId = (e) => {
    setFacultyId(e.target.value);
    setCreate({
      ...create,
      courseId: "",
      instructorId: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setCreate({
      ...create,
      [name]: val,
    });
  };

  const ClickReset = () => {
    setCreate({
      academicId: "",
      courseId: "",
      instructorId: "",
      className: "",
    });
  };

  const ClickRecommend = (e) => {
    setCreate({
      ...create,
      className: e.target.value,
    });
  };

  const ClickSend = (e) => {
    async function postGroup() {
      setCreateStatus("loading");
      const res = await GroupAPI.postResource(create, token);
      setCreateStatus("done");
      if (res?.data?.status === "success") {
        Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thành công." });
      } else {
        Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thất bại." });
        e.preventDefault();
      }
    }

    if (
      create.academicId !== "" &&
      create.className !== "" &&
      create.courseId !== "" &&
      create.instructorId !== "" &&
      createStatus === "done"
    ) {
      postGroup();
    }
  };

  return (
    <form onSubmit={ClickSend}>
      <div className="absolute bg-indigo-200 w-full h-28 left-0 top-0 rounded-t-2xl">
        {/* Title */}
        <div className="flex px-32 py-10">
          <img className="my-1" src="/icons/group.svg" width="38" height="39" />
          <h1 className="p-1 mx-4  text-3xl leading-9 font-medium text-indigo-500 tracking-normal">
            Tạo nhóm
          </h1>
        </div>

        {/* SchoolYear */}
        <div className="flex pl-48 mb-4">
          <img
            className="m-3 mt-4"
            src="/icons/calender.svg"
            width="23"
            height="24"
          />
          <select
            className="px-2 m-2 bg-indigo-50 w-96 rounded-2xl h-10 border border-solid border-indigo-500"
            name="academicId"
            onChange={handleChange}
          >
            <option value="">Chọn năm học</option>
            {data.schoolyear.result.map((val, key) => (
              <option value={val._id} key={key}>
                {val.schoolyear} - học kì {val.semester}
              </option>
            ))}
          </select>
          <img
            className="m-3 mt-4"
            height="26"
            width="26"
            src="/icons/information.svg"
          />
        </div>

        {/* Faculty */}
        <div className="flex pl-48 top-0 mb-4">
          <img
            className="m-3 mt-4"
            height="23"
            width="24"
            src="/icons/facuty.svg"
          />
          <select
            className="px-2 m-2 bg-indigo-50 w-96 rounded-2xl h-10 border border-solid border-indigo-500"
            onChange={handleFacultyId}
          >
            <option value="">Chọn khoa</option>
            {data.faculty.result.map((val, key) => (
              <option value={val._id} key={key}>
                {val.facultyName}
              </option>
            ))}
          </select>
          <img
            className="m-3 mt-4"
            height="26"
            width="26"
            src="/icons/information.svg"
          />
        </div>

        {/* Course */}
        <div className="flex pl-48 top-0 mb-4">
          <img
            className="m-3 mt-4"
            height="23"
            width="24"
            src="/icons/course.svg"
          />
          <select
            className="px-2 m-2 bg-indigo-50 w-96 rounded-2xl h-10 border border-solid border-indigo-500"
            name="courseId"
            onChange={handleChange}
          >
            <option value="">Chọn môn</option>
            {data.course.result.map((val, key) =>
              facultyId === val.facultyId._id ? (
                <option value={val._id} key={key}>
                  {val.courseName}
                </option>
              ) : (
                <div></div>
              )
            )}
          </select>
          <img
            className="m-3 mt-4"
            height="26"
            width="26"
            src="/icons/information.svg"
          />
        </div>

        {/* Teacher */}
        <div className="flex pl-48 top-0 mb-4 active:border-none">
          <img
            className="m-3 mt-4"
            height="23"
            width="24"
            src="/icons/teacher.svg"
          />
          <select
            className="px-2 m-2 bg-indigo-50 w-96 rounded-2xl h-10 border border-solid border-indigo-500"
            name="instructorId"
            onChange={handleChange}
          >
            <option value="">Chọn giáo viên</option>
            {data.teacher.data.result.map((val, key) =>
              val.courseId.map((id) =>
                id._id === create.courseId ? (
                  <option value={val.id} key={key}>
                    {val.instructorName}
                  </option>
                ) : (
                  <div></div>
                )
              )
            )}
          </select>
          <img
            className="m-3 mt-4"
            height="26"
            width="26"
            src="/icons/information.svg"
          />
        </div>

        {/* className */}
        <div className="flex pl-48 top-0 mb-4">
          <div className="flex">
            <img
              className="m-3 mt-4"
              height="23"
              width="24"
              src="/icons/write_pencil.svg"
            />
            <input
              className="px-2 m-2 bg-indigo-50 w-96 rounded-2xl h-10 border border-solid border-indigo-500"
              placeholder="Nhập tên nhóm"
              name="className"
              onChange={handleChange}
              value={create.className}
            />
            <img
              className="m-3 mt-4"
              height="26"
              width="26"
              src="/icons/information.svg"
            />
          </div>
        </div>

        {/* Recommend */}
        <div className="flex">
          <p className="pl-48 pr-8 text-base leading-6 font-semibold tracking-normal">
            Gợi ý:{" "}
          </p>
          <button
            className="text-base leading-6 font-normal tracking-normal text-indigo-500 pr-2"
            onClick={ClickRecommend}
            value={"Kỹ thuật lập trình - 20/3"}
          >
            Kỹ thuật lập trình - 20/3,
          </button>
          <button
            onClick={ClickRecommend}
            className="text-base leading-6 font-normal tracking-normal text-indigo-500 pr-2"
            value={"YCPM - 18/2"}
          >
            {" "}
            YCPM - 18/2
          </button>
        </div>

        {/* Button Reset */}
        <div className="flex m-3 pl-64 pt-5">
          <button type="reset" className="relative left-8" onClick={ClickReset}>
            <img src="/icons/buttonReset.svg" />
          </button>
          <button type="submit" className="relative left-16">
            <img src="/icons/buttonSend.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default GroupCreateModal;
