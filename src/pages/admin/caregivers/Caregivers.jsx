import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

// pages
import Add from "./add/Add";
import Edit from "./edit/Edit";
import List from "./list/List";

const Caregivers = () => {
  const { caregiverHandler } = useContext(AppContext);

  const Display = () => {
    if (caregiverHandler.action === "add") {
      return (
        <>
          <List />
          <Add />
        </>
      );
    } else if (caregiverHandler.action === "edit") {
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

export default Caregivers;
