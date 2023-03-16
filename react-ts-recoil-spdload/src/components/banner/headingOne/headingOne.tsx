import React from 'react';
import styled from "styled-components";

const StyledHeadingOne = styled.h1`
  color: #000;
  text-transform: uppercase;
  font-family: 'Syne',serif;
  font-weight: 800;
  font-size: 310px;
  line-height: 372px;
`;

interface HeadingOneProps {
    text: string
}

const HeadingOne = ({ text }: HeadingOneProps) => {
    return (
        <StyledHeadingOne>
            { text }
        </StyledHeadingOne>
    );
};

export default HeadingOne;
