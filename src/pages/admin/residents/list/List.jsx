import React, { useState, useContext } from "react";
import AppContext from "../../../../context/AppContext";

// styles
import { Wrapper } from "./List.Styles";

// widgets
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import SearchWidget from "../../../../components/widgets/searchWidget/SearchWidget";
import AddBtnWidget from "../../../../components/widgets/addBtnWidget/AddBtnWidget";

const List = () => {
  const { residentHandler, setResidentHandler } = useContext(AppContext);

  // const addHandler = (e) => {
  const addHandler = () => {
    // console.log("ADD", e);
    setResidentHandler({
      ...residentHandler,
      action: "add",
    });
  };

  const onchangeHandler = (e) => {
    e.persist();
    setResidentHandler((item) => ({
      ...item,
      action: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <TopContainerWidget>
        <SearchWidget placeholder={"Search for Resident"} />
        <AddBtnWidget
          text={"Add Resident"}
          // onclick={(e) => addHandler(e)}
          onclick={() => addHandler()}
        />
      </TopContainerWidget>
      <ContainerWidget>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Contact</th>
              <th scope="col">Asign Care Giver</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Maximillian RObin</td>
              <td>Otto@gmail.com</td>
              <td>07184556221</td>
              <td>Male</td>
              <td>
                <select name="#" id="#" onChange={onchangeHandler}>
                  <option value="">Select Care Giver</option>
                  <option value="timesheet">Keanu Reaves</option>
                  <option value="timesheet">Keanu Reaves</option>
                  <option value="timesheet">Keanu Reaves</option>
                  <option value="timesheet">Keanu Reaves</option>
                </select>
              </td>
              <td>
                <select name="#" id="#" onChange={onchangeHandler}>
                  <option value="">...</option>
                  <option value="careplan">View Care plan</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerWidget>
    </Wrapper>
  );
};

export default List;
