import React, { useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { success, error } from "../../../helpers/Alert";
import axios from "axios";

// Styles
import {
  Left,
  Right,
  Wrapper,
  Content,
  Title,
  Overlay,
  Register,
  LogoIsh,
} from "./Login.Styles";

// widgets
import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
import Inputwidget from "../../../components/widgets/inputWidget/Inputwidget";
import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// left image
import bg from "../../../assets/images/login/login-side-img.png";

const Login = () => {
  const { authLoading, setAuthLoading } = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    e.persist();
    setLoginDetails((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setAuthLoading(true);
      const response = await axios.post(
        "https://nu-carer-api.herokuapp.com/api/auth/login",
        loginDetails,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: Login.jsx ~ line 58 ~ submit ~ response",
      //   response
      // );
      setAuthLoading(false);
      if (response.status === 200) {
        success("Login Successful");
        const token = response.data.data.token;
        const userId = response.data.data.user._id;
        localStorage.setItem("nu-token", token);
        localStorage.setItem("userId", userId);
        navigate("/");
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        error("Invalid Credentials");
        setAuthLoading(false);
      }
      setAuthLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Left bg={bg}>
          <Overlay>
            <LogoIsh>We Care</LogoIsh>
          </Overlay>
        </Left>
        <Right>
          <form onSubmit={submit}>
            <Content>
              <Title>Login</Title>
              <Inputwidget
                type={"email"}
                placeholder={"e.g SarahBanks07"}
                label={"email"}
                name={"email"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={loginDetails.email}
              />
              <Inputwidget
                type={"password"}
                placeholder={"At least 8 characters"}
                label={"Password"}
                name={"password"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={loginDetails.password}
              />
              {authLoading ? (
                <CircleSpinner />
              ) : (
                <ButtonWidget text={"Login"} />
              )}
              <Register>
                Dont't have an account?
                <NavLink to="/register">Register</NavLink>
              </Register>
            </Content>
          </form>
        </Right>
      </Wrapper>
    </>
  );
};

export default Login;
