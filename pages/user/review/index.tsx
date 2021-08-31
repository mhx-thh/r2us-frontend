import React, { useEffect, useState } from "react";
import LayoutUser from "components/layout/UserLayout";
import ReviewPage from "components/user/page/review/reviewpage";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import userApi from "api/userApi";

const User = function (props) {
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
  return (
    <LayoutUser>
      <ReviewPage />;
    </LayoutUser>
  );
};

export default User;
