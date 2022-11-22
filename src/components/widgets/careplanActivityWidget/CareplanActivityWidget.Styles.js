import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 0.5rem 1rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.8rem 0;
`;

export const Content = styled.div`
  background: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Top = styled.div`
  background: #ffffff;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

export const TopLeft = styled.div`
  background: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  /* line-height: 120%; */
  display: flex;
  align-items: center;
  color: var(--btn-green);
  /* background: yellow; */
`;

export const TopRight = styled.div`
  /* background: #ffffff; */
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 15%; */

  .pair {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    background: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    &:hover {
      color: orange;
    }
  }

  .edit {
    color: #3c8829;
  }

  .delete {
    color: red;
  }
`;

export const Bottom = styled.div`
  background: #ffffff;
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  padding: 0.5rem;
  border-top: 1.5px solid grey;
`;

export const Assessment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  padding: 0px;

  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #3c3c43;
    margin-bottom: -1.5px;
  }

  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgba(60, 60, 67, 0.85);
    margin-bottom: 1rem;
  }
`;
