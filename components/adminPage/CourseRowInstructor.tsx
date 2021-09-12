import courseApi from "api/courseApi";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";
type AppProps = {
  course: any;
  setReloading: any;
};

function FacultyRow({ course, setReloading }: AppProps) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const token = useAppSelector(selectUser);

  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  const handleClickDelete = () => {
    courseApi.deleteCourse(course._id, token);
    setReloading(1);
  };

  return (
    <React.Fragment>
      <tr className="bg-white text-center border-b border-indigo-300 text-sm ">
        <td className="p-2  ">
          <input type="checkbox" />
        </td>
        <td className="p-2  text-center "></td>
        <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
          Môn {course.courseName}
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
                <li
                  className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer"
                  onClick={handleClickDelete}
                >
                  Xoa
                </li>
              </ul>
            </div>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

export default FacultyRow;
// function token(create: any, token: any) {
//   throw new Error("Function not implemented.");
// }
