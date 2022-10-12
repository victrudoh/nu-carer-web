import React, { useContext } from "react";
import AppContext from "../../../../context/AppContext";

// Styles
import { Wrapper } from "./Add.Styles";

// Widgets
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";

const Add = () => {
  const { residentHandler, setResidentHandler } = useContext(AppContext);

  const closeHandler = () => {
    setResidentHandler({
      ...residentHandler,
      action: "list",
    });
  };

  return (
    <>
      <Wrapper>
        <PopupWidget title={"Add Resident"}>
          <RowWidget>
            <Inputwidget
              name={"name"}
              width={"450px"}
              height={"45px"}
              label={"Name"}
              type={"text"}
            />
            <Inputwidget
              name={"email"}
              width={"450px"}
              height={"45px"}
              label={"Email"}
              type={"email"}
            />
          </RowWidget>
          <RowWidget>
            <Inputwidget
              name={"phone"}
              width={"450px"}
              height={"45px"}
              label={"Phone Number"}
            />
            <Inputwidget
              name={"address"}
              width={"450px"}
              height={"45px"}
              label={"Physical Address"}
              type={"text"}
            />
          </RowWidget>
          <RowWidget>
            <Inputwidget
              name={"media"}
              width={"450px"}
              height={"45px"}
              label={"Display photo"}
              type={"file"}
            />
            <Inputwidget
              name={"licenseNo"}
              width={"450px"}
              height={"45px"}
              label={"License Number"}
              type={"text"}
            />
          </RowWidget>
          <RowWidget>
            <div className="gender">
              <label>Gender</label>
              <select name="gender" id="gender">
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </RowWidget>
          <div className="bottom">
            <ButtonWidget
              width={"md"}
              color={"grey"}
              text={"Close"}
              onclick={() => closeHandler()}
            />
            <ButtonWidget width={"md"} text={"Save"} />
          </div>
        </PopupWidget>
      </Wrapper>
    </>
  );
};

export default Add;
