import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../helpers/Alert";

// styles
import { Wrapper } from "./Edit.Styles";

// widgets
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Edit = () => {
  const {
    addCaregiverLoading,
    setAddCaregiverLoading,
    caregiverHandler,
    setCaregiverHandler,
    getAllCaregivers,
  } = useContext(AppContext);

  const [editCaregiver, setEditCaregiver] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    licenseNo: "",
    gender: "",
  });

  const closeHandler = () => {
    setCaregiverHandler({
      ...caregiverHandler,
      action: "list",
    });
  };

  // fetch Caregiver by ID
  const getCaregiver = async () => {
    try {
      setAddCaregiverLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/one?id=${caregiverHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: Edit.jsx ~ line 55 ~ getCaregiver ~ response",
        response
      );
      setEditCaregiver({
        name: response.data.data.caregiver.name,
        email: response.data.data.caregiver.email,
        password: "",
        phone: response.data.data.caregiver.phone,
        address: response.data.data.caregiver.address,
        licenseNo: response.data.data.caregiver.licenseNo,
        gender: response.data.data.caregiver.gender,
      });
      setAddCaregiverLoading(false);
    } catch (error) {
      setAddCaregiverLoading(false);
      console.log(
        "🚀 ~ file: Edit.jsx ~ line 59 ~ getCaregiver ~ error",
        error
      );
    }
  };

  const submit = async (e) => {
    console.log("editCaregiver: ", editCaregiver);
    e.preventDefault();
    try {
      setAddCaregiverLoading(true);
      const response = await axios.post(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/edit?id=${caregiverHandler.id}`,
        editCaregiver,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddCaregiverLoading(false);
      if (response.status === 200) {
        success("Created new user successfully");
        getAllCaregivers();
        closeHandler();
      }
    } catch (err) {
      error("Psych");
      console.log(err);
      setAddCaregiverLoading(false);
    }
  };

  const onchangeHandler = (e) => {
    e.persist();
    setEditCaregiver((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  // useEffect(() => {
  //   getCaregiver();
  // }, []);

  return (
    <>
      <Wrapper>
        <PopupWidget title={"Edit Support Worker"}>
          <form onSubmit={submit}>
            <RowWidget>
              <Inputwidget
                name={"name"}
                width={"450px"}
                height={"45px"}
                label={"Name"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.name}
              />
              <Inputwidget
                name={"email"}
                width={"450px"}
                height={"45px"}
                label={"Email"}
                type={"email"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.email}
              />
            </RowWidget>
            <RowWidget>
              <Inputwidget
                name={"phone"}
                width={"450px"}
                height={"45px"}
                label={"Phone Number"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.phone}
              />
              <Inputwidget
                name={"address"}
                width={"450px"}
                height={"45px"}
                label={"Physical Address"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.address}
              />
            </RowWidget>
            <RowWidget>
              {/* <Inputwidget
                name={"media"}
                width={"450px"}
                height={"45px"}
                label={"Display photo"}
                type={"file"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.media}
              /> */}
              <Inputwidget
                name={"password"}
                width={"450px"}
                height={"45px"}
                label={"Create Password"}
                type={"password"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.password}
              />
              <Inputwidget
                name={"licenseNo"}
                width={"450px"}
                height={"45px"}
                label={"License Number"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editCaregiver.licenseNo}
              />
            </RowWidget>
            <RowWidget>
              <div className="gender">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editCaregiver.licenseNo}
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </RowWidget>
            <div className="bottom">
              {addCaregiverLoading ? (
                <CircleSpinner />
              ) : (
                <>
                  <ButtonWidget
                    width={"md"}
                    color={"grey"}
                    text={"Close"}
                    type={"submit"}
                    onclick={() => closeHandler()}
                  />
                  <ButtonWidget width={"md"} text={"Update"} />
                </>
              )}
            </div>
          </form>
        </PopupWidget>
      </Wrapper>
    </>
  );
};

export default Edit;
