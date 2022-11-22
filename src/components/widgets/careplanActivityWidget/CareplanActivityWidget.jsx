import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";

// styles
import {
  Wrapper,
  Content,
  Top,
  TopLeft,
  TopRight,
  Bottom,
  Assessment,
} from "./CareplanActivityWidget.Styles";

// widgets
import ButtonWidget from "../buttonWidget/ButtonWidget";
import { CircleSpinner } from "../circleSpinner/CircleSpinner.Styles";

const CareplanActivityWidget = () => {
  const {
    careplan,
    residentHandler,
    setResidentHandler,
    allActivities,
    getCareplan,
    careplanLoading,
  } = useContext(AppContext);
  console.log(
    "🚀 ~ file: CareplanActivityWidget.jsx ~ line 22 ~ CareplanActivityWidget ~ residentHandler",
    residentHandler
  );
  // console.log("allActivities: ", allActivities);

  // const [careplan, setCareplan] = useState([]);
  // console.log("careplan: ", careplan);
  // const [filteredCareplan, setFilteredCareplan] = useState([]);
  // console.log("filteredCareplan: ", filteredCareplan);
  // const [otherActivities, setOtherActivities] = useState([]);

  // fetch resident careplan
  // const getCareplan = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://nu-carer-api.herokuapp.com/api/admin/resident/careplan?residentId=${residentHandler.id}`,
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       }
  //     );
  //     // const response = await axios.get(
  //     //   `http://localhost:4000/api/admin/resident/careplan?residentId=637558a266b3adb51f3c4a43`,
  //     //   {
  //     //     headers: {
  //     //       "content-type": "application/json",
  //     //     },
  //     //   }
  //     // );
  //     // console.log("getCareplan ~ response", response);
  //     setCareplan(response.data.data);
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: CareplanActivityWidget.jsx ~ line 32 ~ getCareplan ~ error",
  //       error
  //     );
  //   }
  // };

  // function getDifference(a, b) {
  //   return a.filter((element) => {
  //     return !b.includes(element.activityId);
  //   });
  // }

  // 👇️ ['c', 'd']
  // console.log("Difference: ", getDifference(allActivities, careplan));

  // filter careplas and activities
  // const getFilteredCareplan = async () => {
  //   try {
  //     allActivities.filter(async (activity) => {
  //       careplan.map(async (careplan) => {
  //         if (!careplan.activityId.includes(activity._id)) {
  //           console.log("YES");
  //         } else {
  //           console.log("NO");
  //         }
  //       });
  //       // const filtered = careplan.filter((careplan) => {
  //       //   if (careplan.activityId !== activity._id) return activity;
  //       //   // return careplan.activityId.includes(activity._id);
  //       // });
  //       // setFilteredCareplan(() => [...filteredCareplan, filtered[0]]);
  //     });
  //     // careplan.map(async (careplan) => {
  //     //   const filtered = await allActivities.filter((activity) => {
  //     //     return activity._id.includes(careplan.activityId);
  //     //   });
  //     //   console.log(
  //     //     "🚀 ~ file: CareplanActivityWidget.jsx ~ line 66 ~ filtered ~ filtered",
  //     //     filtered
  //     //   );
  //     // });
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: CareplanActivityWidget.jsx ~ line 73 ~ getFilteredCareplan ~ error",
  //       error
  //     );
  //   }
  // };

  // Add handler
  const addHandler = async () => {
    setResidentHandler({
      ...residentHandler,
      careplan: {
        action: "add",
        activity: {},
      },
    });
  };

  // Add handler
  const editHandler = async (activity) => {
    setResidentHandler({
      ...residentHandler,
      careplan: {
        action: "edit",
        activity: activity,
      },
    });
  };

  // delete handler
  const deletehandler = async (id) => {
    try {
      const response = await axios.delete(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/delete-careplan-activity?careplanId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        success("Deleted activity");
        getCareplan();
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: CareplanActivityWidget.jsx ~ line 134 ~ deletehandler ~ error",
        error
      );
      error("Couldn't delete activity");
    }
  };

  // useEffect(() => {
  //   getCareplan();
  // }, []);

  // useEffect(() => {
  //   getFilteredCareplan();
  // }, [careplan]);

  return (
    <>
      {careplanLoading
        ? // <CircleSpinner />
          ""
        : allActivities.map((activity) =>
            careplan?.map(
              (careplan) =>
                activity._id === careplan.activityId && (
                  <>
                    <Wrapper>
                      <Content>
                        <Top>
                          <TopLeft>{activity.name}</TopLeft>
                          <TopRight>
                            <ButtonWidget
                              width={"82px"}
                              height={"30px"}
                              text={"Add"}
                              onclick={() => addHandler()}
                            />
                            <div
                              className="pair edit mx-3"
                              onClick={() => editHandler(activity)}
                            >
                              Edit
                              <i className="bx bxs-edit"></i>
                            </div>
                            <div
                              className="pair delete"
                              onClick={() => deletehandler(careplan._id)}
                            >
                              Delete
                              <i className="bx bxs-trash"></i>
                            </div>
                          </TopRight>
                        </Top>
                        <Bottom>
                          <Assessment>
                            <h5>Assessment</h5>
                            <h6>{careplan.assessment}</h6>
                          </Assessment>
                          <Assessment>
                            <h5>Comment</h5>
                            <h6>{careplan.comment}</h6>
                          </Assessment>
                        </Bottom>
                      </Content>
                    </Wrapper>
                  </>
                )
            )
          )}

      {/* <Wrapper>
        <Content> */}

      {/* <Top>
            <TopLeft>Mobilization</TopLeft>
            <TopRight>
              <ButtonWidget
                width={"82px"}
                height={"30px"}
                text={"Add"}
                onclick={() => addHandler()}
              />
              <div className="pair edit mx-3">
                Edit
                <i
                  className="bx bxs-edit"
                  // onClick={() => editHandler(unit.id, item.department.name)}
                ></i>
              </div>
              <div className="pair delete">
                Delete
                <i
                  className="bx bxs-trash"
                  // onClick={() => editHandler(unit.id, item.department.name)}
                ></i>
              </div>
            </TopRight>
          </Top>
          <Bottom>
            <Assessment>
              <h5>Assessment</h5>
              <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                velit lore
              </h6>
            </Assessment>
            <Assessment>
              <h5>Comment</h5>
              <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                velit lore Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Exercitationem ex fuga quaerat harum ratione labore ipsum
                nihil eum tempore ab perspiciatis suscipit maxime architecto,
                voluptates veniam ut esse animi cupiditate.
              </h6>
            </Assessment>
          </Bottom> */}
      {/* </Content>
      </Wrapper> */}
    </>
  );
};

export default CareplanActivityWidget;
