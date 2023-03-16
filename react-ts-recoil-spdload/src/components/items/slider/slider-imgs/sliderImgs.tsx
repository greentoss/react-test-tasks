import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SliderImg from "./slider-img/sliderImg";

const StyledSliderImgs = styled.div`
  width: 100%;
  height: 300px;
  //max-height: 740px;
  position: relative;
  display: flex;
  overflow: hidden;
`

interface SliderImgsProps {
    images: string[];
    currentIndex: number;
}

const SliderImgs: React.FC<SliderImgsProps> = ({ images, currentIndex }) => {
    const [direction, setDirection] = useState<"next" | "prev">("next");

    useEffect(() => {
        if (currentIndex === 0) {
            setDirection("next");
        } else {
            setDirection("prev");
        }
    }, [currentIndex]);

    return (
        <StyledSliderImgs>
            {images.map((image, index) => (
                <SliderImg
                    className={`img ${
                        index === currentIndex ? "current" : index < currentIndex ? "prev" : "next"
                    } ${direction === "next" ? "next-left" : "next-right"}`}
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
        </StyledSliderImgs>
    );
};

export default SliderImgs;
