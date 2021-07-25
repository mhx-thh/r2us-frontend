import React, { useState } from "react";
import Document from "./document";
import Header from "./header/header";
import Information from "./information";

const ClassDocument = function () {
  return (
    <div>
      <Header />
      {/* <Information /> */}
      <Document />
    </div>
  );
};

export default ClassDocument;
