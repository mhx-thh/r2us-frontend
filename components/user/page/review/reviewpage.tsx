import React, { useEffect, useState } from "react";

import CreateReview from "components/Review/ReviewCreateModal";
import PopUp from "components/class/PopUp/popup";
import ReviewItem from "components/Review/ReviewItem";
import style from "./style.module.css";

import { useAppSelector } from "redux/hooks";
import { selectStatus, selectToken } from "redux/userSlice";

import userApi from "api/userApi";

const ReviewPage = function (props: any) {
  const token = useAppSelector(selectToken);
  const status = useAppSelector(selectStatus);

  const [create, setCreate] = useState(false);
  const handleClick = () => {
    setCreate(true);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getMyReviews() {
      try {
        const res = await userApi.getMyReviews(token);
        const data = res?.data?.data?.result;
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      getMyReviews();
    }
  }, [status]);

  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    async function fetchMyClass() {
      try {
        const res = await userApi.getMyClass(token);
        const myClass = res?.data?.data?.result;
        setMyClass(myClass);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (status === "logined") {
      fetchMyClass();
    }
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

        {/* Document */}
        <div className="w-full grid grid-cols-4 gap-11 justify-around">
          {data.map((val, key) => (
            <ReviewItem areview={val} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
