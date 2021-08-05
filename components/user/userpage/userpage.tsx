import React, { useEffect, useState } from "react";
import InputField from "components/user/userpage/inputfield";
import style from "./style.module.css";

const UserPage = function () {
  const initData = {
    className: "A",
    courseId: {
      courseName: "B",
    },
    instructorId: {
      instructorName: "C",
    },
    academicId: {
      schoolyear: "D",
    },
  };

  return (
    <div className={style.UserPage}>
      <div className={style.Grid}>
        {/* User field */}
        <div className={style.UserInput}>
          <div className={style.UserInput_M}>
            <InputField name="Tên" editable data="A" multiline={false} />
            <InputField name="Biệt danh" editable data="B" multiline={false} />
            <InputField name="MSSV" editable data="C" multiline={false} />
            <InputField name="Email" editable data="C" multiline={false} />
            <InputField name="Mô tả" editable data="C" multiline={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
