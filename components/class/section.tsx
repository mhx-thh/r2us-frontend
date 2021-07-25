import React, { useEffect, useState } from "react";

type documentinfo = {
  name: string;
  src: string;
};

const Section = function () {
  const data = [
    {
      name: "A",
      src: "B",
    },
    {
      name: "C",
      src: "D",
    },
  ];

  console.log(data);

  return (
    <div>
      <div className="mt-20 items-center">
        {data.map((document) => (
          <li className="bg-gray-50 border" key={document.name}>
            {document.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Section;
