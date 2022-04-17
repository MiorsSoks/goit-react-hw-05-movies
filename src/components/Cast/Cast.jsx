import { fetchCast } from '../API/Themoviedb-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
    const [cast, setCast] = useState(null);
  const basePageUrl = 'https://image.tmdb.org/t/p/w200';
  const noPhoto = 'https://wvw.db1223.com/images/19015766/icon/12985564.jpg'

  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);
  console.log(cast);

  return (
    <>
      {cast && (
        <div>
          <ul>
            {cast.cast.map(actor => (
                <li key={actor.id}>
                {actor.profile_path ? <img src={basePageUrl+actor.profile_path} alt="actor" /> : <img src={noPhoto} alt="actor" />}
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
