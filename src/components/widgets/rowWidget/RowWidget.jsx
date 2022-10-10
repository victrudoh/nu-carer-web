import React from "react";

// styles
import { Wrapper } from "./RowWidget.Styles";

const RowWidget = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default RowWidget;
