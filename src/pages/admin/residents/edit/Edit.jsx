import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../helpers/Alert";
import CloudinaryUpload from "../../../../middlewares/CloudinaryUpload";

// styles
import { Content, Wrapper } from "./Edit.Styles";

// widgets
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Edit = () => {
  const {
    getAllResidents,
    residentHandler,
    setResidentHandler,
    addResidentLoading,
    setAddResidentLoading,
  } = useContext(AppContext);

  const [editResident, setEditResident] = useState({
    name: "",
    age: "",
    gender: "",
    dateAdmitted: "",
    address: "",
    nextOfKin: "",
    gPName: "",
    gPphone: "",
    healthCondition: "",
    medication: "",
    hobbies: "",
    media: "",
  });

  const closeHandler = () => {
    setResidentHandler({
      ...residentHandler,
      action: "list",
    });
  };

  const submit = async (e) => {
    console.log("editResident: ", editResident);
    e.preventDefault();
    try {
      setAddResidentLoading(true);
      const response = await axios.put(
        `https://wecare-api.onrender.com/api/admin/resident/edit?id=${residentHandler.id}`,
        editResident,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddResidentLoading(false);
      if (response.status === 200) {
        success("Updated resident successfully");
        getAllResidents();
        closeHandler();
      }
    } catch (err) {
      error(err.response.data.message);
      console.log(err);
      setAddResidentLoading(false);
    }
  };

  const onchangeHandler = (e) => {
    e.persist();
    setEditResident((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileChangeHandler = async (e) => {
    try {
      e.persist();
      // setAddResidentLoading(true);
      const media = await CloudinaryUpload(e);
      setEditResident((item) => ({
        ...item,
        media: media,
      }));
      // setAddResidentLoading(false);
    } catch (error) {
      console.log(
        "🚀 ~ file: Register.jsx ~ line 87 ~ onFileChangeHandler ~ error",
        error
      );
    }
  };

  useEffect(() => {
    setEditResident({
      name: residentHandler.resident?.name,
      age: residentHandler.resident?.age,
      phone: residentHandler.resident?.phone,
      address: residentHandler.resident?.address,
      zipCode: residentHandler.resident?.zipCode,
      gender: residentHandler.resident?.gender,
      media: residentHandler.resident?.media,
    });
  }, [residentHandler.resident]);

  return (
    <>
      <Wrapper>
        <PopupWidget title={"Edit Resident"}>
          <form onSubmit={submit}>
            <Content>
              <RowWidget>
                <Inputwidget
                  name={"name"}
                  width={"450px"}
                  height={"45px"}
                  label={"Name"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.name}
                />
                <Inputwidget
                  name={"age"}
                  width={"450px"}
                  height={"45px"}
                  label={"Age"}
                  type={"number"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.age}
                />
              </RowWidget>
              <RowWidget>
                <Inputwidget
                  name={"media"}
                  width={"450px"}
                  height={"45px"}
                  label={"Display photo"}
                  type={"file"}
                  onChange={(e) => onFileChangeHandler(e)}
                  defaultValue={editResident.media}
                />
                <Inputwidget
                  name={"dateAdmitted"}
                  width={"450px"}
                  height={"45px"}
                  label={"Date admitted"}
                  type={"date"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.dateAdmitted}
                />
              </RowWidget>
              <RowWidget>
                <Inputwidget
                  name={"nextOfKin"}
                  width={"450px"}
                  height={"45px"}
                  label={"Next of kin"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.nextOfKin}
                />
                <Inputwidget
                  name={"address"}
                  width={"450px"}
                  height={"45px"}
                  label={"Contact Address"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.address}
                />
              </RowWidget>
              <RowWidget>
                <Inputwidget
                  name={"gPName"}
                  width={"450px"}
                  height={"45px"}
                  label={"GP Name"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.gPName}
                />
                <Inputwidget
                  name={"gPphone"}
                  width={"450px"}
                  height={"45px"}
                  label={"GP Phone"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.gPphone}
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
                    defaultValue={editResident.gender}
                  >
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Rather not say</option>
                  </select>
                </div>
                <div className="gender">
                  <label>Health condition</label>
                  <select
                    name="healthCondition"
                    id="healthCondition"
                    required
                    onChange={(e) => onchangeHandler(e)}
                    defaultValue={editResident.healthCondition}
                  >
                    <option>Select health condition</option>
                    <option value="blood Pressure">Blood Pressure</option>
                    <option value="dementia">Dementia</option>
                    <option value="parkison">Parkison</option>
                  </select>
                </div>
              </RowWidget>
              <RowWidget>
                <Inputwidget
                  name={"hobbies"}
                  width={"450px"}
                  height={"45px"}
                  label={"Hobbies"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.hobbies}
                />
                <Inputwidget
                  name={"medication"}
                  width={"450px"}
                  height={"45px"}
                  label={"Medication"}
                  type={"text"}
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.medication}
                />
              </RowWidget>
            </Content>
            <div className="bottom">
              {addResidentLoading ? (
                <CircleSpinner />
              ) : (
                <>
                  <ButtonWidget
                    width={"170px"}
                    height={"45px"}
                    color={"grey"}
                    text={"Close"}
                    type={"submit"}
                    onclick={() => closeHandler()}
                  />
                  <ButtonWidget
                    width={"170px"}
                    height={"45px"}
                    text={"Update"}
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

export default Edit;
