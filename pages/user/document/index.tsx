import React, { useEffect } from "react";

import LayoutUser from "components/layout/UserLayout";
import DocumentPage from "components/user/page/document/documentpage";

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
      <DocumentPage />;
    </LayoutUser>
  );
};

export default User;
