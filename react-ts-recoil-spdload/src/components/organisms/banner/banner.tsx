import React from 'react';
import styled from "styled-components";
import Slider from "../slider/Slider";
import BannerHeading from "../../molecules/banner-heading/banner-heading";

const StyledBanner = styled.div`
  //height: 740px;
  position: relative;
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
