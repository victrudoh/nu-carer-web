import React, { useState } from "react";

//styles
import { Wrapper } from "./DateFilterWidget.Styles";

// widgets
import Inputwidget from "../inputWidget/Inputwidget";

const DateFilterWidget = ({ filterParams, setFilterParams }) => {
  console.log(
    "🚀 ~ file: DateFilterWidget.jsx ~ line 10 ~ DateFilterWidget ~ filterParams",
    filterParams
  );

  // const [filterParams, setFilterParams] = useState({
  //   from: "",
  //   to: "",
  // });

  const onchangeHandler = (e) => {
    e.persist();
    setFilterParams((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Wrapper>
        <h4>Sort from:</h4>
        <Inputwidget
          name={"from"}
          width={"220px"}
          height={"38px"}
          type={"date"}
          label={"Start Date:"}
          required
          onChange={(e) => onchangeHandler(e)}
          defaultValue={filterParams.from}
        />
        <h4>to</h4>
        <Inputwidget
          name={"to"}
          width={"220px"}
          height={"38px"}
          type={"date"}
          label={"End Date:"}
          required
          onChange={(e) => onchangeHandler(e)}
          defaultValue={filterParams.to}
        />
      </Wrapper>
    </>
  );
};

export default DateFilterWidget;
