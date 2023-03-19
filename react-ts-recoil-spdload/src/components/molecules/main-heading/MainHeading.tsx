import React from 'react';
import styled from "styled-components";
import Heading from "../../atoms/heading/Heading";
import ContentHeadingMenu from "../content-heading-menu/ContentHeadingMenu";

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

    return (
        <StyledMainContent>
            <Heading text={ 'popular tours' } style={ headingStyle }/>
            <ContentHeadingMenu />
        </StyledMainContent>
    );
}

export default MainHeading;
