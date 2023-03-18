import React from 'react';
import styled from "styled-components";
import Heading from "../../atoms/heading/heading";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //width: 80%;
  
  margin-top: 90px;
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
            <div>
                <button>arrow left</button>
                <button>arrow right</button>
            </div>
        </StyledMainContent>
    );
}

export default MainHeading;
