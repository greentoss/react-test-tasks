import React from 'react';
import styled from "styled-components";
import MainContent from "../../molecules/main-content/MainContent";
import MainBlock from "../../molecules/main-block/MainBlock";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const MainFav = () =>  {

    return (
        <StyledMain>
            <MainBlock />
            <MainContent />
        </StyledMain>
    );
}

export default MainFav;
