import React, { useState } from "react";
import style from "./style.module.css";

import { useForm } from "react-hook-form";

type AppProps = {
  name: string;
  editable: boolean;
  data: string;
  multiline: boolean;
};

function InputField(props: AppProps) {
  const [data, setData] = useState(props.data);
  const [isActive, setIsActive] = useState(false);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    setIsActive(!isActive);
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.field__text}>{props?.name}</div>
      {props.editable ? (
        <div className={style.field__input}>
          {props.multiline ? (
            <textarea
              className={
                isActive
                  ? style.field__input_active
                  : style.field__input_unactive
              }
              id={props.name}
              disabled={!isActive}
              value={data}
              onChange={isActive ? handleChange : undefined}
              rows={7}
            />
          ) : (
            <input
              className={
                isActive
                  ? style.field__input_active
                  : style.field__input_unactive
              }
              id={props.name}
              disabled={!isActive}
              value={data}
              onChange={isActive ? handleChange : undefined}
            />
          )}
          <button type="submit">
            <img src="/icons/edit_pencil.svg" />
          </button>
        </div>
      ) : (
        <div className={style.field__input}>
          {props.multiline ? (
            <textarea
              className={style.field__uneditable}
              id={props.name}
              disabled={!isActive}
              value={data}
              onChange={isActive ? handleChange : undefined}
              rows={7}
            />
          ) : (
            <input
              className={style.field__uneditable}
              id={props.name}
              disabled={!isActive}
              value={data}
              onChange={isActive ? handleChange : undefined}
            />
          )}
        </div>
      )}
    </form>
  );
}

export default InputField;
