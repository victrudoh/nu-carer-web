import styled from "styled-components";

export const Button = styled.button`
  /* height: ${(props) => (props.width === "md" ? "45px" : "80px")}; */
  height: ${(props) => (props.height ? props.height : "80px")};
  border-radius: 14px;
  margin: 1rem 0;
  /* width: ${(props) => (props.width === "md" ? "170px" : "683px")}; */
  width: ${(props) => (props.width ? props.width : "683px")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "#3c8829"};
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    background-color: orange;
    color: white;
  }

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: ${(props) => (props.width === "md" ? "170px" : "400px")};
    height: 60px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: ${(props) => (props.width === "md" ? "170px" : "400px")};
    height: 50px;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: ${(props) => (props.width === "md" ? "170px" : "350px")};
    height: 40px;
  }
`;
