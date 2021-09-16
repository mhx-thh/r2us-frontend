import React, { useEffect } from "react";

import LayoutUser from "components/layout/UserLayout";
import ReviewPage from "components/user/page/review/reviewpage";

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
      <ReviewPage />;
    </LayoutUser>
  );
};

export default User;
