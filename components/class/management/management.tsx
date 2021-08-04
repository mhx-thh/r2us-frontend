import React, { useEffect, useState } from "react";
import Section from "./section";

const Management = function () {
  return (
    <div>
      <div className="container items-center pt-44">
        <Section name="Đề thi" />
        <Section name="Tài liệu" />
        <Section name="Đề cương môn học" />
      </div>
    </div>
  );
};

export default Management;
