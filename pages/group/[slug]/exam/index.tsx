import React, { useEffect, useState } from "react";
import { classInfo, ResourceType, titleGroup } from "lib/models";

import GroupAPI from "api/groupAPI";

import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import ExamPage from "components/class/page/exampage/examPage";
import Swal from "sweetalert2";

type propApi = {
  status: string;
  title: titleGroup;
  class: classInfo;
  exams: Array<ResourceType>;
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
      title: res?.data?.data,
      class: res?.data?.data,
      exams: moreRes?.data?.data?.result,
    },
  };
};

const Item = function (props: propApi) {
  const [role, setRole] = useState("");
  const token = useAppSelector(selectToken);
  useEffect(() => {
    async function fetchRole() {
      Swal.fire({
        title: "Đang lấy dữ liệu",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await GroupAPI.getRole(props.class._id, token);
        const data = res?.data?.data?.result;
        data[0] !== undefined && setRole(data[0].role);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchRole();
  }, []);

  const Id = {
    academicId: props.class.academicId._id,
    courseId: props.class.courseId._id,
    instructorId: props.class.instructorId.id,
    classId: props.class._id,
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={props.title} role={role}>
        <ExamPage exams={props.exams} id={Id} role={role} />
      </LayoutClass>
    );
  }
};
export default Item;
