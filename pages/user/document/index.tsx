import AcademicAPI from "api/academicApi";
import Footer from "components/footer/FooterComponent";
import MetaLayout from "components/layout/MegaLayout";
import DocumentPage from "components/user/page/document/documentpage";
import Sidebar from "components/user/Sidebar/UserSidebar";
import UserHeader from "components/user/userheader/header";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";

type AppProps = {
  schoolyear: any;
  falcuty: any;
  course: any;
  teacher: any;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
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

const User = function (props: AppProps) {
  console.log(props);
  const user = useAppSelector(selectUser);

  const router = useRouter();
  const path = router.asPath;
  const title = `R2us | ${user.familyName} ${user.givenName}`;
  return (
    <MetaLayout title={title} desc="User" icon="icons/logo.svg">
      <UserHeader user={user} />
      <Sidebar param={path} />
      <hr></hr>
      <DocumentPage />;
      <Footer />
    </MetaLayout>
  );
};

export default User;
