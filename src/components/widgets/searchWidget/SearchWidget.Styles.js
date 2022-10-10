import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.2rem;
  height: 49px;
  width: 365px;
  background-color: var(--text-white);
  border-radius: 21px;
  box-shadow: var(--box-shadow);

  i {
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 10%;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.4);
  width: 98%;
  height: 39px;
  border-radius: 0 21px 21px 0;
  background-color: #ededed;
  border: none;
`;
