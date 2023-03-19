import React from 'react';
import styled from "styled-components";
import ArrowButton from "../../atoms/buttons/arrow-button/arrowButton";

const StyledMenu = styled.div`
    display: flex;
    gap: 16px;
`

const ContentHeadingMenu = () =>  {
    const arrowLeft = require("../../../assets/img/icons/arrow-left.svg").default
    const arrowRight = require("../../../assets/img/icons/arrow-right.svg").default

    return (
        <StyledMenu>
            <ArrowButton src={arrowLeft} />
            <ArrowButton src={arrowRight} />
        </StyledMenu>
    );
}

export default ContentHeadingMenu;
