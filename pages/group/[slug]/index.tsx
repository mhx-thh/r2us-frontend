import InformationPage from "components/class/page/information/InformationPage";
import LayoutClass from "components/layout/layoutClass";
import React, { useEffect, useState } from "react";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import GroupAPI from "api/groupAPI";

// export const getServerSideProps: GetServerSideProps = async (params) => {
//   const temp = params.params.slug.toString();
//   const res = await NewClassAPI.getGroup(temp);

//   return {
//     props: {
//       status: res.data.status,
//       data: res.data.data,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GroupAPI.getGroups();
  console.log(res);
  const paths = res.data.data.result.map((path) => ({
    params: { slug: path.slug },
  }));
  return { paths: paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await GroupAPI.getGroup(temp);
  console.log(res);
  return {
    props: {
      status: res.data.status,
      data: res.data.data,
      revalidate: 10,
    },
  };
};

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

const Item = function (props: propApi) {
  const initProps = props.data;
  // console.log(props);

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
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    const router = useRouter();
    const path = router.asPath;
    const title = `R2US - ${initProps.className}`;
    return (
      <LayoutClass title={title} desc="ClassPage" icon="icons/logo.svg">
        <Title data={initTitle} />
        <Sidebar param={path} id={initProps.slug} />
        <hr></hr>
        <InformationPage data={props.data} />;
      </LayoutClass>
    );
  }
};

export default Item;
