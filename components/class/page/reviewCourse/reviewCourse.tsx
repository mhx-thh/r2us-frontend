import React, { useEffect, useState } from "react";

import ReviewItem from "components/Review/ReviewItem";
import PopUp from "components/class/PopUp/popup";
import ReviewEditModal from "components/Review/ReviewEditModal";
import useClickOutside from "components/clickOutside/clickOutside";

import style from "../groupPage.module.css";
import { Id, ReviewType } from "lib/models";

import GroupAPI from "api/groupAPI";

import { useAppSelector } from "redux/hooks";
import { selectToken } from "redux/userSlice";
import Swal from "sweetalert2";

type AppProps = {
  role: string;
  review: Array<ReviewType>;
  id: Id;
};

type Review = {
  reviewData: ReviewType;
  role: string;
};

const ReviewCourse = function (props: AppProps) {
  const [reviewArray, setReviewArray] = useState(props.review);
  const [flag, setFlag] = useState(false);

  const token = useAppSelector(selectToken);

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await GroupAPI.getReviews();
        const data = res?.data?.data?.result;
        setReviewArray(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResources();
  }, [flag, props.review]);

  // Review Component
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
            <div className="relative -top-6">
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

  // DropDown Component
  const DropdownReview = function ({ close, data }: any) {
    const ref = useClickOutside(() => {
      close(0);
    });

    const [update, setUpdate] = useState(false);
    const ClickUpdate = () => {
      setUpdate(true);
    };

    const ClickDelete = () => {
      try {
        Swal.fire({
          title: "Bạn chắc chắn muốn xóa ?",
          text: "Bạn sẽ không thể hoàn tác lại nếu đã xóa!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Tôi chắc chắn !",
          cancelButtonText: "Không, quay lại !",
        }).then(async function (result) {
          if (result.isConfirmed) {
            await GroupAPI.deleteReview(data._id, token);
            Swal.fire(
              "Xóa thành công",
              "Cảm nhận đã được xóa khỏi lớp",
              "success"
            );
            setFlag(!flag);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    const acceptedStatus = {
      status: "accepted",
      reviewType: data.reviewType,
      review: data.review,
      reviewTitle: data.reviewTitle,
    };
    const ClickAccept = async () => {
      try {
        const res = await GroupAPI.patchReview(acceptedStatus, data._id, token);
        setFlag(!flag);
        Swal.fire({
          icon: "success",
          title: "Đã duyệt cảm nhận thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div ref={ref} className="absolute my-8 -mx-24 bg-white">
        <ul className="w-28 text-base leading-6 font-normal shadow-xl rounded-xl bg-white border-2 border-solid border-blue-700">
          {/* {data.status === "pending" && props.role === "provider" && ( */}
          {data.status === "pending" && (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-green-200 cursor-pointer"
              onClick={ClickAccept}
            >
              Duyệt
            </li>
          )}
          {/* )} */}
          <li
            className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-red-300 cursor-pointer"
            onClick={ClickDelete}
          >
            {data.status === "accepted" ? "Xóa" : "Không duyệt"}
          </li>
          {data.status === "accepted" && (
            <li
              className="w-full h-auto p-1.5 text-center rounded-xl hover:bg-blue-200 cursor-pointer"
              onClick={ClickUpdate}
            >
              Chỉnh sửa
            </li>
          )}
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
            data.reviewType === "Class" &&
            data.status === "accepted" ? (
              <Review reviewData={data} role={props.role} key={data._id} />
            ) : (
              <div key={data._id}></div>
            )
          )}
        </div>

        {/* Request */}
        <div className={style.prebox}>
          <div className={style.box}>
            <div className={style.box__text}>Yêu cầu</div>
          </div>
        </div>

        {/* Request document */}
        <div className={style.documentsection}>
          {reviewArray.map((data) =>
            data.classId._id === props.id.classId &&
            data.classId.courseId._id === props.id.courseId &&
            data.classId.instructorId.id === props.id.instructorId &&
            data.classId.academicId._id === props.id.academicId &&
            data.reviewType === "Class" &&
            data.status === "pending" ? (
              <Review reviewData={data} role={props.role} key={data._id} />
            ) : (
              <div key={data._id}></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCourse;
