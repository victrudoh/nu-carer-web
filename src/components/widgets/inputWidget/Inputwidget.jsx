import React from "react";
import { Wrapper, Input, Label } from "./Inputwidget.Styles";

const Inputwidget = ({
  label,
  width,
  height,
  placeholder,
  type,
  name,
  defaultValue,
  required,
  onChange,
}) => {
  return (
    <>
      <Wrapper>
        <Label>{label}</Label>
        <Input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          width={width}
          height={height}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e)}
          required={required ? required : ""}
        />
      </Wrapper>
    </>
  );
};

export default Inputwidget;
