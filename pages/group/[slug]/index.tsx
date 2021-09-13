import React, { useEffect, useState } from "react";

import GroupAPI from "api/groupAPI";

import InformationPage from "components/class/page/information/InformationPage";
import { classInfo, titleGroup } from "lib/models";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import GroupHeaderLayout from "components/layout/GroupLayout";
import Swal from "sweetalert2";

type propApi = {
  status: string;
  title: titleGroup;
  class: classInfo;
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
      status: res?.data?.status,
      title: res?.data?.data,
      class: res?.data?.data,
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

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else {
    return (
      <GroupHeaderLayout initTitle={props.title} role={role}>
        <InformationPage
          data={props.class}
          initTitle={props.title}
          role={role}
        />
      </GroupHeaderLayout>
    );
  }
};

export default Item;
