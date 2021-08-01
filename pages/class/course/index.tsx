import ReviewPage from "components/class/ReviewCourse/RevCoursePage";
import LayoutClass from "components/layout/layoutClass";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutClass
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <ReviewPage />
    </LayoutClass>
  );
};
export default Item;
