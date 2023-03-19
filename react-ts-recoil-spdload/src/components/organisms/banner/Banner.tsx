import React from 'react';
import styled from "styled-components";
import Slider from "../slider/Slider";
import BannerHeading from "../../molecules/banner-heading/BannerHeading";
import ExploreButton from "../../atoms/buttons/explore-button/ExploreButton";

const StyledBanner = styled.div`
  position: relative;
  margin-top: -85px;
  z-index: 5;
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
            <ExploreButton name={'Explore tours'}/>
        </StyledBanner>
    );
}

export default Banner;
