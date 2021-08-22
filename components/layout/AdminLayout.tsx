import React, { FC, useEffect } from "react";
import Error from "next/error";

import SideBar from "components/adminPage/SideBar";
import NavBar from "components/adminPage/NavBar";
import HeaderStats from "components/adminPage/HeaderStats";

import { useAppSelector } from "redux/hooks";
import { selectIsAdmin } from "redux/adminSlice";

interface Props {
  children: React.ReactNode;
}

const AdminLayout: FC = ({ children }: Props) => {
  const isAdmin = useAppSelector(selectIsAdmin);
  return (
    <>
      {!isAdmin && <Error statusCode={404} />}
      {isAdmin && (
        <>
          <SideBar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <NavBar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
          </div>
        </>
      )}
    </>
  );
};
export default AdminLayout;