import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext";
import axios from "axios";

// widgets
import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import InfoCardShortWidget from "../../../../components/widgets/infoCardShortWidget/InfoCardShortWidget";
import { CircleSpinner } from "../../../../components/widgets/circleSpinner/CircleSpinner.Styles";
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";

const Report = () => {
  const {
    careplanLoading,
    setCareplanLoading,
    setResidentHandler,
    residentReport,
    setResidentReport,
    residentHandler,
  } = useContext(AppContext);
  console.log(
    "🚀 ~ file: Report.jsx:21 ~ Report ~ residentReport",
    residentReport
  );

  const [resident, setResident] = useState({});

  // fetch Resident by ID
  const getResident = async () => {
    try {
      setCareplanLoading(true);
      const response = await axios.get(
        `https://wecare-api.onrender.com/api/admin/resident/one?id=${residentHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      //   console.log(
      //     "🚀 ~ file: Careplan.jsx ~ line 35 ~ getResident ~ response",
      //     response
      //   );
      setResident(response.data.data.resident);
      fetchReportHandler();
      setCareplanLoading(false);
    } catch (error) {
      setCareplanLoading(false);
      console.log(
        "🚀 ~ file: Careplan.jsx ~ line 39 ~ getResident ~ error",
        error
      );
    }
  };

  // Send report handler
  const fetchReportHandler = async () => {
    try {
      setCareplanLoading(true);
      const response = await axios.get(
        `https://wecare-api.onrender.com/api/caregiver/report?residentId=${residentHandler.id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      //   console.log(
      //     "🚀 ~ file: Careplan.jsx:80 ~ sendReportHandler ~ response",
      //     response
      //   );
      setResidentReport(response.data.data);
      setCareplanLoading(false);
      setResidentHandler({
        ...residentHandler,
        careplan: {
          action: "report",
          activity: {},
        },
      });
    } catch (error) {
      setCareplanLoading(false);
      console.log(
        "🚀 ~ file: Careplan.jsx:84 ~ sendReportHandler ~ error",
        error
      );
    }
  };

  useEffect(() => {
    getResident();
  }, []);

  return (
    <>
      <TopContainerWidget>
        <InfoCardShortWidget
          img={resident.media && resident.media}
          r11={"Name"}
          r12={resident.name}
          r21={"Age"}
          r22={resident.age}
          r31={"Health Condition"}
          r32={resident.healthCondition}
          r41={"Address"}
          r42={resident.address}
          r51={"Next Of Kin"}
          r52={resident.nextOfKin}
          r61={"Care Giver"}
          r62={resident.caregiverName ? resident.caregiverName : "Unassigned"}
        />
        {careplanLoading && <CircleSpinner />}
      </TopContainerWidget>
      <ContainerWidget>
        {/* {residentReport.map((item, i) => {
          Object.keys(item.report).map((key, index) => {
            return (
              <div key={index}>
                <h2>
                  {key}: {item.report[key]}
                  ggg
                </h2>

                <hr />
              </div>
            );
          });
        })} */}
      </ContainerWidget>
    </>
  );
};

export default Report;
