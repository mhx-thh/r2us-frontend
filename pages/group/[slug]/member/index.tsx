import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";

import MemberPage from "components/class/page/member/memberpage";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { memberType, titleGroup } from "lib/models";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";
import GroupHeaderLayout from "components/layout/GroupLayout";

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
      Swal.fire({
        title: "Đang lấy dữ liệu",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await GroupAPI.getRole(props.title._id, token);
        const data = res?.data?.data?.result;
        data[0] !== undefined && setRole(data[0].role);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }

    async function fetchMembers() {
      Swal.fire({
        title: "Đang lấy dữ liệu",
        icon: "info",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await GroupAPI.getMembers(props.title._id, token);
        const data = res?.data?.data?.result;
        setMembers(data);
      } catch (error) {
        console.log(error.message);
      }
      Swal.close();
    }
    fetchMembers();
    fetchRole();
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <GroupHeaderLayout initTitle={props.title} role={role}>
        <MemberPage members={members} role={role} title={props.title} />
      </GroupHeaderLayout>
    );
  }
};

export default Item;
