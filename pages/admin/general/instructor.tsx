import React, { FC } from "react";

import AdminLayout from "components/layout/AdminLayout";
import InstructorTable from "components/adminPage/InstructorTable";

const AdminPage: FC = () => {
  return (
    <AdminLayout>
      <div className="mb-24 ml-12">
        <InstructorTable />
      </div>
    </AdminLayout>
  );
};
export default AdminPage;
