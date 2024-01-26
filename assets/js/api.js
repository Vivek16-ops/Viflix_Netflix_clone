'use strcit';

const api_key = 'api_key';
const imageBaseURL = 'image_url';

// fetch data from the server using the url and passes the result in JSON data to a callback function, along with the optional parameter if has optionalPara

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export {imageBaseURL, api_key, fetchDataFromServer};
