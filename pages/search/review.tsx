import ReviewItem from "components/Review/ReviewItem";
import Layout from "components/search/Layout/Layout";
import Reviews from "components/search/Reviews/reviews";
import React, { useState } from "react";

function review(props) {
  const [review,setReview]=useState([])
  const [data,setData]=useState([])
  const getReviews = (value,label,data) => {
    setReview(value);
    setData(data)
  };

  return (
    <div>
      <Layout getData={getReviews}>
        <Reviews review={review}  />
      </Layout>
    </div>
  );
}

export default review;
