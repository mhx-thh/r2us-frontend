import React, { useEffect, useState } from "react";

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
      <div className="mt-20 items-center"></div>
    </div>
  );
};

export default Document;
