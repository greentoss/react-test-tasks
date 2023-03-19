import React from 'react';
import styled from "styled-components";

const StyledHeading = styled.h3<HeadingProps>`
  text-transform: uppercase;
  font-family: 'Syne',serif;
  font-style: normal;
  text-align: center;
  color: ${props => props.style.color};
  font-weight: ${props => props.style.fontWeight};
  font-size: ${props => props.style.fontSize};
  line-height: ${props => props.style.lineHeight};
`;

interface HeadingProps {
    text: string,
    style: {
        color: string,
        fontWeight: number,
        fontSize: string,
        lineHeight: string
    }
}

const Heading = ({ text, style }: HeadingProps) => {
    return (
        <StyledHeading style={style} text={ text }>
            { text }
        </StyledHeading>
    );
};

export default Heading;
