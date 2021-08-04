import React from "react";

type typeButton = {
  type: string;
  value: string;
};

function Button(props: typeButton) {
  const { type, value } = props;

  return (
    <div>
      <button
        type={type}
        className="py-2 px-4  bg-black hover:bg-gray-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
