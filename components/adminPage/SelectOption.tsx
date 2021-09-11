import React from "react";

type typeSelectOption = {
  options: any;
  defaultValue?: any;
  onHandleChange: any;
  placeholder: string;
  name: string;
  title: string;
};

function SelectOption(props: typeSelectOption) {
  const { onHandleChange, options, placeholder, name, title } = props;

  return (
    <div>
      {title === "Khoa" && (
        <select
          className="border border-indigo-200 p-1 w-3/4 h-8 rounded-lg"
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
      )}
      {title !== "Khoa" && (
        <select
          className="border border-indigo-200 p-1 w-3/4 h-8 rounded-lg"
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
      )}
    </div>
  );
}

export default SelectOption;
