import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import LayoutUser from "components/layout/UserLayout";
import ReviewPage from "components/user/page/review/reviewpage";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import userApi from "api/userApi";
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

const User = function (props) {
  const token = useAppSelector(selectToken);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    async function fetchMyReview() {
      try {
        const res = await userApi.getMyReviews(token);
        const data = res?.data?.data;
        setMyReview(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyReview();
  }, []);
  return (
    <LayoutUser>
      <ReviewPage />;
    </LayoutUser>
  );
};

export default User;
