import Link from "next/link";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import MetaLayout from "components/layout/MegaLayout";
import Sidebar from "components/user/Sidebar/UserSidebar";
import UserHeader from "components/user/userheader/header";
import GroupPage from "components/user/page/mygroup/mygrouppage";
import Temp from "components/class/CreateGroup/createGroup";
import Footer from "components/footer/FooterComponent";
import AcademicAPI from "api/academicApi";

type AppProps = {
  schoolyear: any;
  falcuty: any;
  course: any;
  teacher: any;
};
export const getServerSideProps: GetServerSideProps = async (params) => {
  // const res = await NewClassAPI.getGroup(temp);
  const schoolyear = await AcademicAPI.getSchoolYears();
  const falcuty = await AcademicAPI.getFalcuties();
  const course = await AcademicAPI.getCourses();
  const teacher = await AcademicAPI.getIntructors();
  return {
    props: {
      schoolyear: schoolyear.data.data,
      falcuty: falcuty.data.data,
      course: course.data.data,
      teacher: teacher.data,
    },
  };
};

// type propApi = {};

const User = function (props: AppProps) {
  const user = useAppSelector(selectUser);

  const router = useRouter();
  const path = router.asPath;
  const title = `R2us | ${user.familyName} ${user.givenName}`;
  return (
    <MetaLayout title={title} desc="User" icon="icons/logo.svg">
      <UserHeader user={user} />
      <Sidebar param={path} />
      <hr></hr>
      <GroupPage data={props} />
      <Footer />
    </MetaLayout>
  );
};

export default User;
