import GroupAPI from "api/groupAPI";
import InformationPage from "components/class/page/information/InformationPage";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import LayoutClass from "components/layout/layoutClass";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await GroupAPI.getGroup(temp);

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await GroupAPI.getGroups();
//   const paths = res.data.data.result.map((path) => ({
//     params: { slug: path.slug },
//   }));
//   return { paths: paths, fallback: "blocking" };
// };

// export const getStaticProps: GetStaticProps = async (params) => {
//   const temp = params.params.slug.toString();
//   const res = await GroupAPI.getGroup(temp);
//   return {
//     props: {
//       status: res.data.status,
//       data: res.data.data,
//       revalidate: 10,
//     },
//   };
// };

type propApi = {
  status: string;
  data: {
    className: string;
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
      _id: string;
    };
    courseId: {
      courseName: string;
      _id: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
    description: string;
    createdAt: string;
    createBy: string;
    updatedAt: string;
    slug: string;
    __v: number;
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
    updateAt: props.data.updatedAt,
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    const path = router.asPath;
    const title = `R2us | ${initProps.className}`;
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
