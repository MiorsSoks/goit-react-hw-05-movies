import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from './BackLink.styled';

export default function BackLink  ()  {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/movies'}>
      <FaArrowLeft />
      Go back
    </Link>
  );
};
