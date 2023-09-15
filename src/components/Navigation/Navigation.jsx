import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <Link
            className={`navigation__link ${pathname === "/" ? "navigation__link_main" : pathname === "/movies" ? 'navigation__link_active' : ''}`}
            to='/movies'
          >
            Фильмы
          </Link>
        </li>
        <li className='navigation__list-item'>
          <Link
            className={`navigation__link ${pathname === "/" ? "navigation__link_main" : pathname === "/saved-movies" ? 'navigation__link_active' : ''}`}
            to='/saved-movies'
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
