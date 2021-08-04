import React, { useEffect } from "react";

type AppProps = {
  children: React.ReactNode;
};
function SmBage({ children }: AppProps) {
  return (
    <div className="absolute -top-2.5 right-2.5 bg-white rounded-3xl px-2.5 py-0.5 border-indigo-500">
      <p className="text-xs leading-4 font-medium text-indigo-800">
        {children}
      </p>
    </div>
  );
};

export default SmBage;
