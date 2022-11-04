import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

// pages
import Add from "./add/Add";
import Edit from "./edit/Edit";
import List from "./list/List";

const Residents = () => {
  const { residentHandler } = useContext(AppContext);

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
    </>
  );
};

export default Residents;
