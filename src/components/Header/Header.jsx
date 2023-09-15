import React from 'react';
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

function Header () {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__main-link'>
          <img className='header__logo' alt='Логотип' src={logo}></img>
        </Link>
      </div>
      <div className='header__container'>
        <ul className='header__links'>
          <li className='header__item'>
            <Link
              className='header__link'
              to='/signup'
            >
             Регистрация
            </Link>
          </li>
          <li className='header__item'>
              <button className='header__button' type='button'>
              <Link className='header__link header__link_button' to='/signin'>
                Войти
              </Link>
              </button>
           </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
