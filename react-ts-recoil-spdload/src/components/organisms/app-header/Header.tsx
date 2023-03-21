import React, {useEffect} from 'react';
import styled from "styled-components";
import Logo from "../../atoms/logo/Logo";
import Nav from "../../molecules/nav/Nav";
import ButtonMenu from "../../molecules/button-menu/ButtonMenu";
import LikeButton from "../../atoms/buttons/like-button/LikeButton";
import ActionButton from "../../atoms/buttons/action-nutton/ActionButton";
import {Link, useLocation} from "react-router-dom";
import {favoriteState} from "../../../recoil-state/atoms/favoriteState"
import {useRecoilState, useRecoilValue} from "recoil";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 84px;
  background-color: rgba(30, 30, 30, 0.7);
  
  position: sticky;
  z-index: 15;
`

const Header = () =>  {
    const location = useLocation();
    const [isFavouritesPage, setIsFavouritesPage] = useRecoilState(favoriteState);

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(segment => segment !== ''); // remove empty segments
        setIsFavouritesPage(pathSegments[0] === 'favourites');
    }, [location]);

    const buttons = [
        <Link to='/favourites'><LikeButton key="like-button" active={isFavouritesPage} type={'like'} /></Link>,
        <ActionButton key="action-button" name={'Sign in'} />,
    ];

    return (
        <StyledHeader>
            <Logo/>
            <Nav/>
            <ButtonMenu buttons={buttons} />
        </StyledHeader>
    );
}

export default Header;
