import React, { useState } from "react";

// styles
import { Wrapper } from "./List.Styles";

// widgets
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import SearchWidget from "../../../../components/widgets/searchWidget/SearchWidget";
import AddBtnWidget from "../../../../components/widgets/addBtnWidget/AddBtnWidget";

const List = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subMenuHandler = (e) => {
    setIsMenuOpen(!isMenuOpen);
    console.log(e.target.id);
    isMenuOpen ? console.log("Open") : console.log("Close");
  };

  return (
    <Wrapper>
      <TopContainerWidget>
        <SearchWidget />
        <AddBtnWidget text={"Add Support Worker"} />
      </TopContainerWidget>
      <ContainerWidget>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <select name="#" id="#" onChange={subMenuHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <select name="#" id="#" onChange={subMenuHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <select name="#" id="#" onChange={subMenuHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <select name="#" id="#" onChange={subMenuHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
                  <option value="summary">View Summary sheet</option>
                  <option value="edit">Edit</option>
                  <option value="delete">Delete</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <select name="#" id="#" onChange={subMenuHandler}>
                  <option value="">...</option>
                  <option value="timesheet">View Timesheet</option>
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
