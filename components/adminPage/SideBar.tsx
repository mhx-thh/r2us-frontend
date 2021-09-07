import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const path = router.pathname;
  const clickCourse = () => {
    router.push("/admin/general/courses");
  };
  const clickInstructor = () => {
    router.push("/admin/general/instructor");
  };
  const clickAcademic = () => {
    router.push("/admin/general/academic");
  };
  const clickGroup = () => {
    router.push("/admin/group/group");
  };
  const clickResource = () => {
    router.push("/admin/group/resource");
  };
  const clickReview = () => {
    router.push("/admin/group/review");
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-80 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <img src="/icons/close.svg" alt="icon close" />
          </button>
          {/* Brand */}
          <Link href="/admin">
            <a
              href="#"
              className="md: flex justify-content items-center md: text-blueGray-600 mr-0  p-12 pl-16"
            >
              <Image src="/icons/adminpage/logo.svg" height={48} width={108} />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      <Image
                        src="/icons/adminpage/logo.svg"
                        height={48}
                        width={108}
                      />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Heading */}
            <Link href="/admin">
              <a href="#">
                <button
                  className={`md:min-w-full rounded-xl  ${
                    router.pathname === "/admin"
                      ? "bg-indigo-500"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <div className="flex p-0">
                    {(router.pathname === "/admin" && (
                      <img
                        src="/icons/adminpage/dashboard_active.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )) || (
                      <img
                        src="/icons/adminpage/dashboard.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )}
                    <p
                      className={`md:min-full text-left text-xl leading-8 font-semibold uppercase  pt-2 pb-2 ml-4 ${
                        router.pathname === "/admin"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Dashboard
                    </p>
                  </div>
                </button>
              </a>
            </Link>
            {/* General Block */}
            <div>
              <Link href="/admin/general">
                <a href="#">
                  <button
                    className={`md:min-w-full rounded-xl  ${
                      router.pathname.indexOf("/admin/general") > -1
                        ? "bg-indigo-500"
                        : "bg-white hover:bg-indigo-50"
                    }`}
                  >
                    <div className="flex p-0">
                      {(router.pathname.indexOf("/admin/general") > -1 && (
                        <img
                          src="/icons/adminpage/general_active.svg"
                          height={24}
                          width={24}
                          className="ml-4"
                        />
                      )) || (
                        <img
                          src="/icons/adminpage/general.svg"
                          height={24}
                          width={24}
                          className="ml-4"
                        />
                      )}
                      <p
                        className={`md:min-full text-left text-xl leading-8 font-semibold uppercase  pt-2 pb-2 ml-4 ${
                          router.pathname.indexOf("/admin/general") > -1
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        Cấu hình chung
                      </p>
                    </div>
                  </button>
                </a>
              </Link>
              <ul className="text-lg leading-7 font-normal ml-2 ">
                <li className="flex p-0 mb-2">
                  <button className="flex p-0" onClick={clickCourse}>
                    {(router.pathname === "/admin/general/courses" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/course.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Môn học
                  </button>
                </li>
                <li className="flex p-0 mb-2">
                  <button className="flex p-0" onClick={clickInstructor}>
                    {(router.pathname === "/admin/general/instructor" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/instructor.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Giáo viên
                  </button>
                </li>
                <li className="flex p-0 mb-2">
                  <button className="flex p-0" onClick={clickAcademic}>
                    {(router.pathname === "/admin/general/academic" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/academic.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Năm học
                  </button>
                </li>
              </ul>
            </div>
            {/* Group block */}
            <div>
              <Link href="/admin/group">
                <a href="#">
                  <button
                    className={`md:min-w-full rounded-xl  ${
                      router.pathname.indexOf("/admin/group") > -1
                        ? "bg-indigo-500"
                        : "bg-white hover:bg-indigo-50"
                    }`}
                  >
                    <div className="flex p-0">
                      {(router.pathname.indexOf("/admin/group") > -1 && (
                        <img
                          src="/icons/adminpage/group_active.svg"
                          height={24}
                          width={24}
                          className="ml-4"
                        />
                      )) || (
                        <img
                          src="/icons/adminpage/group.svg"
                          height={24}
                          width={24}
                          className="ml-4"
                        />
                      )}
                      <p
                        className={`md:min-full text-left text-xl leading-8 font-semibold uppercase  pt-2 pb-2 ml-4 ${
                          router.pathname.indexOf("/admin/group") > -1
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        Nhóm lớp
                      </p>
                    </div>
                  </button>
                </a>
              </Link>
              <ul className="text-lg leading-7 font-normal ml-2 ">
                <li className="flex p-0 mb-2">
                  <button className="flex p-0" onClick={clickGroup}>
                    {(router.pathname === "/admin/group/group" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/groupChild.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Nhóm lớp
                  </button>
                </li>
                <li className="flex p-0 mb-2" onClick={clickResource}>
                  <button className="flex p-0">
                    {(router.pathname === "/admin/group/resource" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/resource.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Tài liệu
                  </button>
                </li>
                <li className="flex p-0 mb-2">
                  <button className="flex p-0" onClick={clickReview}>
                    {(router.pathname === "/admin/group/review" && (
                      <img
                        src="/icons/adminpage/polygon.svg"
                        height={15}
                        width={15}
                        className="ml-8 pt-1"
                      />
                    )) || <div className="ml-12"></div>}
                    <img
                      src="/icons/adminpage/review.svg"
                      height={24}
                      width={24}
                      className="ml-4 mr-2"
                    />
                    Cảm nhận
                  </button>
                </li>
              </ul>
            </div>
            <hr className="w-full my-2 border-black" />
            {/* SV5t */}
            <Link href="/admin/SV5T">
              <a href="#">
                <button
                  className={`md:min-w-full rounded-xl  ${
                    router.pathname === "/admin/SV5T"
                      ? "bg-indigo-500"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <div className="flex p-0">
                    {(router.pathname === "/admin/SV5T" && (
                      <img
                        src="/icons/adminpage/SV5T_active.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )) || (
                      <img
                        src="/icons/adminpage/SV5T.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )}
                    <p
                      className={`md:min-full text-left text-xl leading-8 font-semibold uppercase  pt-2 pb-2 ml-4 ${
                        router.pathname === "/admin/SV5T"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      SV5T
                    </p>
                  </div>
                </button>
              </a>
            </Link>
            {/* Instruction */}
            <Link href="/admin/instruction">
              <a href="#">
                <button
                  className={`md:min-w-full rounded-xl  ${
                    router.pathname === "/admin/instruction"
                      ? "bg-indigo-500"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <div className="flex p-0">
                    {(router.pathname === "/admin/instruction" && (
                      <img
                        src="/icons/adminpage/instruction_active.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )) || (
                      <img
                        src="/icons/adminpage/instruction.svg"
                        height={24}
                        width={24}
                        className="ml-4"
                      />
                    )}
                    <p
                      className={`md:min-full text-left text-xl leading-8 font-semibold uppercase  pt-2 pb-2 ml-4 ${
                        router.pathname === "/admin/instruction"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Instruction
                    </p>
                  </div>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
