import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 2px solid rgba(72, 72, 72, 0.7);
  /* height: ${(props) => (props.width === "md" ? "45px" : "65px")}; */
  height: ${(props) => props.height || "65px"};
  /* width: 685px; */
  /* width: ${(props) => (props.width === "md" ? "470px" : "685px")}; */
  width: ${(props) => props.width || "685px"};
  /* color: rgba(72, 72, 72, 0.56); */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: ${(props) => (props.width ? "170px" : "400px")};
    height: ${(props) => (props.width === "md" ? "40px" : "60px")};
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: ${(props) => (props.width ? "170px" : "400px")};
    height: 50px;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: ${(props) => (props.width === "md" ? "170px" : "350px")};
    height: 40px;
  }
`;

export const Label = styled.label`
  width: 119px;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
