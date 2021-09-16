import React, { useEffect, useState } from "react";

import CreateReview from "components/Review/ReviewCreateModal";
import PopUp from "components/class/PopUp/popup";
import ReviewItem from "components/Review/ReviewItem";
import ReviewLoading from "components/user/Loading/ReviewLoading";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

type pageStatus = "loading" | "done";

const ReviewPage = function () {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);
  const [pageStatus, setPageStatus] = useState<pageStatus>("loading");

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };

  const [data, setData] = useState([]);

  if (status == "nologin") {
    window.location.assign(process.env.NEXT_PUBLIC_WEB_URL);
  }

  useEffect(() => {
    async function getMyReviews() {
      try {
        const res = await userApi.getMyReviews(token);
        const data = res?.data?.data?.result;
        setData(data);
        setPageStatus("done");
      } catch (error) {
        console.log(error.message);
      }
    }
    getMyReviews();
  }, [status]);

  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button} onClick={handleClick}>
            <div className={style.button__text}>Chia sẻ cảm nhận</div>
            <div className={style.button__image}>
              <img src="/icons/title.svg" width="27" height="23" />
            </div>
          </button>
        </div>

        {create === true && (
          <PopUp closepopup={setCreate}>
            <CreateReview />
          </PopUp>
        )}

        {/* Review */}
        {pageStatus === "done" ? (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            {data.map((val, key) => (
              <ReviewItem areview={val} key={key} />
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-12 md:grid-cols-3 sm:grid-cols-2">
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
            <ReviewLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
