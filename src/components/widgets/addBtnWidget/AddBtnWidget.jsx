import React from "react";

// styles
import { Button } from "./AddBtnWidget.Styles";

const AddBtnWidget = ({ text, onclick }) => {
  return (
    <Button onClick={(e) => onclick(e)}>
      {text}
      <i className="bx bxs-plus-circle"></i>
    </Button>
  );
};

export default AddBtnWidget;
