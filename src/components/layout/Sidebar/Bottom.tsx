import SidebarItem from "./SidebarItem";
import { ReactComponent as LogoutIcon } from "../../../assets/logout.svg";
import { ReactComponent as DarkModeIcon } from "../../../assets/dark_mode.svg";
import Toggle from "../../common/Toggle";
import color from "../../../styles/color";
import styled from "styled-components";
import { isOpenProps } from ".";

const Bottom: React.FC<isOpenProps> = ({ isOpen }) => {
  return (
    <BottomContainer>
      <SidebarItem icon={<LogoutIcon />} title="Logout" isOpen={isOpen} />
      <SidebarItem
        icon={<DarkModeIcon />}
        title="Dark Mode"
        toggle={<Toggle />}
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
