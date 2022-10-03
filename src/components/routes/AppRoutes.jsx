import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        {/* <Route index element={<Login />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
