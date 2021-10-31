"use strict";
const getMovie = function () {
  // The use of fetch to create a get request from the API used from heroku

  fetch(`https://ghibliapi.herokuapp.com/films/`)
    .then(function (responseData) {
      if (!responseData.ok) {
        throw new Error("!200");
      }
      return responseData.json();
    })
    // If the API is loaded and it is successfull then thill code will proceed and it is followed by a promise
    .then(function (result) {
      const movieItem = document.querySelector(".movie");
      const someRandomMovie = function () {
        // To select the random movie
        const movie = Math.floor(Math.random() * 17);
        // Data used from the API
        movieItem.innerHTML = `
    <section>
    <h2>${result[movie].title}</h2>
    <a href="${result[movie].image}"><img src="${result[movie].image}" alt="${result[movie].title}" width="400" height="600"></a>
      <p><b>Movie Title<br></b> ${result[movie].original_title}</p>
      <p><b>Movie Title Romanised<br></b> ${result[movie].original_title_romanised}</p>
      <p><b>Published Date<br></b> ${result[movie].release_date}</p>
      <p><b>Description<br></b> ${result[movie].description}</p>
      <p><b>Producer<br></b> ${result[movie].producer}</p>
    </section>
    `;
      };
      // Function Call
      someRandomMovie();
      // Displays the data int he console for check
      console.log(result);
    })
    // The error will be generated here IN CASE the API is not found from the web
    .catch(function (err) {
      console.log(err);
      const movieItem = document.querySelector(".movie");
      movieItem.innerHTML = `<h2>!!!!Error 404 DATA Not found!!!</h2>`;
    });
};
// To Fetch another object from the API
document.querySelector(".newOne").addEventListener("click", getMovie);
