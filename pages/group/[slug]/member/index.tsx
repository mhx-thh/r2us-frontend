import React from "react";

import NewClassAPI from "api/NewClassAPI";

import MemberPage from "components/class/page/member/memberpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type propApi = {
  status: string;
  data: {
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
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res.data.status,
      data: res.data.data,
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

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={initTitle}>
        <MemberPage />
      </LayoutClass>
    );
  }
};

export default Item;
