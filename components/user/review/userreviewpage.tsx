import React, { useState } from "react";
import ReviewUser from "./userreview";

type Reviewinfo = {
  name: string;
  src: string;
  description: string;
};

const UserReviewPage = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  const [addDoc, setAddDoc] = useState(0);
  const ClickpopupDoc = () => {
    setAddDoc(1);
  };
  const user = "admin";

  console.log(data);

  return (
    <div>
      <div className="container items-center pt-40">
        <div className="flex flex-wrap items-center justify-center px-16 py-8 pt-40">
          <ReviewUser />
          <ReviewUser />
          <ReviewUser />
          <ReviewUser />


        </div>
      </div>
    </div>
  );
};

export default UserReviewPage;
