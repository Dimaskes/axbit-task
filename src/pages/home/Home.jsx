import React from 'react';

import { Favorite } from '@material-ui/icons';
import { Menu } from '../../components/menu/Menu';

import './home.css';

export const Home = () => {
  return (
    <>
      <Menu />
      <div className="home-page__container">
        <div className="home-page__top">Здравствуйте!</div>
        <div className="home-page__bottom">
          <div className="home-page__bottom-text">Рады вас видеть на нашем сайте</div>
          <div className="home-page__bottom-smile">
            <Favorite fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};
