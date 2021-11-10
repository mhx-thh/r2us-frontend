import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.css";

function InputField(props: {
  name: string;
  data: string;
  editable: boolean;
  multiline: boolean;
}) {
  const { handleSubmit } = useForm();
  const [data, setData] = useState(props.data);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  const onSubmit = () => {
    setIsActive(!!!isActive);
    // Push Api
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      {props.editable === true ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.m}>
            <div className={style.user__input__grid}>
              <div className={style.user__input__titletext}>{props.name}</div>
              <div className={style.user__input__input}>
                {props.multiline ? (
                  <textarea
                    className={
                      // isActive
                      style.user__input__field_active
                      // style.user__input__field_normal
                    }
                    id={props.name}
                    // disabled={!!!isActive}
                    value={data}
                    onChange={handleChange}
                    rows={4}
                  />
                ) : (
                  <input
                    className={
                      // isActive
                      style.user__input__field_active
                      // style.user__input__field_normal
                    }
                    id={props.name}
                    // disabled={!!!isActive}
                    value={data}
                    onChange={handleChange}
                  />
                )}

                {/* <button type="submit">
                  <img src="/icons/edit_pencil.svg" />
                </button> */}
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className={style.m}>
          <div className={style.user__input__grid}>
            <div className={style.user__input__titletext}>{props.name}</div>
            <div className={style.user__input__input}>
              {props.multiline ? (
                <textarea
                  className={style.user__input__field_normal}
                  id={props.name}
                  disabled
                  value={data}
                  rows={4}
                />
              ) : (
                <input
                  className={style.user__input__field_normal}
                  id={props.name}
                  disabled
                  value={data}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputField;
