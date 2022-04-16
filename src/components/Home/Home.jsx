import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchTitles } from '../API/Themoviedb-api';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTitles().then(responce => {setMovies(responce)})
  }, []);

  console.log(movies);
  return (
    <>
      <h2>Tranding today</h2>
      <ul>
        {movies.map(title => {
          return (
            <li key={title.id}>
              <Link to={`movies/${title.id}`}>{title.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
