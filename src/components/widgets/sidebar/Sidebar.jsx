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
  const { setTopbarTitle } = useContext(AppContext);

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
              onClick={() => setTopbarTitle("Support Workers")}
              activeClassName="active"
              exact
              to="/caregivers"
            >
              <span className="bx bx-category-alt"></span>
              <h3>Support Workers</h3>
            </NavLink>
            <NavLink
              onClick={() => setTopbarTitle("Residents")}
              activeClassName="active"
              to="/residents"
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
