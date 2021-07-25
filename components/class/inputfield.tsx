import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";

function InputField(props) {
  const { handleSubmit, control, reset } = useForm();
  const [data, setData] = useState("a");
  const [isActive, setIsActive] = useState(false);
  const onSubmit = (data) => {
    setIsActive(!!!isActive);
    setData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-row items-center border">
        <div className="p-2">{props?.name}:</div>
        <Controller
          name={props?.name}
          control={control}
          defaultValue={data}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className="p-2"
              disabled={!!!isActive}
              variant="outlined"
              fullWidth
              {...field}
            />
          )}
        />
        {props?.editable ? (
          <button className="p-2 hover:bg-gray-50" type="submit">
            {isActive ? "Submit" : "Edit"}
          </button>
        ) : undefined}
      </div>
    </form>
  );
}

export default InputField;
