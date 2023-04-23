import { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as ChevronIcon } from "../../../assets/chevron_right.svg";
import SidebarProvider, { SidebarContext } from "../../../store/SidebarProvider";
import color from "../../../styles/color";
import Bottom from "./Bottom";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import UserInfo from "./UserInfo";

const SidebarContents = () => {
  const { isOpen, toggleSidebarHandler } = useContext(SidebarContext);

  return (
    <SidebarConatiner isOpen={isOpen}>
      <SidebarToggle isOpen={isOpen} onClick={toggleSidebarHandler}>
        <ChevronIcon />
      </SidebarToggle>
      <UserInfo />
      <SearchBox />
      <Nav />
      <Bottom />
    </SidebarConatiner>
  );
};

const Sidebar = () => {
  return (
    <SidebarProvider>
      <SidebarContents />
    </SidebarProvider>
  );
};

export default Sidebar;

const SidebarConatiner = styled.aside<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ isOpen }) => (isOpen ? "400px" : "90px")};
  margin-right: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3s linear;
`;

const SidebarToggle = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 30px;
  right: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.active};

  svg {
    width: 30px;
    height: 30px;
    fill: ${color.white};
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s linear;
  }
`;
