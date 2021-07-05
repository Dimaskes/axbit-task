import React from 'react';

import './searchForm.css';

export const SearchForm = (props) => {
  const { query, setQuery, searchHandle } = props;

  return (
    <div className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Название города..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className="search-form__btn" onClick={searchHandle}>
        Показать погоду
      </button>
    </div>
  );
};
