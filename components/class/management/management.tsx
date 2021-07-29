import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Section from "./section";

const Management = function () {
  return (
    <div>
      <Header />
      <div className="container items-center pt-40">
        <Section name="Đề thi" />
        <Section name="Tài liệu" />
        <Section name="Đề cương môn học" />
      </div>
    </div>
  );
};

export default Management;
