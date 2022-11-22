import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../../../helpers/Alert";

// styles
import { Wrapper } from "./Edit.Styles";

// widgets
import PopupWidget from "../../../../../components/widgets/popupWidget/PopupWidget";
import Inputwidget from "../../../../../components/widgets/inputWidget/Inputwidget";
import RowWidget from "../../../../../components/widgets/rowWidget/RowWidget";
import ButtonWidget from "../../../../../components/widgets/buttonWidget/ButtonWidget";
import { CircleSpinner } from "../../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Edit = () => {
  const {
    allActivities,
    addResidentLoading,
    setAddResidentLoading,
    residentHandler,
    setResidentHandler,
    getCareplan,
  } = useContext(AppContext);

  const [editActivity, setEditActivity] = useState({
    activityId: "",
    assessment: "",
    comment: "",
  });

  const closeHandler = () => {
    setResidentHandler({
      ...residentHandler,
      careplan: {
        action: null,
        activity: {},
      },
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("editActivity: ", editActivity);
    try {
      setAddResidentLoading(true);
      const response = await axios.put(
        `https://nu-carer-api.herokuapp.com/api/admin/resident/edit-careplan-activity?residentId=${residentHandler.id}&activityId=${editActivity.activityId}`,
        editActivity,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ file: Add.jsx ~ line 51 ~ submit ~ response", response);
      setAddResidentLoading(false);
      if (response.status === 200) {
        success("Edited activity successfully");
        getCareplan();
        // close handler
        setResidentHandler({
          ...residentHandler,
          careplan: {
            action: null,
            activity: {},
          },
        });
      }
    } catch (err) {
      if (err?.response?.status === 422) {
        error(err.response.data.message);
      } else {
        error("Couldn't edit activity");
      }
      console.log(err);
      setAddResidentLoading(false);
    }
  };

  const onchangeHandler = (e) => {
    e.persist();
    setEditActivity((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setEditActivity({
      activityId: residentHandler.careplan?.items.activity._id,
      assessment: residentHandler.careplan?.items.careplan.assessment,
      comment: residentHandler.careplan?.items.careplan.comment,
    });
  }, [residentHandler.careplan]);

  return (
    <Wrapper>
      <PopupWidget title={"Edit Activity"}>
        <form onSubmit={submit}>
          <RowWidget>
            <div className="activity">
              <label>Activity</label>
              <select
                name="activityId"
                id="activityId"
                required
                onChange={(e) => onchangeHandler(e)}
                defaultValue={editActivity.activityId}
              >
                <option>{residentHandler.careplan?.items.activity.name}</option>
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
              defaultValue={editActivity.assessment}
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
              defaultValue={editActivity.comment}
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
                  text={"Update"}
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

export default Edit;
