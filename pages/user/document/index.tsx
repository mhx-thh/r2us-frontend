import React from "react";
import { GetServerSideProps } from "next";

import LayoutUser from "components/layout/UserLayout";
import DocumentPage from "components/user/page/document/documentpage";

import AcademicAPI from "api/academicApi";

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
  return (
    <LayoutUser>
      <DocumentPage />;
    </LayoutUser>
  );
};

export default User;
