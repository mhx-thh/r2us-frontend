import Footer from "components/footer/FooterComponent";
import React, { FC, useEffect, useState } from "react";

const TogglePage: FC = () => {
  return (
    <React.Fragment>
      <div className="w-full  items-center px-28 py-24 ">
        <p className="px-40 py-2 pt-4">_ABOUT US </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60  font-bold pt-2">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60 font-bold pt-2">
          consectetuer adipiscing elit,enean
        </p>
        <p className="text-indigo-500 text-4xl leading-7 px-60 font-bold  pt-2">
          commodo liguala eget dolor.
        </p>
      </div>
      <img src="picture/about.png" alt="about picture" />
      <Footer />
    </React.Fragment>
    // <ClassDocument />
  );
};

export default TogglePage;
