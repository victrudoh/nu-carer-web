import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";

// widgets
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import DateFilterWidget from "../../../../components/widgets/dateFilterWidget/DateFilterWidget";
import InfoCardShortWidget from "../../../../components/widgets/infoCardShortWidget/InfoCardShortWidget";
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";

const Summary = () => {
  const {
    caregiverLoading,
    setCaregiverLoading,
    caregiverListLoading,
    setCaregiverListLoading,
    caregiverHandler,
  } = useContext(AppContext);

  const [caregiver, setCaregiver] = useState({});

  const [filterParams, setFilterParams] = useState({
    from: "",
    to: "",
  });

  const [summary, setSummary] = useState({
    caregiver: {},
    sessions: 0,
    clockCycles: 0,
    summary: [],
    isEmpty: true,
  });

  // fetch Caregiver by ID
  const getCaregiver = async () => {
    try {
      setCaregiverLoading(true);
      const response = await axios.get(
        `https://wecare-api.onrender.com/api/admin/caregiver/one?id=${caregiverHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: Summary.jsx ~ line 37 ~ getCaregiver ~ response",
        response
      );
      setCaregiver(response.data.data.caregiver);
      setCaregiverLoading(false);
    } catch (error) {
      setCaregiverLoading(false);
      console.log(
        "🚀 ~ file: summary.jsx ~ line 33 ~ getCaregiver ~ error",
        error
      );
    }
  };

  // fetch summary
  const getCaregiverSummary = async () => {
    try {
      setCaregiverListLoading(true);
      const response = await axios.get(
        `https://wecare-api.onrender.com/api/admin/caregiver/report?id=${caregiver._id}&from=${filterParams.from}&to=${filterParams.to}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: Summary.jsx ~ line 61 ~ getCaregiverSummary ~ response",
        response
      );
      setSummary({
        caregiver: response.data.data.caregiver,
        sessions: response.data.data.sessions,
        clockCycles: response.data.data.clockCycles,
        summary: response.data.data.summary,
        isEmpty: response.data.data.sessions > 0 ? false : true,
      });
      setCaregiverListLoading(false);
    } catch (error) {
      setCaregiverListLoading(false);
      console.log(
        "🚀 ~ file: summary.jsx ~ line 33 ~ getCaregiver ~ error",
        error
      );
    }
  };

  useEffect(() => {
    getCaregiver();
  }, []);

  useEffect(() => {
    getCaregiverSummary();
  }, [filterParams.to]);

  return (
    <>
      <TopContainerWidget>
        {caregiverLoading ? (
          <CircleSpinner />
        ) : (
          <>
            <InfoCardShortWidget
              img={caregiver.media}
              r11={"Name"}
              r12={caregiver.name}
              r21={"Sessions"}
              r22={summary.sessions}
              r31={"Clock Cycles"}
              r32={summary.clockCycles}
            />
            <DateFilterWidget
              setFilterParams={setFilterParams}
              filterParams={filterParams}
            />
          </>
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
            ) : summary.isEmpty ? (
              <tr>
                <td></td>
                <td>
                  <strong>
                    No Summary Record available for this Support Worker
                  </strong>
                </td>
                <td></td>
              </tr>
            ) : (
              summary.summary.map((item, i) => (
                <tr key={i}>
                  <td>{item.checkInDate}</td>
                  <td>{item.checkInTime}</td>
                  <td>{item.checkOutTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </ContainerWidget>
    </>
  );
};

export default Summary;
