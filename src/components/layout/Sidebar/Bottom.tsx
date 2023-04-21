import SidebarItem from "./SidebarItem";
import { ReactComponent as LogoutIcon } from "../../../assets/logout.svg";
import { ReactComponent as DarkModeIcon } from "../../../assets/dark_mode.svg";
import Toggle from "../../common/Toggle";
import color from "../../../styles/color";
import styled from "styled-components";

const Bottom = () => {
  return (
    <BottomContainer>
      <SidebarItem icon={<LogoutIcon />} title="Logout" />
      <SidebarItem icon={<DarkModeIcon />} title="Dark Mode" toggle={<Toggle />} />
    </BottomContainer>
  );
};

export default Bottom;

const BottomContainer = styled.div`
  padding: 20px;
  border-top: 1px solid ${color.grayLight};
`;
