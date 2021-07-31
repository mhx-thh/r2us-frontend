import LayoutUser from "components/user/layoutUser/layout";
import UserPage from "components/user/userpage/userpage";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutUser
      title="MHX 2021 - Tin học hóa"
      desc="UserPage"
      icon="/icons/mhx-logo.svg"
    >
      <UserPage />
    </LayoutUser>
  );
};
export default Item;
