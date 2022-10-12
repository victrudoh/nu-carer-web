import styled from "styled-components";

export const Wrapper = styled.div`
  height: var(--topbar-height);
  background-color: var(--text-white);
  box-shadow: var(--box-shadow-topbar);
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Left = styled.div`
  /* background-color: red; */
  width: 40%;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem;
  font-weight: 700;
  font-size: 26px;
  line-height: 20px;
  color: var(--text-grey);
`;

export const Right = styled.div`
  /* background-color: var(--text-grey); */
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: center;
  gap: 1rem;

  img {
    width: 65px;
    height: 65px;
    border: 3px solid #484848;
    border-radius: 50%;
  }
`;

export const NameRoleImage = styled.div`
  /* background-color: orange; */
  width: 200px;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  text-align: center;
  gap: 0.3rem;
`;

export const NameRole = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 0.5rem;
`;

export const Name = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: var(--bg-dark);
`;

export const Role = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #00bc29;
`;

export const Button = styled.button`
  width: 56px;
  height: 20px;
  font-weight: 800;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--text-white);
  background-color: var(--btn-red);
  padding: 1.5rem 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  border: none;

  &:hover {
    background-color: var(--text-grey);
  }
`;
