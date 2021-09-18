import instructorApi from "api/instructorApi";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";
import InstructorRow from "./InstructorRow";

// interface Props {
//   getThreedots: any;
//   getCollapse: any;
// }
type Api = {
  instructorName: string;
};
function InstructorTable(props) {
  const [collapse, setCollapse] = useState(false);
  const [threedots, setThreedots] = useState(false);
  const [reloading, setReloading] = useState(0);
  const token = useAppSelector(selectToken);
  const [total, setTotal] = useState(0);
  const initCreate: Api = {
    instructorName: "",
  };

  const [create, setCreate] = useState<Api>(initCreate);

  const clickcollapse = () => {
    setCollapse(!collapse);
    // getThreedots(threedots);
  };
  const clickthreedots = () => {
    setThreedots(!threedots);
    // getCollapse(collapse);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setCreate({ ...create, instructorName: e.target.value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    create.instructorName !== "" && instructorApi.postInstructor(create, token);
    const newre = reloading + 1;
    setReloading(newre);
  };
  const handleReloadingForDelete = (e) => {
    const newre = reloading + 1;
    setReloading(reloading + 1);
  };
  useEffect(() => {
    console.log(create);
  }, [create]);

  const [instructorlist, setinstructorlist] = useState([]);
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
        setTotal(res?.data?.data?.total);
        setinstructorlist(data);
        console.log("data", data[1]);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchinstructorList();
  }, []);

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
        {instructorlist.map((data, index) => (
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
            Tổng cộng {total}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default InstructorTable;
