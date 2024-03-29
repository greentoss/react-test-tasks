import React from 'react';
import styled from "styled-components";
import SliderImg from "../../atoms/slider-img/SliderImg";

const StyledSliderImgs = styled.div`
  width: 100%;
  height: 740px;
  position: relative;
  display: flex;
  overflow: hidden;
`

interface SliderImgsProps {
    images: string[];
    currentIndex: number;
}

const SliderImgs: React.FC<SliderImgsProps> = ({ images, currentIndex }) => {

    return (
        <StyledSliderImgs>
            {images.map((image, index) => (
                <SliderImg
                    className={`img ${index === currentIndex ? "current" : "next"}`}
                    key={index}
                    src={image}
                />
            ))}
        </StyledSliderImgs>
    );
};

export default SliderImgs;
