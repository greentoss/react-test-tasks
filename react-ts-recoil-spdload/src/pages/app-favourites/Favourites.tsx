import React from 'react';
import styled from "styled-components";
import BannerFav from "../../components/organisms/banner-fav/BannerFav";
import MainFav from "../../components/organisms/main-fav/MainFav";

const Favourites = () =>  {
    return (
        <>
            <BannerFav />
            <MainFav />
        </>
    );
}

export default Favourites;
