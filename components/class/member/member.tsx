import React, { useEffect, useState } from "react";

type documentinfo = {
  name: string;
  src: string;
  description: string;
};

const Member = function () {
  const [data, setData] = useState({
    name: "A",
    src: "B",
    description: "C",
  });

  console.log(data);

  return (
    <div className="">
      <div className="w-80 h-32 border inline-flex space-x-4 rounded">
        <div className=" flex-1">
          <img
            className="w-32 h-32 object-cover"
            src="https://64.media.tumblr.com/8de6a8b665f42a8bf32d7deb8284122b/tumblr_n4g7k2KxDh1s64yzgo1_500.gifv"
            alt="Tên tài liệu"
          />
        </div>
        <div className="flex-1 items-center flex-center justify-center">
          <div className="font-semibold text-sm mb-2 text-center">Họ tên</div>
          <div className="text-center">Chức vị</div>
        </div>
      </div>
    </div>
  );
};

export default Member;
