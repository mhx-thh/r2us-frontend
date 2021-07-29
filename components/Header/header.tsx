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
    </header>
  );
}

export default Header;
