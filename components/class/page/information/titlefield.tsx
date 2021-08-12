import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.css";

function TitleField(props: { name: string; data: string }) {
  return (
    <div className={style.title__m}>
      <input
        className={style.field__input_unactive}
        id={props.name}
        disabled
        value={props.data}
      />
    </div>
  );
}

export default TitleField;
