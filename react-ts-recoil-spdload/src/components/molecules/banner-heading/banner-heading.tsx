import React from 'react';
import styled from "styled-components";
import Heading from '../../atoms/heading/heading'

const StyledBannerHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
  z-index: 5;
`

const BannerHeading = () =>  {

    const headingOneStyle = {
        color: "#fff",
        fontWeight: 800,
        fontSize: "310px",
        lineHeight: "372px"
    }

    const headingTwoStyle = {
        color: "#fff",
        fontWeight: 800,
        fontSize: "48px",
        lineHeight: "58px"
    }

    return (
        <StyledBannerHeading>
            <Heading text={'the space is waiting for'} style={headingTwoStyle}/>
            <Heading text={'you'} style={headingOneStyle}/>
        </StyledBannerHeading>
    );
}

export default BannerHeading;
