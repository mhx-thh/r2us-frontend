import router from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import courseApi from "api/courseApi";

type AppProps = {
  instructor: any;
};

function CourseTablewithInstructor({ instructor }: AppProps) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  const [total, setTotal] = useState(0);
  const [courseList, setCourseList] = useState([]);
  setCourseList(instructor.courseId);

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
            <Image
              src="/icons/adminpage/check.svg"
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </td>
        </tr>
        {courseList.map((data, index) => (
          <tr
            className="bg-white text-center border-b border-indigo-300 text-sm "
            key={index}
          >
            <td className="p-2  ">
              <input type="checkbox" />
            </td>
            <td className="p-2  text-center "></td>
            <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
              Môn {data.courseName}
            </td>
            <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
              <img
                src="/icons/adminpage/threedots.svg"
                height={20}
                width={20}
                className="cursor-pointer text-center"
                onClick={clickthreedots}
              />
              {threedots && (
                <div className="absolute flex items-center px-3 top-4 left-3 border border-indigo-300 rounded-2xl w-28 h-16 bg-white">
                  <ul className="w-full">
                    <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
                      Sửa
                    </li>
                    <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
                      Xóa
                    </li>
                  </ul>
                </div>
              )}
            </td>
          </tr>
        ))}
        {/* <tr className="bg-white text-center border-b border-indigo-300 text-sm ">
          <td className="p-2  ">
            <input type="checkbox" />
          </td>
          <td className="p-2  text-center "></td>
          <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
            Khoa Công nghệ thông tin
          </td>
          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
            <img
              src="/icons/adminpage/threedots.svg"
              height={20}
              width={20}
              className="cursor-pointer text-center"
              onClick={clickthreedots}
            />
            {threedots && (
              <div className="absolute flex items-center px-3 top-4 left-3 border border-indigo-300 rounded-2xl w-28 h-16 bg-white">
                <ul className="w-full">
                  <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
                    Sửa
                  </li>
                  <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
                    Xóa
                  </li>
                </ul>
              </div>
            )}
          </td>
        </tr> */}
        <tr className="bg-gray-50 text-left  ">
          <td className="p-2 pl-8 bg-white Table Footer  " colSpan={4}>
            Tổng cộng{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CourseTablewithInstructor;
