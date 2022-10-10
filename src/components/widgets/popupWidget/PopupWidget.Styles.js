import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 200;
  display: ${({ show }) => (show ? "block" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 5% auto;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 30px;
  padding: 2rem;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 2.5rem;
  margin-left: 2rem;
`;
