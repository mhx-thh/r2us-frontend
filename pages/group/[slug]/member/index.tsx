import React, { useEffect, useState } from "react";

import NewClassAPI from "api/NewClassAPI";
import GroupAPI from "api/groupAPI";

import MemberPage from "components/class/page/member/memberpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { titleGroup } from "lib/models";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type propApi = {
  status: string;
  class: titleGroup;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await NewClassAPI.getGroup(temp);

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      status: res?.data?.status,
      class: res?.data?.data,
    },
  };
};

const Item = function (props: propApi) {
  const router = useRouter();

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

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={props.class} role={role}>
        <MemberPage />
      </LayoutClass>
    );
  }
};

export default Item;
