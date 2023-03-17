import React from 'react';
import styled from "styled-components";
import SignInButton from "../../atoms/buttons/sign-in/signIn";
import LikeButton from "../../atoms/buttons/like-button/likeButton";

const StyledMenu = styled.div`
    display: flex;
    gap: 12px;
`

const Menu = () =>  {
    return (
        <StyledMenu>
            <LikeButton />
            <SignInButton name={ 'Sign in' } />
        </StyledMenu>
    );
}

export default Menu;
