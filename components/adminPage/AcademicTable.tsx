import AcademicAPI from "api/academicApi";
import React, { useEffect, useState } from "react";
import CourseTable from "./CourseTable";
import AcademicRow from "./AcademicRow";
import { selectToken, selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import Threedots from "./Threedots";
import academicApi from "api/academicApi";
import { isFulfilled } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import SelectOption from "components/adminPage/SelectOption";

// interface Props {
//   getThreedots: any;
//   getCollapse: any;
// }
type Api = {
  schoolyear: string;
  semester: number;
};
function AcademicTable(props) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [reloading, setReloading] = useState(0);
  const [total, setTotal] = useState(0);
  const token = useAppSelector(selectToken);
  const initCreate: Api = {
    schoolyear: "",
    semester: 0,
  };
  const list = [{ label: 1 }, { label: 2 }, { label: 3 }];

  const [create, setCreate] = useState<Api>(initCreate);

  const clickcollapse = () => {
    setCollapse(!collapse);
    // getThreedots(threedots);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
    // getCollapse(collapse);
  };

  const handleSchoolYearChange = (e) => {
    const val = e.target.value;
    setCreate({ ...create, schoolyear: e.target.value });
  };
  const handleChange = (e) => {
    const semes = parseFloat(e.target.value);
    setCreate({ ...create, semester: semes });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log("ccreat", create);
    create.schoolyear !== "" &&
      create.semester !== 0 &&
      academicApi.postSemester(create, token);
    const newre = reloading + 1;
    setReloading(newre);
  };
  const handleReloadingForDelete = (e) => {
    const newre = reloading + 2;
    setReloading(newre);
  };
  useEffect(() => {
    console.log(create);
  }, [create]);

  const [academiclist, setacademiclist] = useState([]);
  useEffect(() => {
    async function fetchacademicList() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await academicApi.getSchoolYears();
        const data = res?.data?.data?.result;
        const temObj = data.map((idx) => {
          const newobj = {};
          newobj["label"] = `${idx.schoolyear}/${idx.semester}`;
          return newobj;
        });
        setTotal(res?.data?.data?.total);
        setacademiclist(data);
        console.log("data", data);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchacademicList();
  }, [reloading]);

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
              NIÊN KHÓA
            </div>
          </th>
          <th className="p-2 py-4">
            <div className="flex items-center text-left pl-8 text-xl leading-7 font-medium uppercase">
              HỌC KỲ
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
              onChange={handleSchoolYearChange}
              className="border border-indigo-200 p-1 w-60 h-8 rounded-lg"
              placeholder="Nhập niên khóa . . . "
            />
          </td>
          <td className="p-2 text-left">
            <SelectOption
              name="semester"
              title="hocki"
              onHandleChange={handleChange}
              options={list}
              placeholder="Chọn Môn hoc . . ."
            />
          </td>

          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
            <button type="submit" onClick={hanldeSubmit}>
              <img
                src="/icons/adminpage/check.svg"
                height={24}
                width={24}
                className="cursor-pointer"
              />
            </button>
          </td>
        </tr>
        {/* // Khoa công nghệ thông tin */}
        {academiclist.map((data, index) => (
          <AcademicRow
            key={index}
            academic={data}
            setReloading={handleReloadingForDelete}
          />
        ))}

        {/* {collapse && (
          <tr className="bg-white">
            <td></td>
            <td className="" colSpan={3}>
              <CourseTable />
            </td>
          </tr>
        )} */}
        <tr className="bg-gray-50 text-left w-full">
          <td
            className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
            colSpan={5}
          >
            Tổng cộng {total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default AcademicTable;
