import InformationPage from "components/class/information/InformationPage";
import LayoutClass from "components/layout/layoutClass";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "components/class/Sidebar/Sidebar";
import Title from "components/class/Title/Title";

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
//   const URL = `${baseURL}api/v1/groups/class/${params.slug}`;
//   const res = await axios.get(URL);
//   const tempURL = `${process.env.NEXT_PUBLIC_WEB_URL}/groups/${params.slug}`;
//   return {
//     props: {
//       status: res.status,
//       data: res.data.data,
//       URL: tempURL,
//       slug: params.slug,
//     },
//   };
// };

const Item = function (props: {
  status: string;
  data: {
    className: string;
    courseId: {
      courseName: string;
    };
    instructorId: {
      instructorName: string;
    };
    academicId: {
      schoolyear: string;
    };
    slug: string;
  };
  URL: string;
}) {
  const newProps = {
    status: "100",
    data: {
      className: "string",
      courseId: {
        courseName: "string",
      },
      instructorId: {
        instructorName: "string",
      },
      academicId: {
        schoolyear: "string",
      },
      slug: "A",
    },
    URL: "http://localhost:3000/group/A",
  };

  const newDataTitle = {
    academicId: {
      schoolyear: newProps.data.academicId.schoolyear,
    },
    courseId: {
      courseName: newProps.data.courseId.courseName,
    },
    className: newProps.data.className,
    instructorId: {
      instructorName: newProps.data.instructorId.instructorName,
    },
  };

  console.log(props.data);
  const router = useRouter();
  const path = router.asPath;
  console.log("Props: ", newProps);
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <Title data={newDataTitle} />
      <Sidebar param={path} id={newProps.data.slug} />
      <hr></hr>
      <InformationPage data={newProps} />;
    </LayoutClass>
  );
};

export default Item;
