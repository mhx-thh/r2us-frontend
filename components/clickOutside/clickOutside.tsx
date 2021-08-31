import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const ref = useRef(null);
  useEffect(() => {
    const handle = (event) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return ref;
};

export default useClickOutside;
