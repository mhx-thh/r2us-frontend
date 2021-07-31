import LayoutClass from "components/class/layoutClass/layout";
import Management from "components/class/management/management";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <Management />
    </LayoutClass>
  );
};
export default Item;
