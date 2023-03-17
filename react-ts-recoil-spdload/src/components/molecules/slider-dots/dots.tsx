import React from 'react';
import styled from "styled-components";
import Dot from "../../atoms/slider-dot/dot"

const StyledDots = styled.div`
  position: absolute;
  //left: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;  //places dots in center
  top: 50%;
  z-index: +5;
`

interface DotsProps {
    images: string[];
    currentIndex: number;
    handleDotClick: (index: number) => void;
}

const Dots: React.FC<DotsProps> = ({ images, handleDotClick, currentIndex}) => {
    return (
        <StyledDots>
            {images.map((_, index) => (
                <Dot
                    className={`dot ${index === currentIndex ? "active-slider-dot" : ""}`}
                    key={index}
                    onClick={() => handleDotClick(index)}
                />
            ))}
        </StyledDots>
    );
};

export default Dots;
