import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { NavLink } from "react-router-dom";

// styles
import {
  Wrapper,
  SidebarTop,
  SidebarLogo,
  SidebarDown,
} from "./Sidebar.Styles";

//Logo
// let logo = "Logo";

const Sidebar = () => {
  const {
    activeUser,
    setTopbarTitle,
    setCaregiverHandler,
    setResidentHandler,
  } = useContext(AppContext);

  const caregiverHandler = () => {
    setTopbarTitle("Support Workers");
    setCaregiverHandler((item) => ({
      ...item,
      action: "list",
    }));
  };

  const residentHandler = () => {
    setTopbarTitle("Residents");
    setResidentHandler((item) => ({
      ...item,
      action: "list",
    }));
  };

  return (
    <>
      <aside>
        <Wrapper id="wrapper">
          <SidebarTop>
            <SidebarLogo>
              {/* <img src={logo} alt="logo" /> */}
              <div className="logoName">We Care</div>
            </SidebarLogo>
          </SidebarTop>

          {/* Admin */}
          {activeUser?.role === "admin" && (
            <SidebarDown>
              <NavLink
                onClick={() => caregiverHandler()}
                activeClassName="active"
                exact
                to="/admin/caregivers"
              >
                <span className="bx bx-category-alt"></span>
                <h3>Support Workers</h3>
              </NavLink>
              <NavLink
                onClick={() => residentHandler()}
                activeClassName="active"
                to="/admin/residents"
              >
                <span className="bx bx-user-pin"></span>
                <h3>Residents</h3>
              </NavLink>
            </SidebarDown>
          )}

          {/* care giver */}
          {activeUser?.role === "care-giver" && (
            <SidebarDown>
              <NavLink
                onClick={() => caregiverHandler()}
                activeClassName="active"
                exact
                to="/caregiver/checkinout"
              >
                <span className="bx bx-time"></span>
                <h3>Check In/Out</h3>
              </NavLink>
              <NavLink
                onClick={() => residentHandler()}
                activeClassName="active"
                to="/caregiver/residents"
              >
                <span className="bx bx-user-pin"></span>
                <h3>Residents</h3>
              </NavLink>
            </SidebarDown>
          )}
        </Wrapper>
      </aside>
    </>
  );
};

export default Sidebar;
