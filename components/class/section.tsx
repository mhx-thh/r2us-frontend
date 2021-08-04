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
      <div className="mt-20 items-center list-group">
        {data.map((document) => (
          <li
            className="flex-column bg-gray-50 border list-group-item"
            key={document.name}
          >
            {document.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Section;
