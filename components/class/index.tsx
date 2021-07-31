import React from "react";
import Header from "./header/header";
import Information from "./information/information";
import Management from "./management/management";
import Section from "./management/section";

const ClassDocument = function () {
  return (
    <div>
      {/* Get data from params
      Push data to Information */}
      <Header param="" />
      <div className="container items-center pt-40">
        {/* <Information name="A" subject="B" teacher="C" description="D" /> */}
        <Management />
      </div>
    </div>
  );
};

export default ClassDocument;
