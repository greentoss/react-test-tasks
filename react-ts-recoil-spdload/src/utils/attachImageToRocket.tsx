const images = [
    require('../assets/img/pictures/image1.jpg'),
    require('../assets/img/pictures/image2.jpg'),
    require('../assets/img/pictures/image3.jpg'),
];

type Rocket = {
    id: string;
    description: string;
    name: string;
}

export const attachImageToRocket = (rockets: Rocket[]) => {
    return rockets.map((rocket, index) => {
        return {
            ...rocket,
            image: images[index % images.length]
        }
    });
}
