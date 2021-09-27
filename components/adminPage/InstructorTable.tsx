import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

import instructorApi from "api/instructorApi";

import InstructorRow from "./InstructorRow";

type Api = {
  instructorName: string;
};
function InstructorTable() {
  //declare
  const [instructorlist, setinstructorlist] = useState([]);
  const [datafilted, setDatafilted] = useState([]);
  const [search, setSearch] = useState("");
  const [reloading, setReloading] = useState(0);
  const token = useAppSelector(selectToken);
  const initCreate: Api = {
    instructorName: "",
  };
  const [create, setCreate] = useState<Api>(initCreate);

  //function
  const handleChange = (e) => {
    setCreate({ ...create, instructorName: e.target.value });
  };

  const handleChangeSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    create.instructorName !== "" && instructorApi.postInstructor(create, token);
    const newre = reloading + 1;
    setReloading(newre);
  };

  const handleReloadingForDelete = () => {
    setReloading(reloading + 1);
  };

  //fetch data
  useEffect(() => {
    async function fetchinstructorList() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await instructorApi.getAll();
        const data = res?.data?.data?.result;
        data.sort(function (a, b) {
          if (a.instructorName.toLowerCase() > b.instructorName.toLowerCase()) {
            return 1;
          }
          if (a.instructorName.toLowerCase() < b.instructorName.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        setinstructorlist(data);
        setDatafilted(data);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchinstructorList();
  }, [reloading]);

  //Hàm search giáo viên
  useEffect(() => {
    const array = instructorlist.filter(
      (idx) =>
        idx.instructorName.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
    setDatafilted(array);
    console.log("array:", array);
    console.log(
      instructorlist.filter((idx) => {
        console.log(idx.instructorname);
        idx.instructorName.indexOf(search) >= -1;
      })
    );
    if (search == "") {
      setDatafilted(instructorlist);
    }
  }, [search]);

  return (
    <>
      <input
        type="text"
        onChange={handleChangeSearch}
        className="border border-indigo-200 p-1 w-72 mb-4 h-8 rounded-lg"
        placeholder="Tìm kiếm giáo viên . . . "
      />
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
                onChange={handleChange}
                className="border border-indigo-200 p-1 w-full h-8 rounded-lg"
                placeholder="Nhập tên giáo viên . . . "
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
          {datafilted.map((data, index) => (
            <InstructorRow
              key={index}
              instructor={data}
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
          <tr className="bg-gray-50 text-left  ">
            <td
              className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
              colSpan={4}
            >
              Tổng cộng {datafilted.length}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default InstructorTable;
