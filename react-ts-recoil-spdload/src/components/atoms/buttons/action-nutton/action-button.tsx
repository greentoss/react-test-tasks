import React from 'react';
import styled from "styled-components";

const StyledActionButton = styled.button`
  flex-grow: 1;
  height: 53px;

  padding-left: 35px;
  padding-right: 35px;

  font-family: 'Syne', serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  border: none;
  color: #000000;
  background: #D3EAFF;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px #2448bd; // add the blue shadow on hover
    transition: box-shadow 0.3s ease-in-out;
  }

  &:not(:hover) {
    box-shadow: none; // remove the shadow when not hovering
    transition: box-shadow 0.3s ease-in-out; // add transition for smoother effect
  }
`

interface NavButtonProps {
    name: string
}

const ActionButton = ({ name }: NavButtonProps) =>  {
    return (
        <StyledActionButton>
            { name }
        </StyledActionButton>
    );
}

export default ActionButton;
