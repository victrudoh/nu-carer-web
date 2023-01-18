import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../context/AppContext";
import { success } from "../../../../helpers/Alert";
import axios from "axios";

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
    allResidents,
    allCaregivers,
    residentHandler,

    getAllResidents,
    setResidentHandler,

    residentLoading,
    residentListLoading,
    assignCaregiverLoading,

    setResidentLoading,
    setResidentListLoading,
    setAssignCaregiverLoading,
  } = useContext(AppContext);

  const [filtered, setFiltered] = useState([]);

  let SN = 0;
  const navigate = useNavigate();

  // const addHandler = (e) => {
  const addHandler = () => {
    // console.log("ADD", e);
    setResidentHandler({
      ...residentHandler,
      action: "add",
    });
  };

  // Delete Handler
  const Deletehandler = async (id) => {
    try {
      setResidentListLoading(true);
      const response = await axios.delete(
        `https://wecare-api.onrender.com/api/admin/resident/delete?id=${id}`,
        {},
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: List.jsx ~ line 61 ~ Deletehandler ~ response",
      //   response
      // );
      success(response.data.message);
      getAllResidents();
      setResidentListLoading(false);
    } catch (error) {
      setResidentListLoading(false);
      console.log(
        "🚀 ~ file: List.jsx ~ line 66 ~ Deletehandler ~ error",
        error
      );
    }
  };

  const onchangeHandler = async (e) => {
    try {
      setResidentLoading(true);
      // console.log(caregiverHandler);
      e.persist();
      // use split to seperate values and ID i passed in the form input value
      if (e.target.value.split(" ")[0] === "summary") {
        await setResidentHandler(() => ({
          id: e.target.value.split(" ")[1],
          action: e.target.value.split(" ")[0],
        }));
        setResidentLoading(false);
        navigate("/admin/residents/summary");
      } else if (e.target.value.split(" ")[0] === "careplan") {
        await setResidentHandler(() => ({
          id: e.target.value.split(" ")[1],
          action: e.target.value.split(" ")[0],
        }));
        setResidentLoading(false);
        navigate("/admin/residents/careplan");
      } else if (e.target.value.split(" ")[0] === "report") {
        await setResidentHandler(() => ({
          id: e.target.value.split(" ")[1],
          action: e.target.value.split(" ")[0],
        }));
        setResidentLoading(false);
        navigate("/admin/residents/report");
      } else if (e.target.value.split(" ")[0] === "delete") {
        Deletehandler(e.target.value.split(" ")[1]);
        setResidentLoading(false);
      } else {
        // else would only be Edit and it would be handled in residents.jsx so i'll send it there
        await setResidentHandler((item) => ({
          ...item,
          id: e.target.value.split(" ")[1],
          action: e.target.value.split(" ")[0],
        }));
        // setResidentLoading(false);
      }
      setResidentLoading(false);
    } catch (error) {
      setResidentLoading(false);
      console.log(
        "🚀 ~ file: List.jsx ~ line 106 ~ onchangeHandler ~ error",
        error
      );
    }
  };

  // SearchBar Handler
  const onSearchChangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = allResidents.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  // assign caregiver
  const assignCaregiverHandler = async (e) => {
    try {
      setAssignCaregiverLoading(true);
      e.persist();
      const caregiverId = await e.target.value.split(" ")[0];
      const residentId = await e.target.value.split(" ")[1];
      const response = await axios.get(
        `https://wecare-api.onrender.com/api/admin/resident/assign?residentId=${residentId}&caregiverId=${caregiverId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: List.jsx ~ line 145 ~ assignCaregiverHandler ~ response",
      //   response
      // );
      success(response.data.message);
      getAllResidents();
      setAssignCaregiverLoading(false);
    } catch (error) {
      setAssignCaregiverLoading(false);
      console.log(
        "🚀 ~ file: List.jsx ~ line 133 ~ assignCaregiverHandler ~ error",
        error
      );
    }
  };

  // populate filtered with residents on page load
  useEffect(() => {
    setFiltered(allResidents);
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
              <th scope="col">GP Phone</th>
              <th scope="col">Asign Care Giver</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {residentListLoading ? (
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
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.gPphone}</td>
                      {/* <td> */}
                      {assignCaregiverLoading ? (
                        <td>
                          <CircleSpinner className="mx-5" />
                        </td>
                      ) : (
                        <td>
                          {item.caregiverName ? (
                            item.caregiverName
                          ) : (
                            <select
                              name="#"
                              id="#"
                              onChange={assignCaregiverHandler}
                            >
                              <option>Select Care Giver</option>
                              {allCaregivers.map((caregiver, i) => (
                                <option
                                  key={i}
                                  value={`${caregiver._id} ${item._id}`}
                                >
                                  {caregiver.name}
                                </option>
                              ))}
                            </select>
                          )}
                        </td>
                      )}
                      {/* </td> */}
                      {residentLoading ? (
                        <td>
                          <CircleSpinner />
                        </td>
                      ) : (
                        <td>
                          <select name="#" id="#" onChange={onchangeHandler}>
                            <option>...</option>
                            <option value={`careplan ${item._id}`}>
                              View Care plan
                            </option>
                            <option value={`report ${item._id}`}>
                              View Report sheet
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
                      <strong>No Resident registered</strong>
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
