import React from 'react';
import styled from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    gap: 16px;
`

interface ButtonProps {
    type: React.ComponentType<any>;
    props: Record<string, any>;
}

interface Props {
    buttons: ButtonProps[];
}

const ButtonMenu = ({ buttons }: Props) =>  {
    return (
        <StyledMenu>
            {buttons.map((button, index) => {
                    return <button.type key={index} {...button.props} />
                })}
        </StyledMenu>
    );
}

export default ButtonMenu;

