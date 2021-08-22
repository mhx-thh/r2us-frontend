import GroupAPI from "api/groupAPI";
import DocumentPage from "components/class/page/documentpage/documentpage";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";
import LayoutClass from "components/layout/layoutClass";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await GroupAPI.getGroup(temp);
  const moreRes = await GroupAPI.getResources();

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res.data.status,
      data: res.data.data,
      document: moreRes.data.data,
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
//   const moreRes = await GroupAPI.getResources();
//   return {
//     props: {
//       status: res.data.status,
//       data: res.data.data,
//       document: moreRes.data.data,
//     },
//   };
// };

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
  document: any;
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
        <DocumentPage document={props.document} />
      </LayoutClass>
    );
  }
};
export default Item;
