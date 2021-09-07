import React, { FC, useEffect, useState } from "react";

import AdminLayout from "components/layout/AdminLayout";
import { selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import { useRouter } from "next/router";

const AdminPage: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/general/courses");
  }, []);
  return <React.Fragment></React.Fragment>;
};
export default AdminPage;
