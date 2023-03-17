import React from 'react';
import styled from "styled-components";
import arrowDown from "../../../../assets/img/icons/arrow-down.svg"

const StyledExploreButton = styled.button`
  font-family: 'Lato', serif;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;

  text-align: center;

  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -54%);
  z-index: 5;

  background: none;
  border: none;
  color: #FFFFFF;

  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 38px; 
    height: 38px;
    background: url(${arrowDown}) no-repeat center center;
    position: absolute;
    top: 0;
    right: -40px;
  }

`

interface NavButtonProps {
    name: string
}

const ExploreButton = ({ name }: NavButtonProps) =>  {

    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
            behavior: 'smooth',
        })
    }

    return (
        <StyledExploreButton onClick={ goToBottom }>
            { name }
        </StyledExploreButton>
    );
}

export default ExploreButton;
