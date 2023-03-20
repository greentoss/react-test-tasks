import React from 'react';
import styled from "styled-components";
import Card from "../card/Card";
import { useRecoilValue } from 'recoil';
import {favoriteState} from "../../../recoil-state/atoms/favoriteState";
import {rocketsArrayState} from "../../../recoil-state/atoms/rocketsArrayState";
import {favouritesArrayState} from "../../../recoil-state/atoms/favouritesArrayState";
import useFetchRockets from "../../../hooks/useFetchData";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  gap: 25px;

  margin: 45px 0;
`

const images = [
    require('../../../assets/img/pictures/image1.jpg'),
    require('../../../assets/img/pictures/image2.jpg'),
    require('../../../assets/img/pictures/image3.jpg'),
];

type Rocket = {
    id: string;
    description: string;
    name: string;
}

const attachImageToRocket = (rockets: Rocket[]) => {
    return rockets.map((rocket, index) => {
        return {
            ...rocket,
            image: images[index % images.length]
        }
    });
}

const MainContent = () =>  {
    const { loading, error } = useFetchRockets();   //get data from API

    const handleClick = () => console.log('click')

    const isFavorites = useRecoilValue(favoriteState)

    const rockets = useRecoilValue(rocketsArrayState);   //get data from Recoil state
    const rocketsWithImages = attachImageToRocket(rockets); //add images to cards

    const favourites = useRecoilValue(favouritesArrayState)

    interface CardItemProps {
        items: {
            id: string;
            image: string;
            name: string;
            description: string;
        }[];
    }

    function ShowCards({ items }: CardItemProps) {
        return items.length ? (
            <>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        handleLikeClick={handleClick}
                        image={item.image}
                        title={item.name}
                        description={item.description}
                    />
                ))}
            </>
        ) : null;
    }

    if (loading) {
        return (
            <div >
                Loading ...
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <StyledMainContent>
            {isFavorites ? (
                <ShowCards items={favourites} />
            ) : (
                <ShowCards items={rocketsWithImages} />
            )}
        </StyledMainContent>
    );
}

export default MainContent;


