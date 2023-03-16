import React from 'react';
import styled from "styled-components";
import Logo from "../items/logo/logo";
import Nav from "../items/nav/nav";
import Menu from "../items/nav-menu/navMenu"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 84px;
  color: #000;
  opacity: 1
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
