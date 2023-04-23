import styled, { css } from "styled-components";
import color from "../../../styles/color";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  toggle?: React.ReactNode;
  background?: boolean | undefined;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isOpen,
  toggle,
  background,
}) => {
  return (
    <SidebarItemContainer background={background}>
      {toggle && !isOpen ? "" : icon}
      {isOpen && <ItemTitle>{title}</ItemTitle>}
      {toggle && <ToggleWrapper>{toggle}</ToggleWrapper>}
    </SidebarItemContainer>
  );
};

export default SidebarItem;

const SidebarItemContainer = styled.div<{ background?: boolean }>`
  display: flex;
  align-items: center;
  margin: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s linear;

  ${({ background }) =>
    background &&
    css`
      background-color: ${({ theme }) => theme.hover};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  svg {
    flex-shrink: 0;
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
  white-space: nowrap;
  overflow: hidden;
  color: ${color.gray};
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;
