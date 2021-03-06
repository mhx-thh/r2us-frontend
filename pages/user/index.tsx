import React, { useEffect, useState } from "react";

import UserPage from "components/user/page/userpage/userpage";
import UserHeaderPage from "components/layout/UserHeaderPage";

import { selectStatus, selectToken, selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";

import { useRouter } from "next/router";

import userApi from "api/userApi";

import Swal from "sweetalert2";
import LayoutUser from "components/layout/UserLayout";

const User = function () {
  const status = useAppSelector(selectStatus);
  const router = useRouter();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    status === "nologin" && router.push("/");
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        Swal.fire({
          title: "Đang lấy dữ liệu",
          icon: "info",
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
        const res = await userApi.getInfo(token);
        const data = res?.data?.data;
        setUserData(data);
        Swal.close();
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  return (
    <LayoutUser>
      <UserPage user={userData} />
    </LayoutUser>
  );
};

export default User;
