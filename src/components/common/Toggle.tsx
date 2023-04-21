import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggleIsActive, setToggleIsActive] = useState(false);

  const onToggle = () => {
    setToggleIsActive(!toggleIsActive);
  };

  return (
    <ToggleContainer>
      <SwitchInput type="checkbox" checked={toggleIsActive} onChange={onToggle} />
      <Switch isActive={toggleIsActive} />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.label`
  width: 34px;
  height: 20px;
  padding: 3px;
  margin-right: 10px;
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
  transition: transform 0.25s ease-in-out;
`;
