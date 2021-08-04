import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function InputField(props) {
  const { handleSubmit, control, reset } = useForm();
  const [data, setData] = useState("a");
  const [isActive, setIsActive] = useState(false);
  const onSubmit = (data) => {
    setIsActive(!!!isActive);
    // Push Api
  };
  const handleChange = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            {props?.name}:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={
              isActive
                ? "appearance-none border-2 outline-none bg-white border-purple-500 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight"
                : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            }
            id={props?.name}
            type="text"
            disabled={!!!isActive}
            onChange={handleChange}
          />
        </div>
        <div>
          {props?.editable ? (
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              {isActive ? "Submit" : "Edit"}
            </button>
          ) : (
            <button disabled />
          )}
        </div>
      </div>
    </form>
  );
}

export default InputField;
