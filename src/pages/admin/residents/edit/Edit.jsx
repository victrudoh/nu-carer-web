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
    getAllResidents,
    residentHandler,
    setResidentHandler,
    addResidentLoading,
    setAddResidentLoading,
  } = useContext(AppContext);

  const [editResident, setEditResident] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    zipCode: "",
    gender: "",
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
        `https://nu-carer-api.herokuapp.com/api/admin/resident/edit?id=${residentHandler.id}`,
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
              {/* <Inputwidget
                name={"media"}
                width={"450px"}
                height={"45px"}
                label={"Display photo"}
                type={"file"}
                onChange={(e) => onFileChangeHandler(e)}
                defaultValue={editResident.media}
              /> */}
              <Inputwidget
                name={"phone"}
                width={"450px"}
                height={"45px"}
                label={"Phone Number"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editResident.phone}
              />
              <div className="gender">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.gender}
                >
                  <option>{editResident.gender}</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </RowWidget>
            <RowWidget>
              <Inputwidget
                name={"zipCode"}
                width={"450px"}
                height={"45px"}
                label={"Zip Code"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editResident.zipCode}
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
              {/* <div className="gender">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={editResident.gender}
                >
                  <option>{editResident.gender}</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
            </RowWidget>
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
