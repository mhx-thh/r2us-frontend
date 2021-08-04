import DocumentPage from "components/class/documentpage/documentpage";
import ReviewTeacherPage from "components/class/ReviewTeacher/RevTeacherPage";
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
      <ReviewTeacherPage />
    </LayoutClass>
  );
};
export default Item;
