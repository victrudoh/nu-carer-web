import React from "react";

// Styles
import { Wrapper } from "./ContainerWidget.Styles";

const ContainerWidget = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContainerWidget;
