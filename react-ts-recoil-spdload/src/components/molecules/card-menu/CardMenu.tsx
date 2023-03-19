import React from 'react';
import styled from "styled-components";
import LikeButton from "../../atoms/buttons/like-button/LikeButton";
import ActionButton from "../../atoms/buttons/action-nutton/ActionButton";

const StyledMenu = styled.div`
    display: flex;
    gap: 12px;
`

const CardMenu = () =>  {
    return (
        <StyledMenu>
            <ActionButton name={ 'Buy' } />
            <LikeButton />
        </StyledMenu>
    );
}

export default CardMenu;
