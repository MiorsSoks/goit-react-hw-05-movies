import { fetchMovie } from '../API/Themoviedb-api';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [stateMashine, setStateMashine] = useState('idle')
  const currentQuery = searchParams.get("query")
    const location = useLocation()
  
  useEffect(() => {
    if (currentQuery) {
      fetchMovie(currentQuery).then(setMovies).finally(setStateMashine('loaded'));
    }
  }, [currentQuery]);

  // Отвечает за обновление состояния
  const handleChange = e => {
    setValue(e.target.value.toLowerCase());
  };

  // Вызывается при отправке формы
  const handleSubmit = evt => { 
    evt.preventDefault();
    setSearchParams({query: value});
    if (value.trim() === '') {
      toast.warn('Please enter movie title');
      return;
    }
    }
  console.log(movies);
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies.length === 0 && stateMashine === 'loaded' ? <p>Not found</p> : (
        <div>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}state={{ from: location }}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) }
    </>
  );
}
