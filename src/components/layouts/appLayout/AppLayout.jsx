import React from "react";

// styles
import { LayoutStyle, Right, RightBody } from "./AppLayout.Styles";

// components
import AppRoutes from "../../routes/AppRoutes";
import Sidebar from "../../widgets/sidebar/Sidebar";
import Topbar from "../../widgets/topbar/Topbar";

const AppLayout = () => {
  return (
    <LayoutStyle>
      <Sidebar />
      <Right>
        <Topbar />
        <RightBody>
          <AppRoutes />
        </RightBody>
      </Right>
    </LayoutStyle>
  );
};

export default AppLayout;
