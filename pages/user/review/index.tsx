import React from "react";

import LayoutUser from "components/layout/UserLayout";
import ReviewPage from "components/user/page/review/reviewpage";

const User = function () {
  return (
    <LayoutUser>
      <ReviewPage />;
    </LayoutUser>
  );
};

export default User;
