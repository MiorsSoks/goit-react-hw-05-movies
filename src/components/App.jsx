import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/AppStyled';
import Header from './Header';
// import Home from '../views/Home';
// import Movies from '../views/Movies';
import MovieDetailsPage from './MovieDetailsPage';
import Cast from './Cast';
import Reviews from './Reviews';
import SearchBar from './SearchBar';
import { createAsyncView } from '../helpers/createAsyncView'
import {createAsyncComponent, createAsyncDefaultComponent} from '../helpers/createAsyncComponent'
import { Suspense } from 'react';

const Home = createAsyncView('Home');
const Movies = createAsyncView('Movies');

// const MovieDetailsPage = createAsyncDefaultComponent('MovieDetailsPage')


export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />}>
              <Route index element={<SearchBar />} />
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<b>Not Found</b>} />
          </Routes>
        </Main>
      </div>
    </Suspense>
  );
};
