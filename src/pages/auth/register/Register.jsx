import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CloudinaryUpload from "../../../middlewares/CloudinaryUpload";
import { success, error } from "../../../helpers/Alert";

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
import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// left image
import bg from "../../../assets/images/login/login-side-img.png";
import AppContext from "../../../context/AppContext";

const Register = () => {
  const { authLoading, setAuthLoading } = useContext(AppContext);

  const [newAdmin, setNewAdmin] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    media: "",
  });

  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    e.persist();

    setNewAdmin((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileChangeHandler = async (e) => {
    try {
      e.persist();
      setAuthLoading(true);
      const media = await CloudinaryUpload(e);
      setNewAdmin((item) => ({
        ...item,
        media: media,
      }));
      setAuthLoading(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: Register.jsx ~ line 87 ~ onFileChangeHandler ~ error",
        error
      );
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    // console.log("newAdmin: ", newAdmin);
    try {
      setAuthLoading(true);
      const response = await axios.post(
        "https://wecare-api.onrender.com/api/auth/register",
        newAdmin,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setAuthLoading(false);
      if (response.status === 200) {
        success("Registration successful");
        // getCaregivers();
        navigate("/login");
      }
    } catch (err) {
      error("Couldn't create user");
      console.log(err);
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
              <Title>Sign Up</Title>
              <Inputwidget
                type={"text"}
                placeholder={"e.g Sarah"}
                label={"First Name"}
                name={"firstName"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newAdmin.firstName}
              />
              <Inputwidget
                type={"text"}
                placeholder={"e.g Banks"}
                label={"Last Name"}
                name={"lastName"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newAdmin.lastName}
              />
              <Inputwidget
                type={"text"}
                placeholder={"e.g SarahBanks07"}
                label={"Username"}
                name={"userName"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newAdmin.userName}
              />
              <Inputwidget
                type={"file"}
                label={"Display Photo"}
                name={"media"}
                required
                // onChange={onFileChangeHandler}
                onChange={(e) => onFileChangeHandler(e)}
                defaultValue={newAdmin.media}
              />
              <Inputwidget
                type={"email"}
                placeholder={"e.g SarahBanks07@email.com"}
                label={"Email"}
                name={"email"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newAdmin.email}
              />
              <Inputwidget
                type={"password"}
                placeholder={"At least 8 characters"}
                label={"Password"}
                name={"password"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newAdmin.password}
              />
              {authLoading ? (
                <CircleSpinner />
              ) : (
                <ButtonWidget text={"Create Account"} />
              )}
              <Login>
                Already have an account?
                <NavLink to="/login">Login</NavLink>
              </Login>
            </Content>
          </form>
        </Right>
      </Wrapper>
    </>
  );
};

export default Register;
