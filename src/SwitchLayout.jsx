import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./context/AppContext";

// Layouts
import AppLayout from "./components/layouts/appLayout/AppLayout";
import AuthLayout from "./components/layouts/authLayout/AuthLayout";

const SwitchLayout = () => {
  const token = localStorage.getItem("token");

  const SelectedDisplay = () => {
    if (token) {
      return <AuthLayout />;
    } else {
      return <AppLayout />;
    }
  };

  return <SelectedDisplay />;
};

export default SwitchLayout;
