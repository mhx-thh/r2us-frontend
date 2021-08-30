import React, { useState } from "react";
import DropdownReview from "components/class/DropDown/dropdownReview";
import ReviewItem from "components/Review/ReviewItem";

import style from "./style.module.css";

type ReviewType = {
  reviewType: string;
  reviewTitle: string;
  review: string;
  _id: string;
  userId: {
    _id: string;
    givenName: string;
    familyName: string;
    photo: string;
  };
  classId: {
    className: string;
    _id: string;
    courseId: {
      courseName: string;
      _id: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
    academicId: {
      _id: string;
      schoolyear: string;
      semester: number;
    };
    instructorId: {
      _id: string;
      instructorName: string;
      id: string;
    };
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type AppProps = {
  reviewData: ReviewType;
};

const Review = function (props: AppProps) {
  const reviewData = props.reviewData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={style.document}>
      <button className={style.document__button} onClick={handleOpen}>
        <img src="/icons/threedot.svg" />
      </button>
      <div className={style.document__document}>
        <ReviewItem areview={reviewData} />
      </div>
      <div className="absolute">
        {open === true && <DropdownReview close={setOpen} data={reviewData} />}
      </div>
    </div>
  );
};

const ReviewPage = function ({ data, id }: any) {
  return (
    <div className={style.page}>
      <div>
        {/* Button Share Review */}
        <div className={style.buttonarea}>
          <button className={style.button}>
            <div className={style.button__text}>Chia sẻ cảm nhận</div>
            <img className={style.button__image} src="/icons/review.svg" />
          </button>
        </div>

        {/* Document */}
        <div className={style.documentsection}>
          {data.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName ? (
              <Review key={data._id} reviewData={data} />
            ) : (
              <div></div>
            )
          )}
        </div>

        {/* Request */}
        {/* <div className={style.prebox}>
          <div className={style.box}>
            <div className={style.box__text}>Yêu cầu</div>
          </div>
        </div> */}

        {/* Request document */}
        {/* <div className={style.documentsection}>
          {data.result.map((data) =>
            data.classId.className === id.className &&
            data.classId.courseId.courseName === id.courseName &&
            data.classId.instructorId.instructorName === id.instructorName &&
            data.classId.academicId.academicName === id.academicName ? (
              <Review key={data._id} data={data} />
            ) : (
              <div></div>
            )
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ReviewPage;
