import React from "react";
import ReviewItem from "components/Review/ReviewItem";

type TypeDoc = {
  review: any;
};

function Reviews({ review }: TypeDoc) {
  const pagination = {
    _limit: 10,
    _page: 1,
    _totalRows: 1 || review.length,
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2 px-24 py-10">
        {review.map((idx: any) => {
          // eslint-disable-next-line react/jsx-key
          return <ReviewItem areview={idx} />;
        })}
      </div>
    </div>
  );
}

export default Reviews;
