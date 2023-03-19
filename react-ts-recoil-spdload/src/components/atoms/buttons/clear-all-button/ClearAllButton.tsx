import React from 'react';
import styled from "styled-components";

const StyledExploreButton = styled.button`
  font-family: 'Lato', serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  
  background: none;
  border: none;
  color: #556B84;

  cursor: pointer;
`

interface ButtonProps {
    name: string;
    handleClick: () => void;
}

const ClearAllButton = ({ name, handleClick }: ButtonProps) => {
    return (
        <StyledExploreButton onClick={handleClick}>
            {name}
        </StyledExploreButton>
    );
};

export default ClearAllButton;


