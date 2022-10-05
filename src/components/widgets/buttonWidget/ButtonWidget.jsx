import React from "react";
import { Button } from "./ButtonWidget.Styles";

const ButtonWidget = ({ text, width, color }) => {
  return (
    <Button width={width} color={color}>
      {text}
    </Button>
  );
};

export default ButtonWidget;
