import React, { useState } from "react";
import AddDoc from "../AddDoc/AddDoc";
import AddReview from "../AddReviewCourse/AddReview";
import AddTeacherReview from "../AddReviewTeacher/AddReview";
import PopUp from "../PopUp/popup";
import TeacherForm from "../ShowTeacher/TeacherForm";
import Review from "./RevTeacher";

type Reviewinfo = {
  name: string;
  src: string;
  description: string;
};

const ReviewTeacherPage = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const user = "admin";

  console.log(data);

  return (
    <div>
      <div className="container items-center pt-40">
        <div className="flex flex-row-reverse">
          {user === "admin" ? (
            <button className="border p-3" onClick={ClickpopupDoc}>
              Tạo cảm nhận
            </button>
          ) : (
            <button className="p-4"> </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center px-16 py-8">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>

        {addDoc === 1 && (
          <PopUp closepopup={setAddDoc}>
            <AddTeacherReview />
          </PopUp>
        )}
      </div>
    </div>
  );
};

export default ReviewTeacherPage;
