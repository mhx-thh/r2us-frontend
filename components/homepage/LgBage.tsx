import React, { useEffect } from "react";

type AppProps = {
  children: React.ReactNode;
};
function LgBage({ children }: AppProps) {
  return (
    <div className="absolute -bottom-0.5 -right-25 bg-blue-100 rounded-lg px-3 -py-5 w-24 max-h-8 justify-items-center text-center">
      <p className="text-sm leading-8 font-medium">{children}</p>
    </div>
  );
}
export default LgBage;
