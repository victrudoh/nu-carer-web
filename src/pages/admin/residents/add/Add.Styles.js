import styled from "styled-components";

export const Wrapper = styled.div`
  .gender {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;

    select {
      padding: 0.5em;
      border: 2px solid rgba(72, 72, 72, 0.7);
      width: 450px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .bottom {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
  }
`;
