import { fetchReviews } from '../API/Themoviedb-api';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Movies() {
  const [value, setValue] = useState('');

  // Отвечает за обновление состояния
  const handleChange = e => {
    setValue(e.target.value.toLowerCase());
  };

  // Вызывается при отправке формы
  const handleSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      alert('Введите данные для поиска');
      return;
    }
  };
  console.log(value);
  return (
    <>
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
      <div>
        <Outlet />
      </div>
    </>
  );
}
