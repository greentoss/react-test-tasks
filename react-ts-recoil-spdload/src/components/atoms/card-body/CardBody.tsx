import React from 'react';
import styled from "styled-components";
import Heading from "../heading/Heading";
import Description from "../description/Description";
import ButtonMenu from "../../molecules/button-menu/ButtonMenu";
import ActionButton from "../buttons/action-nutton/ActionButton";
import LikeButton from "../buttons/like-button/LikeButton";

const StyledCardBody = styled.div`
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > *:last-child {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;

interface CardProps {
    type: string
}

const CardBody= ( { type} : CardProps ) => {
    const headingStyle = {
        color: "#000",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "29px"
    }

    //TODO: if we have type true - we pass there delete button

    const buttons = [
        <ActionButton key="buy-button" name={'Buy'} />,
        <LikeButton key="like-button" type={type} />,
    ];

    return (
        <StyledCardBody>
            <Heading text={'extraordinary tour'} style={headingStyle} />
            <Description text={ 'Lorem ipsum dolor sit amet consectetur adipiscing elit' } />
            <ButtonMenu buttons={buttons} />
        </StyledCardBody>
    )
};

export default CardBody;
