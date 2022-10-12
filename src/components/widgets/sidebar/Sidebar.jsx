import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { NavLink } from "react-router-dom";

// styles
import {
  Wrapper,
  SidebarTop,
  SidebarLogo,
  SidebarCloseBtn,
  SidebarDown,
} from "./Sidebar.Styles";

//Logo
let logo = "Logo";

const toggleMenuHandler = () => {
  // setMenuActive(!menuActive);
};

const Sidebar = () => {
  const { setTopbarTitle, setCaregiverHandler, setResidentHandler } =
    useContext(AppContext);

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
              <img src={logo} alt="logo" />
              <div className="logoName">We Care</div>
            </SidebarLogo>
          </SidebarTop>

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
        </Wrapper>
      </aside>
    </>
  );
};

export default Sidebar;
