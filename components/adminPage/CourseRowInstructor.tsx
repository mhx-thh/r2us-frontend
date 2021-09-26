import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import courseApi from "api/courseApi";

type AppProps = {
  course: any;
  setReloading: any;
};

function FacultyRow({ course, setReloading }: AppProps) {
  const [threedots, setThreedots] = useState(false);
  const token = useAppSelector(selectToken);

  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  const handleClickDelete = () => {
    courseApi.deleteCourse(course._id, token);
    setReloading(1);
  };

  //Custom hooks for detect click outside
  function useClickOutside(ref) {
    useEffect(() => {
      function handleclickoutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setThreedots(threedots);
        }
      }

      document.addEventListener("mousedown", handleclickoutside);

      return () => {
        document.removeEventListener("mousedown", handleclickoutside);
      };
    }, [ref]);
  }
  const ref = useRef(null);
  useClickOutside(ref);

  return (
    <React.Fragment>
      <tr className="bg-white text-center border-b border-indigo-300 text-sm ">
        <td className="p-2  ">
          <input type="checkbox" />
        </td>
        <td className="p-2  text-center "></td>
        <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
          {course.courseName}
        </td>
        <td
          ref={ref}
          className={`${
            threedots ? "relative" : " "
          } p-2 pt-3 bg-transparent pl-12 border-r flex justify-center`}
        >
          <img
            src="/icons/adminpage/threedots.svg"
            height={20}
            width={20}
            className="cursor-pointer text-center"
            onClick={clickthreedots}
          />
          {threedots && (
            <div className="absolute flex items-center px-3 top-4 -left-2 border border-indigo-300 rounded-2xl w-28 h-8 bg-white">
              <ul className="w-full">
                <li
                  className="mb-1 mt-1 hover:bg-indigo-200 rounded-lg cursor-pointer"
                  onClick={handleClickDelete}
                >
                  Xóa
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
