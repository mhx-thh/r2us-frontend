import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";

import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { classInfo, ResourceType, titleGroup } from "lib/models";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import OutlinePage from "components/class/page/ReviewPaper/ReviewPaper";
import Swal from "sweetalert2";

type propApi = {
  status: string;
  title: titleGroup;
  class: classInfo;
  outline: Array<ResourceType>;
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
        Swal.fire("Đã xảy ra lỗi", "", "error");
        console.log(error.message);
      }
      Swal.close();
    }
    fetchRole();
  }, []);

  const Id = {
    academicId: initProps.academicId._id,
    facultyId: initProps.courseId.facultyId._id,
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
