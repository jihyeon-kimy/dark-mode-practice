import styled, { css } from "styled-components";
import color from "../../../styles/color";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  toggle?: React.ReactNode;
  background?: boolean | undefined;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isOpen,
  toggle,
  background,
  className,
}) => {
  return (
    <SidebarItemContainer background={background} className={className}>
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
  margin-bottom: 5px;
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
    z-index: 10;
    transition: fill 0.4s ease-in-out;
  }

  &.active {
    svg {
      fill: ${color.white};
    }
    span {
      color: ${color.white};
    }
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
  z-index: 10;
  transition: color 0.4s ease-in-out;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;
