import { fetchMovieId } from '../API/Themoviedb-api';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import BackLink from '../BackLink'

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const basePageUrl = 'https://image.tmdb.org/t/p/w300';
  const noPoster = 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg'

  useEffect(() => {
    fetchMovieId(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);

  return (
    <>
      {movie && (
        <div>
          <div><BackLink/></div>
          {movie.poster_path ? <img src={basePageUrl + movie.poster_path} alt="poster" /> : <img src={noPoster} alt="poster" />}
          <h2>{movie.title + ` (${movie.release_date.slice(0, 4)})`}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <hr />
          <p>Additional Information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
          <div><Outlet /></div>
        </div>
      )}
    </>
  );
}
