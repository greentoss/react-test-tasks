import React from 'react';
import logo from "../../../assets/img/logo.png"
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLogo = styled.div`
  img {
    background: none;
  }
`

const Logo = () =>  {
    return (
        <StyledLogo className='logo'>
            <Link to='/'><img src={logo} className="app-logo" alt="logo" /></Link>
        </StyledLogo>
    );
}

export default Logo;
