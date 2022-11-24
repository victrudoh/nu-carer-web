import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
`;

export const Left = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 65px;
    height: 65px;
    border: 3px solid #484848;
    border-radius: 50%;
  }
`;

export const Middle = styled.div`
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  border-left: 2px solid black;
  padding-left: 1rem;
`;

export const End = styled.div`
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-left: 2px solid black; */
  padding-left: 1rem;

  i {
    font-size: 35px;
    cursor: pointer;

    &:hover {
      color: orange;
    }
  }
`;

export const Row = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;

  h4 {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
  }

  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
`;
