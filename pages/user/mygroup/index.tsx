import React from "react";

import LayoutUser from "components/layout/UserLayout";
import GroupPage from "components/user/page/mygroup/mygrouppage";

const User = function () {
  return (
    <LayoutUser>
      <GroupPage />
    </LayoutUser>
  );
};

export default User;
