import React from "react";
import styled from "styled-components";

interface toggleProps {
  isActive: boolean;
  onChange: () => void;
}

const Toggle: React.FC<toggleProps> = ({ isActive, onChange }) => {
  return (
    <ToggleContainer>
      <SwitchInput type="checkbox" checked={isActive} onChange={onChange} />
      <Switch isActive={isActive} />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  width: 34px;
  height: 20px;
  padding: 3px;
  border-radius: 13px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.toggleBackground};
`;

const SwitchInput = styled.input`
  display: none;
`;

const Switch = styled.span<{ isActive: boolean }>`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.toggle};
  transform: translateX(${({ isActive }) => (isActive ? "14px" : "")});
  transition: transform 0.3s linear;
`;
