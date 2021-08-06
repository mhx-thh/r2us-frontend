import React from "react";
import SmBage from "components/homepage/SmBage";
const Document = () => {
  return (
    <div className="relative w-64 h-40 rounded-2xl bg-white border border-indigo-500 shadow-lg">
      {/* tên tài liệu */}
      <div className="absolute flex items-center text-left pl-2 pt-3">
        <p className="text-lg leading-7 font-semibold">
          Lorem ipsum dolor sit Lorem ipsum dolor sit
        </p>
      </div>
      {/* phần dưới tên tài liệu */}
      <div>
        {/* các thông tin */}
        <div>
          <div>
            
          </div>
        </div>
        
        <div className="absolute -top-2.5 left-36">
          <SmBage>Đề cương</SmBage>
        </div>
        <div className="absolute bottom-5 rigth-5">yaricon</div>
      </div>
    </div>
  );
};
export default Document;
