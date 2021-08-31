import React, { useEffect, useState } from "react";
import { ResourceType, titleGroup } from "lib/models";

import GroupAPI from "api/groupAPI";

import DocumentPage from "components/class/page/documentpage/documentpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type propApi = {
  status: string;
  class: titleGroup;
  exam: Array<ResourceType>;
};

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
      status: res?.data?.status,
      class: res?.data?.data,
      exam: moreRes?.data?.data,
    },
  };
};

const Item = function (props: propApi) {
  const initProps = props.class;

  const [role, setRole] = useState("");
  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchRole() {
      try {
        const res = await GroupAPI.getRole(props.class._id, token);
        const data = res?.data?.data?.result;
        data[0] !== undefined && setRole(data[0].role);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchRole();
  }, []);

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
      <LayoutClass initTitle={props.class} role={role}>
        <DocumentPage document={props.exam} id={Id} />
      </LayoutClass>
    );
  }
};
export default Item;
