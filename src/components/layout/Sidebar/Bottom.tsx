import SidebarItem from "./SidebarItem";
import { ReactComponent as LogoutIcon } from "../../../assets/logout.svg";
import { ReactComponent as DarkModeIcon } from "../../../assets/dark_mode.svg";
import Toggle from "../../common/Toggle";
import color from "../../../styles/color";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../store/ThemeProvider";
import { SidebarContext } from "../../../store/SidebarProvider";

const Bottom = () => {
  const { darkmode, toggleThemeHandler } = useContext(ThemeContext);
  const { isOpen } = useContext(SidebarContext);

  return (
    <BottomContainer>
      <SidebarItem icon={<LogoutIcon />} title="Logout" isOpen={isOpen} />
      <SidebarItem
        background={true}
        icon={<DarkModeIcon />}
        title="Dark Mode"
        toggle={<Toggle isActive={darkmode} onChange={toggleThemeHandler} />}
        isOpen={isOpen}
      />
    </BottomContainer>
  );
};

export default Bottom;

const BottomContainer = styled.div`
  padding: 20px;
  border-top: 1px solid ${color.grayLight};
`;
