import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  height: 19px;
  font-family: 'Lato',serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  background: none;
  
  color: #FFFFFF;
  border: none;
  &:hover {
    border-bottom: 1px solid white;
  }
`

interface NavButtonProps {
    name: string
}

const NavButton = ({ name }: NavButtonProps) =>  {
    return (
        <StyledButton>
            { name }
        </StyledButton>
    );
}

export default NavButton;
