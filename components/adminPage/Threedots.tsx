import React from "react";

function Threedots(props) {
  return (
    <div className="absolute flex items-center px-3 top-4 -left-4 border border-indigo-300 rounded-2xl w-28 h-16 bg-white">
      <ul className="w-full">
        <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
          Sửa
        </li>
        <li className="mb-1 hover:bg-indigo-50 rounded-lg cursor-pointer">
          Xóa
        </li>
      </ul>
    </div>
  );
}

export default Threedots;
