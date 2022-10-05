import React from "react";
import { Wrapper, Input, Label } from "./Inputwidget.Styles";

const Inputwidget = ({ label, width, placeholder, type }) => {
  return (
    <>
      <Wrapper>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} width={width} />
      </Wrapper>
    </>
  );
};

export default Inputwidget;
