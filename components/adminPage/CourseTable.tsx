import router from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import courseApi from "api/courseApi";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import { Stringifiable } from "query-string";
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
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [reloading, setReloading] = useState(0);
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
  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };

  const [create, setCreate] = useState<Api>(initCreate);

  const handleChange = (e) => {
    const val = e.target.value;
    setCreate({ ...create, courseName: e.target.value });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    create.courseName !== "" &&
      create.facultyId !== {} &&
      courseApi.postCourse(create, token);
    const newre = reloading + 1;
    setReloading(newre);
  };
  const handleReloadingForDelete = (e) => {
    const newre = reloading + 2;
    setReloading(newre);
  };
  const handleClickDelete = () => {
    courseApi.deleteCourse(faculty._id, token);
    setReloading(1);
  };
  const [total, setTotal] = useState(0);
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    async function fetchCourseList() {
      try {
        const res = await courseApi.getCoursetoFaculty(faculty._id);
        const data = res?.data?.data?.result;
        setCourseList(data);
        setTotal(res?.data?.data?.total);
        console.log("data course", data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCourseList();
  }, [reloading]);
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
          {(router.pathname === "/admin/general/courses" && (
            <td className="p-2 text-left">
              <input
                type="text"
                onChange={handleChange}
                className="border border-indigo-200 p-1 w-full h-8 rounded-lg"
                placeholder="Nhập tên môn mới . . . "
              />
            </td>
          )) || (
            <td className="p-2 text-left grid grid-cols-2 gap-4">
              <select className="border border-indigo-200 p-1 w-3/4 h-8 rounded-lg">
                <option value="" disabled selected>
                  Chọn Khoa . . .{" "}
                </option>
                <option value="">Toan-Tin hoc</option>
              </select>
              <select className="border border-indigo-200 p-1 w-3/4 h-8 rounded-lg">
                <option value="" disabled selected>
                  Chọn Môn học . . .
                </option>
                <option value="">Dai so tuyen tinh</option>
              </select>
            </td>
          )}
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
