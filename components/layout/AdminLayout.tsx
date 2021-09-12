import React, { FC } from "react";
import Error from "next/error";

import SideBar from "components/adminPage/SideBar";

import { useAppSelector } from "redux/hooks";
import { selectIsAdmin } from "redux/userSlice";

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
          <div className="">
            <div className=" w-full h-screen bg-indigo-100 pt-28 pl-96">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AdminLayout;
