import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success } from "../../../helpers/Alert";

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
import { CircleSpinner } from "../circleSpinner/CircleSpinner.Styles";

const CareplanActivityWidget = () => {
  const {
    careplan,
    residentHandler,
    setResidentHandler,
    allActivities,
    getCareplan,
    careplanListLoading,
    setCareplanListLoading,
  } = useContext(AppContext);

  // Edit handler
  const editHandler = async (careplan, activity) => {
    setResidentHandler({
      ...residentHandler,
      careplan: {
        action: "edit",
        items: {
          careplan: careplan,
          activity: activity,
        },
      },
    });
  };

  // delete handler
  const deletehandler = async (id) => {
    try {
      setCareplanListLoading(true);
      const response = await axios.delete(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/delete-careplan-activity?careplanId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      setCareplanListLoading(false);
      if (response.status === 200) {
        success("Deleted activity");
        getCareplan();
      }
    } catch (error) {
      setCareplanListLoading(false);
      console.log(
        "🚀 ~ file: CareplanActivityWidget.jsx ~ line 134 ~ deletehandler ~ error",
        error
      );
      error("Couldn't delete activity");
      error(error.response.data.message);
    }
  };

  return (
    <>
      {careplanListLoading ? (
        <CircleSpinner />
      ) : careplan.length > 0 ? (
        <>
          {allActivities.map((activity) =>
            careplan?.map(
              (careplan) =>
                activity._id === careplan.activityId && (
                  <>
                    <Wrapper>
                      <Content>
                        <Top>
                          <TopLeft>{activity.name}</TopLeft>
                          <TopRight>
                            <div
                              className="pair edit mx-3"
                              onClick={() => editHandler(careplan, activity)}
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
        </>
      ) : (
        <Wrapper>
          <Content>
            <strong>No Care plan activity</strong>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default CareplanActivityWidget;
