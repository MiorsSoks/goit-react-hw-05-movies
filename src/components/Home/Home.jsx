import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3//trending/movie/week?api_key=b5d359bd4cfe918eaffdc43e2c19ce7b'
      )
      .catch(error => console.log('Error', error.message))
      .then(response => {
        const results = response.data.results;
        setData(results);
      });
  }, []);

  console.log(data);
  return (
    <>
      <h2>Tranding today</h2>
      <ul>{data.map(title => { return (<li key={title.title}><Link to={title.title}>{title.title}</Link></li>)})}</ul>
    </>
  );
}
