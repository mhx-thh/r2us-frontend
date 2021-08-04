import InformationPage from "components/class/information/InformationPage";
import LayoutClass from "components/layout/layoutClass";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "components/class/Sidebar/Sidebar";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const URL = `${baseURL}/api/v1/groups/class/${params.slug}`;
  const res = await axios.get(URL);
  const tempURL = `${process.env.NEXT_PUBLIC_WEB_URL}/groups/class/${params.slug}`;
  return {
    props: {
      status: res.status,
      data: res.data.data,
      URL: tempURL,
      id: params.slug,
    },
  };
};

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
    id: string;
  };
  URL: string;
}) {
  console.log(props.data);
  const router = useRouter();
  const path = router.asPath;
  console.log(path);
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <Sidebar param={path} id={props.data.id} />
      <InformationPage data={props} />;
    </LayoutClass>
  );
};

export default Item;
