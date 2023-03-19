import React from 'react';
import styled from "styled-components";
import Dot from "../../atoms/dot/Dot"

const StyledSliderDots = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;  //places dots in center
  top: 50%;
  z-index: 10;
`

interface SliderDotsProps {
    images: string[];
    currentIndex: number;
    handleDotClick: (index: number) => void;
    dotColor: string;
}

const SliderDots: React.FC<SliderDotsProps> = ({ images, handleDotClick, currentIndex, dotColor}) => {
    return (
        <StyledSliderDots>
            {images.map((_, index) => (
                <Dot
                    className={`dot ${index === currentIndex ? "active-dot" : ""}`}
                    key={index}
                    onClick={() => handleDotClick(index)}
                    dotColor={dotColor}
                />
            ))}
        </StyledSliderDots>
    );
};

export default SliderDots;
