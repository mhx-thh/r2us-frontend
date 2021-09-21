import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import GroupAPI from "api/groupAPI";
import { apiV1, get } from "api/generic";
import AcademicAPI from "api/academicApi";
import userApi from "api/userApi";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import courseApi from "api/courseApi";
import InstructorAPI from "api/instructorApi";

type Api = {
  reviewType: "Class" | "Instructor";
  reviewTitle: string;
  review: string;
  classId: string;
};

type classStatus = "loading" | "done" | "gotNone";
type enrollStatus = "enrolled" | "notEnrolled";
type createStatus = "loading" | "done";
type dataCreate = {
  schoolyear: any;
  falcuty: any;
  course: any;
  teacher: any;
};

const CreateReview = function (handleCreate: any) {
  const token = useAppSelector(selectToken);

  // Get data for create modal
  const [data, setData] = useState<dataCreate>();
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const schoolyear = await AcademicAPI.getSchoolYears();
      const falcuty = await AcademicAPI.getFalcuties();

      const res = await userApi.getMyClass(token);
      const myClass = res?.data?.data?.result;

      const data = {
        schoolyear: schoolyear.data.data,
        falcuty: falcuty.data.data,
        course: [],
        teacher: [],
      };

      setData(data);
      setMyClass(myClass);
    }

    fetchData();
  }, []);

  const [schoolyear, setSchoolyear] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [instructorId, setInstructorId] = useState("");

  const [className, setClassName] = useState("");
  const [classStatus, setClassStatus] = useState<classStatus>("loading");
  const [group, setGroup] = useState([]);
  const [enrollStatus, setEnrollStatus] = useState<enrollStatus>("enrolled");

  const [createStatus, setCreateStatus] = useState<createStatus>("done");

  const handleClassName = () => {
    setClassName(group[0].className);
    setCreate({
      ...create,
      classId: group[0]._id,
    });
  };

  const initCreate: Api = {
    reviewType: "Class",
    reviewTitle: "",
    review: "",
    classId: "",
  };

  const [create, setCreate] = useState<Api>(initCreate);

  useEffect(() => {
    async function fetchGroup({ courseId, instructorId, academicId }: any) {
      const url = `${apiV1}/groups/class?courseId__eq=${courseId}&instructorId__eq=${instructorId}&academicId__eq=${academicId}`;
      const data = await get(url, "");
      setGroup(data.data.data.result);
    }

    setEnrollStatus("enrolled");
    setClassStatus("loading");

    if (schoolyear !== "" && courseId !== "" && instructorId !== "") {
      fetchGroup({
        courseId: courseId,
        instructorId: instructorId,
        academicId: schoolyear,
      });
    }
  }, [schoolyear, courseId, instructorId]);

  useEffect(() => {
    if (!(schoolyear !== "" && courseId !== "" && instructorId !== "")) {
      setClassStatus("loading");
    } else if (group.length == 0) {
      setClassStatus("gotNone");
    } else {
      handleClassName();
      setClassStatus("done");
      setEnrollStatus("notEnrolled");
      myClass.map((val) => {
        console.log(val, " ", group[0]);
        if (val.classId._id === group[0]._id) {
          setEnrollStatus("enrolled");
        }
      });
    }
  }, [group]);

  const handleTypeReview = (e) => {
    setCreate({
      ...create,
      reviewType: e.target.value,
    });
  };

  const handleReviewTitle = (e) => {
    setCreate({
      ...create,
      reviewTitle: e.target.value,
    });
  };

  const handleReview = (e) => {
    setCreate({
      ...create,
      review: e.target.value,
    });
  };

  const handleAcademicId = (e) => {
    setSchoolyear(e.target.value);
  };

  const handleFacultyId = (e) => {
    setFacultyId(e.target.value);
    setCourseId("");
    data.course = [];
    setInstructorId("");
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
    setCourseId(e.target.value);
    setInstructorId("");
    data.teacher = [];

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
    setInstructorId(e.target.value);
  };

  const clickReset = () => {
    setFacultyId("");
    setCourseId("");
    data.course = [];
    setInstructorId("");
    data.teacher = [];
    setCreate({
      ...create,
      classId: initCreate.classId,
    });
  };

  const clickSend = (ev) => {
    ev.preventDefault();
    async function postReview() {
      setCreateStatus("loading");
      const res = await GroupAPI.postReview(create, token);
      setCreateStatus("done");
      if (res?.data?.status === "success") {
        Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thành công." });
        handleCreate;
      } else {
        Swal.fire({ title: "Thông báo", text: "Tạo cảm nhận thất bại." });
      }
    }

    if (
      create.reviewTitle !== "" &&
      create.review !== "" &&
      create.classId !== "" &&
      createStatus == "done"
    ) {
      postReview();
    }
  };

  return (
    <form onSubmit={clickSend}>
      <div className="absolute flex top-0 left-0 w-full h-full rounded-l-2xl">
        <div className="bg-indigo-100 w-8/12 rounded-l-2xl">
          <div className="flex justify-between h-16 pt-12">
            {/* Title */}
            <div className="pl-16">
              {/* Prevent img from shrink */}
              <div className="flex">
                <img src="/icons/title.svg" width="27" height="23" />
                <div className="ml-4 text-2xl leading-9 text-indigo-500 font-medium tracking-normal ">
                  Tạo cảm nhận
                </div>
              </div>
            </div>

            {/* Type Review */}
            <div className="mr-10">
              <select
                className="bg-indigo-50 w-48 rounded-2xl border border-solid border-indigo-500"
                onChange={handleTypeReview}
              >
                <option value="Class">Môn học</option>
                <option value="Instructor">Giáo viên</option>
              </select>
            </div>
          </div>

          {/* DocumentName */}
          <div className="flex items-start pt-20 pl-16">
            <img src="/icons/write_pencil.svg" width="24" height="24" />
            <input
              className="p-2 ml-8 w-9/12 h-10 bg-indigo-50 w-48 rounded-xl border border-solid border-indigo-500"
              placeholder="Nhập tên giáo viên/môn học"
              onChange={handleReviewTitle}
            />
          </div>
          {/* Desc */}
          <div className="flex items-start pt-5 pl-16">
            <img src="/icons/descriptionIcon.svg" width="20" height="20" />
            <textarea
              rows={12}
              className="p-2 ml-9 w-9/12 bg-indigo-50 w-48 rounded-xl border border-solid border-indigo-500 resize-none"
              placeholder="Viết cảm nhận tại đây"
              onChange={handleReview}
            />
          </div>
          {/* Button ResetData */}
          <div className="flex flex-row-reverse left-56 top-4 mb-4 mr-10 pt-10">
            <button type="reset" onClick={clickReset}>
              <img src="/icons/buttonReset.svg" width="125" height="41" />
            </button>
          </div>
        </div>

        <div className="pt-36">
          {/* SchoolYear */}
          <div className="flex left-48 top-0 mb-4">
            <img
              className="m-3"
              src="/icons/calender.svg"
              width="23"
              height="24"
            />
            <select
              className="px-2 bg-indigo-50 w-48 rounded-2xl h-10 border border-solid border-indigo-500"
              onChange={handleAcademicId}
              value={schoolyear}
            >
              <option value="">Chọn năm học</option>
              {data?.schoolyear?.result?.map((val, key) => (
                <option value={val._id} key={key}>
                  {val.schoolyear} - học kì {val.semester}
                </option>
              ))}
            </select>
          </div>
          {/* Faculty */}
          <div className="flex left-48 top-0 mb-4">
            <img
              className="m-3"
              src="/icons/facuty.svg"
              width="23"
              height="24"
            />
            <select
              className="px-2 bg-indigo-50 w-48 rounded-2xl h-10 border border-solid border-indigo-500"
              onChange={handleFacultyId}
              value={facultyId}
            >
              <option value="">Chọn khoa</option>
              {data?.falcuty?.result?.map((val, key) => (
                <option value={val._id} key={key}>
                  {val.facultyName}
                </option>
              ))}
            </select>
          </div>
          {/* Course */}
          <div className="flex left-48 top-0 mb-4">
            <img
              className="m-3"
              src="/icons/course.svg"
              width="23"
              height="24"
            />
            <select
              className="px-2 bg-indigo-50 w-48 rounded-2xl h-10 border border-solid border-indigo-500"
              onChange={handleCourseId}
              value={courseId}
            >
              <option value="">Chọn môn</option>
              {data?.course?.result?.map((val, key) => (
                <option value={val._id} key={key}>
                  {val.courseName}
                </option>
              ))}
            </select>
          </div>
          {/* Teacher */}
          <div className="flex left-48 top-0 mb-4">
            <img
              className="m-3"
              src="/icons/teacher.svg"
              width="23"
              height="24"
            />
            <select
              className="px-2 bg-indigo-50 w-48 rounded-2xl h-10 border border-solid border-indigo-500"
              onChange={handleInstructor}
              value={instructorId}
            >
              <option value="">Chọn giáo viên</option>
              {data?.teacher?.result?.map((val, key) => (
                <option value={val._id} key={key}>
                  {val.instructorName}
                </option>
              ))}
            </select>
          </div>

          {/* Class has not opened yet */}
          <div className={classStatus === "gotNone" ? "visible" : "invisible"}>
            <div className="flex pl-12">
              <img src="/icons/warning.svg" width="21" height="18" />
              <p className="text-xs leading-none font-normal w-44 tracking-normal px-2">
                Nhóm chưa được mở, bạn có thể mở nhóm.
              </p>
            </div>
            <a
              className="pl-16 mx-2 text-sm leading-none font-normal w-48 tracking-normal px-2 font-bold "
              href={`${process.env.NEXT_PUBLIC_WEB_URL}/user/mygroup`}
            >
              Tại đây
            </a>
          </div>
          {/* Location */}
          <div className="left-48 top-0 mb-4">
            {/* Input Classname Field */}
            <div className={classStatus === "done" ? "visible" : "invisible"}>
              <div className="flex">
                <img
                  className="m-3"
                  src="/icons/destination_group.svg"
                  width="23"
                  height="24"
                />
                <input
                  className="px-2 bg-indigo-50 w-48 rounded-2xl h-10 border border-solid border-indigo-500"
                  disabled
                  value={className}
                />
              </div>
            </div>

            {/* Not enroll in class */}
            <div
              className={
                enrollStatus === "notEnrolled" ? "visible" : "invisible"
              }
            >
              <div className="flex pl-12">
                <img src="/icons/warning.svg" width="21" height="18" />
                <p className="text-xs leading-none font-normal w-44 tracking-normal px-2">
                  Bạn chưa tham gia vào nhóm này, khi gửi tài liệu, bạn xác nhận
                  tham gia vào nhóm
                </p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex left-56 top-4 mb-4">
            <button type="submit" className="mb-[35px] ml-10">
              <img src="/icons/buttonSend.svg" width="125" height="41" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateReview;
