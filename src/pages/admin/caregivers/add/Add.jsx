import React, { useContext, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../helpers/Alert";
import CloudinaryUpload from "../../../../middlewares/CloudinaryUpload";

// styles
import { Wrapper } from "./Add.Styles";

// widgets
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Add = () => {
  const {
    addCaregiverLoading,
    setAddCaregiverLoading,
    caregiverHandler,
    setCaregiverHandler,
    getAllCaregivers,
  } = useContext(AppContext);

  const [newCaregiver, setNewCaregiver] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    media: "",
    licenseNo: "",
    gender: "",
  });
  console.log(" newCaregiver", newCaregiver);

  const closeHandler = () => {
    setCaregiverHandler({
      ...caregiverHandler,
      action: "list",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("newCaregiver: ", newCaregiver);
    try {
      setAddCaregiverLoading(true);
      const response = await axios.post(
        "https://nu-carer-api.herokuapp.com/api/admin/caregiver/add",
        newCaregiver,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddCaregiverLoading(false);
      if (response.status === 200) {
        success("Created new Care giver successfully");
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
    setNewCaregiver((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileChangeHandler = async (e) => {
    try {
      e.persist();
      // setAddCaregiverLoading(true);
      const media = await CloudinaryUpload(e);
      // console.log("media", media);
      setNewCaregiver((item) => ({
        ...item,
        media: media,
      }));
      // setAddCaregiverLoading(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: Add.jsx ~ line 91 ~ onFileChangeHandler ~ error",
        error
      );
    }
  };

  return (
    <>
      <Wrapper>
        <PopupWidget title={"Add Support Worker"}>
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
                defaultValue={newCaregiver.name}
              />
              <Inputwidget
                name={"email"}
                width={"450px"}
                height={"45px"}
                label={"Email"}
                type={"email"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newCaregiver.email}
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
                defaultValue={newCaregiver.phone}
              />
              <Inputwidget
                name={"address"}
                width={"450px"}
                height={"45px"}
                label={"Physical Address"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newCaregiver.address}
              />
            </RowWidget>
            <RowWidget>
              <Inputwidget
                name={"media"}
                width={"450px"}
                height={"45px"}
                label={"Display photo"}
                type={"file"}
                required
                onChange={(e) => onFileChangeHandler(e)}
                defaultValue={newCaregiver.media}
              />
              <Inputwidget
                name={"password"}
                width={"450px"}
                height={"45px"}
                label={"Create Password"}
                type={"password"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newCaregiver.password}
              />
            </RowWidget>
            <RowWidget>
              <Inputwidget
                name={"licenseNo"}
                width={"450px"}
                height={"45px"}
                label={"License Number"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newCaregiver.licenseNo}
              />

              <div className="gender">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={newCaregiver.licenseNo}
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
                    width={"170px"}
                    height={"45px"}
                    text={"Close"}
                    color={"grey"}
                    onclick={() => closeHandler()}
                  />
                  <ButtonWidget
                    width={"170px"}
                    height={"45px"}
                    text={"Add"}
                    type={"submit"}
                  />
                </>
              )}
            </div>
          </form>
        </PopupWidget>
      </Wrapper>
    </>
  );
};

export default Add;
