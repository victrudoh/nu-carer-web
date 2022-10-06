import React from "react";

// styles
import { LayoutStyle, Right } from "./AppLayout.Styles";

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
        <AppRoutes />
      </Right>
    </LayoutStyle>
  );
};

export default AppLayout;
