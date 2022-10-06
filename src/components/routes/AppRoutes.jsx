import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
import Error404 from "../../pages/error404/Error404";

const AppRoutes = () => {
  console.log("AppRoutes");
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
