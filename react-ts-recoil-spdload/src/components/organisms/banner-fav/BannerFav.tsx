import React from 'react';
import styled, { ThemedStyledProps } from "styled-components";
import BannerHeading from "../../molecules/banner-heading/BannerHeading";
import image3 from '../../../assets/img/pictures/image3.jpg'
import Heading from "../../atoms/heading/Heading";

interface StyledBannerProps {
    backgroundImage: string;
}

const StyledBanner = styled.div<ThemedStyledProps<StyledBannerProps, any>>`
  position: relative;
  margin-top: -85px;
  z-index: 5;
  height: 400px;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
`

const BannerFav = () =>  {

    const headingStyle = {
        color: "#fff",
        fontWeight: 800,
        fontSize: "48px",
        lineHeight: "58px",
    }

    const headings = [
        <Heading text={'favourites'} style={headingStyle}/>,
    ];

    return (
        <StyledBanner backgroundImage={image3}>
            <BannerHeading  headings={ headings }/>
        </StyledBanner>
    );
}

export default BannerFav;
