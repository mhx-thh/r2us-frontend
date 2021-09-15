import Link from "next/link";
import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import IconSearch from "./IconSearch";
import Logo from "./Logo";
import {
  logout,
  selectIsAdmin,
  selectStatus,
  selectUser,
} from "redux/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const HeaderComponent: FC = () => {
  const [openUser, setOpenUser] = useState(false);
  const dispatch = useDispatch();
  const defaultstatus = useAppSelector(selectStatus);
  const user = useAppSelector(selectUser);
  const isAdmin = useAppSelector(selectIsAdmin);
  console.log(isAdmin);
  // status = "logined";
  // console.log(status);

  const router = useRouter();
  const path = router.pathname;
  console.log(defaultstatus);
  const logOut = () => {
    localStorage.removeItem("token");
    const action = logout();
    dispatch(action);
    setOpenUser(!openUser);
    window.location.reload();
  };
  const userpage = () => {
    router.push("/user");
    setOpenUser(!openUser);
  };
  const admin = () => {
    router.push("/admin");
    setOpenUser(!openUser);
  };

  return (
    <>
      {path.indexOf("/admin") !== 0 && (
        <div className="bg-blue-200">
          <div className="w-full px-24 bg-white h-16 flex items-center justify-between shadow-md">
            <Logo />

            {/* navbar */}
            <div className="ml-24 flex items-center flex-1">
              <Link href="/">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path == "/" ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">Home</p>
                </div>
              </Link>

              <Link href="/about">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("/about") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg leading-8 font-semibold">Chúng tôi</p>
                </div>
              </Link>

              <Link href="/search">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("/search") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">
                    Tìm kiếm
                  </p>
                  <IconSearch />
                </div>
              </Link>

              <Link href="/sv5t">
                <div
                  className={
                    "mr-6 flex items-center cursor-pointer px-1.5 py-1 hover:bg-indigo-100 rounded-lg" +
                    (path.indexOf("sv5t/") === 0 ? " bg-indigo-100" : "")
                  }
                >
                  <p className="text-lg mr-1 leading-8 font-semibold">SV5T</p>
                </div>
              </Link>
            </div>

            {defaultstatus === "nologin" && (
              <div>
                <Link href="/login">
                  <div className="py-1 px-1.5 rounded-lg bg-indigo-100 flex items-center cursor-pointer">
                    <p className="text-lg mr-1 leading-8 font-semibold">
                      Đăng nhập / Đăng ký
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25 10C1.25 12.3206 2.17187 14.5462 3.81282 16.1872C5.45376 17.8281 7.67936 18.75 10 18.75C12.3206 18.75 14.5462 17.8281 16.1872 16.1872C17.8281 14.5462 18.75 12.3206 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25C7.67936 1.25 5.45376 2.17187 3.81282 3.81282C2.17187 5.45376 1.25 7.67936 1.25 10ZM20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM5.625 9.375C5.45924 9.375 5.30027 9.44085 5.18306 9.55806C5.06585 9.67527 5 9.83424 5 10C5 10.1658 5.06585 10.3247 5.18306 10.4419C5.30027 10.5592 5.45924 10.625 5.625 10.625H12.8663L10.1825 13.3075C10.1244 13.3656 10.0783 13.4346 10.0468 13.5105C10.0154 13.5864 9.99921 13.6678 9.99921 13.75C9.99921 13.8322 10.0154 13.9136 10.0468 13.9895C10.0783 14.0654 10.1244 14.1344 10.1825 14.1925C10.2406 14.2506 10.3096 14.2967 10.3855 14.3282C10.4614 14.3596 10.5428 14.3758 10.625 14.3758C10.7072 14.3758 10.7886 14.3596 10.8645 14.3282C10.9404 14.2967 11.0094 14.2506 11.0675 14.1925L14.8175 10.4425C14.8757 10.3844 14.9219 10.3155 14.9534 10.2395C14.9849 10.1636 15.0011 10.0822 15.0011 10C15.0011 9.91779 14.9849 9.83639 14.9534 9.76046C14.9219 9.68453 14.8757 9.61556 14.8175 9.5575L11.0675 5.8075C11.0094 5.74939 10.9404 5.70329 10.8645 5.67185C10.7886 5.6404 10.7072 5.62421 10.625 5.62421C10.5428 5.62421 10.4614 5.6404 10.3855 5.67185C10.3096 5.70329 10.2406 5.74939 10.1825 5.8075C10.1244 5.86561 10.0783 5.9346 10.0468 6.01052C10.0154 6.08644 9.99921 6.16782 9.99921 6.25C9.99921 6.33218 10.0154 6.41356 10.0468 6.48948C10.0783 6.5654 10.1244 6.63439 10.1825 6.6925L12.8663 9.375H5.625Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            )}

            {defaultstatus === "logined" &&
              localStorage.hasOwnProperty("token") && (
                <div>
                  <div className="flex relative items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-3.5">
                      <img
                        src={user.photo}
                        alt="avatar"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => {
                          setOpenUser(!openUser);
                        }}
                      />
                    </div>

                    <div className="py-1 px-1.5 rounded-lg bg-indigo-100 flex items-center">
                      <p className="text-lg mr-1 leading-8 font-semibold">
                        Chia sẻ
                      </p>
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 9C0 10.654 1.346 12 3 12C3.794 12 4.512 11.685 5.049 11.18L11.04 14.604C11.022 14.734 11 14.864 11 15C11 16.654 12.346 18 14 18C15.654 18 17 16.654 17 15C17 13.346 15.654 12 14 12C13.206 12 12.488 12.315 11.951 12.82L5.96 9.397C5.978 9.266 6 9.136 6 9C6 8.864 5.978 8.734 5.96 8.603L11.951 5.18C12.488 5.685 13.206 6 14 6C15.654 6 17 4.654 17 3C17 1.346 15.654 0 14 0C12.346 0 11 1.346 11 3C11 3.136 11.022 3.266 11.04 3.397L5.049 6.82C4.496 6.29468 3.76273 6.00123 3 6C1.346 6 0 7.346 0 9Z"
                          fill="#6366F1"
                        />
                      </svg>
                    </div>
                    {openUser && (
                      <div
                        className={`pt-2 px-2 absolute  left-2 ${
                          isAdmin ? "h-22 -bottom-24" : "h-16 -bottom-20"
                        } w-32 border border-indigo-500 rounded-xl shadow-xl bg-white `}
                      >
                        <ul>
                          <li
                            className="flex text-center px-2 cursor-pointer rounded-xl hover:bg-indigo-200"
                            onClick={userpage}
                          >
                            <img
                              src="/icons/user.svg"
                              height={16}
                              width={16}
                              className="mr-2"
                            />
                            User
                          </li>
                          <li
                            className="flex text-center px-2 cursor-pointer rounded-xl hover:bg-indigo-200"
                            onClick={logOut}
                          >
                            <img
                              src="/icons/logout.svg"
                              height={16}
                              width={16}
                              className="mr-2"
                            />
                            Log out
                          </li>
                          {isAdmin && (
                            <li
                              className="flex relative text-center px-2 cursor-pointer rounded-xl hover:bg-indigo-200 mb-2"
                              onClick={admin}
                            >
                              <svg
                                id="Capa_1"
                                enableBackground="new 0 0 512 512"
                                height="18"
                                viewBox="0 0 512 512"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 mt-1"
                              >
                                <g>
                                  <g>
                                    <g>
                                      <g>
                                        <g>
                                          <path
                                            d="m500.58 196.43-47.02-11.54c-2.22-6.09-4.78-12.19-7.66-18.24l24.49-40.82c3.54-5.9 2.61-13.46-2.26-18.32l-63.64-63.64c-4.86-4.87-12.42-5.8-18.32-2.26l-40.82 24.49c-6.05-2.88-12.15-5.44-18.24-7.66l-11.54-47.02c-1.65-6.7-7.66-11.42-14.57-11.42h-90c-6.91 0-12.92 4.72-14.57 11.42l-11.54 47.02c-6.09 2.22-12.19 4.78-18.24 7.66l-40.82-24.49c-5.9-3.54-13.45-2.61-18.32 2.26l-63.64 63.64c-4.87 4.86-5.8 12.42-2.26 18.32l24.49 40.82c-2.88 6.05-5.44 12.15-7.66 18.24l-47.02 11.54c-6.7 1.65-11.42 7.66-11.42 14.57v90c0 6.91 4.72 12.92 11.42 14.57l47.02 11.54c2.22 6.09 4.78 12.19 7.66 18.24l-24.49 40.82c-3.54 5.9-2.61 13.46 2.26 18.32l63.64 63.64c4.87 4.87 12.42 5.8 18.32 2.26l40.82-24.49c6.05 2.88 12.15 5.44 18.24 7.66l11.11 45.27.43 1.75c1.65 6.7 7.66 11.42 14.57 11.42l48-48 42 48c6.91 0 12.92-4.72 14.57-11.42l.43-1.75 11.11-45.27c6.09-2.22 12.19-4.78 18.24-7.66l40.82 24.49c5.9 3.54 13.45 2.61 18.32-2.26l63.64-63.64c4.87-4.86 5.8-12.42 2.26-18.32l-24.49-40.82c2.88-6.05 5.44-12.15 7.66-18.24l47.02-11.54c6.7-1.65 11.42-7.66 11.42-14.57v-90c0-6.91-4.72-12.92-11.42-14.57z"
                                            fill="#4086f4"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <path
                                    d="m500.58 196.43-47.02-11.54c-2.22-6.09-4.78-12.19-7.66-18.24l24.49-40.82c3.54-5.9 2.61-13.46-2.26-18.32l-63.64-63.64c-4.86-4.87-12.42-5.8-18.32-2.26l-40.82 24.49c-6.05-2.88-12.15-5.44-18.24-7.66l-11.54-47.02c-1.65-6.7-7.66-11.42-14.57-11.42h-45v467l3-3 42 48c6.91 0 12.92-4.72 14.57-11.42l.43-1.75 11.11-45.27c6.09-2.22 12.19-4.78 18.24-7.66l40.82 24.49c5.9 3.54 13.45 2.61 18.32-2.26l63.64-63.64c4.87-4.86 5.8-12.42 2.26-18.32l-24.49-40.82c2.88-6.05 5.44-12.15 7.66-18.24l47.02-11.54c6.7-1.65 11.42-7.66 11.42-14.57v-90c0-6.91-4.72-12.92-11.42-14.57z"
                                    fill="#4175df"
                                  />
                                  <g>
                                    <g>
                                      <path
                                        d="m301 352.25h-90c-8.28 0-15 6.71-15 15v131.58l.43 1.75c1.65 6.7 7.66 11.42 14.57 11.42h90c6.91 0 12.92-4.72 14.57-11.42l.43-1.75v-131.58c0-8.29-6.72-15-15-15z"
                                        fill="#fabe2c"
                                      />
                                    </g>
                                  </g>
                                  <path
                                    d="m301 352.25h-45v159.75h45c6.91 0 12.92-4.72 14.57-11.42l.43-1.75v-131.58c0-8.29-6.72-15-15-15z"
                                    fill="#ff9f00"
                                  />
                                  <g id="Admin_1_">
                                    <g>
                                      <g>
                                        <path
                                          d="m256 391c-74.439 0-135-60.561-135-135 0-27.368 8.182-53.744 23.66-76.275 15.099-21.978 36.088-38.877 60.697-48.868 4.624-1.878 9.881-1.332 14.02 1.456 4.141 2.787 6.623 7.452 6.623 12.443v103.217l30 20 30-20v-103.218c0-4.991 2.482-9.655 6.623-12.443 4.14-2.787 9.396-3.333 14.02-1.456 24.609 9.991 45.599 26.89 60.697 48.868 15.478 22.532 23.66 48.908 23.66 76.276 0 74.439-60.561 135-135 135zm45-135h.01z"
                                          fill="#fdd929"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                  <path
                                    d="m391 256c0-27.368-8.182-53.744-23.66-76.275-15.099-21.978-36.088-38.877-60.697-48.868-4.624-1.877-9.88-1.332-14.02 1.456-4.141 2.787-6.623 7.452-6.623 12.443v103.217l-30 20v123.027c74.439 0 135-60.561 135-135z"
                                    fill="#fabe2c"
                                  />
                                </g>
                              </svg>
                              Admin
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderComponent;
