import React from 'react';
import styled from "styled-components";
import Dot from "../../atoms/dot/Dot"

const StyledConentDots = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;  //places dots in center
  margin-bottom: 90px;
`

interface ConentDotsProps {
    currentIndex: number;
    handleDotClick: (index: number) => void;
    dotColor: string;
}

const ContentDots: React.FC<ConentDotsProps> = ({ handleDotClick, currentIndex, dotColor}) => {

    return (
        <StyledConentDots>
            <Dot
                key={currentIndex}
                onClick={() => handleDotClick}
                dotColor={dotColor}
                className={ 'classname' }
            />
            <Dot
                key={currentIndex}
                onClick={() => handleDotClick}
                dotColor={dotColor}
                className={ 'classname' }
            />
            <Dot
                key={currentIndex}
                onClick={() => handleDotClick}
                dotColor={dotColor}
                className={ 'classname' }
            />
        </StyledConentDots>
    );
};

export default ContentDots;
