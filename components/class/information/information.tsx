import React, { useState } from "react";
import InputField from "./inputfield";

type classInfo = {
  name: string;
  subject: string;
  teacher: string;
  description: string;
  //   Note: Có thể sẽ để description là list để hiện nhiều dòng
};

const Information = function (props: {
  name: string;
  subject: string;
  teacher: string;
  description: string;
}) {
  return (
    <div>
      <InputField
        name="Tên môn học"
        editable
        data={props.name}
        multiline={false}
      />
      <InputField
        name="Môn học"
        editable={false}
        data={props.subject}
        multiline={false}
      />
      <InputField
        name="Tên giáo viên"
        editable={false}
        data={props.teacher}
        multiline={false}
      />
      <InputField name="Mô tả" editable data={props.description} multiline />
    </div>
  );
};

export default Information;
