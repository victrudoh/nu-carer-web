import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

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
  const { topbarTitle } = useContext(AppContext);

  return (
    <Wrapper>
      <Left>{topbarTitle}</Left>
      <Right>
        <NameRoleImage>
          <img src="#" alt="Img" />
          <NameRole>
            <Name>Nick Francis</Name>
            <Role>Admin</Role>
          </NameRole>
        </NameRoleImage>
        <Button>Logout</Button>
      </Right>
    </Wrapper>
  );
};

export default Topbar;
