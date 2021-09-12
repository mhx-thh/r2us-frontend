import React, { useEffect, useState } from "react";
import ReviewItem from "components/Review/ReviewItem";
import PopUp from "components/class/PopUp/popup";
import ReviewEditModal from "components/Review/ReviewEditModal";
import useClickOutside from "components/clickOutside/clickOutside";

import style from "../groupPage.module.css";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";

import { Id, ReviewType } from "lib/models";

type AppProps = {
  role: string;
  review: Array<ReviewType>;
  id: Id;
};

type Review = {
  reviewData: ReviewType;
  role: string;
};

const ReviewTeacher = function (props: AppProps) {
  const [reviewArray, setReviewArray] = useState(props.review);
  const [flag, setFlag] = useState(false);

  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await GroupAPI.getReviews();
        const data = res?.data?.data?.result;
        setReviewArray(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [flag, props.review]);

  // Review Item
  const Review = function (props: Review) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    return (
      <div className={style.document}>
        {(props.role === "provider" || props.role === "member") && (
          <div>
            <button className={style.document__button} onClick={handleOpen}>
              <img src="/icons/threedot.svg" />
            </button>
            <div className="absolute">
              {open === true && (
                <DropdownReview close={setOpen} data={props.reviewData} />
              )}
            </div>
          </div>
        )}
        <div className={style.document__document}>
          <ReviewItem areview={props.reviewData} />
        </div>
      </div>
    );
  };

  // Dropdown function
  const DropdownReview = function ({ close, data }: any) {
    const ref = useClickOutside(() => {
      close(0);
    });

    const [update, setUpdate] = useState(false);
    const ClickUpdate = () => {
      setUpdate(true);
    };

    const ClickDelete = async () => {
      try {
        await GroupAPI.deleteReview(data._id, token);
        setFlag(!flag);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div ref={ref} className="absolute my-8 -mx-24 bg-white">
        <ul className="w-28 text-base leading-6 font-normal shadow rounded-xl bg-white">
          {data.status === "pending" && props.role === "provider" && (
            <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
              <button>Duyệt</button>
            </li>
          )}
          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 ">
            <button onClick={ClickDelete}>Xóa</button>
          </li>
          <li className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200">
            <button onClick={ClickUpdate}>Chỉnh sửa</button>
          </li>
        </ul>
        {update === true && (
          <PopUp closepopup={close}>
            <ReviewEditModal review={data} />
          </PopUp>
        )}
      </div>
    );
  };

  return (
    <div className={style.page}>
      <div>
        {/* Button Share Review */}
        <div className={style.buttonarea}>
          <div className={style.head}>
            <div className={style.head__text}>Chia sẻ cảm nhận</div>
            <img className={style.head__image} src="/icons/review.svg" />
          </div>
        </div>

        {/* Document */}
        <div className={style.documentsection}>
          {reviewArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.reviewType === "Instructor" ? (
              <Review reviewData={data} role={props.role} key={data._id} />
            ) : (
              <div key={data._id}></div>
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

export default ReviewTeacher;
