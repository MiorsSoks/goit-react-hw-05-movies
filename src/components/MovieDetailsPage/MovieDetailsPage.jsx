import { fetchMovieId } from '../API/Themoviedb-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const basePageUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    fetchMovieId(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);

  return (
    <>
      {movie && ( 
        <div>
          <img src={basePageUrl + movie.poster_path} alt="poster" />
          <h2>{movie.title+` (${movie.release_date.slice(0,4)})`}</h2>

        </div>
      )}
    </>
  );
}
