import styled from "styled-components";
import color from "../../../styles/color";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  toggle?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title, toggle }) => {
  return (
    <SidebarItemContainer>
      {icon}
      <ItemTitle>{title}</ItemTitle>
      {toggle}
    </SidebarItemContainer>
  );
};

export default SidebarItem;

const SidebarItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  svg {
    width: 50px;
    height: 50px;
    padding: 10px;
    fill: ${color.gray};
  }
`;

const ItemTitle = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${color.gray};
`;