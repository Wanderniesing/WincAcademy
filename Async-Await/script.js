const API_KEY = '11f6ed275dd09fca23e5cfd4028ce26f';

const getMovies = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  const result = await fetch(apiUrl, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => console.log(error));

  return await result;
};

getMovies().then(responseJSON => {
  console.log('hier is je data om iets mee te gaan doen:', responseJSON);
});
