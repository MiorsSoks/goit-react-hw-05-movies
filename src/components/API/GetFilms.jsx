import axios from 'axios'

export default function GetFilms() {}
  axios({
  url: 'https://api.themoviedb.org/3//trending/{media_type}/{time_window}?api_key=b5d359bd4cfe918eaffdc43e2c19ce7b',
})
  .then(function (response) {
    console.log(response)
  });