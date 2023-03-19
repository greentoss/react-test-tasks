import React from 'react';
import styled from "styled-components";
import Slider from "../slider/Slider";
import BannerHeading from "../../molecules/banner-heading/BannerHeading";
import ExploreButton from "../../atoms/buttons/explore-button/ExploreButton";
import Heading from "../../atoms/heading/Heading";

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

    const headings = [
        <Heading text={'the space is waiting for'} style={headingTwoStyle}/>,
        <Heading text={'you'} style={headingOneStyle}/>
    ];

    return (
        <StyledBanner>
            <BannerHeading headings={headings}/>
            <Slider images={images} />
            <ExploreButton name={'Explore tours'}/>
        </StyledBanner>
    );
}

export default Banner;

