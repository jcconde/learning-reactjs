import type {GiphyRandomResponse, Gif} from '../data/giphy.response';

const API_KEY = '5glLs3UXrAQlgSbW9v34BvdP9gqFIWW6';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
};

myRequest
    .then((response) => response.json())
    // .then((data) => {
        // const imageUrl = data.data.images.original.url;
        // console.log(imageUrl);
        //
        // const imgElement = document.createElement('img');
        // imgElement.src = imageUrl;
        // document.body.appendChild(imgElement);
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((error) => {
    console.error(error);
});