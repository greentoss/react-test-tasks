import React from 'react';
import styled from "styled-components";

const StyledDot = styled.div`
  width: 24px;
  height: 24px;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #fff;
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
    background-color: #fff;
  }
`

interface DotProps {
    onClick: () => void;
    className: string;
}

const Dot: React.FC<DotProps> = ({ onClick, className }) => {
    return <StyledDot className={className} onClick={onClick} />;
};

export default Dot;
