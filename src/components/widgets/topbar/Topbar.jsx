import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import { info } from "../../../helpers/Alert";

// styles
import {
  Button,
  Left,
  Name,
  NameRole,
  NameRoleImage,
  Right,
  Role,
  Wrapper,
} from "./Topbar.Styles";

const Topbar = () => {
  const { activeUser, topbarTitle } = useContext(AppContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    info("You were logged out");
    navigate("/");
    localStorage.removeItem("nu-token");
    window.location.reload(false);
  };

  return (
    <Wrapper>
      <Left>{topbarTitle}</Left>
      <Right>
        <NameRoleImage>
          <img src={activeUser?.media} alt="Img" />
          <NameRole>
            <Name>
              {activeUser?.firstName ? (
                <>
                  {activeUser?.firstName} {activeUser?.lastName}
                </>
              ) : (
                <>{activeUser?.name}</>
              )}
            </Name>
            <Role>{activeUser?.role}</Role>
          </NameRole>
        </NameRoleImage>
        <Button onClick={logoutHandler}>Logout</Button>
      </Right>
    </Wrapper>
  );
};

export default Topbar;
