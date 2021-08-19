import React, { Component } from "react";

type typeSelectOption = {
  options: any;
  defaultValue?: any;
  register: any;
  onHandleChange: any;
  placeholder: string;
  name: string;
  id:string;
};

function SelectOption(props: typeSelectOption) {
  const { register, onHandleChange, options, placeholder, name,id } = props;

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="w-48">
      <p className="text-lg leading-7 font-semibold">{id}</p>
      <select
        {...register(name)}
        className="block w-48 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name={name}
        id={id}
        onChange={onHandleChange}
      >
        <option value="">{placeholder}</option>
        {options.map((optionItem) => (
          <option key={optionItem._id} value={optionItem._id}>
            {optionItem.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
