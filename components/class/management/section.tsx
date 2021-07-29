import React, { useEffect, useState } from "react";
import Document from "../documentpage/document";

const Section = function (props: { name: string }) {
  const [open, setOpen] = useState(false);
  const clickDropdown = () => {
    setOpen(!!!open);
  };
  return (
    <div className="relative text-left p-2">
      {/* Head */}
      <div>
        <button
          className="flex justify-between items-center border"
          onClick={clickDropdown}
        >
          <div>{props.name}</div>
        </button>
      </div>

      {/* Content */}
      {open ? (
        <div>
          <hr className="my-2"></hr>
          <div>
            <div className="flex flex-wrap   items-center justify-center px-16 py-8">
              <Document />
              <Document />
              <Document />
              <Document />
              <Document />
              <Document />
              <Document />
              <Document />
              <Document />
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default Section;
