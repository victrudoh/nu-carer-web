import React from "react";

// styles
import { Wrapper, Content, Title } from "./PopupWidget.Styles";

const PopupWidget = ({ children, title }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Wrapper>
  );
};

export default PopupWidget;
