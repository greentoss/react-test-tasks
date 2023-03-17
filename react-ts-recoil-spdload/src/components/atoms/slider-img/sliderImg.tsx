import React from 'react';
import styled from "styled-components";

const StyledSliderImg = styled.img<{ className: string }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  right: 100%;
  object-fit: cover;
  &.next {
    animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both slideLeft;
  }
  &.current {
    animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both slideRight;
  }

  @keyframes slideLeft {
    from { right: 0; }
    to { right: -100%; }
  }

  @keyframes slideRight {
    from { right: 100%; }
    to { right: 0; }
  }
`;

interface SliderImgProps {
    className: string;
    src: string;
}

const SliderImg: React.FC<SliderImgProps> = ({ className, src }) => {
    return <StyledSliderImg className={className} src={src} />;
};

export default SliderImg;
