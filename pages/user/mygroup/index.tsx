import React, { useEffect } from "react";

import LayoutUser from "components/layout/UserLayout";
import GroupPage from "components/user/page/mygroup/mygrouppage";

import { useAppSelector } from "redux/hooks";
import { selectStatus } from "redux/userSlice";

import { useRouter } from "next/router";

const User = function () {
  const status = useAppSelector(selectStatus);
  const router = useRouter();

  useEffect(() => {
    status === "nologin" && router.push("/");
  }, []);

  return (
    <LayoutUser>
      <GroupPage />
    </LayoutUser>
  );
};

export default User;
