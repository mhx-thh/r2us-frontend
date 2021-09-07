import React, { FC, useState } from "react";

import AdminLayout from "components/layout/AdminLayout";
import { selectUser } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";
import InstructorTable from "components/adminPage/InstructorTable";

const AdminPage: FC = () => {
  const date = new Date();
  const user = useAppSelector(selectUser);

  const [resource, setResource] = useState(0);
  const [review, setReview] = useState(0);
  const [group, setGroup] = useState(0);
  return (
    <AdminLayout>
      <div className="mb-24 ml-12">
        <InstructorTable />
      </div>
    </AdminLayout>
  );
};
export default AdminPage;
