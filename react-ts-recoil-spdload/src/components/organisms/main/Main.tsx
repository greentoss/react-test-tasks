import React from 'react';
import styled from "styled-components";
import MainContent from "../../molecules/main-content/MainContent";
import MainHeading from "../../molecules/main-heading/MainHeading";
import ContentDots from "../../molecules/content-dots/ContentDots";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = () =>  {

    const handleClick = () => console.log('click')

    return (
        <StyledMain>
            <MainHeading />
            <MainContent />
            <ContentDots
                currentIndex={1}
                dotColor={'#000'}
                handleDotClick={ handleClick }
            />
        </StyledMain>
    );
}

export default Main;

