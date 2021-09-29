import facultyApi from "api/facultyApi";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { selectToken } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";

import FacultyRow from "./facultyRow";

type Api = {
  facultyName: string;
};
function FacultyTable() {
  //declare hooks
  const [reloading, setReloading] = useState(0);
  const [facultylist, setFacultylist] = useState([]);
  const [total, setTotal] = useState(0);
  const token = useAppSelector(selectToken);

  //Tạo object submit khoa mới
  const initCreate: Api = {
    facultyName: "",
  };
  const [create, setCreate] = useState<Api>(initCreate);

  //function
  //Tất cả các hàm logic nằm ở dưới
  const handleChange = (e) => {
    setCreate({ ...create, facultyName: e.targetal.vue });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    create.facultyName !== "" && facultyApi.postFaculty(create, token);
    setReloading(reloading + 1);
  };
  //Reload mỗi khi xóa
  const handleReloadingForDelete = () => {
    const newre = reloading + 1;
    setReloading(newre);
  };

  useEffect(() => {
    console.log("realoading: ", reloading);
    async function fetchFacultyList() {
      Swal.fire({
        title: "Loading data",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await facultyApi.getAll();
        const data = res?.data?.data?.result;
        data.sort(function (a, b) {
          if (a.facultyName.toLowerCase() > b.facultyName.toLowerCase()) {
            return 1;
          }
          if (a.facultyName.toLowerCase() < b.facultyName.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        setFacultylist(data);
        setTotal(res?.data?.data?.total);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchFacultyList();
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
              TÊN KHOA
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
              placeholder="Nhập tên khoa mới . . . "
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
        {facultylist.map((data, index) => (
          <FacultyRow
            key={index}
            faculty={data}
            setReloading={handleReloadingForDelete}
          />
        ))}
        <tr className="bg-gray-50 text-left ">
          <td
            className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
            colSpan={4}
          >
            Tổng cộng {total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default FacultyTable;
