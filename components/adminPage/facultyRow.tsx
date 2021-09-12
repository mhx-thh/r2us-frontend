import facultyApi from "api/facultyApi";
import React, { useState } from "react";
import CourseTable from "./CourseTable";
import Threedots from "./Threedots";
import { selectToken } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
type AppProps = {
  faculty: any;
  setReloading: any;
};

function FacultyRow({ faculty, setReloading }: AppProps) {
  const [collapse, setCollapse] = useState(false);
  const [nowthreedots, setNowThreedots] = useState(false);
  const [beforethreedots, setBeforeThreedots] = useState(false);
  const token = useAppSelector(selectToken);

  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setNowThreedots(!beforethreedots);
    setBeforeThreedots(!beforethreedots);
  };
  const handleClickDelete = () => {
    facultyApi.deleteFaculty(faculty._id, token);
    setReloading(1);
  };

  return (
    <React.Fragment>
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
          Khoa {faculty.facultyName}
        </td>

        <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
          <img
            src="/icons/adminpage/threedots.svg"
            height={20}
            width={20}
            className="cursor-pointer text-center"
            onClick={clickthreedots}
          />
          {beforethreedots && (
            <div className="absolute flex items-center px-3 top-1 -left-10 border border-indigo-300 rounded-2xl w-28 h-16 bg-white">
              <ul className="w-full">
                <li className="mb-1 hover:bg-indigo-200 rounded-lg cursor-pointer">
                  Sửa
                </li>
                <li
                  className="mb-1 hover:bg-indigo-200 rounded-lg cursor-pointer"
                  onClick={handleClickDelete}
                >
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
            <CourseTable faculty={faculty} />
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default FacultyRow;
// function token(create: any, token: any) {
//   throw new Error("Function not implemented.");
// }
