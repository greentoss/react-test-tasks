import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 44px;
  height: 44px;

  border: none;
  background: #ECECEC;
  
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px #2448bd;
    transition: box-shadow 0.3s ease-in-out;
  }

  &:not(:hover) {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out;
  }
  
`

interface ArrowButtonProps {
    src: string
    handleClick: () => void
}

const ArrowButton = ( {src, handleClick}: ArrowButtonProps ) =>  {

    return (
        <StyledButton onClick={handleClick}>
            <img src={src} alt="arrow" />
        </StyledButton>
    );
}

export default ArrowButton;
