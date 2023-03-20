import { atom } from 'recoil';

export const navigateCardsState = atom({
    key: 'navigateCardsState',
    default: {
        handleShowPrev: () => {},
        handleShowNext: () => {},
    },
});
