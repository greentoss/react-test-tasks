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

const CardBody= () => {
    const headingStyle = {
        color: "#000",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "29px"
    }

    const buttons = [
        <ActionButton key="buy-button" name={'Buy'} />,
        <LikeButton key="like-button" />,
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
