import React from "react";

//styles
import {
  Left,
  Middle,
  Right,
  End,
  Row,
  Wrapper,
} from "./InfoCardShortWidget.Styles";

// widgets

const InfoCardShortWidget = ({
  img,
  r11,
  r12,
  r21,
  r22,
  r31,
  r32,
  r41,
  r42,
  r51,
  r52,
  r61,
  r62,
  icon,
}) => {
  return (
    <>
      <Wrapper>
        <Left>{img && <img src={img} alt="img" />}</Left>
        <Middle>
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
        </Middle>
        {(r41 || r42 || r51 || r52 || r61 || r62) && (
          <Right>
            <Row>
              <h4>{r41}:</h4>
              <h5>{r42}</h5>
            </Row>
            <Row>
              <h4>{r51}:</h4>
              <h5>{r52}</h5>
            </Row>
            <Row>
              <h4>{r61}:</h4>
              <h5>{r62}</h5>
            </Row>
          </Right>
        )}
        {icon && (
          <End>
            <i class="bx bx-log-in-circle"></i>
          </End>
        )}
      </Wrapper>
    </>
  );
};

export default InfoCardShortWidget;
