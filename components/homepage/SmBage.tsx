import React, { useEffect } from "react";

type AppProps = {
  children: React.ReactNode;
};
function SmBage({ children }: AppProps) {
  return (
    <div className="absolute flex -top-0 w-20 h-5 left-4 bg-white rounded-3xl px-2 py-0.5 border border-indigo-500 justify-center items-center">
      <p className="text-xs text-center leading-4 font-medium text-indigo-800">
        {children}
      </p>
    </div>
  );
}

export default SmBage;
