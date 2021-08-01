import UserDocumentPage from "components/user/document/userdocumentpage";
import LayoutUser from "components/user/layoutUser/layout";
import React from "react";

const Item = function () {
  // Get params
  return (
    <LayoutUser
      title="MHX 2021 - Tin học hóa"
      desc="UserPage"
      icon="/icons/mhx-logo.svg"
    >
      <UserDocumentPage />
    </LayoutUser>
  );
};
export default Item;
