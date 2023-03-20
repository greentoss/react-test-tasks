import React from 'react';
import styled from "styled-components";

const StyledDescription = styled.p`
  font-family: 'Lato',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  height: 150px;

  margin-top: 16px;
  margin-bottom: 64px;
  padding-left: 15px;
  padding-right: 15px;
  
  color: #556B84;
`;

const cutTheText = (text: string, height: number) => {
    const lineHeight = 25; // You may need to adjust this based on your font size and line height
    const lines = Math.floor(height / lineHeight);
    const totalChars = lines * 40; // You may need to adjust this based on the width of your container

    if (text.length <= totalChars) {
        return text;
    }

    return `${text.slice(0, totalChars).trim()}...`;
};

interface HeadingProps {
    text: string
}

const Description = ({ text }: HeadingProps) => {
    const trimmedText = cutTheText(text, 150);

    return (
        <StyledDescription >
            { trimmedText }
        </StyledDescription>
    );
};

export default Description;
