import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.css";

function InputField(props: {
  name: string;
  editable: boolean;
  data: string;
  multiline: boolean;
}) {
  const { handleSubmit } = useForm();
  const [data, setData] = useState(props.data);
  const [isActive, setIsActive] = useState(false);
  const onSubmit = () => {
    setIsActive(!!!isActive);
    // Push Api
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.m}>
        <div className={style.user__input__grid}>
          <div className={style.user__input__titletext}>{props.name}</div>
          <div className={style.user__input__input}>
            {props.multiline ? (
              <textarea
                className={
                  isActive
                    ? style.user__input__field_active
                    : style.user__input__field_normal
                }
                id={props.name}
                disabled={!!!isActive}
                value={data}
                onChange={isActive ? handleChange : undefined}
                rows={4}
              />
            ) : (
              <input
                className={
                  isActive
                    ? style.user__input__field_active
                    : style.user__input__field_normal
                }
                id={props.name}
                disabled={!!!isActive}
                value={data}
                onChange={isActive ? handleChange : undefined}
              />
            )}

            <button type="submit">
              <svg
                width="44"
                height="42"
                viewBox="0 0 44 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6754 13.723L29.1672 16.1171L26.6754 13.723ZM28.2778 11.6139L21.5401 18.0905C21.1919 18.4247 20.9545 18.8505 20.8577 19.3142L20.2354 22.3088L23.3507 21.7094C23.833 21.6167 24.2754 21.3894 24.6236 21.0546L31.3614 14.578C31.5638 14.3833 31.7245 14.1523 31.834 13.898C31.9436 13.6437 32 13.3712 32 13.0959C32 12.8207 31.9436 12.5481 31.834 12.2938C31.7245 12.0396 31.5638 11.8085 31.3614 11.6139C31.1589 11.4193 30.9185 11.2649 30.654 11.1595C30.3895 11.0542 30.1059 11 29.8196 11C29.5333 11 29.2497 11.0542 28.9852 11.1595C28.7206 11.2649 28.4803 11.4193 28.2778 11.6139V11.6139Z"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.6472 24.5707V27.9634C29.6472 28.5633 29.3993 29.1386 28.958 29.5628C28.5168 29.9869 27.9183 30.2252 27.2943 30.2252H14.353C13.7289 30.2252 13.1304 29.9869 12.6892 29.5628C12.2479 29.1386 12 28.5633 12 27.9634V15.5235C12 14.9237 12.2479 14.3484 12.6892 13.9242C13.1304 13.5 13.7289 13.2617 14.353 13.2617H17.8824"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default InputField;
