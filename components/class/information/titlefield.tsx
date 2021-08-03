import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";

function TitleField(props: { name: string; data: string }) {
  return (
    <div>
      <input
        className={style.InformationField_Input_Unactive}
        id={props.name}
        disabled
        value={props.data}
      />
    </div>
  );
}

export default TitleField;
