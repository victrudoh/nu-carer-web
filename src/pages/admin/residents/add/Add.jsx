import React, { useContext, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../helpers/Alert";

// Styles
import { Wrapper } from "./Add.Styles";

// Widgets
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Add = () => {
  const {
    getAllResidents,
    residentHandler,
    setResidentHandler,
    addResidentLoading,
    setAddResidentLoading,
  } = useContext(AppContext);

  const [newResident, setNewResident] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    licenseNo: "",
    gender: "",
  });

  const closeHandler = () => {
    setResidentHandler({
      ...residentHandler,
      action: "list",
    });
  };

  const submit = async (e) => {
    console.log("newResident: ", newResident);
    e.preventDefault();
    try {
      setAddResidentLoading(true);
      const response = await axios.post(
        "https://nu-carer-api.herokuapp.com/api/admin/resident/add",
        newResident,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddResidentLoading(false);
      if (response.status === 200) {
        success("Created new Resident successfully");
        getAllResidents();
        closeHandler();
      }
    } catch (err) {
      error("Psych");
      console.log(err);
      setAddResidentLoading(false);
    }
  };

  const onchangeHandler = (e) => {
    e.persist();
    setNewResident((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Wrapper>
        <PopupWidget title={"Add Resident"}>
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
                defaultValue={newResident.name}
              />
              <Inputwidget
                name={"age"}
                width={"450px"}
                height={"45px"}
                label={"Age"}
                type={"number"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newResident.age}
              />
            </RowWidget>
            <RowWidget>
              <Inputwidget
                name={"phone"}
                width={"450px"}
                height={"45px"}
                label={"Phone Number"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newResident.phone}
              />
              <Inputwidget
                name={"address"}
                width={"450px"}
                height={"45px"}
                label={"Physical Address"}
                type={"text"}
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newResident.address}
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
                defaultValue={newResident.licenseNo}
              />
              <div className="gender">
                <label>Gender</label>
                <select
                  name="gender"
                  id="gender"
                  required
                  onChange={(e) => onchangeHandler(e)}
                  defaultValue={newResident.gender}
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </RowWidget>
            {/* <RowWidget>
            <Inputwidget
              name={"media"}
              width={"450px"}
              height={"45px"}
              label={"Display photo"}
              type={"file"}
            />
          </RowWidget> */}
            <div className="bottom">
              {addResidentLoading ? (
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
                  <ButtonWidget width={"md"} text={"Save"} />
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
