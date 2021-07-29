import Link from "next/link";
import React from "react";
function SideBar() {
  return (
    <div>
      <div className="max-auto px-8 py-2 flex justify-between w-full fixed top-10">
        <div className="mt-2 inline-flex w-max m-20 max-auto">
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
            <button className="text -sm font-semibold flex items-center  focus:outline-none">
              <Link href="/class/info">Thông tin</Link>
            </button>
          </div>
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
            <button className="text-sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/exam">Đề thi</Link>
            </button>
          </div>
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
            <button className="text-sm font-semibold flex items-center  focus:outline-none">
              <Link href="/class/document">Tài liệu</Link>
            </button>
          </div>
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
            <button className="text -sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/outline">Đề cương môn học</Link>
            </button>
          </div>
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
            <button className=" text-sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/teacher">Giáo viên</Link>
            </button>
          </div>

          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
            <button className=" text-sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/course">Môn học</Link>
            </button>
          </div>
          <hr className="my-2" />
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
            <button className=" text-sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/member">Thành viên</Link>
            </button>
          </div>
          <div className="mt-1 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
            <button className="text-sm font-semibold flex items-center focus:outline-none">
              <Link href="/class/manager">Quản lí</Link>
            </button>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n    body{\n      background-color:white;\n    }\n  ",
        }}
      />
    </div>
  );
}
export default SideBar;
