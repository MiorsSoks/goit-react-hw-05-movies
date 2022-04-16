import axios from 'axios';
// import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTitles() {
  const response = await axios
    .get('/trending/movie/week?api_key=b5d359bd4cfe918eaffdc43e2c19ce7b')
    .catch(error => console.log('Error', error.message));
  return response.data.results;
}

export async function fetchMovieId(movieId) {
  const response = await axios
    .get(`/movie/${movieId}?api_key=b5d359bd4cfe918eaffdc43e2c19ce7b`)
    .catch(error => console.log('Error', error.message));
  return response.data;

}
// .propTypes = {
//   setData: PropTypes.number.isRequired,

// };