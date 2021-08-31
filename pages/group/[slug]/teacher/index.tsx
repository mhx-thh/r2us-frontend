import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";
import NewClassAPI from "api/NewClassAPI";

import ReviewPage from "components/class/page/reviewpage/reviewpage";
import LayoutClass from "components/layout/ClassLayout";
import { ReviewType, titleGroup } from "lib/models";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type propApi = {
  status: string;
  class: titleGroup;
  review: Array<ReviewType>;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);
  const rev = await GroupAPI.getReviews();

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res?.data?.status,
      class: res?.data?.data,
      review: rev?.data?.data,
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
        <ReviewPage data={props.review} id={Id} />
      </LayoutClass>
    );
  }
};
export default Item;
