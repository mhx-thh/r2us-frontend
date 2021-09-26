import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";

import AdminLayout from "components/layout/AdminLayout";
import InstructionTable from "components/adminPage/Instruction";
import { useRouter } from "next/router";

function MyComponent() {
  const router = useRouter();
  const create = () => {
    router.push("/admin/Blog/Create");
  };
  return (
    <AdminLayout>
      <div>
        <InstructionTable setAdd={create} />
        <div className="w-full h-4 mt-24"></div>
      </div>
      <div className="w-full h-2"></div>
    </AdminLayout>
  );
}

export default MyComponent;
