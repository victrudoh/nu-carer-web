import React, { useContext, useState } from "react";
import AppContext from "../../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../../helpers/Alert";

// styles
import { Wrapper } from "./Add.Styles";

// widgets
import PopupWidget from "../../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Add = () => {
  const {
    allActivities,
    addResidentLoading,
    setAddResidentLoading,
    residentHandler,
    setResidentHandler,
    getCareplan,
  } = useContext(AppContext);

  const [newActivity, setNewActivity] = useState({
    activityId: "",
    assessment: "",
    comment: "",
  });

  const closeHandler = () => {
    setResidentHandler({
      ...residentHandler,
      careplan: {
        action: null,
        items: {
          careplan: {},
          activity: {},
        },
      },
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("newActivity: ", newActivity);
    try {
      setAddResidentLoading(true);
      const response = await axios.post(
        `https://wecare-api.onrender.com/api/admin/resident/add-careplan-activity?residentId=${residentHandler.id}&activityId=${newActivity.activityId}`,
        newActivity,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddResidentLoading(false);
      if (response.status === 200) {
        success("Created new activity successfully");
        getCareplan();
        // close handler
        setResidentHandler({
          ...residentHandler,
          careplan: {
            action: null,
            items: {
              careplan: {},
              activity: {},
            },
          },
        });
      }
    } catch (err) {
      if (err?.response?.status === 422) {
        error(err.response.data.message);
      } else {
        error("Couldn't create activity");
      }
      console.log(err);
      setAddResidentLoading(false);
    }
  };

  const onchangeHandler = (e) => {
    e.persist();
    setNewActivity((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <PopupWidget title={"Add Activity"}>
        <form onSubmit={submit}>
          <RowWidget>
            <div className="activity">
              <label>Activity</label>
              <select
                name="activityId"
                id="activityId"
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={newActivity.activityId}
              >
                <option>Select Activity</option>
                {allActivities.map((item, i) => (
                  <option value={item._id} key={i}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <Inputwidget
              name={"assessment"}
              width={"450px"}
              height={"45px"}
              label={"Assessment"}
              type={"text"}
              required
              onChange={(e) => onchangeHandler(e)}
              defaultValue={newActivity.assessment}
            />
          </RowWidget>
          <RowWidget></RowWidget>
          <RowWidget>
            <Inputwidget
              name={"comment"}
              width={"450px"}
              height={"80px"}
              label={"Comment"}
              type={"text"}
              required
              onChange={(e) => onchangeHandler(e)}
              defaultValue={newActivity.comment}
            />
          </RowWidget>
          <div className="bottom">
            {addResidentLoading ? (
              <CircleSpinner />
            ) : (
              <>
                <ButtonWidget
                  width={"170px"}
                  height={"45px"}
                  text={"Close"}
                  color={"grey"}
                  onclick={() => closeHandler()}
                />
                <ButtonWidget
                  width={"170px"}
                  height={"45px"}
                  text={"Add"}
                  type={"submit"}
                />
              </>
            )}
          </div>
        </form>
      </PopupWidget>
    </Wrapper>
  );
};

export default Add;
