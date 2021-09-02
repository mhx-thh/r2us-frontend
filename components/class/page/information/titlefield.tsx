import React from "react";
import style from "./style.module.css";

function TitleField(props: { name: string; data: string }) {
  return (
    <div className={style.title__m}>
      <input
        className={style.titleField}
        id={props.name}
        disabled
        value={props.data}
      />
    </div>
  );
}

export default TitleField;
