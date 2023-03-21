import {useRecoilState} from "recoil";
import {favouritesArrayState} from "../recoil-state/atoms/favouritesArrayState";

export const useClearFavourites = () => {
    const [favouritesArray, setFavouritesArray] = useRecoilState(favouritesArrayState);

    return () => {
        setFavouritesArray([]);
    };
};
