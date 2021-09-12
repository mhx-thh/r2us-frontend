import React, { FC, useEffect } from "react";

import { useRouter } from "next/router";

const AdminPage: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/general/courses");
  }, []);
  return <React.Fragment></React.Fragment>;
};
export default AdminPage;
