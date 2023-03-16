import React from 'react';
import styled from "styled-components";
import NavButton from "../buttons/nav-button/nav-button";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 32px;
`

const Nav = () =>  {
    return (
        <StyledNav>
            <Link to='/' ><NavButton name={ 'Home' }/></Link>
            <NavButton name={ 'Tours' }/>
            <NavButton name={ 'About' }/>
            <NavButton name={ 'Help' }/>
        </StyledNav>
    );
}

export default Nav;
