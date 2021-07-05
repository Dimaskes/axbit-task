import React from 'react';

import './notFound.css';

export const NotFound = () => {
  const error404 = '404 - Страница не найдена';

  return <h1 className="notFound-msg">{error404}</h1>;
};
