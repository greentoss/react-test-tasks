import React from 'react';
import styled from "styled-components";
import Logo from "../../atoms/logo/Logo";
import Nav from "../../molecules/nav/Nav";
import Menu from "../../molecules/nav-menu/NavMenu"

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
    return (
        <StyledHeader>
            <Logo/>
            <Nav/>
            <Menu />
        </StyledHeader>
    );
}

export default Header;
