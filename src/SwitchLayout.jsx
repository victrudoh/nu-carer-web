import React from "react";

// Layouts
import AppLayout from "./components/layouts/appLayout/AppLayout";
import AuthLayout from "./components/layouts/authLayout/AuthLayout";

const SwitchLayout = () => {
  const token = localStorage.getItem("nu-token");

  const SelectedDisplay = () => {
    if (!token) {
      return <AuthLayout />;
    } else {
      return <AppLayout />;
    }
  };

  return <SelectedDisplay />;
};

export default SwitchLayout;
