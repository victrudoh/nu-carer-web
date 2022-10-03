import React from "react";
import { Route, Routes } from "react-router-dom";
import Layed from "./Layed";

// Pages
import Login from "../pages/auth/login/Login";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
