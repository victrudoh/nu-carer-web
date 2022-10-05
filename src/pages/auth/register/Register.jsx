import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import {
  Left,
  Right,
  Wrapper,
  Content,
  Title,
  Overlay,
  Login,
  LogoIsh,
} from "./Register.Styles";

// widgets
import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
import Inputwidget from "../../../components/widgets/inputWidget/Inputwidget";

// left image
import bg from "../../../assets/images/login/login-side-img.png";

const Register = () => {
  return (
    <>
      <Wrapper>
        <Left bg={bg}>
          <Overlay>
            <LogoIsh>We Care</LogoIsh>
          </Overlay>
        </Left>
        <Right>
          <Content>
            <Title>Sign Up</Title>
            <Inputwidget
              type={"text"}
              placeholder={"e.g Sarah"}
              label={"First Name"}
            />
            <Inputwidget
              type={"text"}
              placeholder={"e.g Banks"}
              label={"Last Name"}
            />
            <Inputwidget
              type={"text"}
              placeholder={"e.g SarahBanks07"}
              label={"Username"}
            />
            <Inputwidget
              type={"email"}
              placeholder={"e.g SarahBanks07@email.com"}
              label={"Email"}
            />
            <Inputwidget
              type={"text"}
              placeholder={"At least 8 characters"}
              label={"Password"}
            />
            <ButtonWidget text={"Create Account"} />
            <Login>
              Already have an account?
              <NavLink to="/login">Login</NavLink>
            </Login>
          </Content>
        </Right>
      </Wrapper>
    </>
  );
};

export default Register;
