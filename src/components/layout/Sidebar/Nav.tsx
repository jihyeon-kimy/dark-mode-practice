import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navContents } from "../../../router";
import { SidebarContext } from "../../../store/SidebarProvider";
import SidebarItem from "./SidebarItem";

const Nav = () => {
  const { isOpen } = useContext(SidebarContext);
  const [selectedMenuIdx, setSelectedMenuIdx] = useState<number | undefined>();

  useEffect(() => {
    if (!window.location.pathname) return;

    const currentPathIdx = navContents.find(
      (element) => window.location.pathname === element.path
    )?.id;
    setSelectedMenuIdx(currentPathIdx);
  }, []);

  return (
    <NavContainer>
      {selectedMenuIdx && <SelectedMenu idx={selectedMenuIdx} />}
      {navContents.map((element) => (
        <NavLink
          key={element.id}
          to={element.path}
          onClick={() => {
            setSelectedMenuIdx(element.id);
          }}>
          {({ isActive }) => (
            <SidebarItem
              icon={element.icon}
              title={element.label}
              isOpen={isOpen}
              className={isActive ? "active" : ""}
            />
          )}
        </NavLink>
      ))}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.ul`
  position: relative;
  flex-grow: 1;
  padding: 20px;
`;

const SelectedMenu = styled.span<{ idx: number }>`
  display: inline-block;
  position: absolute;
  top: ${({ idx }) => `${20 + (idx - 1) * 55}px`};
  z-index: 5;
  height: 50px;
  width: calc(100% - 40px);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.active};
  transition: top 0.3s ease-in-out, background-color 0.3s linear;
`;
