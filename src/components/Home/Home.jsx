import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendTitles } from '../API/Themoviedb-api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation()
  useEffect(() => {
    fetchTrendTitles().then(responce => {setMovies(responce)})
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <ul>
        {movies.map(title => {
          return (
            <li key={title.id}>
              <Link to={`movies/${title.id}`} state={{ from: location }}>{title.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
