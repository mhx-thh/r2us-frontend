import React from "react";

import GroupAPI from "api/groupAPI";
import NewClassAPI from "api/NewClassAPI";

import ReviewPage from "components/class/page/reviewpage/reviewpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type propApi = {
  status: string;
  data: any;
  review: any;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);
  const rev = await GroupAPI.getReviews();

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res.data.status,
      data: res.data.data,
      review: rev.data.data,
    },
  };
};

const Item = function (props: propApi) {
  const initProps = props.data;

  const initTitle = {
    academicId: {
      schoolyear: initProps.academicId.schoolyear,
    },
    courseId: {
      courseName: initProps.courseId.courseName,
      facultyId: {
        facultyName: initProps.courseId.facultyId.facultyName,
      },
    },
    className: initProps.className,
    instructorId: {
      instructorName: initProps.instructorId.instructorName,
    },
    updateAt: initProps.updatedAt,
    slug: initProps.slug,
  };
  const Id = {
    schoolyear: initProps.academicId.schoolyear,
    courseName: initProps.courseId.courseName,
    instructorName: initProps.instructorId.instructorName,
    className: initProps.className,
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={initTitle}>
        <ReviewPage data={props.review} id={Id} />
      </LayoutClass>
    );
  }
};
export default Item;
