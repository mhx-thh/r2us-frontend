import courseApi from "api/courseApi";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";
type AppProps = {
  course: any;
  setReloading: any;
};

function FacultyRow({ course, setReloading }: AppProps) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [name, setName] = useState(course.courseName);
  const [edit, setEdit] = useState(false);
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
  const changeName = (event) => {
    event.preventDefault();

    const newName = event.target.value;
    setName(newName);
  };
  const clickEdit = () => {
    setEdit(!edit);
  };
  const updateName = () => {
    const obj = { facultyName: name };
    console.log(obj);
    setReloading(1);
    setEdit(false);
    setCollapse(false);
  };
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
        {(edit && (
          <td className="p-2 text-left">
            <input
              type="text"
              className="border border-indigo-200 p-1 w-full h-8 rounded-lg"
              placeholder="Nhập tên khoa mới . . . "
              name="facultyName"
              value={name}
              onChange={changeName}
            />
          </td>
        )) || (
          <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
            {course.courseName}
          </td>
        )}
        {(edit && (
          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
            <button type="submit" onClick={updateName}>
              <img
                src="/icons/adminpage/check.svg"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </button>
            <button
              onClick={() => {
                setEdit(!edit);
                setThreedots(!threedots);
              }}
              className="ml-6 -mr-12"
            >
              <img
                src="/icons/adminpage/back.svg"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </button>
          </td>
        )) || (
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
              <div className="absolute flex items-center px-3 top-4 -left-2 border border-indigo-300 rounded-2xl w-28 h-16 bg-white">
                <ul className="w-full">
                  <li
                    className="mb-1 hover:bg-indigo-200 rounded-lg cursor-pointer"
                    onClick={clickEdit}
                  >
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
        )}
      </tr>
    </React.Fragment>
  );
}

export default FacultyRow;
// function token(create: any, token: any) {
//   throw new Error("Function not implemented.");
// }
