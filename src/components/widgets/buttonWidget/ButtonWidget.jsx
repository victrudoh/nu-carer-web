import React from "react";
import { Button } from "./ButtonWidget.Styles";

const ButtonWidget = ({ text, width, height, color, type, onclick }) => {
  return (
    <Button
      width={width}
      height={height}
      color={color}
      type={type}
      onClick={onclick}
    >
      {text}
    </Button>
  );
};

export default ButtonWidget;
