import React from "react";
import { Wrapper, Input, Label } from "./Inputwidget.Styles";

const Inputwidget = ({ label, width, placeholder, type, name, id }) => {
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
        />
      </Wrapper>
    </>
  );
};

export default Inputwidget;
