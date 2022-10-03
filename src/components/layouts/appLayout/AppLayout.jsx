import React from "react";

// styles
import { LayoutStyle, Right } from "./AppLayout.Styles";

// components
import MainRouter from "../../Routes";

const AppLayout = () => {
  return (
    <LayoutStyle>
      Left
      <Right>
        Right
        <MainRouter />
      </Right>
    </LayoutStyle>
  );
};

export default AppLayout;
