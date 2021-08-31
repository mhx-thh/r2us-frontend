import React from "react";

type typeSelectOption = {
  options: any;
  defaultValue?: any;
  register: any;
  onHandleChange: any;
  placeholder: string;
  name: string;
  title: string;
};

function SelectOption(props: typeSelectOption) {
  const { register, onHandleChange, options, placeholder, name, title } = props;

  return (
    <div>
      {title === "Khoa" && (
        <div className="w-56 h-24 relative">
          <p className="text-lg leading-7 font-semibold">{title}</p>
          <select
            className="block w-48 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name={name}
            onChange={onHandleChange}
          >
            <option value="">{placeholder}</option>
            {options?.map((optionItem) => (
              <option key={optionItem._id} value={optionItem._id}>
                {optionItem.label}
              </option>
            ))}
          </select>
          <p className="absolute top-8 -right-14 text-gray-300">
            ______________
          </p>
        </div>
      )}
      {title !== "Khoa" && (
        <div className="w-48">
          <p className="text-lg leading-7 font-semibold">{title}</p>
          <select
            className="block w-48 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            {...register(name)}
            name={name}
            onChange={onHandleChange}
          >
            <option value="">{placeholder}</option>
            {options?.map((optionItem) => (
              <option key={optionItem._id} value={optionItem._id}>
                {optionItem.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default SelectOption;
