import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={"404"} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
