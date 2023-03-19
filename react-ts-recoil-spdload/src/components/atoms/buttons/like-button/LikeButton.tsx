import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import heart from "../../../../assets/img/icons/heart.svg"

interface StyledButtonProps {
    active: boolean;
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

const LikeButton = () => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(segment => segment !== ''); // remove empty segments
        setActive(pathSegments[0] === 'favourites');
    }, [location]);

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <StyledButton onClick={handleClick} active={active}>
            <img src={heart} alt="heart" />
        </StyledButton>
    );
};

export default LikeButton;
