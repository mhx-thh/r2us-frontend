import React, { useEffect, useState } from "react";
import MemberSection from "./membersection";

const MemberPage = function () {
  return (
    <div>
      <div className="container items-center pt-44">
        <MemberSection name="Quản lý" />
        <MemberSection name="Thành viên" />
        <MemberSection name="Phê duyệt" />
      </div>
    </div>
  );
};

export default MemberPage;
