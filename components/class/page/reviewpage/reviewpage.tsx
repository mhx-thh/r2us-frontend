import DropdownReview from "components/class/DropDown/dropdownReview";
import ReviewItem from "components/Review/ReviewItem";
import React, { useState } from "react";
import style from "./style.module.css";

// type AppProps = {
//   reviewType: string;
//   reviewTitle: string;
//   review: string;
//   _id: string;
//   userId: {
//     _id: string;
//     givenName: string;
//     familyName: string;
//     photo: string;
//   };
//   classId: {
//     className: string;
//     _id: string;
//     courseId: {
//       courseName: string;
//       _id: string;
//       facultyId: {
//         facultyName: string;
//         _id: string;
//       };
//     };
//     academicId: {
//       schoolyear: string;
//       semester: number;
//     };
//     instructorId: {
//       _id: string;
//       instructorName: string;
//       id: string;
//     };
//   };
//   createdAt: string;
//   updatedAt: string;
//   description: string;
//   __v: number;
// };

const Review = function (data: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={style.document}>
      <button className={style.document__button} onClick={handleOpen}>
        <svg
          width="15"
          height="4"
          viewBox="0 0 15 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99396 3.11364C2.69709 3.11364 3.27237 2.53835 3.27237 1.83523C3.27237 1.1321 2.69709 0.556818 1.99396 0.556818C1.29084 0.556818 0.715554 1.1321 0.715554 1.83523C0.715554 2.53835 1.29084 3.11364 1.99396 3.11364ZM7.50178 3.11364C8.2049 3.11364 8.78018 2.53835 8.78018 1.83523C8.78018 1.1321 8.2049 0.556818 7.50178 0.556818C6.79865 0.556818 6.22337 1.1321 6.22337 1.83523C6.22337 2.53835 6.79865 3.11364 7.50178 3.11364ZM13.0096 3.11364C13.7127 3.11364 14.288 2.53835 14.288 1.83523C14.288 1.1321 13.7127 0.556818 13.0096 0.556818C12.3065 0.556818 11.7312 1.1321 11.7312 1.83523C11.7312 2.53835 12.3065 3.11364 13.0096 3.11364Z"
            fill="#6366F1"
          />
        </svg>
      </button>
      <div className={style.document__document}>
        <ReviewItem areview={data.data} />
      </div>
      <div className="absolute">
        {open === true && <DropdownReview close={setOpen} data={data.data} />}
      </div>
    </div>
  );
};

const ReviewPage = function ({ data, id }: any) {
  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const user = "admin";
  const [newClass, setNewClass] = useState([]);
  console.log(data);
  return (
    <div className={style.page}>
      <div>
        {/* "Chia sẻ tài liệu button" */}
        <div className={style.buttonarea}>
          <button className={style.button}>
            <div className={style.button__text}>Chia sẻ cảm nhận</div>
            <div className={style.button__image}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16699 8.16675H19.8337V10.5001H8.16699V8.16675ZM8.16699 12.8334H16.3337V15.1667H8.16699V12.8334Z"
                  fill="#6366F1"
                />
                <path
                  d="M23.333 2.33325H4.66634C3.37951 2.33325 2.33301 3.37975 2.33301 4.66659V25.6666L8.55484 20.9999H23.333C24.6198 20.9999 25.6663 19.9534 25.6663 18.6666V4.66659C25.6663 3.37975 24.6198 2.33325 23.333 2.33325ZM23.333 18.6666H7.77784L4.66634 20.9999V4.66659H23.333V18.6666Z"
                  fill="#6366F1"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Document */}
        <div className={style.documentsection}>
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
