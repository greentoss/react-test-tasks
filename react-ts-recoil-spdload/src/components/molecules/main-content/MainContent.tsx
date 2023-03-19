import React from 'react';
import styled from "styled-components";
import Card from "../card/Card";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;

  margin: 45px 0;
`

const MainContent = () =>  {

    const image1 = require('../../../assets/img/pictures/image1.jpg')
    const image2 = require('../../../assets/img/pictures/image2.jpg')
    const image3 = require('../../../assets/img/pictures/image3.jpg')
    const handleClick = () => console.log('click')

    return (
        <StyledMainContent>
            <Card  currentIndex={1} handleLikeClick={ handleClick } image={ image1 }/>
            <Card  currentIndex={2} handleLikeClick={ handleClick } image={ image2 }/>
            <Card  currentIndex={3} handleLikeClick={ handleClick } image={ image3 }/>
        </StyledMainContent>
    );
}

export default MainContent;
