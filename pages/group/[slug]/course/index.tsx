import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";

import LayoutClass from "components/layout/ClassLayout";
import { classInfo, ReviewType, titleGroup } from "lib/models";
import ReviewCourse from "components/class/page/reviewCourse/reviewCourse";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

type propApi = {
  status: string;
  title: titleGroup;
  class: classInfo;
  review: Array<ReviewType>;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await GroupAPI.getGroup(temp);
  const rev = await GroupAPI.getReviews();

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res?.data?.status,
      title: res?.data?.data,
      class: res?.data?.data,
      review: rev?.data?.data?.result,
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
        console.log(error.message);
      }
      Swal.close();
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
        <ReviewCourse review={props.review} id={Id} role={role} />
      </LayoutClass>
    );
  }
};
export default Item;
