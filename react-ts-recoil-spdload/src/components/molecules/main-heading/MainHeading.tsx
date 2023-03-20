import React from 'react';
import styled from "styled-components";
import Heading from "../../atoms/heading/Heading";
import ButtonMenu from "../button-menu/ButtonMenu";
import ArrowButton from "../../atoms/buttons/arrow-button/ArrowButton";
import {useRecoilValue} from "recoil";
import {navigateCardsState} from "../../../recoil-state/atoms/navigateCardsState";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-top: 90px;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  max-width: 1440px;
`

const MainHeading = () =>  {

    const headingStyle = {
        color: "#000",
        fontWeight: 800,
        fontSize: "32px",
        lineHeight: "39px"
    }

    const arrowLeft = require("../../../assets/img/icons/arrow-left.svg").default
    const arrowRight = require("../../../assets/img/icons/arrow-right.svg").default

    const { handleShowPrev, handleShowNext } = useRecoilValue(navigateCardsState);

    const buttons = [
        <ArrowButton key="arrow-left" src={arrowLeft}  handleClick={handleShowPrev} />,
        <ArrowButton key="arrow-right" src={arrowRight}  handleClick={handleShowNext} />,
    ];

    return (
        <StyledMainContent>
            <Heading text={ 'popular rockets' } style={ headingStyle }/>
            <ButtonMenu buttons={buttons} />
        </StyledMainContent>
    );
}

export default MainHeading;


