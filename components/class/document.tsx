import React, { useEffect, useState } from "react";
import Section from "./section";

type documentinfo = {
  name: string;
  src: string;
};

const Document = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
  });

  console.log(data);

  return (
    <div>
      <div className="mt-20 items-center">
        <Section />
      </div>
    </div>
  );
};

export default Document;
