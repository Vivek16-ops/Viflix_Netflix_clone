'use strcit';

const api_key = '56183e6c2165b0e601f7b54e6b7516fc';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// fetch data from the server using the url and passes the result in JSON data to a callback function, along with the optional parameter if has optionalPara

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export {imageBaseURL, api_key, fetchDataFromServer};