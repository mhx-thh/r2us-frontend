import React from "react";
import Header from "./header/header";
import Management from "./management/management";

const ClassDocument = function () {
  return (
    <div>
      {/* Get data from params
      Push data to Information */}
      <div className="container items-center pt-40">
        {/* <Information name="A" subject="B" teacher="C" description="D" /> */}
        <Management />
      </div>
    </div>
  );
};

export default ClassDocument;
