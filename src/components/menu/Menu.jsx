import React from 'react';
import { NavLink } from 'react-router-dom';

import { getKeyByValue } from '../../utils/getKeyByValue';
import { MENU_ITEMS, MENU_ITEMS_RATIO } from '../../constants/menu';

import './menu.css';

export const Menu = () => {
  return (
    <header className="header__menu">
      <ul className="header__menu-list">
        {MENU_ITEMS.map((item, index) => (
          <li className="header__menu-list-item" key={item + index}>
            <NavLink to={getKeyByValue(MENU_ITEMS_RATIO, item)} activeClassName="chosen" exact>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};
