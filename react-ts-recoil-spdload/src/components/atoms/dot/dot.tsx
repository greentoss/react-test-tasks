import React from 'react';
import styled from "styled-components";

const StyledDot = styled.div<{ dotColor: string }>`
  width: 24px;
  height: 24px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${props => props.dotColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: none;
  }

  &.active-dot::before {
    display: block;
    background-color: ${props => props.dotColor};
  }
`;

interface DotProps {
    onClick: () => void;
    className: string;
    dotColor: string;
}

const Dot: React.FC<DotProps> = ({ onClick, className, dotColor }) => {
    return <StyledDot className={className} onClick={onClick} dotColor={dotColor} />;
};

export default Dot;
