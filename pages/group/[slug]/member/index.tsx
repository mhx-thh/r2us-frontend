import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";

import MemberPage from "components/class/page/member/memberpage";
import LayoutClass from "components/layout/ClassLayout";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { memberType, titleGroup } from "lib/models";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

type propApi = {
  title: titleGroup;
  members: Array<memberType>;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
  const temp = params.params.slug.toString();
  const res = await GroupAPI.getGroup(temp);

  params.res.setHeader(
    "Cache-control",
    "public, s-maxage=10, stale-while-revalidate=10"
  );

  return {
    props: {
      title: res?.data?.data,
    },
  };
};

const Item = function (props: propApi) {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [role, setRole] = useState("");
  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchRole() {
      try {
        const res = await GroupAPI.getRole(props.title._id, token);
        const data = res?.data?.data?.result;
        data[0] !== undefined && setRole(data[0].role);
      } catch (error) {
        console.log(error.message);
      }
    }

    async function fetchMembers() {
      try {
        const res = await GroupAPI.getMembers(props.title._id, token);
        const data = res?.data?.data?.result;
        setMembers(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMembers();
    fetchRole();
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <LayoutClass initTitle={props.title} role={role}>
        <MemberPage members={members} />
      </LayoutClass>
    );
  }
};

export default Item;
