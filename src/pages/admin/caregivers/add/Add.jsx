import React from "react";

// styles
import { Wrapper } from "./Add.Styles";

// widgets
import PopupWidget from "../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../components/widgets/buttonWidget/ButtonWidget";

const Add = () => {
  return (
    <>
      <Wrapper>
        <PopupWidget title={"Add Support Worker"}>
          <RowWidget>
            <Inputwidget
              name={"name"}
              width={"md"}
              label={"Name"}
              type={"text"}
            />
            <Inputwidget
              name={"email"}
              width={"md"}
              label={"Email"}
              type={"email"}
            />
          </RowWidget>
          <RowWidget>
            <Inputwidget name={"phone"} width={"md"} label={"Phone Number"} />
            <Inputwidget
              name={"address"}
              width={"md"}
              label={"Physical Address"}
              type={"text"}
            />
          </RowWidget>
          <RowWidget>
            <Inputwidget
              name={"media"}
              width={"md"}
              label={"Display photo"}
              type={"file"}
            />
            <Inputwidget
              name={"licenseNo"}
              width={"md"}
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
            <ButtonWidget width={"md"} color={"grey"} text={"Close"} />
            <ButtonWidget width={"md"} text={"Save"} />
          </div>
        </PopupWidget>
      </Wrapper>
    </>
  );
};

export default Add;
