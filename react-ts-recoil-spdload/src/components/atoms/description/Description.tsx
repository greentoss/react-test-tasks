import React from 'react';
import styled from "styled-components";
import {cutTheText} from "../../../utils/cutTheText";

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
