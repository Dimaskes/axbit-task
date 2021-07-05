import React from 'react';

import './weatherBox.css';

export const WeatherBox = (props) => {
  const { weather } = props;

  return (
    <div className="weather-box">
      <div className="weather-box__location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="weather-box__description">
        <div className="temp">{Math.round(weather.main.temp)}°C,</div>
        <div className="status">{weather.weather[0].description}</div>
      </div>
    </div>
  );
};
