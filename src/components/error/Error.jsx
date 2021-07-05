import React from 'react';

import './error.css';

export const Error = (props) => {
  const { error } = props;

  return (
    <div className="error-msg">
      {error ? 'По вашему запросу ничего не найдено' : 'Введите название города и нажмите кнопку'}
    </div>
  );
};
