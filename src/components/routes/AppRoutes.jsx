import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../context/AppContext";

// components
import Layed from "../Layed";
import Error404 from "../../pages/error404/Error404";

// ****ADMIN
// caregivers
import Caregivers from "../../pages/admin/caregivers/Caregivers";
import Summary from "../../pages/admin/caregivers/summary/Summary";
import Timesheet from "../../pages/admin/caregivers/timesheet/Timesheet";
// residents
import Residents from "../../pages/admin/residents/Residents";
import ResidentSummary from "../../pages/admin/residents/summary/Summary";
import Careplan from "../../pages/admin/residents/careplan/Careplan";
// *********

// ****CARE GIVERS
import CGResidents from "../../pages/caregiver/residents/CGResidents";

const AppRoutes = () => {
  const { activeUser } = useContext(AppContext);

  console.log("AppRoutes");
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        {/* Admin */}
        {activeUser?.role === "admin" && (
          <>
            <Route index element={<Caregivers />} />
            <Route path="/admin/caregivers" element={<Caregivers />} />
            <Route path="/admin/caregivers/summary" element={<Summary />} />
            <Route path="/admin/caregivers/timesheet" element={<Timesheet />} />
            <Route path="/admin/residents" element={<Residents />} />
            <Route
              path="/admin/residents/summary"
              element={<ResidentSummary />}
            />
            <Route path="/admin/residents/careplan" element={<Careplan />} />
          </>
        )}

        {/* Care Giver */}
        {activeUser?.role === "care-giver" && (
          <>
            <Route path="/caregiver/residents" element={<CGResidents />} />
            <Route path="/caregiver/residents/view" element={<Careplan />} />
          </>
        )}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
