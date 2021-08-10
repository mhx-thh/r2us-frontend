import Link from "next/link";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import style from "./style.module.css";
import UserPage from "components/user/userpage/userpage";
import MetaLayout from "components/layout/MegaLayout";
import Sidebar from "components/user/Sidebar/UserSidebar";

// export const getServerSideProps: GetServerSideProps = async (params) => {
//   const res = await NewClassAPI.getGroup(temp);
//   const schoolyear = await AcademicAPI.getAcademic(res.data.data.academicId);
//   const instructorName = await InstructorAPI.getInstructor(
//     res.data.data.instructorId
//   );

//   return {
//     props: {
//       status: res.data.status,
//       data: res.data.data,
//     },
//   };
// };

// type propApi = {};

const User = function (props) {
  const user = useAppSelector(selectUser);

  const router = useRouter();
  const path = router.asPath;

  return (
    <MetaLayout
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <div className={style.Title}></div>
      <Sidebar param={path} />
      <hr></hr>
      <UserPage />;
    </MetaLayout>
  );
};

export default User;
