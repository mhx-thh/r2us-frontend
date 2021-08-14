import LayoutClass from "components/layout/layoutClass";
import React, { useEffect, useState } from "react";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import NewClassAPI from "api/NewClassAPI";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ReviewPage from "components/class/page/reviewpage/reviewpage";

export const getStaticProps: GetStaticProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);

  return {
    props: {
      status: res.data.status,
      data: res.data.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (params) => {
  const res = await NewClassAPI.get();

  const paths = res.data.data.result.map((group) => ({
    params: { slug: group.slug },
  }));

  return {
    paths,
    fallback: true,
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
};

const Item = function (props: propApi) {
  const initProps = props.data;

  const initTitle = {
    academicId: {
      schoolyear: initProps.academicId.schoolyear,
    },
    courseId: {
      courseName: initProps.courseId.courseName,
    },
    className: initProps.className,
    instructorId: {
      instructorName: initProps.instructorId.instructorName,
    },
  };

  const router = useRouter();
  const path = router.asPath;
  const title = `R2US - ${initProps.className}`;

  return (
    <LayoutClass title={title} desc="ClassPage" icon="icons/logo.svg">
      <Title data={initTitle} />
      <Sidebar param={path} id={initProps.slug} />
      <hr></hr>
      <ReviewPage />
    </LayoutClass>
  );
};
export default Item;
