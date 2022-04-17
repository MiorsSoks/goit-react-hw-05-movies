import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/AppStyled';
import Header from './Header';
import Home from './Home';
import Movies from './Movies';
import MovieDetailsPage from './MovieDetailsPage';
import Cast from './Cast'
import Reviews from './Reviews'

export const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews  />} />
            </Route>
          </Route>
        </Routes>
      </Main>
    </div>
  );
};
