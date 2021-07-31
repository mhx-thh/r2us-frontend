import React, { useState } from "react";
import InputField from "components/class/information/inputfield";
import UserHeader from "../userheader/header";

type classInfo = {
  name: string;
  subject: string;
  teacher: string;
  description: string;
  //   Note: Có thể sẽ để description là list để hiện nhiều dòng
};

const UserPage = function () {
  const props = {
    name: "A",
    email: "B",
    id: "C",
    description: "D",
  };
  return (
    <div>
      <UserHeader param="" />
      <div className="container items-center pt-44">
        <InputField name="Tên" editable data={props.name} multiline={false} />
        <InputField
          name="Email"
          editable
          data={props.email}
          multiline={false}
        />
        <InputField
          name="Mã số sinh viên"
          editable
          data={props.id}
          multiline={false}
        />
        <InputField
          name="Tiểu sử"
          editable
          data={props.description}
          multiline
        />
      </div>
    </div>
  );
};

export default UserPage;
