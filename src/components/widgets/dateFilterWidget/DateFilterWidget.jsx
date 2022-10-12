import React from "react";

//styles
import { Wrapper } from "./DateFilterWidget.Styles";

// widgets
import Inputwidget from "../inputWidget/Inputwidget";

const DateFilterWidget = () => {
  return (
    <>
      <Wrapper>
        <h4>Sort from:</h4>
        <Inputwidget
          width={"220px"}
          height={"38px"}
          type={"date"}
          label={"Start Date:"}
        />
        <h4>to</h4>
        <Inputwidget
          width={"220px"}
          height={"38px"}
          type={"date"}
          label={"End Date:"}
        />
      </Wrapper>
    </>
  );
};

export default DateFilterWidget;
