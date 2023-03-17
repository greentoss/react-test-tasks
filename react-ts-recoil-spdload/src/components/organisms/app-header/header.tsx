import React from 'react';
import styled from "styled-components";
import Logo from "../../atoms/logo/logo";
import Nav from "../../molecules/nav/nav";
import Menu from "../../molecules/nav-menu/navMenu"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 84px;
  //color: #000;
  background-color: rgba(30, 30, 30, 0.7);
  
  position: sticky;
  z-index: 5;
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
