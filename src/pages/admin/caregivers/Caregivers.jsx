import React from "react";

// pages
import Add from "./add/Add";
import Edit from "./edit/Edit";
import List from "./list/List";
import Summary from "./summary/Summary";
import Timesheet from "./timesheet/Timesheet";

const Caregivers = () => {
  return (
    <>
      <List />
      <Add />
    </>
  );
};

export default Caregivers;
