import React from "react";

import LayoutUser from "components/layout/UserLayout";
import DocumentPage from "components/user/page/document/documentpage";

const User = function () {
  return (
    <LayoutUser>
      <DocumentPage />;
    </LayoutUser>
  );
};

export default User;
