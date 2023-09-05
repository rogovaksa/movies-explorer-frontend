import React from 'react';
import picture from '../../images/photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me'>
      <h2 className='about-me__page-title' id='author'>
        Студент
      </h2>
      <div className='about-me__cover'>
        <div className='about-me__container'>
          <h3 className='about-me__title'>Ксения</h3>
          <p className='about-me__subtitle'>
            Junior frontend-разработчик, 27 лет
          </p>
          <p className='about-me__description'>
            В настоящий момент живу в <strike>пыльном</strike> прекрасном городе Новосибирске. Люблю бегать и путешествовать, чтобы бегать в новых местах. Сейчас активно изучаю веб-разработку, чтобы в будущем поменять сферу деятельности с нефтегазового сектора на IT.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/rogovaksa'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
        <img
          className='about-me__picture'
          src={picture}
          alt='Фотография студента'
        />
      </div>
    </div>
  );
}

export default AboutMe;
