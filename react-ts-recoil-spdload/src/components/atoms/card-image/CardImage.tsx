import React from 'react';
import styled from "styled-components";

const StyledCardImg = styled.img`
  max-width: 100%;
  height: 296px;
  object-fit: cover;
`;

interface SliderImgProps {
    src: string;
}

const CardImage= ({ src } : SliderImgProps) => {
    return (
        <StyledCardImg src={src} alt='card-img' />
    )
};

export default CardImage;
