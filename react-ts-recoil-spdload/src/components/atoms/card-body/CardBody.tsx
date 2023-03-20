import React from 'react';
import styled from "styled-components";
import Heading from "../heading/Heading";
import Description from "../description/Description";
import ButtonMenu from "../../molecules/button-menu/ButtonMenu";
import ActionButton from "../buttons/action-nutton/ActionButton";
import LikeButton from "../buttons/like-button/LikeButton";
import {useRecoilValue} from "recoil";
import {favoriteState} from "../../../recoil-state/atoms/favoriteState";

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
    title: string,
    description: string
}

const CardBody= ( { title, description } : CardProps ) => {

    const buttonType = useRecoilValue(favoriteState) ? 'like' : 'delete'
    console.log(buttonType, 'buttontype from cardBody')

    const headingStyle = {
        color: "#000",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "29px"
    }

    const buttons = [
        <ActionButton key="buy-button" name={'Buy'} />,
        <LikeButton key="like-button" type={buttonType} />,
    ];

    return (
        <StyledCardBody>
            <Heading text={title} style={headingStyle} />
            <Description text={ description } />
            {/*<Heading text={'extraordinary tour'} style={headingStyle} />*/}
            {/*<Description text={ 'Lorem ipsum dolor sit amet consectetur adipiscing elit' } />*/}
            <ButtonMenu buttons={buttons} />
        </StyledCardBody>
    )
};

export default CardBody;
