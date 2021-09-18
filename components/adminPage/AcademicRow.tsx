import React, { useEffect, useRef, useState } from "react";
import CourseTable from "./CourseTable";
import Threedots from "./Threedots";
import { selectToken, selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import academicApi from "api/academicApi";
import SelectOption from "components/adminPage/SelectOption";
type AppProps = {
  academic: any;
  setReloading: any;
};

function academicRow({ academic, setReloading }: AppProps) {
  const list = [{ label: 1 }, { label: 2 }, { label: 3 }];

  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [newschoolyear, setNewschoolyear] = useState(academic.schoolyear);

  const [newsemester, setNewsemester] = useState(academic.semester);
  const [edit, setEdit] = useState(false);
  const token = useAppSelector(selectToken);

  const clickcollapse = () => {
    setCollapse(!collapse);
  };
  const clickEdit = () => {
    setEdit(!edit);
  };
  const changeSchoolyear = (event) => {
    event.preventDefault();

    const newName = event.target.value;
    setNewschoolyear(newName);
  };
  const changeSemester = (event) => {
    event.preventDefault();

    const newName = event.target.value;
    setNewsemester(newName);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
  };
  const updateName = () => {
    const obj = {
      schoolyear: newschoolyear,
      semester: newsemester,
    };
    academicApi.updateAcademic(academic._id, obj, token);
    console.log(newschoolyear);
    console.log(newsemester);
    setReloading();
    setEdit(false);
    setCollapse(!collapse);
  };
  const handleClickDelete = () => {
    academicApi.deleteSemester(academic._id, token);
    setReloading(1);
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
            value={newschoolyear}
            onChange={changeSchoolyear}
          />
        </td>
      )) || (
        <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
          {academic.schoolyear}
        </td>
      )}
      {(edit && (
        <td className="p-2 text-left">
          <SelectOption
            name="semester"
            title="hocki"
            onHandleChange={changeSemester}
            options={list}
            placeholder="Chọn Môn hoc . . ."
          />
        </td>
      )) || (
        <td className="p-2 border-r border-transparent text-left text-base leading-6 font-normal">
          {academic.semester}
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
            className="ml-6 -mr-8"
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
    //   {collapse && (
    //     <tr className="bg-white">
    //       <td></td>
    //       <td className="" colSpan={3}>
    //         <CourseTable />
    //       </td>
    //     </tr>
    //   )}
    //   <tr className="bg-gray-50 text-left  ">
    //     <td
    //       className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
    //       colSpan={4}
    //     >
    //       Tổng cộng{" "}
    //     </td>
    //   </tr>
  );
}

export default academicRow;
// function token(create: any, token: any) {
//   throw new Error("Function not implemented.");
// }
