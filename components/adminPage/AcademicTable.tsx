import AcademicAPI from "api/academicApi";
import React, { useEffect, useState } from "react";
import CourseTable from "./CourseTable";
import AcademicRow from "./AcademicRow";
import { selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import Threedots from "./Threedots";
import academicApi from "api/academicApi";

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
  const token = useAppSelector(selectUser);
  const initCreate: Api = {
    schoolyear: "",
    semester: 0,
  };
  const list = [1, 2, 3];

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
    setCreate({ ...create, semester: e.target.value });
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
      try {
        const res = await academicApi.getSchoolYears();
        const data = res?.data?.data?.result;
        setacademiclist(data);
        console.log("data", data);
      } catch (error) {
        console.log(error.message);
      }
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
            <select name="Chọn học kỳ" onChange={handleChange}>
              <option value="">Chọn học kỳ</option>
              {list.map((value, idx) => {
                // eslint-disable-next-line react/jsx-key
                return <option value={value}>{value}</option>;
              })}
              {/* <select
            className="block w-48 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            {...register(name)}
            name={name}
            onChange={onHandleChange}
          >
            <option value="">{placeholder}</option>
            {options?.map((optionItem) => (
              <option key={optionItem._id} value={optionItem._id}>
                {optionItem.label}
              </option>
            ))}
          </select> */}
            </select>
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
        )}
        <tr className="bg-gray-50 text-left  ">
          <td
            className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
            colSpan={4}
          >
            Tổng cộng{" "}
          </td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default AcademicTable;
