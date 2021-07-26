import React, { useState } from "react";
import InputField from "./inputfield";

type classInfo = {
  name: string;
  subject: string;
  teacher: string;
  description: string;
  //   Note: Có thể sẽ để description là list để hiện nhiều dòng
};

const Information = function () {
  const [data, setData] = useState({
    name: "A",
    subject: "B",
    teacher: "C",
    description: "D",
  });

  console.log(data);

  return (
    <div>
      <div className="mt-20 items-center">
        <InputField name="Tên môn học" editable />
        <InputField name="Môn học" />
        <InputField name="Tên giáo viên" />
        <InputField name="Mô tả" editable />
      </div>
    </div>
  );
};

export default Information;
