import { atom } from 'recoil';

interface Rocket {
    id: string;
    image: string;
    name: string;
    description: string;
}

export const favouritesArrayState = atom<Rocket[]>({
    key: 'favouritesArrayState',
    default: [],
});
