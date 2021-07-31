import LayoutClass from "components/class/layoutClass/layout";
import MemberPage from "components/class/member/memberpage";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <MemberPage />
    </LayoutClass>
  );
};
export default Item;
