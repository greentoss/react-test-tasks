import React from 'react';
import styled, { css } from "styled-components";

const StyledSliderImg = styled.div<{ backgroundImage?: string }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: 100%;
  background-size: cover;
  background-position: 50%;
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
  `}
  &.next-left {
    animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both leftNext;
  }
  //&.current-left {
  //  animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both leftCurr;
  //}
  //&.next-right {
  //  animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both rightNext;
  //}
  //&.current-right {
  //  animation: 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s both rightCurr;
  //}

  @keyframes leftNext {
    from { left: 100%; }
    to { left: 0; }
  }

  //@keyframes leftCurr {
  //  from { left: 0; }
  //  to { left: -100%; }
  //}
  //
  //@keyframes rightNext {
  //  from { left: -100%; }
  //  to { left: 0; }
  //}
  //
  //@keyframes rightCurr {
  //  from { left: 0; }
  //  to { left: 100%; }
  //}
`;

interface SliderImgProps {
    className: string;
    style: { backgroundImage?: string };
}

const SliderImg: React.FC<SliderImgProps> = ({ className, style }) => {
    return <StyledSliderImg className={className} backgroundImage={style.backgroundImage} />;
};

export default SliderImg;
