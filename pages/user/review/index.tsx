import userApi from "api/userApi";
import Footer from "components/footer/FooterComponent";
import MetaLayout from "components/layout/MegaLayout";
import ReviewPage from "components/user/page/review/reviewpage";
import Sidebar from "components/user/Sidebar/UserSidebar";
import UserHeader from "components/user/userheader/header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";
import { selectToken, selectUser } from "redux/userSlice";

const User = function () {
  const token = useAppSelector(selectToken);
  const [myReview, setMyReview] = useState([]);
  useEffect(() => {
    async function fetchMyReview() {
      try {
        const res = await userApi.getMyReviews(token);
        const data = res?.data?.data;
        setMyReview(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMyReview();
  }, []);
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const path = router.asPath;
  const title = `R2us | ${user.familyName} ${user.givenName}`;
  return (
    <MetaLayout title={title} desc="User" icon="icons/logo.svg">
      <UserHeader user={user} />
      <Sidebar param={path} />
      <hr></hr>
      <ReviewPage />;
      <Footer />
    </MetaLayout>
  );
};

export default User;
