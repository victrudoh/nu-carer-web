import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../../../context/AppContext";

// styles
import { Wrapper } from "./List.Styles";

// widgets
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import SearchWidget from "../../../../components/widgets/searchWidget/SearchWidget";
import AddBtnWidget from "../../../../components/widgets/addBtnWidget/AddBtnWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const List = () => {
  const {
    allCaregivers,
    caregiverHandler,
    setCaregiverHandler,
    caregiverLoading,
    setCaregiverLoading,
    caregiverListLoading,
  } = useContext(AppContext);

  const [filtered, setFiltered] = useState([]);

  let SN = 0;

  // const addHandler = (e) => {
  const addHandler = () => {
    // console.log("ADD", e);
    setCaregiverHandler({
      ...caregiverHandler,
      action: "add",
    });
  };

  const onchangeHandler = async (e) => {
    try {
      setCaregiverLoading(true);
      e.persist();
      await setCaregiverHandler((item) => ({
        id: e.target.value.split(" ")[1],
        action: e.target.value.split(" ")[0],
      }));
      setCaregiverLoading(false);
      console.log(caregiverHandler);
    } catch (error) {
      setCaregiverLoading(false);
      console.log(
        "🚀 ~ file: List.jsx ~ line 55 ~ onchangeHandler ~ error",
        error
      );
    }
  };

  // SearchBar Handler
  const onSearchChangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = allCaregivers.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  // populate filtered with users on page load
  useEffect(() => {
    setFiltered(allCaregivers);
  }, []);

  return (
    <Wrapper>
      <TopContainerWidget>
        <SearchWidget
          placeholder={"Search name"}
          name={"search"}
          onChange={(e) => onSearchChangeHandler(e)}
        />
        <AddBtnWidget
          text={"Add Support Worker"}
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
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Maximillian RObin</td>
              <td>Otto@gmail.com</td>
              <td>07184556221</td>
              <td>Male</td>
              <td>Vanderpouyer</td>
              {caregiverLoading ? (
                <td>
                  <CircleSpinner />
                </td>
              ) : (
                <td>
                  <select name="#" id="#" onChange={onchangeHandler}>
                    <option value="">...</option>
                    <option value="timesheet">View Timesheet</option>
                    <option value="summary">View Summary sheet</option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              )}
            </tr> */}
            {caregiverListLoading ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <CircleSpinner />
                </td>
              </tr>
            ) : (
              <>
                {filtered.length > 0 ? (
                  filtered.map((item, i) => (
                    <tr key={i}>
                      <td>{(SN = SN + 1)}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.gender}</td>
                      <td>{item.address?.slice(0, 25)}...</td>
                      {caregiverLoading ? (
                        <td>
                          <CircleSpinner />
                        </td>
                      ) : (
                        <td>
                          <select name="#" id="#" onChange={onchangeHandler}>
                            <option value="">...</option>
                            <option value={`timesheet ${item._id}`}>
                              View Timesheet
                            </option>
                            <option value={`summary ${item._id}`}>
                              View Summary sheet
                            </option>
                            <option value={`edit ${item._id}`}>Edit</option>
                            <option value={`delete ${item._id}`}>Delete</option>
                          </select>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>No Support worker registered</strong>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </ContainerWidget>
    </Wrapper>
  );
};

export default List;
