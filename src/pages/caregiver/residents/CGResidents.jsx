import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// styles
import { Wrapper } from "./CGResidents.Styles";

// widgets
import ContainerWidget from "../../../components/widgets/containerWidget/ContainerWidget";
import TopContainerWidget from "../../../components/widgets/topContainerWidget/TopContainer";
import SearchWidget from "../../../components/widgets/searchWidget/SearchWidget";

const CGResidents = () => {
  const {
    assignedResidents,
    carerLoading,
    setResidentHandler,
    residentHandler,
  } = useContext(AppContext);
  // console.log(
  //   "🚀 ~ file: CGResidents.jsx:22 ~ CGResidents ~ assignedResidents",
  //   assignedResidents
  // );

  let SN = 0;
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);

  const viewHandler = async (id) => {
    await setResidentHandler(() => ({
      ...residentHandler,
      action: "careplan",
      id: id,
    }));
    navigate("/caregiver/residents/view");
  };

  // SearchBar Handler
  const onSearchChangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = assignedResidents.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    setFiltered(assignedResidents);
  }, []);

  return (
    <>
      <TopContainerWidget>
        <SearchWidget
          placeholder={"Search name"}
          name={"search"}
          onChange={(e) => onSearchChangeHandler(e)}
        />
      </TopContainerWidget>
      <Wrapper>
        {carerLoading ? (
          <CircleSpinner />
        ) : (
          <ContainerWidget>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {carerLoading ? (
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
                          <td>{item.phone}</td>
                          <td>{item.gender}</td>
                          <td>{item.address?.slice(0, 25)}...</td>
                          <td>
                            {" "}
                            <i
                              className="bx bx-log-in-circle"
                              onClick={() => viewHandler(item._id)}
                            ></i>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <strong>No assigned resident</strong>
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
        )}
      </Wrapper>
    </>
  );
};

export default CGResidents;
