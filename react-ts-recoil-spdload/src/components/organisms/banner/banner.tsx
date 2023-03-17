import React from 'react';
import styled from "styled-components";
import Slider from "../slider/slider";
import BannerHeading from "../../molecules/banner-heading/banner-heading";

const StyledBanner = styled.div`
  position: relative;
  margin-top: -85px
`

const images = [
    require('../../../assets/img/pictures/image1.jpg'),
    require('../../../assets/img/pictures/image2.jpg'),
    require('../../../assets/img/pictures/image3.jpg'),
];

const Banner = () =>  {

    return (
        <StyledBanner>
            <BannerHeading />
            <Slider images={images} />
        </StyledBanner>
    );
}

export default Banner;
