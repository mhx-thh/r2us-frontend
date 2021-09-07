import React, { useState } from "react";
import CourseTable from "./CourseTable";

function FacultyTable(props) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  return (
    <table className=" w-11/12 p-2 border">
      <thead className="">
        <tr className=" border-b border-indigo-500 bg-indigo-200 py-4">
          <th className=" p-2 py-4 rounded-tl-xl">
            <input type="checkbox" />
          </th>
          <th className="p-2 py-4">
            <div className="flex items-center justify-center"></div>
          </th>
          <th className="p-2 py-4">
            <div className="flex items-center text-left pl-8 text-xl leading-7 font-medium uppercase">
            TÊN GIÁO VIÊN
            </div>
          </th>
          <th className="p-2 py-4 rounded-tr-xl">
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
              className="border border-indigo-200 p-1 w-full h-8 rounded-lg"
              placeholder="Nhập tên giáo viên . . . "
            />
          </td>
          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
            <img
              src="/icons/adminpage/check.svg"
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </td>
        </tr>
        <tr className="bg-white text-center border-b border-indigo-300 text-sm ">
          <td className="p-2  ">
            <input type="checkbox" />
          </td>
          <td className="p-2  text-center ">
            {(collapse && (
              <img
                src="/icons/adminpage/collapse_active.svg"
                height={28}
                width={28}
                className="cursor-pointer"
                onClick={clickcollapse}
              />
            )) || (
              <img
                src="/icons/adminpage/collapse.svg"
                height={28}
                width={28}
                className="cursor-pointer"
                onClick={clickcollapse}
              />
            )}
          </td>
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
        </tr>
        {collapse && (
          <tr className="bg-white">
            <td></td>
            <td className="" colSpan={3}>
              <CourseTable />
            </td>
          </tr>
        )}
        <tr className="bg-gray-50 text-left  ">
          <td
            className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
            colSpan={4}
          >
            Tổng cộng{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default FacultyTable;
