import ReviewItem from "components/Review/ReviewItem";
import Layout from "components/search/Layout/Layout";
import Reviews from "components/search/Reviews/reviews";
import React, { useState } from "react";

function review(props) {
  const [review,setReview]=useState([])
  const [loading,setLoading]=useState(true)
  const [label,setLabel]=useState([])
  const [data,setData]=useState([])
  const getReviews = (value,loading,label,data) => {
    setReview(value);
    setLoading(loading);
    setLabel(label);
    setData(data)
  };

  return (
    <div>
      <Layout getData={getReviews}>
        <Reviews review={review} loading={loading} label={{}} data={data} />
      </Layout>
    </div>
  );
}

export default review;
