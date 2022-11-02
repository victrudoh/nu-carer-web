import React from "react";

//styles
import { Left, Right, Row, Wrapper } from "./InfoCardShortWidget.Styles";

// widgets

const InfoCardShortWidget = ({ img, r11, r12, r21, r22, r31, r32 }) => {
  return (
    <>
      <Wrapper>
        <Left>{img && <img src={img} alt="img" />}</Left>
        <Right>
          <Row>
            <h4>{r11}:</h4>
            <h5>{r12}</h5>
          </Row>
          <Row>
            <h4>{r21}:</h4>
            <h5>{r22}</h5>
          </Row>
          <Row>
            <h4>{r31}:</h4>
            <h5>{r32}</h5>
          </Row>
        </Right>
      </Wrapper>
    </>
  );
};

export default InfoCardShortWidget;
