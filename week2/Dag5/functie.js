const posters = Movies.forEach(element => {
  li = document.createElement('li');
  theMovies.appendChild(li);
  newA = document.createElement('img');
  li.appendChild(newImg);
  newImg.src = element;
});

const addMoviesToDom = theMovies;
const poster = newImg;

// const moviePic = Movies.map(element => {
//   return;
// });
