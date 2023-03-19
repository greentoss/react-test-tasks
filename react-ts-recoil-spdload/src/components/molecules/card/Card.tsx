import React from 'react';
import styled from "styled-components";
import CardImage from "../../atoms/card-image/CardImage";
import CardBody from "../../atoms/card-body/CardBody";

const StyledCard = styled.div`
  width: 411px;
  height: 572px;

  border: 1px solid #D3EAFF;

`

interface CardProps {
    image: string;
    currentIndex: number;
    handleLikeClick: (index: number) => void;
}

const Card: React.FC<CardProps> = ({ image, handleLikeClick, currentIndex}) => {

    const buttonType = 'like'
    // const buttonType = 'delete'

    return (
        <StyledCard>
            <CardImage src={ image }/>
            <CardBody type={ buttonType }/>
        </StyledCard>
    );
};

export default Card;

