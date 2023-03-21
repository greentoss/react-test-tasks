import React from 'react';
import styled from "styled-components";
import ClearAllButton from "../../atoms/buttons/clear-all-button/ClearAllButton";
import {useClearFavourites} from "../../../hooks/useClearFavourites";

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

    const clearFavourites = useClearFavourites()

    return (
        <StyledMainBlock>
            <ClearAllButton  name={ 'Clear all' } handleClick={ clearFavourites }/>
        </StyledMainBlock>
    );
}

export default MainBlock;
