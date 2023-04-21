import styled from "styled-components";
import { navContents } from "../../../router";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const navMenuClickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <NavContainer>
      {navContents.map((element) => (
        <li
          key={element.id}
          onClick={() => {
            navMenuClickHandler(element.path);
          }}>
          <SidebarItem icon={element.icon} title={element.label} />
        </li>
      ))}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.ul`
  flex-grow: 1;
  padding: 20px;
`;
