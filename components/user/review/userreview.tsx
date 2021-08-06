import PopUp from "components/class/PopUp/popup";
import CourseForm from "components/class/ShowCourse/CourseForm";
import React, { useState } from "react";
import style from "./style.module.css";
type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const ReviewUser = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [openDoc, setOpenDoc] = useState(0);
  const ClickpopupDoc = () => {
    setOpenDoc(1);
  };

  console.log(data);

  return (
    <div>
      <div className={style.teacher}>teacher</div>
      <div className={style.review}>
        <div className="rounded cursor-pointer  wrap" onClick={ClickpopupDoc}>
          <div className="text-center">
            <div className={style.text}>cảm nhận </div>
          </div>
          <div className="text-center wrap" >
            <div className={style.icon}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
              <path d="M9 0.999977C6.87827 0.999977 4.84344 1.84283 3.34315 3.34312C1.84285 4.84341 1 6.87825 1 8.99998C1 10.892 1.402 12.13 2.5 13.5L9 21L15.5 13.5C16.598 12.13 17 10.892 17 8.99998C17 6.87825 16.1571 4.84341 14.6569 3.34312C13.1566 1.84283 11.1217 0.999977 9 0.999977V0.999977Z" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> </div>

            <div className={style.class} >
              KTLT</div>
          </div>
          {openDoc === 1 && (
            <PopUp closepopup={setOpenDoc}>
              <CourseForm />
            </PopUp>
          )}
        </div>

      </div>

    </div>
  );
};

export default ReviewUser;
