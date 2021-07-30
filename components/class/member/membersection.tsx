import React, { useEffect, useState } from "react";
import Document from "../documentpage/document";
import Member from "./member";

const MemberSection = function (props: { name: string }) {
  const [open, setOpen] = useState(false);
  const clickDropdown = () => {
    setOpen(!!!open);
  };
  return (
    <div className="relative text-left p-2">
      {/* Head */}
      <p>{props.name}</p>

      {/* Content */}
      <div className="flex flex-wrap items-center justify-center px-16 py-8">
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
};

export default MemberSection;
