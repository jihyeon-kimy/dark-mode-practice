import SidebarItem from "./SidebarItem";
import { ReactComponent as LogoutIcon } from "../../../assets/logout.svg";
import { ReactComponent as DarkModeIcon } from "../../../assets/dark_mode.svg";
import Toggle from "../../common/Toggle";
import color from "../../../styles/color";
import styled from "styled-components";
import { isOpenProps } from ".";
import { useContext } from "react";
import { ThemeContext } from "../../../store/themeProvider";

const Bottom: React.FC<isOpenProps> = ({ isOpen }) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <BottomContainer>
      <SidebarItem icon={<LogoutIcon />} title="Logout" isOpen={isOpen} />
      <SidebarItem
        icon={<DarkModeIcon />}
        title="Dark Mode"
        toggle={
          <Toggle isActive={themeCtx.darkmode} onChange={themeCtx.toggleThemeHandler} />
        }
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
