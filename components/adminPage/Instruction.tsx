import facultyApi from "api/facultyApi";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { selectToken } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";

type Api = {
  facultyName: string;
};
type AppProps = {
  setAdd: any;
};
function InstructionTable({ setAdd }: AppProps) {
  //declare hooks
  const [reloading, setReloading] = useState(0);
  const token = useAppSelector(selectToken);

  //Tạo object submit khoa mới
  const initCreate: Api = {
    facultyName: "",
  };
  const [create, setCreate] = useState<Api>(initCreate);

  //function
  //Tất cả các hàm logic nằm ở dưới
  const handleChange = (e) => {
    setCreate({ ...create, facultyName: e.target.value });
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
            <button className="" onClick={setAdd}>
              <svg
                height="14pt"
                viewBox="0 0 448 448"
                width="14pt"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff"
                className={`transform hover:scale-50 transition duration-200`}
              >
                <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
              </svg>
            </button>
          </td>

          <td className="p-2 pt-3 bg-transparent pl-12 border-r relative  flex justify-center">
            <button type="submit" onClick={hanldeSubmit}></button>
          </td>
        </tr>
        <tr className="bg-gray-50 text-left ">
          <td
            className="p-2 pl-8 bg-white Table Footer rounded-b-2xl "
            colSpan={4}
          >
            Tổng cộng 0
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default InstructionTable;
