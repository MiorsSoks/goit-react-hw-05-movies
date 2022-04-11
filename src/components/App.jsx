import { Routes, Route} from 'react-router-dom';
import { Link } from 'components/AppStyled'
import { Home } from './Home'
import {Movies} from './Movies'

export const App = () => {
  return (
    <header>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Movies />} />
        </Routes>
      </div>
    </header>
  );
};




