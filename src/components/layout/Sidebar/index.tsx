import styled from "styled-components";
import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import Nav from "./Nav";
import Bottom from "./Bottom";
import { ReactComponent as ChevronIcon } from "../../../assets/chevron_right.svg";
import color from "../../../styles/color";
import { useState } from "react";

export interface isOpenProps {
  isOpen: boolean;
}

const Sidebar = () => {
  const [openSidebar, setOpneSidebar] = useState(true);

  const toggleSidebarHandler = () => {
    setOpneSidebar((prev) => !prev);
  };

  const openSidebarHandler = () => {
    setOpneSidebar(true);
  };

  return (
    <SidebarConatiner isOpen={openSidebar}>
      <SidebarToggle onClick={toggleSidebarHandler} isOpen={openSidebar}>
        <ChevronIcon />
      </SidebarToggle>
      <UserInfo isOpen={openSidebar} />
      <SearchBox isOpen={openSidebar} openSidebarHandler={openSidebarHandler} />
      <Nav isOpen={openSidebar} />
      <Bottom isOpen={openSidebar} />
    </SidebarConatiner>
  );
};

export default Sidebar;
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
