import React from 'react';
import styled from "styled-components";
import heart from "../../../../assets/img/icons/heart.png"

const StyledButton = styled.button`
  width: 53px;
  height: 53px;

  border: none;
  color: #000000;
  background: #ECECEC;  //TODO: onclick change to #DD377D
  
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

const LikeButton = () =>  {
    return (
        <StyledButton>
            <img src={heart} alt="heart" />
        </StyledButton>
    );
}

export default LikeButton;
