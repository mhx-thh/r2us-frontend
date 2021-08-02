import React, { useEffect, useState } from "react";
import InputField from "components/class/information/inputfield";

type classInfo = {
  data: {
    className: string;
    courseId: {
      courseName: string;
    };
    instructorId: {
      instructorName: string;
    };
  };
};

const Information = function (data: classInfo) {
  const [classInfo, setClassInfo] = useState(data.data);
  console.log(classInfo);

  const editNameClass = () => {
    const newClassInfo = { ...classInfo, className: "newName" };
    setClassInfo(newClassInfo);
    // Call Api
  };

  const editDescriptionClass = () => {
    const newClassInfo = { ...classInfo, description: "newDescription" };
    setClassInfo(newClassInfo);
  };

  return (
    <div>
      <div className="container items-center pt-44">
        <button onClick={editNameClass}>A</button>
        <InputField
          name="Tên lớp"
          editable
          data={classInfo.className}
          multiline={false}
        />
        <InputField
          name="Môn học"
          editable={false}
          data={classInfo.courseId.courseName}
          multiline={false}
        />
        <InputField
          name="Tên giáo viên"
          editable={false}
          data={classInfo.instructorId.instructorName}
          multiline={false}
        />
        <InputField name="Mô tả" editable data="" multiline />
      </div>
    </div>
  );
};

export default Information;
