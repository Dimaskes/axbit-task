import React from 'react';
import axios from 'axios';

import { Menu } from '../../components/menu/Menu';
import { WeatherBox } from '../../components/weather-box/WeatherBox';
import { SearchForm } from '../../components/search-form/SearchForm';
import { Error } from '../../components/error/Error';

import { API } from '../../constants/api';

export const Weather = () => {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const [error, setError] = React.useState(null);

  const searchHandle = (e) => {
    e.preventDefault();

    const formedUrl = `${API.url}?q=${query}&units=metric&appid=${API.key}&lang=ru`;

    axios
      .get(formedUrl)
      .then((res) => {
        setWeather(res.data);
        setQuery('');
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setQuery('');
      });
  };

  return (
    <>
      <Menu />
      <SearchForm searchHandle={searchHandle} setQuery={setQuery} query={query} />
      {typeof weather.main !== 'undefined' && !error ? (
        <WeatherBox weather={weather} />
      ) : (
        <Error error={error} />
      )}
    </>
  );
};
