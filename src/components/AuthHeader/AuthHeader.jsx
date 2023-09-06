import React from "react";
import { Link } from 'react-router-dom';

import './AuthHeader.css';
import logo from '../../images/logo.svg';
import icon from '../../images/accountIcon.svg';

import Navigation from '../Navigation/Navigation';

function AuthHeader() {
  const [activeBurger, setActiveBurger] = React.useState(false);

  function handleActiveBurger() {
    setActiveBurger(!activeBurger);
  }
  return (
    <header className="auth-header">
      <div className="auth-header__containers">
        <div className="auth-header__container">
          <Link className="auth-header__link" to="/">
            <img className="auth-header__logo" src={logo} alt="Логотип" />
          </Link>
        </div>
        <div className="auth-header__container">
          <Navigation />
        </div>
      </div>
      <div className="auth-header__containers">
        <Link to="/profile" className="auth-header__account">
          <span className="auth-header__text">Аккаунт</span>
          <img className="auth-header__icon" alt="Аккаунт" src={icon}></img>
        </Link>
      </div>
      <div
        className={`auth-header__burger ${
          activeBurger ? "auth-header__burger_active" : ""
        }`}
        onClick={handleActiveBurger}
      >
        <div className="auth-header__burger-line" />
        <div className="auth-header__burger-line" />
        <div className="auth-header__burger-line" />
      </div>
      <div
        className={`auth-header__burger-menu-wrap ${
          activeBurger ? "auth-header__burger-menu-wrap_active" : ""
        }`}
        onClick={handleActiveBurger}
      >
        <div className="auth-header__burger-container">
          <nav className="auth-header__burger-nav">
            <ul className="auth-header__burger-list">
              <li className="auth-header__burger-item">
                <Link className="auth-header__burger-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="auth-header__burger-item">
                <Link className="auth-header__burger-link" to="/movies">
                  Фильмы
                </Link>
              </li>
              <li className="auth-header__burger-item">
                <Link className="auth-header__burger-link" to="/saved-movies">
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <div className="auth-header__burger-account">
            <Link to="/profile" className="auth-header__burger-account-link">
              <span className="auth-header__burger-text">Аккаунт</span>
              <img className="auth-header__burger-icon" alt="Аккаунт" src={icon}></img>
            </Link>
          </div>
        </div>
      </div>
    </header>
);
}
export default AuthHeader;
