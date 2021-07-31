import Information from "components/class/information/information";
import LayoutClass from "components/class/layoutClass/layout";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <Information name="A" subject="B" teacher="C" description="D" />;
    </LayoutClass>
  );
};
export default Item;
