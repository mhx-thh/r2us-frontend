import LayoutUser from "components/user/layoutUser/layout";
import UserReviewPage from "components/user/review/userreviewpage";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutUser
      title="MHX 2021 - Tin học hóa"
      desc="ClassPage"
      icon="/icons/mhx-logo.svg"
    >
      <UserReviewPage />
    </LayoutUser>
  );
};
export default Item;
