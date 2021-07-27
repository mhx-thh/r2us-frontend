import Link from "next/link";
import React from "react";
import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";

function Header() {
  const status = useAppSelector(selectStatus);
  return (
    <header className="bg-white shadow-sm w-full fixed z-10 top-0 ">
      <div className="max-auto px-8 py-2 bg-white flex justify-between">
        <div className="logo flex items-center space-x-4 mr-10">
          <img
            className="h-8"
            src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg"
            alt=""
          />
          <div className="text font-semibold -sm text-2xl focus:outline-none">
            <button>R2US</button>
          </div>
        </div>
        <div className=" menu flex justify-end  items-center  flex-1 space-x-4">
          {status !== "logined" ? (
            <Link href="/login">
              <a>Login</a>
            </Link>
          ) : (
            <img
              className="h-8"
              src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg"
              alt="Name"
            />
          )}
        </div>
      </div>
      <div>
        <div className="items-center text-center justify-center w-full fixed">
          <div className="mt-0 inline-flex flex-auto w-max m-20 max-auto">
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
              <button className="text -sm font-semibold flex items-center  focus:outline-none">
                <Link href="/class/info">Thông tin</Link>
              </button>
            </div>
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
              <button className="text-sm font-semibold flex items-center focus:outline-none">
                <Link href="/class/exam">Đề thi</Link>
              </button>
            </div>
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
              <button className="text-sm font-semibold flex items-center  focus:outline-none">
                <Link href="/class/document">Tài liệu</Link>
              </button>
            </div>
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
              <button className="text -sm font-semibold flex items-center focus:outline-none">
                <Link href="/class/outline">Đề cương môn học</Link>
              </button>
            </div>
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
              <button className=" text-sm font-semibold flex items-center focus:outline-none">
                <Link href="/class/teacher">Giáo viên</Link>
              </button>
            </div>

            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500  rounded pl-6 py-3 font-semibold p-14">
              <button className=" text-sm font-semibold flex items-center focus:outline-none">
                <Link href="/class/course">Môn học</Link>
              </button>
            </div>
            <hr className="my-2" />
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
              <button className=" text-sm font-semibold flex items-center focus:outline-none">
                <Link href="/class/member">Thành viên</Link>
              </button>
            </div>
            <div className="mt-0 hover:bg-blue-100 hover:text-blue-500 rounded pl-6 py-3 font-semibold p-14">
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
    </header>
  );
}

export default Header;
