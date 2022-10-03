import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
import Login from "../../pages/auth/login/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
