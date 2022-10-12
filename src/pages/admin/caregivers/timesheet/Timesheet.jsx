import React from "react";

// widgets

import TopContainerWidget from "../../../../components/widgets/topContainerWidget/TopContainer";
import ContainerWidget from "../../../../components/widgets/containerWidget/ContainerWidget";
import InfoCardShortWidget from "../../../../components/widgets/infoCardShortWidget/InfoCardShortWidget";

const Timesheet = () => {
  return (
    <>
      <TopContainerWidget>
        <InfoCardShortWidget
          img={"#"}
          r11={"Name"}
          r12={"Keanu Reaves"}
          r21={"License Number"}
          r22={"23534"}
          r31={"Gender"}
          r32={"Male"}
        />
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
            <tr>
              <td>Wed, 23 oct 2022</td>
              <td>19:00</td>
              <td>8:45</td>
            </tr>
            <tr>
              <td>Wed, 23 oct 2022</td>
              <td>19:00</td>
              <td>8:45</td>
            </tr>
            <tr>
              <td>Wed, 23 oct 2022</td>
              <td>19:00</td>
              <td>8:45</td>
            </tr>
            <tr>
              <td>Wed, 23 oct 2022</td>
              <td>19:00</td>
              <td>8:45</td>
            </tr>
          </tbody>
        </table>
      </ContainerWidget>
    </>
  );
};

export default Timesheet;
