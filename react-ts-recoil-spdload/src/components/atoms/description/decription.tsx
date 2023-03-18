import React from 'react';
import styled from "styled-components";

const StyledDescription = styled.p`
  font-family: 'Lato',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  margin-top: 16px;
  margin-bottom: 64px;
  padding-left: 15px;
  padding-right: 15px;
  
  color: #556B84;
`;

interface HeadingProps {
    text: string
}

const Description = ({ text }: HeadingProps) => {
    return (
        <StyledDescription >
            { text }
        </StyledDescription>
    );
};

export default Description;
