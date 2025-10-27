import type {GiphyRandomResponse, Gif} from '../data/giphy.response';

const API_KEY = '5glLs3UXrAQlgSbW9v34BvdP9gqFIWW6';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data}: GiphyRandomResponse  = await response.json();

    return data.images.original.url;
};

getRandomGifUrl()
    .then(createImageInsideDOM)
    .catch((error) => {
        console.error(error);
    });