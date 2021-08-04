import InformationPage from "components/class/information/InformationPage";
import LayoutClass from "components/layout/layoutClass";
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const URL = `${baseURL}/api/v1/groups/class/${params.id}`;
  const res = await axios.get(URL);
  console.log(res.data.data);
  return { props: { status: res.status, data: res.data.data } };
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
  };
}) {
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <InformationPage data={props.data} />;
    </LayoutClass>
  );
};

export default Item;
