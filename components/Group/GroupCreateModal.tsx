import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import GroupAPI from "api/groupAPI";
import AcademicAPI from "api/academicApi";
import userApi from "api/userApi";
import { apiV1, get } from "api/generic";
import InstructorAPI from "api/instructorApi";
import courseApi from "api/courseApi";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type Api = {
  academicId: string;
  courseId: string;
  instructorId: string;
  className: string;
};

type classStatus = "loading" | "done" | "gotNone";
type dataCreate = {
  schoolyear: any;
  faculty: any;
  course: any;
  teacher: any;
};

const GroupCreateModal = function () {
  const token = useAppSelector(selectToken);

  // Get data for create modal
  const [data, setData] = useState<dataCreate>();

  useEffect(() => {
    async function fetchData() {
      const schoolyear = await AcademicAPI.getSchoolYears();
      const falcuty = await AcademicAPI.getFalcuties();

      const data = {
        schoolyear: schoolyear.data.data,
        faculty: falcuty.data.data,
        course: [],
        teacher: [],
      };

      setData(data);
    }

    fetchData();
  }, []);

  const [facultyId, setFacultyId] = useState("");

  const [classStatus, setClassStatus] = useState<classStatus>("loading");
  const [group, setGroup] = useState([]);

  const initCreate: Api = {
    academicId: "",
    courseId: "",
    instructorId: "",
    className: "",
  };

  const [create, setCreate] = useState<Api>(initCreate);

  useEffect(() => {
    async function fetchGroup({ courseId, instructorId, academicId }: any) {
      const url = `${apiV1}/groups/class?courseId__eq=${courseId}&instructorId__eq=${instructorId}&academicId__eq=${academicId}`;
      const data = await get(url, "");
      setGroup(data.data.data.result);
    }

    setClassStatus("loading");

    if (
      create.academicId !== "" &&
      create.courseId !== "" &&
      create.instructorId !== ""
    ) {
      fetchGroup({
        courseId: create.courseId,
        instructorId: create.instructorId,
        academicId: create.academicId,
      });
    }
  }, [create.academicId, create.courseId, create.instructorId]);

  useEffect(() => {
    if (
      !(
        create.academicId !== "" &&
        create.courseId !== "" &&
        create.instructorId !== ""
      )
    ) {
      setClassStatus("loading");
    } else if (group.length == 0) {
      setClassStatus("gotNone");
    } else {
      setClassStatus("done");
      setCreate({ ...create, className: group[0].className });
    }
  }, [group]);

  const handleAcademicId = (e) => {
    setCreate({
      ...create,
      academicId: e.target.value,
      className: "",
    });
  };

  const handleFacultyId = (e) => {
    setFacultyId(e.target.value);
    setCreate({ ...create, courseId: "", instructorId: "", className: "" });
    data.course = [];
    data.teacher = [];

    async function fetchCourse() {
      const course = await courseApi.getCoursetoFaculty(e.target.value);

      setData({
        ...data,
        course: course?.data?.data,
        teacher: [],
      });
    }

    fetchCourse();
  };

  const handleCourseId = (e) => {
    data.teacher = [];
    setCreate({
      ...create,
      courseId: e.target.value,
      instructorId: "",
      className: "",
    });

    async function fetchInstructor() {
      const instructor = await InstructorAPI.getInstructortoCourse(
        e.target.value
      );

      setData({
        ...data,
        teacher: instructor?.data?.data,
      });
    }

    fetchInstructor();
  };

  const handleInstructor = (e) => {
    setCreate({ ...create, instructorId: e.target.value, className: "" });
  };

  const handleClasssName = (e) => {
    setCreate({
      ...create,
      className: e.target.value,
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
      // setCreateStatus("loading");
      e.preventDefault();
      console.log(create);
      const res = await GroupAPI.postClass(create, token);
      // setCreateStatus("done");
      // if (res?.data?.status === "success") {
      //   Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thành công." });
      // } else {
      //   Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thất bại." });
      //   e.preventDefault();
      // }
    }

    if (
      create.academicId !== "" &&
      create.className !== "" &&
      create.courseId !== "" &&
      create.instructorId !== ""
      // createStatus === "done"
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
            onChange={handleAcademicId}
            value={create.academicId}
          >
            <option value="">Chọn năm học</option>
            {data?.schoolyear?.result?.map((val, key) => (
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
            value={facultyId}
          >
            <option value="">Chọn khoa</option>
            {data?.faculty?.result?.map((val, key) => (
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
            onChange={handleCourseId}
            value={create.courseId}
          >
            <option value="">Chọn môn</option>
            {data?.course?.result?.map((val, key) => (
              <option value={val._id} key={key}>
                {val.courseName}
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
            onChange={handleInstructor}
            value={create.instructorId}
          >
            <option value="">Chọn giáo viên</option>
            {data?.teacher?.result?.map((val, key) => (
              <option value={val._id} key={key}>
                {val.instructorName}
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
              onChange={handleClasssName}
              value={create.className}
              disabled={classStatus === "gotNone" ? false : true}
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

        <div className="flex m-3 pl-64 pt-5">
          {/* Button Reset */}
          <button type="reset" className="relative left-8" onClick={ClickReset}>
            <img src="/icons/buttonReset.svg" />
          </button>
          {/* Button submit */}
          <button
            type="submit"
            className="relative left-16"
            disabled={classStatus === "gotNone" ? false : true}
          >
            <img src="/icons/buttonSend.svg" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default GroupCreateModal;
