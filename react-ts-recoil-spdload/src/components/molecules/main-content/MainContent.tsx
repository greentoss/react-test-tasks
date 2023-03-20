import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "../card/Card";
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {favoriteState} from "../../../recoil-state/atoms/favoriteState";
import {rocketsArrayState} from "../../../recoil-state/atoms/rocketsArrayState";
import {favouritesArrayState} from "../../../recoil-state/atoms/favouritesArrayState";
import useFetchRockets from "../../../hooks/useFetchData";
import {attachImageToRocket} from "../../../utils/attachImageToRocket";
import {navigateCardsState} from "../../../recoil-state/atoms/navigateCardsState";

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  gap: 25px;

  margin: 45px 0;

  /* Animation styles */
`

const MainContent = () =>  {
    const { loading, error } = useFetchRockets();   //get data from API

    const handleClick = () => console.log('click')

    const isFavorites = useRecoilValue(favoriteState)

    const rockets = useRecoilValue(rocketsArrayState);   //get data from Recoil state
    const rocketsWithImages = attachImageToRocket(rockets); //add images to cards

    const favourites = useRecoilValue(favouritesArrayState)

    const [startIndex, setStartIndex] = useState(0); // state variable for first card index
    const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");
    const setNavigationState = useSetRecoilState(navigateCardsState);

    interface CardItemProps {
        items: {
            id: string;
            image: string;
            name: string;
            description: string;
        }[];
    }

    function ShowCards({ items }: CardItemProps) {
        const endIndex = Math.min(startIndex + 3, items.length); // calculate the index of the last card to display
        const displayItems = items.slice(startIndex, endIndex); // slice the array to display only the desired cards
        return displayItems.length ? (
            <>
                {displayItems.map((item) => (
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

    const handleShowNext = () => {
        const nextIndex = startIndex + 3;
        if (nextIndex < rocketsWithImages.length) {
            setStartIndex(nextIndex);
            setSlideDirection("right");
        }
    }

    const handleShowPrev = () => {
        const prevIndex = startIndex - 3;
        if (prevIndex >= 0) {
            setStartIndex(prevIndex);
            setSlideDirection("left");
        }
    }

    useEffect(() => {
        setNavigationState({ handleShowPrev, handleShowNext });
    }, [setNavigationState, handleShowPrev, handleShowNext]);

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
        <>
            <StyledMainContent >
                {isFavorites ? (
                    <ShowCards items={favourites} />
                ) : (
                    <ShowCards items={rocketsWithImages} />
                )}
            </StyledMainContent>
        </>
    );
}

export default MainContent;


