import React from "react";

type typeInputText = {
  register: any;
  name: string;
  placeholder: string;
};

function InputText(props: typeInputText) {
  const { register, name, placeholder } = props;

  return (
    <div className=" relative ">
      <input
        {...register(name)}
        type="text"
        id="rounded-email"
        className=" rounded-lg border-transparent w-full appearance-none border border-gray-300 py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;
