import React from "react";
import { Button } from "./ButtonWidget.Styles";

const ButtonWidget = ({ text, width, color, type, onclick }) => {
  return (
    <Button width={width} color={color} type={type} onClick={onclick}>
      {text}
    </Button>
  );
};

export default ButtonWidget;
