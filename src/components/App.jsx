import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/AppStyled';
import Header from './Header';
import Home from './Home';
import Movies from './Movies';


export const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </Main>
    </div>
  );
};
