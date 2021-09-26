import router from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

import courseApi from "api/courseApi";

import CourseRowFaculty from "./CourseRowFaculty";

type AppProps = {
  faculty: any;
};
type Keys = string;
type Values = string;
type Api = {
  courseName: string;
  facultyId: Record<Keys, Values>;
  courseDescription: string;
};
function CourseTable({ faculty }: AppProps) {
  //declare
  const [total, setTotal] = useState(0);
  const [courseList, setCourseList] = useState([]);
  const [reloading1, setReloading1] = useState(0);
  const token = useAppSelector(selectToken);
  const currentfaculty: Record<Keys, Values> = {
    facultyName: faculty.facultyName,
    _id: faculty._id,
  };
  const initCreate: Api = {
    courseName: "",
    facultyId: currentfaculty,
    courseDescription: "create by admin",
  };
  const [create, setCreate] = useState<Api>(initCreate);

  //function
  //Tất cả các hàm logic nằm ở dưới
  const handleChange = (e) => {
    e.preventDefault();
    setCreate({
      ...create,
      courseName: e.target.value,
      facultyId: faculty._id,
      courseDescription: "create by admin",
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    courseApi.postCourse(create, token);
    setReloading1(reloading1 + 1);
  };

  const handleReloadingForDelete = () => {
    setReloading1(reloading1 + 1);
  };

  useEffect(() => {
    async function fetchCourseList() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await courseApi.getCoursetoFaculty(faculty._id);
        const data = res?.data?.data?.result;
        setCourseList(data);
        setTotal(res?.data?.data?.total);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchCourseList();
  }, [reloading1]);

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
          <td className="p-2 text-left">
            <input
              type="text"
              onChange={handleChange}
              className="border border-indigo-200 p-1 w-full h-8 rounded-lg"
              placeholder="Nhập tên môn mới . . . "
            />
          </td>

          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative ">
            <button type="submit">
              <Image
                src="/icons/adminpage/check.svg"
                height={24}
                width={24}
                className="cursor-pointer"
                onClick={hanldeSubmit}
              />
            </button>
          </td>
        </tr>
        {courseList.map((data, index) => (
          <CourseRowFaculty
            key={index}
            course={data}
            setReloading={handleReloadingForDelete}
          />
        ))}
        <tr className="bg-gray-50 text-left  ">
          <td className="p-2 pl-8 bg-white Table Footer  " colSpan={4}>
            Tổng cộng {total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseTable;
