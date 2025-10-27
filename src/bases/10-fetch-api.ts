const API_KEY = '5glLs3UXrAQlgSbW9v34BvdP9gqFIWW6';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.appendChild(imgElement);
    })
    .catch((error) => {
    console.error(error);
});