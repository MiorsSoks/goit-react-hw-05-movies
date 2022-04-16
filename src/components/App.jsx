import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/AppStyled';
import Header from './Header';
import Home from './Home';
import Movies from './Movies';
import MovieDetailsPage from './MovieDetailsPage'

export const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetailsPage />} />
            {/* <Route path="search" element={<Movie />} /> */}
          </Route>
        </Routes>
      </Main>
    </div>
  );
};
