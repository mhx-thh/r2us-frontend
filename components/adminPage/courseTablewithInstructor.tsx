import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

import facultyApi from "api/facultyApi";
import InstructorAPI from "api/instructorApi";
import courseApi from "api/courseApi";
import intructorAPI from "api/instructorApi";

import CourseRowInstructor from "./CourseRowInstructor";
import SelectOption from "components/adminPage/SelectOption";

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
  //declare variable
  const [reloading, setReloading] = useState(0);
  const token = useAppSelector(selectToken);
  const [mycourseList, setMyCourseList] = useState([]);
  const [facultylist, setFacultylist] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [facultyId, setFacultyId] = useState({
    facultyName: "",
    _id: "",
  });
  const [courseId, setCourseId] = useState({
    _id: "",
    courseName: "",
  });

  //function
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const obj = {
      courseName: courseId.courseName,
      facultyId: {
        facultyName: facultyId.facultyName,
        _id: facultyId._id,
      },
      _id: courseId._id,
    };
    const array = [...instructor.courseId];
    const data = {
      courseId: array.concat(obj),
    };
    InstructorAPI.updateInstructor(instructor._id, data, token);
    setReloading(reloading + 1);
  };

  const handleReloadingForDelete = (e) => {
    setReloading(reloading + 1);
  };

  useEffect(() => {
    async function fetchMyCourseList() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await intructorAPI.getInstructor(instructor._id);
        const data = res?.data?.data?.courseId;
        setMyCourseList(data);
      } catch (error) {
        console.log("error");
      }
      Swal.close();
    }
    fetchMyCourseList();
  }, [reloading]);
  const filterListApi = {
    facultyId: courseApi,
    courseId: InstructorAPI,
  };

  const handleSearchChange = (e) => {
    const Name = e.target.name;
    const value = e.target.value;
    console.log(e.target.key);
    const api = filterListApi[Name];
    const fetchData = async (api) => {
      switch (Name) {
        case "facultyId":
          facultylist.map((idx) => {
            if (idx._id == value) {
              setFacultyId({
                facultyName: idx.label,
                _id: value,
              });
            }
          });
          console.log(facultyId);
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
          console.log(value);
          courseList.map((idx) => {
            if (idx._id == value) {
              setCourseId({
                _id: value,
                courseName: idx.label,
              });
            }
          });
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
        newFaculties.map((index, data) => {
          index = data._id;
        });
        setFacultylist(newFaculties);
        console.log("data faculties", facultylist);
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
        {instructor.courseId?.map((data, index) => (
          <CourseRowInstructor
            key={index}
            course={data}
            setReloading={handleReloadingForDelete}
          />
        ))}
        <tr className="bg-gray-50 text-left  ">
          <td className="p-2 pl-8 bg-white Table Footer  " colSpan={4}>
            Tổng cộng {mycourseList?.length}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseTable;
