import React from "react";
import { useRouter } from "next/router";

import UserPage from "components/user/userpage/userpage";
import LayoutUser from "components/layout/UserLayout";

import { useAppSelector } from "redux/hooks";
import { selectUser } from "redux/userSlice";

// export const getServerSideProps: GetServerSideProps = async (params) => {
//   const res = await NewClassAPI.getGroup(temp);
//   const schoolyear = await AcademicAPI.getAcademic(res.data.data.academicId);
//   const instructorName = await InstructorAPI.getInstructor(
//     res.data.data.instructorId
//   );

//   return {
//     props: {
//       status: res.data.status,
//       data: res.data.data,
//     },
//   };
// };

// type propApi = {};

const User = function (props) {
  const user = useAppSelector(selectUser);

  return (
    <LayoutUser>
      <UserPage user={user} />
    </LayoutUser>
  );
};

export default User;
