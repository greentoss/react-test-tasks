import React from 'react';
import styled from "styled-components";

const StyledHeadingThree = styled.h3`
  color:#fff;
  text-transform: uppercase;
  font-family: 'Syne',serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
`;

interface HeadingThreeProps {
    text: string
}

const HeadingThree = ({ text }: HeadingThreeProps) => {
    return (
        <StyledHeadingThree>
            { text }
        </StyledHeadingThree>
    );
};

export default HeadingThree;
