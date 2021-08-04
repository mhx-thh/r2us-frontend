import Layout from "components/search/Layout/Layout";
import React from "react";

function review(props) {
  const getReviews = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Layout getData={getReviews}>
        <h1>Review here</h1>
      </Layout>
    </div>
  );
}

export default review;
