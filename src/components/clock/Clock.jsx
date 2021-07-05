import React from 'react';
import moment from 'moment';

import './clock.css';

export const Clock = () => {
  const [time, setTime] = React.useState(moment().format('HH:mm:ss'));

  React.useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="clock__container">
      <div className="clock__title">Текущее время:</div>
      <div className="clock__text">{time}</div>
    </div>
  );
};
