import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import style from "./style.module.css";

import GroupAPI from "api/groupAPI";
import { apiV1, get } from "api/generic";
import AcademicAPI from "api/academicApi";
import userApi from "api/userApi";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import courseApi from "api/courseApi";
import InstructorAPI from "api/instructorApi";

type Api = {
  resourceType: "Resources" | "Examination Paper" | "Review Paper";
  resourceName: string;
  resourceLink: string;
  resourceDescription: string;
  classId: string;
};

type classStatus = "loading" | "enrolled" | "gotNone" | "notEnrolled"; // Show some component relate to class
type createStatus = "loading" | "done"; // Prevent repeative post
type dataCreate = {
  schoolyear: any;
  faculty: any;
  course: any;
  teacher: any;
};

const CreateResource = function ({ handleCreate, iD, resourceType }: any) {
  const token = useAppSelector(selectToken);

  // Get data for create modal
  const [data, setData] = useState<dataCreate>();
  const [myClass, setMyClass] = useState([]);

  // Data to get class and create Create
  const [schoolyear, setSchoolyear] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [instructorId, setInstructorId] = useState("");

  // Data for class: Get class and process class
  const [className, setClassName] = useState("");
  const [classStatus, setClassStatus] = useState<classStatus>("loading");
  const [group, setGroup] = useState([]);

  const [createStatus, setCreateStatus] = useState<createStatus>("done");
  const [apiSpinner, setApiSpinner] = useState<createStatus>("done");

  // And finally, data to create data Api
  const initCreate: Api = {
    resourceType: "Resources",
    resourceName: "",
    resourceLink: "",
    resourceDescription: "",
    classId: "",
  };

  const [create, setCreate] = useState<Api>(initCreate);

  // Init modal data/data from group
  useEffect(() => {
    async function fetchInitData() {
      setApiSpinner("loading");
      const schoolyear = await AcademicAPI.getSchoolYears();
      const faculty = await AcademicAPI.getFalcuties();

      const res = await userApi.getMyClass(token);
      const myClass = res?.data?.data?.result;

      const data = {
        schoolyear: schoolyear?.data?.data,
        faculty: faculty?.data?.data,
        course: [],
        teacher: [],
      };

      setData(data);
      setMyClass(myClass);

      if (iD?.courseId !== "") {
        setApiSpinner("loading");
        setSchoolyear(iD?.academicId);

        // Faculty => Course...
        setFacultyId(iD?.facultyId);
        setData({ ...data, teacher: [], course: [] });

        const course = await courseApi.getCoursetoFaculty(iD?.facultyId);
        const instructor = await InstructorAPI.getInstructortoCourse(
          iD?.courseId
        );

        setData({
          ...data,
          course: course?.data?.data,
          teacher: instructor?.data?.data,
        });

        // Course => Instructor
        setCourseId(iD?.courseId);

        // Instructor
        setInstructorId(iD?.instructorId);

        setCreate({ ...create, resourceType: resourceType });
      }
      setApiSpinner("done");
    }

    fetchInitData();
  }, []);

  // Update data
  useEffect(() => {
    async function fetchGroup({ courseId, instructorId, academicId }: any) {
      setApiSpinner("loading");
      const url = `${apiV1}/groups/class?courseId__eq=${courseId}&instructorId__eq=${instructorId}&academicId__eq=${academicId}`;
      const data = await get(url, "");
      setGroup(data.data.data.result);
      setApiSpinner("done");
    }

    async function fetchCourse(facultyId) {
      setApiSpinner("loading");
      const course = await courseApi.getCoursetoFaculty(facultyId);

      setData({
        ...data,
        course: course?.data?.data,
        teacher: [],
      });
      setApiSpinner("done");
    }

    async function fetchInstructor(courseId) {
      setApiSpinner("loading");
      const instructor = await InstructorAPI.getInstructortoCourse(courseId);

      setData({
        ...data,
        teacher: instructor?.data?.data,
      });
      setApiSpinner("done");
    }

    async function fetchData() {
      if (facultyId !== "" && schoolyear !== "") {
        if (courseId === "") {
          fetchCourse(facultyId);
        } else {
          if (instructorId === "") {
            fetchInstructor(courseId);
          } else {
            fetchGroup({
              courseId: courseId,
              instructorId: instructorId,
              academicId: schoolyear,
            });
          }
        }
      }
    }

    fetchData();
  }, [courseId, instructorId, schoolyear, facultyId]);

  // Process group/class status
  useEffect(() => {
    if (!(schoolyear !== "" && courseId !== "" && instructorId !== "")) {
      setClassStatus("loading");
    } else if (group.length == 0) {
      setClassStatus("gotNone");
    } else {
      handleClassName();
      setClassStatus("notEnrolled");
      myClass.map((val) => {
        if (val?.classId?._id === group[0]?._id) {
          setClassStatus("enrolled");
        }
      });
    }
  }, [group]);

  //
  // Below here is process modal selection and their... kind...?
  const handleClassName = () => {
    setClassName(group[0].className);
    setCreate({
      ...create,
      classId: group[0]?._id,
    });
  };

  const handleTypeResource = (e) => {
    setCreate({
      ...create,
      resourceType: e.target.value,
    });
  };

  const handleResourceName = (e) => {
    setCreate({
      ...create,
      resourceName: e.target.value,
    });
  };

  const handleResourceLink = (e) => {
    setCreate({
      ...create,
      resourceLink: e.target.value,
    });
  };

  const handleResourceDescription = (e) => {
    setCreate({
      ...create,
      resourceDescription: e.target.value,
    });
  };

  const handleAcademicId = (e) => {
    setSchoolyear(e.target.value);
    setFacultyId("");
    setCourseId("");
    setInstructorId("");
    setData({ ...data, teacher: [], course: [] });
  };

  const handleFacultyId = (e) => {
    setFacultyId(e.target.value);
    setCourseId("");
    setInstructorId("");
    setData({ ...data, teacher: [], course: [] });
  };

  const handleCourseId = (e) => {
    setCourseId(e.target.value);
    setInstructorId("");
    setData({ ...data, teacher: [] });
  };

  const handleInstructor = (e) => {
    setInstructorId(e.target.value);
  };

  const clickReset = () => {
    setSchoolyear("");
    setFacultyId("");
    setCourseId("");
    setInstructorId("");
    setData({ ...data, course: [], teacher: [] });
    setCreate(initCreate);
  };

  const clickSend = (ev) => {
    ev.preventDefault();
    async function postResource() {
      const res = await GroupAPI.postResource(create, token);
      setCreateStatus("done");
      if (res?.data?.status === "success") {
        Swal.fire({ title: "Th??ng b??o", text: "T???o t??i li???u th??nh c??ng." });
        handleCreate;
      } else {
        Swal.fire({ title: "Th??ng b??o", text: "T???o t??i li???u th???t b???i." });
      }
    }

    if (
      create.resourceName !== "" &&
      create.resourceLink !== "" &&
      create.resourceDescription !== "" &&
      create.classId !== "" &&
      createStatus === "done"
    ) {
      postResource();
    }
  };

  return (
    <form onSubmit={clickSend}>
      <div className="absolute top-0 left-0 w-full h-full rounded-2xl xl:flex">
        <div className="xl:bg-indigo-100 w-8/12 rounded-l-2xl">
          <div className="xl:flex justify-between h-16 pt-12">
            {/* Title */}
            <div className="pl-16">
              {/* Prevent img from shrink */}
              <div className="flex">
                <img src="/icons/title.svg" width="27" height="23" />
                <div className="ml-4 text-2xl leading-9 text-indigo-500 font-medium tracking-normal ">
                  T???o m???i t??i li???u
                </div>
              </div>
            </div>

            {/* Type Document */}
            <div className="pr-10">
              <select
                className="bg-indigo-50 w-48 rounded-2xl border border-solid border-indigo-500"
                onChange={handleTypeResource}
                value={create.resourceType}
              >
                <option value="Examination Paper">????? thi</option>
                <option value="Review Paper">????? c????ng</option>
                <option value="Resources">T??i li???u</option>
              </select>
            </div>
          </div>

          {/* DocumentName */}
          <div className="flex items-start pt-20 pl-16">
            <img src="/icons/write_pencil.svg" width="24" height="24" />
            <input
              className="p-2 ml-8 w-9/12 h-10 bg-indigo-50 w-48 rounded-xl border border-solid border-indigo-500"
              placeholder="Nh???p t??n t??i li???u"
              minLength={10}
              onChange={handleResourceName}
            />
          </div>

          {/* Link */}
          <div className="flex items-start pt-5 pl-16">
            <img src="/icons/link.svg" width="20" height="20" />
            <input
              className="p-2 ml-9 w-9/12 h-10 bg-indigo-50 w-48 rounded-xl border border-solid border-indigo-500"
              placeholder="Link t??i li???u"
              onChange={handleResourceLink}
            />
          </div>

          {/* Desc */}
          <div className="flex items-start pt-5 pl-16">
            <img src="/icons/descriptionIcon.svg" width="20" height="20" />
            <textarea
              rows={10}
              className="p-2 ml-9 w-9/12 bg-indigo-50 w-48 rounded-xl border border-solid border-indigo-500 resize-none"
              placeholder="M?? t??? t???i ????y"
              onChange={handleResourceDescription}
            />
          </div>

          {/* Button ResetData */}
          <div className="flex flex-row-reverse left-56 top-4 mb-4 mr-10 pt-7">
            <button type="reset" onClick={clickReset}>
              <div className={style.button}>
                <div className={style.button__text}>?????t l???i</div>
                <img src="/icons/cancel.svg" />
              </div>
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
              <option value="">Ch???n n??m h???c</option>
              {data?.schoolyear?.result?.map((val, key) => (
                <option value={val._id} key={key}>
                  {val.schoolyear} - h???c k?? {val.semester}
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
              <option value="">Ch???n khoa</option>
              {data?.faculty?.result?.map((val, key) => (
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
              <option value="">Ch???n m??n</option>
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
              <option value="">Ch???n gi??o vi??n</option>
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
                Nh??m ch??a ???????c m???, b???n c?? th??? m??? nh??m.
              </p>
            </div>
            <a
              className="pl-16 mx-2 text-sm leading-none font-normal w-48 tracking-normal px-2 font-bold "
              href={`${process.env.NEXT_PUBLIC_WEB_URL}/user/mygroup`}
            >
              T???i ????y
            </a>
          </div>
          {/* Location */}
          <div className="left-48 top-0 mb-4">
            {/* Input Classname Field */}
            <div
              className={classStatus !== "loading" ? "visible" : "invisible"}
            >
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
                classStatus === "notEnrolled" ? "visible" : "invisible"
              }
            >
              <div className="flex pl-12">
                <img src="/icons/warning.svg" width="21" height="18" />
                <p className="text-xs leading-none font-normal w-44 tracking-normal px-2">
                  B???n ch??a tham gia v??o nh??m n??y, khi g???i t??i li???u, b???n x??c nh???n
                  tham gia v??o nh??m
                </p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex left-56 top-4 mb-4">
            <button
              type="submit"
              disabled={classStatus !== "enrolled"}
              className={
                classStatus === "enrolled"
                  ? "mb-[35px] ml-10"
                  : "mb-[35px] ml-10 opacity-50"
              }
            >
              <div className={style.button}>
                <div className={style.button__text}>G???i</div>
                {apiSpinner === "loading" ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <img src="/icons/send.svg" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateResource;
