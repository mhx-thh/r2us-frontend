import React from "react";
import { GetServerSideProps } from "next";

import LayoutUser from "components/layout/UserLayout";
import GroupPage from "components/user/page/mygroup/mygrouppage";

import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";

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
      faculty: falcuty.data.data,
      course: course.data.data,
      teacher: teacher.data,
    },
  };
};

// type propApi = {};

const User = function (props: AppProps) {
  const user = useAppSelector(selectUser);
  return (
    <LayoutUser>
      <GroupPage props={props} />
    </LayoutUser>
  );
};

export default User;
