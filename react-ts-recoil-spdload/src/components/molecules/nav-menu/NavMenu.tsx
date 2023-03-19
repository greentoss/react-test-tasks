import React from 'react';
import styled from "styled-components";
import LikeButton from "../../atoms/buttons/like-button/LikeButton";
import ActionButton from "../../atoms/buttons/action-nutton/ActionButton";

const StyledMenu = styled.div`
    display: flex;
    gap: 12px;
`

const Menu = () =>  {
    return (
        <StyledMenu>
            <LikeButton />
            <ActionButton name={ 'Sign in' } />
        </StyledMenu>
    );
}

export default Menu;
