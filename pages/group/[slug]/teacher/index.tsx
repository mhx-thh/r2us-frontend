import LayoutClass from "components/layout/layoutClass";
import React, { useEffect, useState } from "react";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import NewClassAPI from "api/NewClassAPI";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ReviewPage from "components/class/page/reviewpage/reviewpage";
import GroupAPI from "api/groupAPI";

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

type classType = {
  className: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  nStudents: number;
  _id: string;
  instructorId: {
    _id: string;
    instructorName: string;
    id: string;
  };
  academicId: {
    schoolyear: string;
    semester: number;
  };
  courseId: {
    courseName: string;
    _id: string;
    facultyId: {
      facultyName: string;
      _id: string;
    };
  };
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
};

type propApi = {
  status: string;
  data: classType;
  review: any;
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
  };

  const router = useRouter();
  const path = router.asPath;
  const title = `R2us | ${initProps.className}`;
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass title={title} desc="ClassPage" icon="icons/logo.svg">
        <Title data={initTitle} />
        <Sidebar param={path} id={initProps.slug} />
        <hr></hr>
        <ReviewPage data={props.review} />
      </LayoutClass>
    );
  }
};
export default Item;
