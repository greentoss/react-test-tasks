import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dots from "../../molecules/slider-dots/dots";
import SliderImgs from "../../molecules/slider-imgs/sliderImgs";

const StyledSlider = styled.div`
  width: 100%;
  height: 740px;
  position: relative;
  background-color: antiquewhite;
`

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    const handleDotClick = (index: number): void => setCurrentIndex(index);

    return (
        <StyledSlider>
            <SliderImgs
                images={images}
                currentIndex={currentIndex}
            />
            <Dots
                images={images}
                handleDotClick={handleDotClick}
                currentIndex={currentIndex}
            />
        </StyledSlider>
    );
};

export default Slider;