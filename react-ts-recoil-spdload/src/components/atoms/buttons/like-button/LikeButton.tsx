import React from 'react';
import styled from "styled-components";
import heart from "../../../../assets/img/icons/heart.svg"
import trash from "../../../../assets/img/icons/delete.svg"

interface StyledButtonProps {
    active?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 53px;
  height: 53px;

  border: none;
  background: ${props => props.active ? '#DD377D' : '#ECECEC'};
  
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px #2448bd; // add the blue shadow on hover
    transition: box-shadow 0.3s ease-in-out;
  }

  &:not(:hover) {
    box-shadow: none; // remove the shadow when not hovering
    transition: box-shadow 0.3s ease-in-out; // add transition for smoother effect
  }

  img {
    filter: ${props => props.active ? 'grayscale(100%) brightness(100%) invert(100%)' : 'none'};
  }
`

interface LikeButtonProps {
    active?: boolean,
    type?: string
}

const LikeButton = ({ active, type }: LikeButtonProps) => {
    const handleClick = () => {
        type ? console.log('clicked like button') : console.log('clicked delete button');
    };

    const src = type === 'like' ? heart : trash

    return (
        <StyledButton onClick={handleClick} active={active}>
            <img src={src} alt="heart" />
        </StyledButton>
    );
};

export default LikeButton;
