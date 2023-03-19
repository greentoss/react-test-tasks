import React from 'react';
import styled from "styled-components";
import ClearAllButton from "../../atoms/buttons/clear-all-button/ClearAllButton";

const StyledMainBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  
  margin-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  max-width: 1440px;
`

const MainBlock = () =>  {

    const handleClick = () => console.log('clear ALl')

    return (
        <StyledMainBlock>
            <ClearAllButton  name={ 'Clear all' } handleClick={handleClick}/>
        </StyledMainBlock>
    );
}

export default MainBlock;
