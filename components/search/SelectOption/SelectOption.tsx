import React, { Component } from "react";

type typeSelectOption = {
  options: any;
  defaultValue: any;
  register: any;
  // onHanleChange: func;
  placeholder: string;
  name: string;
};

function SelectOption(props: typeSelectOption) {
  const { register, onHandleChange, options, placeholder, name } = props;

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <select
      {...register(name)}
      className="block text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      name={name}
      onChange={onHandleChange}
    >
      <option value="all">{placeholder}</option>
      {options.map((optionItem) => (
        <option key={optionItem._id} value={optionItem._id}>
          {optionItem.label}
        </option>
      ))}
    </select>
  );
}

export default SelectOption;
