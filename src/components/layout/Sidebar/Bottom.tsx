import { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as DarkModeIcon } from "../../../assets/dark_mode.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/logout.svg";
import { SidebarContext } from "../../../store/SidebarProvider";
import { ThemeContext } from "../../../store/ThemeProvider";
import color from "../../../styles/color";
import Toggle from "../../common/Toggle";
import SidebarItem from "./SidebarItem";

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
