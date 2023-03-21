import React from 'react';
import styled from "styled-components";
import CardImage from "../../atoms/card-image/CardImage";
import CardBody from "../../atoms/card-body/CardBody";

const StyledCard = styled.div`
  width: 411px;
  border: 1px solid #D3EAFF;
`

interface CardProps {
    image: string,
    title: string,
    description: string,
    handlers: {
        handleLikeClick: (id: string) => void;
        handleDeleteClick: (id: string) => void;
    },
    id: string,
}

const Card: React.FC<CardProps> = ({ image, title, description, handlers, id}) => {

    return (
        <StyledCard>
            <CardImage src={ image }/>
            <CardBody
                title={ title }
                description={ description }
                id={ id }
                handlers={ handlers }
            />
        </StyledCard>
    );
};

export default Card;

