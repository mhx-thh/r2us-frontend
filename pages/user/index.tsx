import React, { useEffect } from "react";

import UserPage from "components/user/userpage/userpage";
import LayoutUser from "components/layout/UserLayout";

import { selectStatus } from "redux/userSlice";
import { useRouter } from "next/router";
import { useAppSelector } from "redux/hooks";

const User = function () {
  const status = useAppSelector(selectStatus);
  const router = useRouter();

  useEffect(() => {
    status === "nologin" && router.push("/");
  }, []);

  return (
    <LayoutUser>
      <UserPage />
    </LayoutUser>
  );
};

export default User;
