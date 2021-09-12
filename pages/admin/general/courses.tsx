import React, { FC } from "react";

import AdminLayout from "components/layout/AdminLayout";
import FacultyTable from "components/adminPage/FacultyTable";

const AdminPage: FC = () => {
  return (
    <AdminLayout>
      <div className="mb-24 ml-12">
        <FacultyTable />
      </div>
    </AdminLayout>
  );
};
export default AdminPage;
