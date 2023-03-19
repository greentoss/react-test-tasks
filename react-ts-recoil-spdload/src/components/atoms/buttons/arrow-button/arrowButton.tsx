import React, {useState} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  width: 44px;
  height: 44px;

  border: none;
  background: #ECECEC;
  
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

interface ArrowButtonProps {
    src: string
}

const ArrowButton = ( {src}: ArrowButtonProps ) =>  {

    const handleClick = () => {
        console.log('arrow clicked')
    }

    return (
        <StyledButton onClick={handleClick}>
            <img src={src} alt="arrow" />
        </StyledButton>
    );
}

export default ArrowButton;
