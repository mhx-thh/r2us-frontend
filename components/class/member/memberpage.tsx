import React, { useEffect, useState } from "react";
import Header from "components/class/header/header";
import MemberSection from "./membersection";

const MemberPage = function () {
  return (
    <div>
      <Header />
      <div className="container items-center pt-44">
        <MemberSection name="A" />
      </div>
    </div>
  );
};

export default MemberPage;
