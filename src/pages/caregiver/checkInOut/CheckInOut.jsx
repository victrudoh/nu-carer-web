import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";

// widgets
import InfoCardShortWidget from "../../../components/widgets/infoCardShortWidget/InfoCardShortWidget";
import TopContainerWidget from "../../../components/widgets/topContainerWidget/TopContainer";
import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
import ContainerWidget from "../../../components/widgets/containerWidget/ContainerWidget";
import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// styles
import { Wrapper, Right } from "./CheckInOut.Styles";

const CheckInOut = () => {
  const {
    activeUser,
    caregiverLoading,
    caregiverListLoading,
    setCaregiverListLoading,
    checkInOutLoading,
    setCheckInOutloading,
  } = useContext(AppContext);

  const [timesheet, setTimesheet] = useState({});
  console.log(
    "🚀 ~ file: CheckInOut.jsx ~ line 27 ~ CheckInOut ~ timesheet",
    timesheet
  );

  // fetch timesheet
  const getCaregiverTimesheet = async () => {
    try {
      setCaregiverListLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/timesheet?id=${activeUser._id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: CheckInOut.jsx ~ line 31 ~ getCaregiverTimesheet ~ response",
        response
      );
      setTimesheet(response.data.data);
      setCaregiverListLoading(false);
    } catch (error) {
      setCaregiverListLoading(false);
      console.log(
        "🚀 ~ file: Timesheet.jsx ~ line 33 ~ getCaregiver ~ error",
        error
      );
    }
  };

  //   check In
  const checkInHandler = async () => {
    try {
      setCheckInOutloading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/caregiver/check-in?id=${activeUser._id}`
      );
      console.log(
        "🚀 ~ file: CheckInOut.jsx ~ line 58 ~ checkInHandler ~ response",
        response
      );
      setCheckInOutloading(false);
      success(response.data.message);
      getCaregiverTimesheet();
    } catch (err) {
      setCheckInOutloading(false);
      if (err.response.status === 401) {
        error(err.response.data.message);
      }
      console.log(
        "🚀 ~ file: CheckInOut.jsx ~ line 57 ~ checkInHandler ~ error: ",
        err
      );
    }
  };

  //   check Out
  const checkOutHandler = async () => {
    try {
      setCheckInOutloading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/caregiver/check-out?id=${activeUser._id}`
      );
      console.log(
        "🚀 ~ file: CheckInOut.jsx ~ line 58 ~ checkInHandler ~ response",
        response
      );
      setCheckInOutloading(false);
      success(response.data.message);
      getCaregiverTimesheet();
    } catch (err) {
      setCheckInOutloading(false);
      if (err.response.status === 401) {
        error(err.response.data.message);
      }
      console.log(
        "🚀 ~ file: CheckInOut.jsx ~ line 57 ~ checkInHandler ~ error",
        err
      );
    }
  };

  useEffect(() => {
    getCaregiverTimesheet();
  }, [activeUser]);

  return (
    <>
      <Wrapper>
        {caregiverLoading ? (
          <CircleSpinner />
        ) : (
          <>
            <InfoCardShortWidget
              img={activeUser?.media}
              r11={"Name"}
              r12={activeUser?.name}
              r21={"Email"}
              r22={activeUser?.email}
              r31={"Phone"}
              r32={activeUser?.phone}
              r41={"Gender"}
              r42={activeUser?.gender}
              r51={"License Number"}
              r52={activeUser?.licenseNo}
              r61={"Address"}
              r62={activeUser?.address}
            />
          </>
        )}
        <Right>
          {checkInOutLoading ? (
            <CircleSpinner />
          ) : (
            <>
              <ButtonWidget
                width={"152px"}
                height={"40px"}
                text={"Check In"}
                onclick={() => checkInHandler()}
              />
              <ButtonWidget
                width={"152px"}
                height={"40px"}
                text={"Check Out"}
                onclick={() => checkOutHandler()}
              />
            </>
          )}
        </Right>
      </Wrapper>
      <ContainerWidget>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Check-in Date</th>
              <th scope="col">Check-in Time</th>
              <th scope="col">Check-out Date</th>
              <th scope="col">Check-out Time</th>
            </tr>
          </thead>
          <tbody>
            {caregiverListLoading ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <CircleSpinner />
                </td>
              </tr>
            ) : timesheet.length > 0 ? (
              timesheet.map((item, i) => (
                <tr key={i}>
                  <td>{item.checkInDate}</td>
                  <td>{item.checkInTime}</td>
                  <td>{item.checkOutDate}</td>
                  <td>{item.checkOutTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td></td>
                <td>
                  <strong>
                    No Timesheet Record available for this Support Worker
                  </strong>
                </td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </ContainerWidget>
    </>
  );
};

export default CheckInOut;
