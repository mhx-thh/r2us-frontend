import Footer from "components/footer/FooterComponent";
import MetaLayout from "components/layout/MegaLayout";
import Sidebar from "components/user/Sidebar/UserSidebar";
import UserHeader from "components/user/userheader/header";
import UserPage from "components/user/userpage/userpage";
import { useRouter } from "next/router";
import React from "react";
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
  const router = useRouter();
  const path = router.asPath;
  const title = `R2us | ${user.familyName} ${user.givenName}`;
  
  return (
    <MetaLayout title={title} desc="User" icon="icons/logo.svg">
      <UserHeader user={user} />
      <Sidebar param={path} />
      <hr></hr>
      <UserPage user={user} />
      <Footer />
    </MetaLayout>
  );
};

export default User;
