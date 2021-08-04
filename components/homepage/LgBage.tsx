import React, { useEffect } from "react";

type AppProps = {
  children: React.ReactNode;
};
function LgBage({ children }: AppProps) {
  return (
    <div className="absolute -bottom-2.5 -right-2.5 bg-blue-100 rounded-lg px-3 py-0.5">
      <p className="text-xs leading-4 font-medium text-black">{children}</p>
    </div>
  );
}
export default LgBage;
