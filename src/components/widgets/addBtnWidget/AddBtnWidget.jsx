import React from "react";

// styles
import { Button } from "./AddBtnWidget.Styles";

const AddBtnWidget = ({ text }) => {
  return (
    <Button>
      {text}
      <i className="bx bxs-plus-circle"></i>
    </Button>
  );
};

export default AddBtnWidget;
