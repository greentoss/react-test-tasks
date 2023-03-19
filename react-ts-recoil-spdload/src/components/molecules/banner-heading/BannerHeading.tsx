import React from 'react';
import styled from "styled-components";

const StyledBannerHeading = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -54%);
  z-index: 5;
`

interface HeadingProps {
    type: React.ComponentType<any>;
    props: Record<string, any>;
}

interface Props {
    headings: HeadingProps[];
}

const BannerHeading = ({ headings }: Props) =>  {

    return (
        <StyledBannerHeading>
            {headings.map((heading, index) => {
                return <heading.type key={index} {...heading.props} />
            })}
        </StyledBannerHeading>
    );
}

export default BannerHeading;

