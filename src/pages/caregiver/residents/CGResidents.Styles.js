import styled from "styled-components";

export const Wrapper = styled.div `
  /* background: green; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1.4rem;
  /* width: 90%; */
  margin: 0 auto;

  i {
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: orange;
    }
  }
`;