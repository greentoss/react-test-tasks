import React from 'react';
import styled from "styled-components";
import HeadingOne from "../headingOne/headingOne";
import HeadingThree from "../headingThree/headingThree";


const StyledBannerHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
`

const BannerHeading = () =>  {

    return (
        <StyledBannerHeading>
            <HeadingThree text={'the space is waiting for'}/>
            <HeadingOne text={'you'}/>
        </StyledBannerHeading>
    );
}

export default BannerHeading;
