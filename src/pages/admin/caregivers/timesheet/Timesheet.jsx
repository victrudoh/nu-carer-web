import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";

// widgets

import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import InfoCardShortWidget from "../../../../components/widgets/infoCardShortWidget/InfoCardShortWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Timesheet = () => {
  const {
    caregiverLoading,
    setCaregiverLoading,
    caregiverListLoading,
    setCaregiverListLoading,
    caregiverHandler,
  } = useContext(AppContext);

  const [caregiver, setCaregiver] = useState({});

  const [timesheet, setTimesheet] = useState({});

  // fetch Caregiver by ID
  const getCaregiver = async () => {
    try {
      setCaregiverLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/one?id=${caregiverHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: Timesheet.jsx ~ line 31 ~ getCaregiver ~ response",
      //   response
      // );
      setCaregiver(response.data.data.caregiver);
      setCaregiverLoading(false);
      setCaregiverListLoading(true);
    } catch (error) {
      setCaregiverLoading(false);
      console.log(
        "🚀 ~ file: Timesheet.jsx ~ line 33 ~ getCaregiver ~ error",
        error
      );
    }
  };

  // fetch timesheet
  const getCaregiverTimesheet = async () => {
    try {
      // setCaregiverListLoading(true);
      const response = await axios.get(
        `https://nu-carer-api.herokuapp.com/api/admin/caregiver/timesheet?id=${caregiver._id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: Timesheet.jsx ~ line 48 ~ getCaregiverTimesheet ~ response",
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

  useEffect(() => {
    getCaregiver();
  }, []);

  useEffect(() => {
    getCaregiverTimesheet();
  }, [caregiver]);

  return (
    <>
      <TopContainerWidget>
        {caregiverLoading ? (
          <CircleSpinner />
        ) : (
          <InfoCardShortWidget
            // img={"#"}
            r11={"Name"}
            r12={caregiver.name}
            r21={"License Number"}
            r22={caregiver.licenseNo}
            r31={"Gender"}
            r32={caregiver.gender}
          />
        )}
      </TopContainerWidget>
      <ContainerWidget>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Check-in Date</th>
              <th scope="col">Check-in Time</th>
              <th scope="col">Check-out Time</th>
            </tr>
          </thead>
          <tbody>
            {caregiverListLoading ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <CircleSpinner />
                </td>
              </tr>
            ) : timesheet.length > 0 ? (
              <tr>
                <td>Wed, 23 oct 2022</td>
                <td>19:00</td>
                <td>8:45</td>
              </tr>
            ) : (
              <tr>
                <td></td>
                <td>
                  <strong>
                    No Timesheet Record available for this Support Worker
                  </strong>
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </ContainerWidget>
    </>
  );
};

export default Timesheet;
