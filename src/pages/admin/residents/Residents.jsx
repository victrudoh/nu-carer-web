import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";

// pages
import Add from "./add/Add";
import Edit from "./edit/Edit";
import List from "./list/List";

const Residents = () => {
  const { residentHandler } = useContext(AppContext);

  const navigate = useNavigate();

  const Display = () => {
    if (residentHandler.action === "add") {
      return (
        <>
          <List />
          <Add />
        </>
      );
    } else if (residentHandler.action === "edit") {
      return (
        <>
          <List />
          <Edit />
        </>
      );
    } else {
      return <List />;
    }
  };

  return (
    <>
      <Display />
      {/* <List /> */}
    </>
  );
};

export default Residents;
