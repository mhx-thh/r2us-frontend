import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";
import NewClassAPI from "api/NewClassAPI";

import DocumentPage from "components/class/page/documentpage/documentpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { classInfo, ResourceType, titleGroup } from "lib/models";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import OutlinePage from "components/class/page/ReviewPaper/ReviewPaper";

type propApi = {
  status: string;
  title: titleGroup;
  class: classInfo;
  outline: Array<ResourceType>;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);
  const moreRes = await GroupAPI.getResources();

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res?.data?.status,
      class: res?.data?.data,
      title: res?.data?.data,
      outline: moreRes?.data?.data?.result,
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
    academicId: initProps.academicId._id,
    courseId: initProps.courseId._id,
    instructorId: initProps.instructorId.id,
    classId: initProps._id,
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={props.title} role={role}>
        <OutlinePage outline={props.outline} id={Id} role={role} />
      </LayoutClass>
    );
  }
};
export default Item;
