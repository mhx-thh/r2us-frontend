import courseApi from "api/courseApi";
import intructorAPI from "api/instructorApi";
import Image from "next/image";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import CourseRowInstructor from "./CourseRowInstructor";
import facultyApi from "api/facultyApi";
import SelectOption from "components/adminPage/SelectOption";
import InstructorAPI from "api/instructorApi";

type AppProps = {
  instructor: any;
};
type Keys = string;
type Values = string;
type T = string;
type Api = {
  instructorName: string;
  courseIds: Array<T>;
};
function CourseTable({ instructor }: AppProps) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [reloading, setReloading] = useState(0);
  const token = useAppSelector(selectToken);
  const [total, setTotal] = useState(0);
  const [mycourseList, setMyCourseList] = useState([]);
  const [facultylist, setFacultylist] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [arraycourse, setArraycourse] = useState([]);
  const [mycourseId, setMyCourseId] = useState("");

  const initCreate: Api = {
    instructorName: instructor.instructorName,
    courseIds: instructor.courseId,
  };
  const [create, setCreate] = useState<Api>(initCreate);

  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  const handleGetCourseName = (e) => {
    mycourseList.push(e.target.value);
  };
  const handleChange = (e) => {
    // const val = e.target.value;
    // setCreate({ ...create, courseName: e.target.value });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    arraycourse.push(mycourseId);
    setCreate({ ...create, courseIds: arraycourse });
    InstructorAPI.patchInstructor(create, instructor._id, token);
    const newre = reloading + 1;
    console.log("now create", create);
    setReloading(newre);
  };
  const handleReloadingForDelete = (e) => {
    const newre = reloading + 2;
    setReloading(newre);
  };
  const handleClickDelete = () => {
    // courseApi.deleteCourse(faculty._id, token);
    // setReloading(1);
  };
  useEffect(() => {
    async function fetchMyCourseList() {
      try {
        const res = await intructorAPI.getInstructor(instructor._id);
        const data = res?.data?.data?.courseId;
        console.log("here", data);
        setMyCourseList(data);
        setTotal(data.length);
        console.log("data course", data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyCourseList();
  }, [reloading]);
  const filterListApi = {
    facultyId: courseApi,
    courseId: InstructorAPI,
  };

  const handleSearchChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const api = filterListApi[name];
    const fetchData = async (api) => {
      switch (name) {
        case "facultyId":
          const res = await courseApi.getCoursetoFaculty(value);
          const options = res?.data?.data?.result;
          const newCourses = options?.map((op) => {
            const newOp = {};
            newOp["label"] = op.courseName;
            newOp["_id"] = op._id;
            return newOp;
          });
          setCourseList(newCourses);
          console.log("now courses", newCourses);
          break;
        case "courseId":
          setMyCourseId(value);
          break;
      }
    };

    if (api) fetchData(api);
  };

  useEffect(() => {
    async function fetchFacultyList() {
      try {
        const res = await facultyApi.getAll();
        const data = res?.data?.data?.result;
        const newFaculties = data?.map((op) => {
          const newOp = {};
          newOp["label"] = op.facultyName;
          newOp["_id"] = op._id;
          return newOp;
        });
        setFacultylist(newFaculties);
        console.log("data faculties", data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFacultyList();
  }, []);
  return (
    <table className=" w-full p-2 border">
      <thead className="">
        <tr className=" border-b border-indigo-500 bg-indigo-200 py-4">
          <th className=" p-2 py-4 ">
            <input type="checkbox" />
          </th>
          <th className="p-2 py-4">
            <div className="flex items-center justify-center"></div>
          </th>
          <th className="p-2 py-4">
            <div className="flex items-center text-left pl-8 text-xl leading-7 font-medium uppercase">
              TÊN MÔN HỌC
            </div>
          </th>
          <th className="p-2 py-4 ">
            <div className="flex items-center justify-center"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-50 text-center border-b border-indigo-400">
          <td className="p-2 "></td>
          <td className="p-2 "></td>
          {
            <td className="p-2 text-left grid grid-cols-2 gap-4">
              <SelectOption
                name="facultyId"
                title="Khoa"
                onHandleChange={handleSearchChange}
                options={facultylist}
                placeholder="Chọn Khoa . . ."
              />
              <SelectOption
                name="courseId"
                title="Mon"
                onHandleChange={handleSearchChange}
                options={courseList}
                placeholder="Chọn Môn hoc . . ."
              />
            </td>
          }
          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative ">
            <button type="submit" onClick={hanldeSubmit}>
              <Image
                src="/icons/adminpage/check.svg"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </button>
          </td>
        </tr>
        {mycourseList.map((data, index) => (
          <CourseRowInstructor
            key={index}
            course={data}
            setReloading={handleReloadingForDelete}
          />
        ))}
        <tr className="bg-gray-50 text-left  ">
          <td className="p-2 pl-8 bg-white Table Footer  " colSpan={4}>
            Tổng cộng {mycourseList.length}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseTable;
