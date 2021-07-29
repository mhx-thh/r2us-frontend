import React from "react";
import Header from "./header/header";
import Information from "./information/information";

const ClassDocument = function () {
  return (
    <div>
      {/* Get data from params
      Push data to Information */}
      <Header />
      <div className="container items-center pt-40">
        <Information name="A" subject="B" teacher="C" description="D" />
      </div>
    </div>
  );
};

export default ClassDocument;
