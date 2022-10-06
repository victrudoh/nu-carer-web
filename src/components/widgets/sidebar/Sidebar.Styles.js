import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: var(--sidebar-width);
  height: 100%;
  width: var(--sidebar-width);
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--bg-dark);
  /* box-shadow: var(--box-shadow); */
  z-index: 100;
  color: var(--text-white);

  a {
    text-decoration: none;
    color: var(--text-white);
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
  }

  /* &:hover {
    overflow-x: hidden;
  } */

  /* @media (max-width: 768px) {
    display: none;
  } */

  /* @media screen and (max-width: 1200px) {
    display: block;
  } */
`;

export const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--topbar-height);
  /* background-color: pink; */
`;

export const SidebarLogo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  .logoName {
    margin-top: 0.2rem;
    color: var(--main-color);
    font-weight: 500;
    font-size: 28px;
    line-height: 20px;
    animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s 1 normal forwards
      running fadein;
  }
`;

export const SidebarCloseBtn = styled.div`
  & {
    display: none;
    @media (max-width: 1200px) {
      display: block;
    }
  }

  span {
    font-size: 1.6rem;
    margin-right: 0.8rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SidebarDown = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;
  padding: 0 16px;

  h3 {
    font-weight: 400;
    font-size: 16px;
  }

  a {
    gap: 0.5rem;
    height: 69px;
    transition: all 300ms ease;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover {
    transform: translateX(18px);
    background-color: var(--bg-color);
    color: var(--text-grey);
  }

  span {
    font-size: 1.6rem;
  }

  .active {
    color: var(--text-grey);
    border-radius: 6px 0 0 6px;
    border: 1px solid var(--bg-color);
    font-weight: 700;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
    transform: translateX(18px);
    background-color: var(--bg-color);
    color: var(--text-grey);
  }
`;

export const SidebarCategory = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin: 2.4rem 0 0.5rem 0.5rem; //top right bottom left
`;
