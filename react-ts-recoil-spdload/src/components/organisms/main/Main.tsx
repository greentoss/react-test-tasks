import React from 'react';
import styled from "styled-components";
import MainContent from "../../molecules/main-content/MainContent";
import MainHeading from "../../molecules/main-heading/MainHeading";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = () =>  {

    return (
        <StyledMain>
            <MainHeading />
            <MainContent />
        </StyledMain>
    );
}

export default Main;

