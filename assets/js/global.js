'use strict';

// Add events on Multiple element 
const addEventOnElememts = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle Search box in mobile device or small screen  
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElememts(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});

/*
Store movieId on `localStorage`
when you click any movie card
*/

const getMovieDetail = function (movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}

const getMovieList = function(urlParam,genreName)
{
    window.localStorage.setItem("urlParam",urlParam);
    window.localStorage.setItem("genreName",genreName);
}