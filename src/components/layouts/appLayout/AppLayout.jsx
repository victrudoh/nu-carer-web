import React from "react";

// styles
import { LayoutStyle, Right } from "./AppLayout.Styles";

// components
import AppRoutes from "../../routes/AppRoutes";

const AppLayout = () => {
  return (
    <LayoutStyle>
      Left
      <Right>
        Right
        <AppRoutes />
      </Right>
    </LayoutStyle>
  );
};

export default AppLayout;
