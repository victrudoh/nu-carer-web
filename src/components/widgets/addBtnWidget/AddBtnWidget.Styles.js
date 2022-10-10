import styled from "styled-components";

export const Button = styled.button`
  background: #3c8829;
  box-shadow: 0px 14px 24px rgba(96, 253, 0, 0.15);
  color: var(--text-white);
  border-radius: 15px;
  border: none;
  width: 268px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px 13px;
  gap: 9px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  &:hover {
    background: #357027;
  }
`;
