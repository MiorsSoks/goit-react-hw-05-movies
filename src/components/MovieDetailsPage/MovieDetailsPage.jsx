import { fetchMovieId } from '../API/Themoviedb-api';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  InfoBlock,
  ImageBlock,
  InfoImageBlock,
} from './MovieDetailsPageStyled';
import BackLink from '../BackLink';

export default function MovieDetailsPage() {
    const thisLocation = useLocation()
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [location, setLocation] = useState(thisLocation)
  const basePageUrl = 'https://image.tmdb.org/t/p/w300';
  const noPoster =
    'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg';

  useEffect(() => {
    fetchMovieId(movieId).then(setMovie);
  }, [movieId]);
  console.log(location)
  console.log(thisLocation)
  return (
    <>
      {movie && (
        <div>
          <div>
            <BackLink />
          </div>
          <InfoImageBlock>
            <ImageBlock>
              {' '}
              {movie.poster_path ? (
                <img src={basePageUrl + movie.poster_path} alt="poster" />
              ) : (
                <img src={noPoster} alt="poster" />
              )}
            </ImageBlock>
            <InfoBlock>
              <h2>{movie.title + ` (${movie.release_date.slice(0, 4)})`}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <List>
                {movie.genres.map(genre => (
                  <ListItem key={genre.id}>{genre.name}</ListItem>
                ))}
              </List>
            </InfoBlock>
          </InfoImageBlock>
          <hr />
          <p>Additional Information</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
